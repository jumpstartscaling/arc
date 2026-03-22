"""Site display and site content models (V5 consolidated)."""
from uuid import UUID
from sqlalchemy import Text, TIMESTAMP, JSON, Boolean, Integer, ForeignKey, text
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func

from app.db.base import Base


class SiteDisplay(Base):
    __tablename__ = "site_displays"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    domain: Mapped[str] = mapped_column(Text, unique=True, nullable=False)
    palette: Mapped[str] = mapped_column(Text, default="emerald", nullable=False)
    navigation: Mapped[dict] = mapped_column(JSON, default=dict, nullable=False)
    footer: Mapped[dict] = mapped_column(JSON, default=dict, nullable=False)
    scripts: Mapped[list] = mapped_column(JSON, default=list, nullable=False)
    cdn_config: Mapped[dict] = mapped_column(JSON, default=dict, nullable=False)
    local_seo: Mapped[dict] = mapped_column(JSON, default=dict, nullable=False)
    site_name: Mapped[str | None] = mapped_column(Text, nullable=True)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())
    updated_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now(), onupdate=func.now())


class SiteContent(Base):
    __tablename__ = "site_contents"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    site_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("site_displays.id", ondelete="CASCADE"), nullable=True)
    slug: Mapped[str] = mapped_column(Text, nullable=False)
    content_type: Mapped[str] = mapped_column(Text, nullable=False)
    title: Mapped[str | None] = mapped_column(Text, nullable=True)
    meta_description: Mapped[str | None] = mapped_column(Text, nullable=True)
    body_content: Mapped[str | None] = mapped_column(Text, nullable=True)
    blocks_json: Mapped[list] = mapped_column(JSON, default=list, nullable=False)
    attributes: Mapped[dict] = mapped_column(JSON, default=dict, nullable=False)
    is_published: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    sort_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())
    updated_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now(), onupdate=func.now())
