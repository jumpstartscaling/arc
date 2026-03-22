#!/usr/bin/env bash
# Populate TARGET PostgreSQL from SOURCE PostgreSQL (data-only dump).
#
# Usage:
#   export SOURCE_PGURL='postgresql://user:pass@old-host:5432/olddb'
#   export TARGET_PGURL='postgresql://postgres:pass@86.48.23.38:5434/postgres'
#   ./scripts/migrate-from-original-postgres.sh
#
# Requires: pg_dump and psql on PATH.

set -euo pipefail

: "${SOURCE_PGURL:?Set SOURCE_PGURL to original Postgres URL}"
: "${TARGET_PGURL:?Set TARGET_PGURL to new Postgres URL}"

OUT="$(mktemp -t arc-pgdump-XXXXXX.sql)"
trap 'rm -f "$OUT"' EXIT

echo "Dumping data-only from source..."
pg_dump "$SOURCE_PGURL" \
  --data-only \
  --no-owner \
  --no-acl \
  --inserts \
  -f "$OUT"

echo "Loading into target..."
psql "$TARGET_PGURL" -v ON_ERROR_STOP=1 -f "$OUT"

echo "Done. Check psql output for any statement failures."
