# God Mode pSEO Factory

Full-stack pSEO platform: FastAPI backend, Next.js 16 frontend, PostgreSQL schema.

## Stack

- **Backend:** FastAPI v0.135.1
- **Frontend:** Next.js 16.2
- **Database:** PostgreSQL

## Quick Start

```bash
# Backend
cd backend && pip install -r requirements.txt && uvicorn app.main:app --reload

# Frontend
cd frontend && npm install && npm run dev

# Database (Docker)
docker-compose up -d postgres
```

## Structure

- `backend/` — FastAPI application
- `frontend/` — Next.js application
- `schema/` — SQL schema and migrations

## Tenant Strategy

Tenants on subdomains: `tenant.jumpstartscaling.com` — wildcard cert (`*.jumpstartscaling.com`), no tenant DNS required.

## Demo tenant seed

After schema is applied, load demo rows (or run full `run_all.sql` which includes this):

```bash
psql "$DATABASE_URL" -f schema/010_seed_demo_tenants.sql
```

Seeded domains (must match `Host` → `site_displays.domain`):

| Domain | Site name |
|--------|-----------|
| `app.jumpstartscaling.com` | Jumpstart Scaling (App) |
| `demo.jumpstartscaling.com` | Demo Tenant Co. |
| `acme.jumpstartscaling.com` | ACME Example LLC |

The Next.js home page calls `GET /api/v1/site-displays/resolve?host=...` and renders nav + `home` page from the DB.

**API docs:** `/docs` → `site-displays` → `resolve`.

## Migrating from your original database

This repo does **not** include access to your old database. To copy data into the new Postgres, see [docs/MIGRATION_ORIGINAL_DB.md](docs/MIGRATION_ORIGINAL_DB.md) and `scripts/migrate-from-original-postgres.sh`.
