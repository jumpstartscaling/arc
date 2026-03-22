"""System models: scheduled_tasks, work_log."""
from uuid import UUID
from sqlalchemy import Text, TIMESTAMP, JSON, VARCHAR, ForeignKey, text
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.sql import func

from app.db.base import Base


class ScheduledTask(Base):
    __tablename__ = "scheduled_tasks"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    site_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("sites.id", ondelete="CASCADE"), nullable=True)
    campaign_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("campaign_masters.id", ondelete="SET NULL"), nullable=True)
    task_type: Mapped[str | None] = mapped_column(VARCHAR(100), nullable=True)
    scheduled_at: Mapped[object | None] = mapped_column(TIMESTAMP, nullable=True)
    status: Mapped[str] = mapped_column(VARCHAR(50), default="pending", nullable=False)
    payload: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    created_at: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class WorkLog(Base):
    __tablename__ = "work_log"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    site_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("sites.id", ondelete="SET NULL"), nullable=True)
    action: Mapped[str] = mapped_column(VARCHAR(100), nullable=False)
    entity_type: Mapped[str | None] = mapped_column(VARCHAR(100), nullable=True)
    entity_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), nullable=True)
    details: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    level: Mapped[str] = mapped_column(VARCHAR(20), default="info", nullable=False)
    status: Mapped[str | None] = mapped_column(VARCHAR(100), nullable=True)
    user_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), nullable=True)
    timestamp: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())
