// GET /api/admin/submissions — 全部提交记录
export async function onRequest(context) {
  if (context.request.method === 'OPTIONS') {
    return corsJson({ ok: true }, 204)
  }

  const pw = context.request.headers.get('x-admin-password') || ''
  if (!isAuthorized(context, pw)) {
    return corsJson({ error: 'unauthorized' }, 401)
  }

  try {
    const result = await context.env.DB.prepare('SELECT * FROM submissions ORDER BY id DESC').all()

    const tryParse = (v) => {
      if (typeof v === 'string') {
        try { return JSON.parse(v) } catch { return v }
      }
      return v
    }

    const rows = result.results.map(r => ({
      ...r,
      occupation: tryParse(r.occupation),
      mj_type: tryParse(r.mj_type),
      mj_source: tryParse(r.mj_source),
      belief_reasons: tryParse(r.belief_reasons),
      strange_events: tryParse(r.strange_events),
      sync_events: tryParse(r.sync_events),
      east_west_occult: tryParse(r.east_west_occult),
      become_transmitter: tryParse(r.become_transmitter),
      confusions: tryParse(r.confusions),
      pain_points: tryParse(r.pain_points),
      interests: tryParse(r.interests),
    }))

    return corsJson(rows)
  } catch (err) {
    console.error('Submissions error:', err)
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
