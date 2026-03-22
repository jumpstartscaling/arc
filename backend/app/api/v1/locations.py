"""Locations API routes."""
from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db, pagination_params
from app.models.pseo import Location
from app.schemas.locations import LocationResponse
from app.schemas.common import PaginationParams

router = APIRouter()


@router.get("", response_model=list[LocationResponse])
async def list_locations(
    pagination: PaginationParams = Depends(pagination_params),
    db: AsyncSession = Depends(get_db),
):
    """List locations."""
    result = await db.execute(
        select(Location).offset(pagination.skip).limit(pagination.limit)
    )
    return result.scalars().all()
