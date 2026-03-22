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
