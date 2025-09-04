import { getSql, ensureSchema } from './_db.js'

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
    // Normalize casing and numeric types for clients expecting perArtifact/lastAt
    const rows = (result || []).map(r => ({
      type: r.type,
      id: r.id,
      name: r.name,
      count: Number(r.count || 0),
      perArtifact: r.perArtifact || r.perartifact || {},
      lastAt: typeof r.lastAt === 'string' ? Math.round(parseFloat(r.lastAt))
             : typeof r.lastat === 'string' ? Math.round(parseFloat(r.lastat))
             : Number(r.lastAt ?? r.lastat ?? 0),
    })).sort((a,b)=> (b.count||0)-(a.count||0))

    return { statusCode: 200, headers: { 'Content-Type': 'application/json', 'x-erensya': 'summary-db' }, body: JSON.stringify({ ok:true, rows, sig: 'db' }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ ok:false, error: String(e && e.message || e) }) }
  }
}
