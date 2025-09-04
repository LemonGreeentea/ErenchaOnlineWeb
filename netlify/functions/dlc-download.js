import { getSql, ensureSchema } from './_db.js'

export async function handler(event) {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' }
  try {
    const body = JSON.parse(event.body || '{}')
    const { site, clientId, artifact, windowBucket, ts, items } = body
    if (!site || !artifact || !Array.isArray(items) || !Number.isFinite(windowBucket)) {
      return { statusCode: 400, body: JSON.stringify({ ok: false, error: 'invalid payload' }) }
    }
    const now = typeof ts === 'number' ? ts : Date.now()

    const sql = getSql()
    await ensureSchema(sql)

    for (const it of items) {
      const type = it.type || 'unknown'
      const id = it.id || 'unknown'
      const name = it.name || `${type}:${id}`
      const dupKey = `${site}:${windowBucket}:${type}:${id}:${clientId || 'anon'}`

      // dedup via PK; INSERT ... ON CONFLICT DO NOTHING
      const inserted = await sql`
        INSERT INTO dlc_dupes (site, bucket, type, item_id, client_id)
        VALUES (${site}, ${windowBucket}, ${type}, ${id}, ${clientId || 'anon'})
        ON CONFLICT DO NOTHING
        RETURNING site
      `
      if (inserted.length === 0) continue

      await sql`
        INSERT INTO dlc_events (site, type, item_id, name, artifact, ts)
        VALUES (${site}, ${type}, ${id}, ${name}, ${artifact}, to_timestamp(${now}/1000.0))
      `
    }

    return { statusCode: 204 }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: String(e && e.message || e) }) }
  }
}
