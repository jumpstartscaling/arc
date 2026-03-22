"""Site displays API routes."""
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db, pagination_params
from app.models.site_display import SiteDisplay, SiteContent
from app.schemas.site_display import SiteDisplayResponse
from app.schemas.tenant_resolve import TenantSiteResolved
from app.schemas.common import PaginationParams

router = APIRouter()


def _normalize_host(host: str) -> str:
    h = (host or "").strip().lower()
    if ":" in h:
        h = h.split(":")[0]
    return h


@router.get("/resolve", response_model=TenantSiteResolved)
async def resolve_tenant_by_host(
    host: str = Query(..., description="Request Host, e.g. app.jumpstartscaling.com"),
    db: AsyncSession = Depends(get_db),
):
    """Resolve tenant site_displays + home page by Host header value."""
    domain = _normalize_host(host)
    if not domain:
        raise HTTPException(status_code=400, detail="host is required")

    result = await db.execute(select(SiteDisplay).where(SiteDisplay.domain == domain))
    site = result.scalar_one_or_none()
    if site is None:
        raise HTTPException(status_code=404, detail=f"No tenant for domain: {domain}")

    home = None
    q = await db.execute(
        select(SiteContent)
        .where(SiteContent.site_id == site.id)
        .where(SiteContent.slug == "home")
        .where(SiteContent.content_type == "page")
        .where(SiteContent.is_published.is_(True))
        .limit(1)
    )
    row = q.scalar_one_or_none()
    if row:
        home = row

    return TenantSiteResolved(site=site, home=home)


@router.get("", response_model=list[SiteDisplayResponse])
async def list_site_displays(
    pagination: PaginationParams = Depends(pagination_params),
    db: AsyncSession = Depends(get_db),
):
    """List site displays."""
    result = await db.execute(
        select(SiteDisplay).offset(pagination.skip).limit(pagination.limit)
    )
    return result.scalars().all()
