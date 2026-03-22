"""Campaigns API routes."""
from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db, pagination_params
from app.models.campaigns import CampaignMaster
from app.schemas.campaigns import CampaignMasterResponse
from app.schemas.common import PaginationParams

router = APIRouter()


@router.get("", response_model=list[CampaignMasterResponse])
async def list_campaigns(
    pagination: PaginationParams = Depends(pagination_params),
    db: AsyncSession = Depends(get_db),
):
    """List campaigns."""
    result = await db.execute(
        select(CampaignMaster).offset(pagination.skip).limit(pagination.limit)
    )
    return result.scalars().all()
