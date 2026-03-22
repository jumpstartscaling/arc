"""Site contents API routes."""
from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db, pagination_params
from app.models.site_display import SiteContent
from app.schemas.site_display import SiteContentResponse
from app.schemas.common import PaginationParams

router = APIRouter()


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
