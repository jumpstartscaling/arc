"""FastAPI dependencies."""
from collections.abc import AsyncGenerator

from fastapi import Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.connection import get_db
from app.schemas.common import PaginationParams


def pagination_params(
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
) -> PaginationParams:
    return PaginationParams(skip=skip, limit=limit)


__all__ = ["get_db", "pagination_params"]
