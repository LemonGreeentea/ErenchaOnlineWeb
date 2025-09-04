export async function handler() {
  const have = {
    NETLIFY_BLOBS_SITE_ID: !!process.env.NETLIFY_BLOBS_SITE_ID,
    BLOBS_SITE_ID: !!process.env.BLOBS_SITE_ID,
    NETLIFY_BLOBS_TOKEN: !!process.env.NETLIFY_BLOBS_TOKEN,
    BLOBS_TOKEN: !!process.env.BLOBS_TOKEN,
  }
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true, have }),
  }
}
