// GET /api/admin/submissions — 全部提交记录
export async function onRequest(context) {
  const pw = context.request.headers.get('x-admin-password') || ''
  if (pw !== 'cda2026admin') {
    return new Response(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
      headers: { 'content-type': 'application/json' },
    })
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

    return new Response(JSON.stringify(rows), {
      headers: { 'content-type': 'application/json' },
    })
  } catch (err) {
    console.error('Submissions error:', err)
    return new Response(JSON.stringify({ error: 'server error' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }
}
