// GET /api/admin/stats — 统计概览
export async function onRequest(context) {
  const pw = context.request.headers.get('x-admin-password') || ''
  if (pw !== 'cda2026admin') return authError()

  try {
    const total = await context.env.DB.prepare('SELECT COUNT(*) as count FROM submissions').first()
    const today = await context.env.DB.prepare("SELECT COUNT(*) as count FROM submissions WHERE date(timestamp) = date('now')").first()
    return json({ total: total.count, today: today.count })
  } catch (err) {
    console.error('Stats error:', err)
    return json({ error: 'server error' }, 500)
  }
}

function authError() {
  return new Response(JSON.stringify({ error: 'unauthorized' }), {
    status: 401,
    headers: { 'content-type': 'application/json' },
  })
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}
