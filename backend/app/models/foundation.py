"""Foundation models: sites, pages, page_blocks, avatar, geo, etc."""
from uuid import UUID
from sqlalchemy import Text, TIMESTAMP, JSON, VARCHAR, ForeignKey, text
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.sql import func

from app.db.base import Base


class Site(Base):
    __tablename__ = "sites"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    status: Mapped[str] = mapped_column(VARCHAR(50), default="active", nullable=False)
    name: Mapped[str] = mapped_column(VARCHAR(255), nullable=False)
    url: Mapped[str | None] = mapped_column(VARCHAR(500), nullable=True)
    theme_config: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    date_created: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())
    date_updated: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now(), onupdate=func.now())


class Page(Base):
    __tablename__ = "pages"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    status: Mapped[str] = mapped_column(VARCHAR(50), default="published", nullable=False)
    site_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("sites.id", ondelete="CASCADE"), nullable=True)
    title: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    slug: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    content: Mapped[str | None] = mapped_column(Text, nullable=True)
    schema_json: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class PageBlock(Base):
    __tablename__ = "page_blocks"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    page_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("pages.id", ondelete="CASCADE"), nullable=True)
    block_type: Mapped[str | None] = mapped_column(VARCHAR(100), nullable=True)
    name: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    data: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    sort_order: Mapped[int] = mapped_column(default=0, nullable=False)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class AvatarIntelligence(Base):
    __tablename__ = "avatar_intelligence"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    status: Mapped[str] = mapped_column(VARCHAR(50), default="published", nullable=False)
    avatar_key: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    base_name: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    wealth_cluster: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    business_niches: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    data: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class AvatarVariant(Base):
    __tablename__ = "avatar_variants"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    avatar_key: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    variant_type: Mapped[str | None] = mapped_column(VARCHAR(100), nullable=True)
    data: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class GeoIntelligence(Base):
    __tablename__ = "geo_intelligence"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    cluster_key: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    data: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class CartesianPattern(Base):
    __tablename__ = "cartesian_patterns"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    pattern_key: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    pattern_type: Mapped[str | None] = mapped_column(VARCHAR(100), nullable=True)
    data: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class SpintaxDictionary(Base):
    __tablename__ = "spintax_dictionaries"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    category: Mapped[str] = mapped_column(VARCHAR(255), nullable=False)
    data: Mapped[list] = mapped_column(JSON, default=list, nullable=False)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class OfferBlock(Base):
    __tablename__ = "offer_blocks"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    block_type: Mapped[str | None] = mapped_column(VARCHAR(100), nullable=True)
    avatar_key: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    data: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class SynonymGroup(Base):
    __tablename__ = "synonym_groups"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    category: Mapped[str] = mapped_column(VARCHAR(255), nullable=False)
    terms: Mapped[list] = mapped_column(JSON, default=list, nullable=False)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())
