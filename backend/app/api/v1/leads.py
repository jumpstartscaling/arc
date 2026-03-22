"""Leads API routes."""
from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db, pagination_params
from app.models.leads import Lead
from app.schemas.leads import LeadResponse
from app.schemas.common import PaginationParams

router = APIRouter()


@router.get("", response_model=list[LeadResponse])
async def list_leads(
    pagination: PaginationParams = Depends(pagination_params),
    db: AsyncSession = Depends(get_db),
):
    """List leads."""
    result = await db.execute(
        select(Lead).offset(pagination.skip).limit(pagination.limit).order_by(Lead.created_at.desc())
    )
    return result.scalars().all()
