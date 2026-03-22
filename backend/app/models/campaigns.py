"""Campaigns, generation jobs, articles, posts, etc."""
from uuid import UUID
from decimal import Decimal
from sqlalchemy import Text, TIMESTAMP, JSON, VARCHAR, Boolean, Integer, ForeignKey, DECIMAL, text
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.sql import func

from app.db.base import Base


class CampaignMaster(Base):
    __tablename__ = "campaign_masters"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    status: Mapped[str] = mapped_column(VARCHAR(50), default="active", nullable=False)
    site_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("sites.id", ondelete="CASCADE"), nullable=True)
    name: Mapped[str] = mapped_column(VARCHAR(255), nullable=False)
    headline_spintax_root: Mapped[str | None] = mapped_column(Text, nullable=True)
    target_word_count: Mapped[int] = mapped_column(Integer, default=1500, nullable=False)
    niche_variables: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    date_created: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())
    date_updated: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now(), onupdate=func.now())


class GenerationJob(Base):
    __tablename__ = "generation_jobs"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    status: Mapped[str] = mapped_column(VARCHAR(50), default="pending", nullable=False)
    site_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("sites.id", ondelete="CASCADE"), nullable=True)
    campaign_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("campaign_masters.id", ondelete="SET NULL"), nullable=True)
    target_quantity: Mapped[int] = mapped_column(Integer, default=10, nullable=False)
    progress: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    filters: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    current_offset: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    source_type: Mapped[str] = mapped_column(VARCHAR(20), default="new", nullable=False)
    source_article_ids: Mapped[list | None] = mapped_column(JSON, nullable=True)
    date_created: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class GeneratedArticle(Base):
    __tablename__ = "generated_articles"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    status: Mapped[str] = mapped_column(VARCHAR(50), default="queued", nullable=False)
    site_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("sites.id", ondelete="CASCADE"), nullable=True)
    campaign_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("campaign_masters.id", ondelete="SET NULL"), nullable=True)
    title: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    slug: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    content: Mapped[str | None] = mapped_column(Text, nullable=True)
    html_content: Mapped[str | None] = mapped_column(Text, nullable=True)
    meta_title: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    meta_description: Mapped[str | None] = mapped_column(Text, nullable=True)
    og_title: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    og_description: Mapped[str | None] = mapped_column(Text, nullable=True)
    og_image: Mapped[str | None] = mapped_column(VARCHAR(500), nullable=True)
    canonical_url: Mapped[str | None] = mapped_column(Text, nullable=True)
    schema_json: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    generation_hash: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    readability_score: Mapped[Decimal | None] = mapped_column(DECIMAL(5, 2), nullable=True)
    uniqueness_score: Mapped[Decimal | None] = mapped_column(DECIMAL(5, 2), nullable=True)
    is_published: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    sync_status: Mapped[str | None] = mapped_column(VARCHAR(50), nullable=True)
    sitemap_status: Mapped[str | None] = mapped_column(VARCHAR(50), nullable=True)
    last_refreshed_at: Mapped[object | None] = mapped_column(TIMESTAMP, nullable=True)
    refresh_count: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    category: Mapped[str | None] = mapped_column(Text, nullable=True)
    date_created: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())
    date_updated: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now(), onupdate=func.now())


class Post(Base):
    __tablename__ = "posts"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    status: Mapped[str] = mapped_column(VARCHAR(50), default="published", nullable=False)
    site_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("sites.id", ondelete="CASCADE"), nullable=True)
    title: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    slug: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    content: Mapped[str | None] = mapped_column(Text, nullable=True)
    excerpt: Mapped[str | None] = mapped_column(Text, nullable=True)
    schema_json: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())
    published_at: Mapped[object | None] = mapped_column(TIMESTAMP, nullable=True)


class HeadlineInventory(Base):
    __tablename__ = "headline_inventory"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    status: Mapped[str] = mapped_column(VARCHAR(50), default="active", nullable=False)
    campaign_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("campaign_masters.id", ondelete="CASCADE"), nullable=True)
    final_title_text: Mapped[str | None] = mapped_column(Text, nullable=True)
    headline_text: Mapped[str | None] = mapped_column(VARCHAR(500), nullable=True)
    used_on_article: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("generated_articles.id", ondelete="SET NULL"), nullable=True)
    date_created: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class ContentFragment(Base):
    __tablename__ = "content_fragments"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    status: Mapped[str] = mapped_column(VARCHAR(50), default="active", nullable=False)
    campaign_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("campaign_masters.id", ondelete="CASCADE"), nullable=True)
    fragment_type: Mapped[str | None] = mapped_column(VARCHAR(100), nullable=True)
    content_body: Mapped[str | None] = mapped_column(Text, nullable=True)
    fragment_text: Mapped[str | None] = mapped_column(Text, nullable=True)
    word_count: Mapped[int | None] = mapped_column(Integer, nullable=True)
    date_created: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())
