"""Tenant + single page by host + slug (marketing / pSEO routes)."""
from pydantic import BaseModel

from app.schemas.site_display import SiteDisplayResponse, SiteContentResponse


class TenantSlugPage(BaseModel):
    site: SiteDisplayResponse
    page: SiteContentResponse | None
