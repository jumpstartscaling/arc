"""Site display schemas."""
from datetime import datetime
from typing import Any
from uuid import UUID

from pydantic import BaseModel


class SiteDisplayBase(BaseModel):
    domain: str
    palette: str = "emerald"
    navigation: dict[str, Any] = {}
    footer: dict[str, Any] = {}
    scripts: list[Any] = []
    cdn_config: dict[str, Any] = {}
    local_seo: dict[str, Any] = {}
    site_name: str | None = None


class SiteDisplayCreate(SiteDisplayBase):
    pass


class SiteDisplayResponse(SiteDisplayBase):
    id: UUID
    created_at: datetime | None = None
    updated_at: datetime | None = None

    model_config = {"from_attributes": True}


class SiteContentBase(BaseModel):
    site_id: UUID | None = None
    slug: str
    content_type: str
    title: str | None = None
    meta_description: str | None = None
    body_content: str | None = None
    blocks_json: list[Any] = []
    attributes: dict[str, Any] = {}
    is_published: bool = True
    sort_order: int = 0


class SiteContentCreate(SiteContentBase):
    pass


class SiteContentResponse(SiteContentBase):
    id: UUID
    created_at: datetime | None = None
    updated_at: datetime | None = None

    model_config = {"from_attributes": True}
