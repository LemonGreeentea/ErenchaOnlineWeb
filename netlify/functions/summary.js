import { getSql, ensureSchema } from './_db.js'

// Blobs 제거 버전: DB만 사용

export async function handler() {
  try {
    const sql = getSql();
    await ensureSchema(sql)
    const result = await sql`
      SELECT type, item_id as id, max(name) as name,
             count(*)::int as count,
             json_object_agg(artifact, cnt) FILTER (WHERE cnt IS NOT NULL) as perArtifact,
             extract(epoch from max(ts))*1000::bigint as lastAt
      FROM (
        SELECT type, item_id, name, artifact, ts, count(*) OVER (PARTITION BY type, item_id, artifact) AS cnt
        FROM dlc_events
      ) t
      GROUP BY type, item_id
      ORDER BY count DESC;
    `
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ok:true, rows: result, sig: 'db' }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ ok:false, error: String(e && e.message || e) }) }
  }
}
