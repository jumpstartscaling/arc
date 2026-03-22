"""CAW (chrisamaya.work) API routes."""
from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db, pagination_params
from app.models.caw import CawContent, CawArticle
from app.schemas.common import PaginationParams

router = APIRouter()


@router.get("/content")
async def list_caw_content(
    pagination: PaginationParams = Depends(pagination_params),
    db: AsyncSession = Depends(get_db),
):
    """List CAW content."""
    result = await db.execute(
        select(CawContent).offset(pagination.skip).limit(pagination.limit)
    )
    rows = result.scalars().all()
    return [{"slug": r.slug, "title": r.title, "palette": r.palette} for r in rows]


@router.get("/articles")
async def list_caw_articles(
    pagination: PaginationParams = Depends(pagination_params),
    db: AsyncSession = Depends(get_db),
):
    """List CAW articles."""
    result = await db.execute(
        select(CawArticle).offset(pagination.skip).limit(pagination.limit)
    )
    rows = result.scalars().all()
    return [
        {"id": str(r.id), "slug": r.slug, "title": r.title, "is_published": r.is_published}
        for r in rows
    ]
