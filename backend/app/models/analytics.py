"""Analytics models: events, pageviews, conversions."""
from uuid import UUID
from decimal import Decimal
from sqlalchemy import Text, TIMESTAMP, VARCHAR, Integer, ForeignKey, DECIMAL, text
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.sql import func

from app.db.base import Base


class Event(Base):
    __tablename__ = "events"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    site_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("sites.id", ondelete="CASCADE"), nullable=True)
    event_name: Mapped[str] = mapped_column(VARCHAR(255), nullable=False)
    page_path: Mapped[str | None] = mapped_column(VARCHAR(500), nullable=True)
    session_id: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    user_agent: Mapped[str | None] = mapped_column(Text, nullable=True)
    timestamp: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class Pageview(Base):
    __tablename__ = "pageviews"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    site_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("sites.id", ondelete="CASCADE"), nullable=True)
    page_path: Mapped[str | None] = mapped_column(VARCHAR(500), nullable=True)
    session_id: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    referrer: Mapped[str | None] = mapped_column(VARCHAR(500), nullable=True)
    user_agent: Mapped[str | None] = mapped_column(Text, nullable=True)
    timestamp: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())


class Conversion(Base):
    __tablename__ = "conversions"

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    site_id: Mapped[UUID | None] = mapped_column(PG_UUID(as_uuid=True), ForeignKey("sites.id", ondelete="CASCADE"), nullable=True)
    lead_id: Mapped[int | None] = mapped_column(Integer, ForeignKey("leads.id", ondelete="SET NULL"), nullable=True)
    conversion_type: Mapped[str | None] = mapped_column(VARCHAR(100), nullable=True)
    value: Mapped[Decimal | None] = mapped_column(DECIMAL(10, 2), nullable=True)
    source: Mapped[str | None] = mapped_column(VARCHAR(255), nullable=True)
    timestamp: Mapped[object] = mapped_column(TIMESTAMP, server_default=func.now())
