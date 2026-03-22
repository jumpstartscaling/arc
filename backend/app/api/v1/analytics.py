"""Analytics API routes."""
from fastapi import APIRouter, Depends
from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db
from app.models.analytics import Event, Pageview, Conversion

router = APIRouter()


@router.get("")
async def analytics_overview(db: AsyncSession = Depends(get_db)):
    """Analytics overview (event/pageview/conversion counts)."""
    events_count = await db.scalar(select(func.count()).select_from(Event))
    pageviews_count = await db.scalar(select(func.count()).select_from(Pageview))
    conversions_count = await db.scalar(select(func.count()).select_from(Conversion))
    return {
        "events": events_count or 0,
        "pageviews": pageviews_count or 0,
        "conversions": conversions_count or 0,
    }
