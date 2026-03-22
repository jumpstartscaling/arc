"""Common schemas: pagination, filters."""
from typing import Generic, TypeVar

from pydantic import BaseModel, Field

T = TypeVar("T")


class PaginationParams(BaseModel):
    """Pagination query params."""
    skip: int = Field(0, ge=0, description="Offset")
    limit: int = Field(20, ge=1, le=100, description="Limit")


class PaginatedResponse(BaseModel, Generic[T]):
    """Paginated response wrapper."""
    items: list[T]
    total: int
    skip: int
    limit: int
