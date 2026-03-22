"""Location and pSEO service schemas."""
from datetime import datetime

from pydantic import BaseModel


class LocationBase(BaseModel):
    city: str
    state: str
    zip: str | None = None
    neighborhood: str | None = None
    slug: str | None = None


class LocationCreate(LocationBase):
    pass


class LocationResponse(LocationBase):
    id: int
    created_at: datetime | None = None

    model_config = {"from_attributes": True}


class PseoServiceBase(BaseModel):
    service_type: str
    sub_niche: str | None = None
    slug: str | None = None


class PseoServiceCreate(PseoServiceBase):
    pass


class PseoServiceResponse(PseoServiceBase):
    id: int
    created_at: datetime | None = None

    model_config = {"from_attributes": True}


class ContentMatrixBase(BaseModel):
    location_id: int | None = None
    service_id: int | None = None
    slug: str | None = None
    title: str | None = None
    meta_description: str | None = None
    content_json: dict | None = None


class ContentMatrixCreate(ContentMatrixBase):
    pass


class ContentMatrixResponse(ContentMatrixBase):
    id: int
    created_at: datetime | None = None

    model_config = {"from_attributes": True}
