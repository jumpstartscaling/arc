"""Aggregates all v1 API routes."""
from fastapi import APIRouter

from app.api.v1 import leads, locations, site_displays, site_contents, campaigns
from app.api.v1 import generated_articles, analytics, caw

api_router = APIRouter()

api_router.include_router(leads.router, prefix="/leads", tags=["leads"])
api_router.include_router(locations.router, prefix="/locations", tags=["locations"])
api_router.include_router(site_displays.router, prefix="/site-displays", tags=["site-displays"])
api_router.include_router(site_contents.router, prefix="/site-contents", tags=["site-contents"])
api_router.include_router(campaigns.router, prefix="/campaigns", tags=["campaigns"])
api_router.include_router(generated_articles.router, prefix="/generated-articles", tags=["generated-articles"])
api_router.include_router(analytics.router, prefix="/analytics", tags=["analytics"])
api_router.include_router(caw.router, prefix="/caw", tags=["caw"])
