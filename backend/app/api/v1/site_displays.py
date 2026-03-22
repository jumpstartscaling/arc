"""Site displays API routes."""
from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db, pagination_params
from app.models.site_display import SiteDisplay
from app.schemas.site_display import SiteDisplayResponse
from app.schemas.common import PaginationParams

router = APIRouter()


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
