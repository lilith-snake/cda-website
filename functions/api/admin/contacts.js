// GET /api/admin/contacts — 联系/申请表记录
export async function onRequest(context) {
  if (context.request.method === 'OPTIONS') {
    return corsJson({ ok: true }, 204)
  }

  const pw = context.request.headers.get('x-admin-password') || ''
  if (!isAuthorized(context, pw)) {
    return corsJson({ error: 'unauthorized' }, 401)
  }

  try {
    const result = await context.env.DB.prepare('SELECT * FROM contact_submissions ORDER BY id DESC').all()
    return corsJson(result.results || [])
  } catch (err) {
    console.error('Contacts error:', err)
    return corsJson({ error: 'server error' }, 500)
  }
}

function isAuthorized(context, password) {
  const expected = context.env.ADMIN_PASSWORD
  return Boolean(expected) && password === expected
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
