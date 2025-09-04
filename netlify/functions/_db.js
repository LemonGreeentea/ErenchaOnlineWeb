import { neon } from '@netlify/neon'

export function hasDB() {
  return !!process.env.NETLIFY_DATABASE_URL
}

export function getSql() {
  // When called without args, it will read NETLIFY_DATABASE_URL automatically
  return neon()
}

export async function ensureSchema(sql) {
  // Idempotent schema creation
  await sql`
    CREATE TABLE IF NOT EXISTS dlc_dupes (
      site TEXT NOT NULL,
      bucket BIGINT NOT NULL,
      type TEXT NOT NULL,
      item_id TEXT NOT NULL,
      client_id TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now(),
      PRIMARY KEY (site, bucket, type, item_id, client_id)
    );
  `
  await sql`
    CREATE TABLE IF NOT EXISTS dlc_events (
      id BIGSERIAL PRIMARY KEY,
      site TEXT NOT NULL,
      type TEXT NOT NULL,
      item_id TEXT NOT NULL,
      name TEXT NOT NULL,
      artifact TEXT NOT NULL,
      ts TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `
}
