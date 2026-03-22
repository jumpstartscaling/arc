"""Campaign and generated article schemas."""
from datetime import datetime
from decimal import Decimal
from typing import Any
from uuid import UUID

from pydantic import BaseModel


class CampaignMasterBase(BaseModel):
    status: str = "active"
    site_id: UUID | None = None
    name: str
    headline_spintax_root: str | None = None
    target_word_count: int = 1500
    niche_variables: dict[str, Any] | None = None


class CampaignMasterCreate(CampaignMasterBase):
    pass


class CampaignMasterResponse(CampaignMasterBase):
    id: UUID
    date_created: datetime | None = None
    date_updated: datetime | None = None

    model_config = {"from_attributes": True}


class GeneratedArticleBase(BaseModel):
    status: str = "queued"
    site_id: UUID | None = None
    campaign_id: UUID | None = None
    title: str | None = None
    slug: str | None = None
    content: str | None = None
    html_content: str | None = None
    meta_title: str | None = None
    meta_description: str | None = None
    is_published: bool = False
    category: str | None = None


class GeneratedArticleCreate(GeneratedArticleBase):
    pass


class GeneratedArticleResponse(GeneratedArticleBase):
    id: UUID
    readability_score: Decimal | None = None
    uniqueness_score: Decimal | None = None
    date_created: datetime | None = None
    date_updated: datetime | None = None

    model_config = {"from_attributes": True}
