"""Generated articles API routes."""
from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db, pagination_params
from app.models.campaigns import GeneratedArticle
from app.schemas.campaigns import GeneratedArticleResponse
from app.schemas.common import PaginationParams

router = APIRouter()


@router.get("", response_model=list[GeneratedArticleResponse])
async def list_generated_articles(
    pagination: PaginationParams = Depends(pagination_params),
    db: AsyncSession = Depends(get_db),
):
    """List generated articles."""
    result = await db.execute(
        select(GeneratedArticle).offset(pagination.skip).limit(pagination.limit)
    )
    return result.scalars().all()
