// /api/admin/applications — website application notification backend
export async function onRequest(context) {
  if (context.request.method === 'OPTIONS') {
    return corsJson({ ok: true }, 204)
  }

  const auth = getAuth(context)
  if (!auth.ok) {
    return corsJson({ error: 'unauthorized' }, 401)
  }

  try {
    if (context.request.method === 'GET') {
      const result = await context.env.DB.prepare(`
        SELECT * FROM contact_submissions
        ORDER BY id DESC
      `).all()
      return corsJson({ role: auth.role, applications: result.results || [] })
    }

    if (context.request.method === 'PUT') {
      const body = await parseBody(context.request)
      const id = Number(body.id)
      const status = normalizeStatus(body.status)
      if (!id) return corsJson({ error: 'id required' }, 400)
      await context.env.DB.prepare(`
        UPDATE contact_submissions
        SET status = ?
        WHERE id = ?
      `).bind(status, id).run()
      const row = await context.env.DB.prepare(`
        SELECT * FROM contact_submissions
        WHERE id = ?
      `).bind(id).first()
      return corsJson(row)
    }

    return corsJson({ error: 'method not allowed' }, 405)
  } catch (err) {
    console.error('Applications error:', err)
    return corsJson({ error: 'server error' }, 500)
  }
}

function getAuth(context) {
  const password = context.request.headers.get('x-admin-password') || ''
  const adminPassword = context.env.ADMIN_PASSWORD || ''
  const assistantPassword = context.env.ASSISTANT_PASSWORD || ''
  if (adminPassword && password === adminPassword) return { ok: true, role: 'admin' }
  if (assistantPassword && password === assistantPassword) return { ok: true, role: 'assistant' }
  return { ok: false, role: '' }
}

async function parseBody(request) {
  const text = await request.text()
  if (!text.trim()) return {}
  return JSON.parse(text)
}

function normalizeStatus(value) {
  return ['new', 'contacted', 'queued', 'done', 'hold'].includes(value) ? value : 'new'
}

function corsJson(data, status = 200) {
  return new Response(status === 204 ? null : JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, PUT, OPTIONS',
      'access-control-allow-headers': 'content-type, x-admin-password',
    },
  })
}
