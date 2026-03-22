"""Lead and scaling survey schemas."""
from datetime import datetime
from typing import Any

from pydantic import BaseModel


class LeadBase(BaseModel):
    source: str | None = None
    name: str | None = None
    email: str | None = None
    phone: str | None = None
    website: str | None = None
    revenue: str | None = None
    budget: str | None = None
    problem: str | None = None
    form_type: str | None = None
    data_json: dict[str, Any] | None = None


class LeadCreate(LeadBase):
    pass


class LeadResponse(LeadBase):
    id: int
    created_at: datetime | None = None

    model_config = {"from_attributes": True}


class ScalingSurveyBase(BaseModel):
    name: str
    email: str
    company: str | None = None
    role: str | None = None
    current_revenue: str | None = None
    target_revenue: str | None = None
    team_size: str | None = None
    industry: str | None = None
    challenges: dict[str, Any] | None = None
    marketing_spend: str | None = None
    channels: dict[str, Any] | None = None
    biggest_goal: str | None = None
    raw_data: dict[str, Any] | None = None


class ScalingSurveyCreate(ScalingSurveyBase):
    pass


class ScalingSurveyResponse(ScalingSurveyBase):
    id: int
    created_at: datetime | None = None

    model_config = {"from_attributes": True}
