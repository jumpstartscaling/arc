# Populate the new PostgreSQL from your original database

Nothing in this repo contains credentials or a live link to your **old** database. You (or your server) must be able to reach **both** the source and the new DB.

## When both are PostgreSQL and the schema matches

From any host that can connect to **source** and **target**:

### Option A — Full logical dump (schema + data)

```bash
export SOURCE="postgresql://USER:PASS@OLD_HOST:OLD_PORT/OLD_DB"
export TARGET="postgresql://postgres:PASS@86.48.23.38:5434/postgres"

# Dump from original (custom format)
pg_dump "$SOURCE" -Fc -f arc_source.dump

# Restore into new (creates objects; use --clean if you want drop-first)
pg_restore -d "$TARGET" --no-owner --no-acl arc_source.dump
```

If the new DB **already** has schema from `schema/*.sql` and you only need **data**:

```bash
pg_dump "$SOURCE" --data-only --no-owner --no-acl -f data_only.sql
psql "$TARGET" -v ON_ERROR_STOP=1 -f data_only.sql
```

Review errors: triggers, sequences, and FK order can require tuning.

### Option B — This repo’s shell helper

See [`../scripts/migrate-from-original-postgres.sh`](../scripts/migrate-from-original-postgres.sh) (sets `SOURCE_PGURL` / `TARGET_PGURL`).

## When the original is not PostgreSQL

- **MySQL / MariaDB:** use `mysqldump` + manual transform, or a tool like `pgloader` (MySQL → Postgres).
- **SQLite:** export CSV or use `pgloader`.
- **Oracle:** use Oracle’s export tools or `ora2pg`, then load into Postgres.

## After bulk load

1. Run any missing migrations: `schema/010_seed_demo_tenants.sql` only if you want **demo** rows **in addition** to migrated data (or skip if duplicates would conflict on `domain`).
2. Redeploy API + Next.js.

## Exports instead of a live old DB

If you only have **files** (CSV/JSON) from the old system, put them under `exports/` and extend `backend/app/services/seed_from_exports.py` (or a one-off script) to map columns into `site_displays`, `site_contents`, `leads`, etc.
