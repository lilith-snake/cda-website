// GET /api/admin/stats — 统计概览
export async function onRequest(context) {
  const pw = context.request.headers.get('x-admin-password') || ''
  if (context.request.method === 'OPTIONS') return corsJson({ ok: true }, 204)
  if (!isAuthorized(context, pw)) return authError()

  try {
    const total = await context.env.DB.prepare('SELECT COUNT(*) as count FROM submissions').first()
    const today = await context.env.DB.prepare("SELECT COUNT(*) as count FROM submissions WHERE date(timestamp) = date('now')").first()
    return corsJson({ total: total.count, today: today.count })
  } catch (err) {
    console.error('Stats error:', err)
    return corsJson({ error: 'server error' }, 500)
  }
}

function isAuthorized(context, password) {
  const expected = context.env.ADMIN_PASSWORD
  return Boolean(expected) && password === expected
}

function authError() {
  return corsJson({ error: 'unauthorized' }, 401)
}

function corsJson(data, status = 200) {
  return new Response(status === 204 ? null : JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, POST, OPTIONS',
      'access-control-allow-headers': 'content-type, x-admin-password',
    },
  })
}
