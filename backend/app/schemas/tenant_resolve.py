"""Resolved tenant site for a host (site + home page)."""
from typing import Any
from uuid import UUID

from pydantic import BaseModel

from app.schemas.site_display import SiteDisplayResponse, SiteContentResponse


class TenantSiteResolved(BaseModel):
    """Single tenant view: global config + home page content."""

    site: SiteDisplayResponse
    home: SiteContentResponse | None = None
