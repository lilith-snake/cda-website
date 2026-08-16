// POST /api/contact — 站内联系/申请表提交
export async function onRequest(context) {
  if (context.request.method === 'OPTIONS') {
    return corsResponse({ ok: true }, 204)
  }

  if (context.request.method !== 'POST') {
    return corsResponse({ error: 'method not allowed' }, 405)
  }

  try {
    const body = await context.request.json()
    if (!body) return json({ error: 'empty body' }, 400)

    const name = clean(body.name)
    const contact = clean(body.contact)
    const inquiryType = clean(body.inquiryType)
    const inquiryLabel = clean(body.inquiryLabel)
    const role = clean(body.role)
    const serviceInterest = clean(body.serviceInterest)
    const mjContext = clean(body.mjContext, 4000)
    const message = clean(body.message, 4000)
    const language = clean(body.language)
    const consent = body.consent ? 1 : 0

    if (!name || !contact || !role || !message || !consent) {
      return corsResponse({ error: 'missing required fields' }, 400)
    }

    const result = await context.env.DB.prepare(`
      INSERT INTO contact_submissions (
        timestamp, user_agent, ip,
        name, contact, inquiry_type, inquiry_label, role,
        service_interest, mj_context, message, consent, language, status
      ) VALUES (
        datetime('now'), ?, ?,
        ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, 'new'
      )
    `).bind(
      clean(body.userAgent, 600) || context.request.headers.get('user-agent') || '',
      context.request.headers.get('cf-connecting-ip') || '',
      name,
      contact,
      inquiryType,
      inquiryLabel,
      role,
      serviceInterest,
      mjContext,
      message,
      consent,
      language,
    ).run()

    return corsResponse({ ok: true, id: result.meta.last_row_id })
  } catch (err) {
    console.error('Contact error:', err)
    return corsResponse({ error: 'server error' }, 500)
  }
}

function clean(value, max = 1000) {
  if (value == null) return ''
  return String(value).trim().slice(0, max)
}

function corsResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'POST, OPTIONS',
      'access-control-allow-headers': 'content-type',
    },
  })
}
