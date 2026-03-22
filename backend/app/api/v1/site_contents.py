"""Site contents API routes."""
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import case, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db, pagination_params
from app.models.site_display import SiteDisplay, SiteContent
from app.schemas.site_display import SiteContentResponse
from app.schemas.tenant_page import TenantSlugPage
from app.schemas.common import PaginationParams

router = APIRouter()


def _normalize_host(host: str) -> str:
    h = (host or "").strip().lower()
    if ":" in h:
        h = h.split(":")[0]
    return h


@router.get("/page", response_model=TenantSlugPage)
async def resolve_page_by_host_and_slug(
    host: str = Query(..., description="Request Host, e.g. app.jumpstartscaling.com"),
    slug: str = Query(..., description="Path slug, e.g. preview or austin/plumber"),
    db: AsyncSession = Depends(get_db),
):
    """
    Resolve tenant + published row in site_contents for this slug.

    Use site_displays.domain (Host) + site_contents.slug — not legacy sites.url.
    """
    domain = _normalize_host(host)
    if not domain:
        raise HTTPException(status_code=400, detail="host is required")
    slug = (slug or "").strip().lstrip("/")
    if not slug:
        raise HTTPException(status_code=400, detail="slug is required")

    r = await db.execute(select(SiteDisplay).where(SiteDisplay.domain == domain))
    site = r.scalar_one_or_none()
    if site is None:
        raise HTTPException(status_code=404, detail=f"No tenant for domain: {domain}")

    type_order = case(
        (SiteContent.content_type == "page", 0),
        (SiteContent.content_type == "pseo_row", 1),
        (SiteContent.content_type == "post", 2),
        (SiteContent.content_type == "article", 3),
        else_=9,
    )
    q = await db.execute(
        select(SiteContent)
        .where(SiteContent.site_id == site.id)
        .where(SiteContent.slug == slug)
        .where(SiteContent.is_published.is_(True))
        .where(
            SiteContent.content_type.in_(["page", "pseo_row", "post", "article"])
        )
        .order_by(type_order, SiteContent.sort_order)
        .limit(1)
    )
    page = q.scalar_one_or_none()
    return TenantSlugPage(site=site, page=page)


@router.get("", response_model=list[SiteContentResponse])
async def list_site_contents(
    pagination: PaginationParams = Depends(pagination_params),
    db: AsyncSession = Depends(get_db),
):
    """List site contents."""
    result = await db.execute(
        select(SiteContent).offset(pagination.skip).limit(pagination.limit)
    )
    return result.scalars().all()
