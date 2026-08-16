// GET /api/admin/stats — 统计概览
export async function onRequest(context) {
  const pw = context.request.headers.get('x-admin-password') || ''
  if (context.request.method === 'OPTIONS') return corsJson({ ok: true }, 204)
  if (pw !== 'cda2026admin') return authError()

  try {
    const total = await context.env.DB.prepare('SELECT COUNT(*) as count FROM submissions').first()
    const today = await context.env.DB.prepare("SELECT COUNT(*) as count FROM submissions WHERE date(timestamp) = date('now')").first()
    return corsJson({ total: total.count, today: today.count })
  } catch (err) {
    console.error('Stats error:', err)
    return corsJson({ error: 'server error' }, 500)
  }
}

function authError() {
  return corsJson({ error: 'unauthorized' }, 401)
}

function corsJson(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, OPTIONS',
      'access-control-allow-headers': 'content-type, x-admin-password',
    },
  })
}
