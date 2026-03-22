"""pSEO models: locations, services, content_matrix."""
from sqlalchemy import Integer, Text, TIMESTAMP, JSON, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func

from app.db.base import Base


class Location(Base):
    __tablename__ = "locations"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    city: Mapped[str] = mapped_column(Text, nullable=False)
    state: Mapped[str] = mapped_column(Text, nullable=False)
    zip: Mapped[str | None] = mapped_column(Text, nullable=True)
    neighborhood: Mapped[str | None] = mapped_column(Text, nullable=True)
    slug: Mapped[str | None] = mapped_column(Text, unique=True, nullable=True)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class PseoService(Base):
    __tablename__ = "pseo_services"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    service_type: Mapped[str] = mapped_column(Text, nullable=False)
    sub_niche: Mapped[str | None] = mapped_column(Text, nullable=True)
    slug: Mapped[str | None] = mapped_column(Text, unique=True, nullable=True)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class ContentMatrix(Base):
    __tablename__ = "content_matrix"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    location_id: Mapped[int | None] = mapped_column(Integer, ForeignKey("locations.id"), nullable=True)
    service_id: Mapped[int | None] = mapped_column(Integer, ForeignKey("pseo_services.id"), nullable=True)
    slug: Mapped[str | None] = mapped_column(Text, unique=True, nullable=True)
    title: Mapped[str | None] = mapped_column(Text, nullable=True)
    meta_description: Mapped[str | None] = mapped_column(Text, nullable=True)
    content_json: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())
