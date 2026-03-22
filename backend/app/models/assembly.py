"""Assembly line models: article_usage, content_refresh_schedule."""
from uuid import UUID
from sqlalchemy import Text, TIMESTAMP, VARCHAR, Boolean, Integer, ForeignKey, text
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.sql import func

from app.db.base import Base


class ArticleUsage(Base):
    __tablename__ = "article_usage"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    article_id: Mapped[UUID] = mapped_column(
        PG_UUID(as_uuid=True), ForeignKey("generated_articles.id", ondelete="CASCADE"), nullable=False
    )
    component_type: Mapped[str] = mapped_column(VARCHAR(50), nullable=False)
    component_id: Mapped[str] = mapped_column(Text, nullable=False)
    slot: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class ContentRefreshSchedule(Base):
    __tablename__ = "content_refresh_schedule"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    site_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("sites.id", ondelete="CASCADE"), nullable=True)
    campaign_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("campaign_masters.id", ondelete="CASCADE"), nullable=True)
    schedule_cron: Mapped[str] = mapped_column(VARCHAR(100), nullable=False)
    refresh_mode: Mapped[str] = mapped_column(VARCHAR(50), default="light", nullable=False)
    min_age_days: Mapped[int] = mapped_column(Integer, default=90, nullable=False)
    last_run_at: Mapped[object | None] = mapped_column(TIMESTAMP, nullable=True)
    next_run_at: Mapped[object | None] = mapped_column(TIMESTAMP, nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())
