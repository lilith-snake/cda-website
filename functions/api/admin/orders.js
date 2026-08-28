// /api/admin/orders — CDA shared queue/order backend
export async function onRequest(context) {
  if (context.request.method === 'OPTIONS') {
    return corsJson({ ok: true }, 204)
  }

  const auth = getAuth(context)
  if (!auth.ok) {
    return corsJson({ error: 'unauthorized' }, 401)
  }

  try {
    await ensureOrdersTable(context.env.DB)

    if (context.request.method === 'GET') {
      const url = new URL(context.request.url)
      if (url.searchParams.get('format') === 'csv') {
        const rows = await listOrders(context.env.DB)
        return csvResponse(toCsv(rows))
      }
      const rows = await listOrders(context.env.DB)
      return corsJson({ role: auth.role, orders: rows })
    }

    if (context.request.method === 'POST') {
      const body = await parseBody(context.request)
      const order = cleanOrder(body)
      if (!order.client_name) {
        return corsJson({ error: 'client name required' }, 400)
      }
      const existing = order.sync_key ? await getOrderBySyncKey(context.env.DB, order.sync_key) : null
      if (existing) {
        return corsJson(existing)
      }
      const queueNo = order.queue_no || await nextQueueNo(context.env.DB)
      let result
      try {
        result = await context.env.DB.prepare(`
          INSERT INTO service_orders (
            queue_no, created_at, updated_at,
            client_name, contact, channel, source, service_type, status, priority,
            practitioner, appointment_at, deadline_at, follow_up_at,
            info_status, intent_level, sync_key,
            price, paid, payment_status, tags, deliverable, notes
          ) VALUES (
            ?, datetime('now'), datetime('now'),
            ?, ?, ?, ?, ?, ?, ?,
            ?, ?, ?, ?,
            ?, ?, ?,
            ?, ?, ?, ?, ?, ?
          )
        `).bind(
          queueNo,
          order.client_name,
          order.contact,
          order.channel,
          order.source,
          order.service_type,
          order.status,
          order.priority,
          order.practitioner,
          order.appointment_at,
          order.deadline_at,
          order.follow_up_at,
          order.info_status,
          order.intent_level,
          order.sync_key,
          order.price,
          order.paid,
          order.payment_status,
          order.tags,
          order.deliverable,
          order.notes,
        ).run()
      } catch (error) {
        const raced = order.sync_key ? await getOrderBySyncKey(context.env.DB, order.sync_key) : null
        if (raced) return corsJson(raced)
        throw error
      }

      const created = await getOrder(context.env.DB, result.meta.last_row_id)
      return corsJson(created, 201)
    }

    if (context.request.method === 'PUT') {
      const body = await parseBody(context.request)
      const id = Number(body.id)
      if (!id) return corsJson({ error: 'id required' }, 400)
      const exists = await getOrder(context.env.DB, id)
      if (!exists) return corsJson({ error: 'order not found' }, 404)

      const order = cleanOrder(body)
      await updateOrder(context.env.DB, id, order)

      return corsJson(await getOrder(context.env.DB, id))
    }

    if (context.request.method === 'DELETE') {
      if (auth.role !== 'admin') {
        return corsJson({ error: 'assistant cannot delete orders' }, 403)
      }
      const url = new URL(context.request.url)
      const id = Number(url.searchParams.get('id'))
      const syncKey = clean(url.searchParams.get('sync_key') || url.searchParams.get('syncKey'), 120)
      if (!id && !syncKey) return corsJson({ error: 'id required' }, 400)
      const target = id ? await getOrder(context.env.DB, id) : await getOrderBySyncKey(context.env.DB, syncKey)
      if (!target) return corsJson({ error: 'order not found' }, 404)
      await context.env.DB.prepare('DELETE FROM service_orders WHERE id = ?').bind(target.id).run()
      return corsJson({ ok: true })
    }

    return corsJson({ error: 'method not allowed' }, 405)
  } catch (err) {
    console.error('Orders error:', err)
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

async function ensureOrdersTable(db) {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS service_orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      queue_no TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now')),
      client_name TEXT NOT NULL,
      contact TEXT,
      channel TEXT,
      source TEXT,
      service_type TEXT,
      status TEXT DEFAULT 'new',
      priority TEXT DEFAULT 'normal',
      practitioner TEXT,
      appointment_at TEXT,
      deadline_at TEXT,
      follow_up_at TEXT,
      info_status TEXT DEFAULT '未确认',
      intent_level TEXT DEFAULT 'normal',
      sync_key TEXT,
      price REAL DEFAULT 0,
      paid REAL DEFAULT 0,
      payment_status TEXT,
      tags TEXT,
      deliverable TEXT,
      notes TEXT
    )
  `).run()
  await ensureOrderColumns(db)
  await db.prepare('CREATE INDEX IF NOT EXISTS idx_service_orders_status ON service_orders(status)').run()
  await db.prepare('CREATE INDEX IF NOT EXISTS idx_service_orders_created_at ON service_orders(created_at)').run()
  await db.prepare('CREATE INDEX IF NOT EXISTS idx_service_orders_appointment_at ON service_orders(appointment_at)').run()
}

async function ensureOrderColumns(db) {
  const columns = await db.prepare('PRAGMA table_info(service_orders)').all()
  const existing = new Set((columns.results || []).map(row => row.name))
  const additions = [
    ['info_status', "TEXT DEFAULT '未确认'"],
    ['intent_level', "TEXT DEFAULT 'normal'"],
    ['sync_key', 'TEXT'],
  ]
  for (const [name, definition] of additions) {
    if (!existing.has(name)) {
      await db.prepare(`ALTER TABLE service_orders ADD COLUMN ${name} ${definition}`).run()
    }
  }
  await db.prepare(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_service_orders_sync_key_unique
    ON service_orders(sync_key)
    WHERE sync_key IS NOT NULL AND sync_key <> ''
  `).run()
}

async function listOrders(db) {
  const result = await db.prepare('SELECT * FROM service_orders ORDER BY id DESC').all()
  return (result.results || []).map(parseOrder)
}

async function getOrder(db, id) {
  const row = await db.prepare('SELECT * FROM service_orders WHERE id = ?').bind(id).first()
  return row ? parseOrder(row) : null
}

async function getOrderBySyncKey(db, syncKey) {
  if (!syncKey) return null
  const row = await db.prepare('SELECT * FROM service_orders WHERE sync_key = ?').bind(syncKey).first()
  return row ? parseOrder(row) : null
}

async function updateOrder(db, id, order) {
  await db.prepare(`
    UPDATE service_orders SET
      updated_at = datetime('now'),
      queue_no = COALESCE(?, queue_no),
      client_name = ?, contact = ?, channel = ?, source = ?,
      service_type = ?, status = ?, priority = ?, practitioner = ?,
      appointment_at = ?, deadline_at = ?, follow_up_at = ?,
      info_status = ?, intent_level = ?, sync_key = COALESCE(?, sync_key),
      price = ?, paid = ?, payment_status = ?, tags = ?,
      deliverable = ?, notes = ?
    WHERE id = ?
  `).bind(
    order.queue_no || null,
    order.client_name,
    order.contact,
    order.channel,
    order.source,
    order.service_type,
    order.status,
    order.priority,
    order.practitioner,
    order.appointment_at,
    order.deadline_at,
    order.follow_up_at,
    order.info_status,
    order.intent_level,
    order.sync_key || null,
    order.price,
    order.paid,
    order.payment_status,
    order.tags,
    order.deliverable,
    order.notes,
    id,
  ).run()
}

async function nextQueueNo(db) {
  const now = new Date()
  const date = `${now.getUTCFullYear()}${String(now.getUTCMonth() + 1).padStart(2, '0')}${String(now.getUTCDate()).padStart(2, '0')}`
  const prefix = `CDA-${date}-`
  const row = await db.prepare(`
    SELECT queue_no FROM service_orders
    WHERE queue_no LIKE ?
    ORDER BY queue_no DESC
    LIMIT 1
  `).bind(`${prefix}%`).first()
  const current = row?.queue_no ? Number(String(row.queue_no).slice(prefix.length)) : 0
  return `${prefix}${String((Number.isFinite(current) ? current : 0) + 1).padStart(3, '0')}`
}

function parseOrder(row) {
  return {
    ...row,
    tags: parseTags(row.tags),
  }
}

function cleanOrder(body = {}) {
  return {
    queue_no: clean(body.queue_no || body.queueNo, 80),
    client_name: clean(body.client_name || body.clientName, 120),
    contact: clean(body.contact, 200),
    channel: clean(body.channel, 120),
    source: clean(body.source, 200),
    service_type: clean(body.service_type || body.serviceType || '新人传讯', 120),
    status: normalizeChoice(body.status, ['new', 'contacted', 'paid', 'scheduled', 'in_progress', 'done', 'hold', 'refund'], 'new'),
    priority: normalizeChoice(body.priority, ['low', 'normal', 'high', 'urgent'], 'normal'),
    practitioner: clean(body.practitioner, 120),
    appointment_at: clean(body.appointment_at || body.appointmentAt, 80),
    deadline_at: clean(body.deadline_at || body.deadlineAt, 80),
    follow_up_at: clean(body.follow_up_at || body.followUpAt, 80),
    info_status: normalizeChoice(body.info_status || body.infoStatus, ['未确认', '已确认', '待补充', '无需'], '未确认'),
    intent_level: normalizeChoice(body.intent_level || body.intentLevel, ['low', 'normal', 'high'], 'normal'),
    sync_key: clean(body.sync_key || body.syncKey, 120),
    price: Number(body.price || 0),
    paid: Number(body.paid || 0),
    payment_status: clean(body.payment_status || body.paymentStatus || '未付款', 80),
    tags: JSON.stringify(parseTags(body.tags)),
    deliverable: clean(body.deliverable, 500),
    notes: clean(body.notes, 4000),
  }
}

function parseTags(value) {
  if (Array.isArray(value)) return value.map(item => clean(item, 60)).filter(Boolean)
  if (!value) return []
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value)
      if (Array.isArray(parsed)) return parsed.map(item => clean(item, 60)).filter(Boolean)
    } catch {}
    return value.split(/[,\s，、/]+/).map(item => clean(item, 60)).filter(Boolean)
  }
  return []
}

function normalizeChoice(value, allowed, fallback) {
  return allowed.includes(value) ? value : fallback
}

async function parseBody(request) {
  const text = await request.text()
  if (!text.trim()) return {}
  return JSON.parse(text)
}

function clean(value, max = 1000) {
  if (value == null) return ''
  return String(value).trim().slice(0, max)
}

function corsJson(data, status = 200) {
  return new Response(status === 204 ? null : JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'access-control-allow-headers': 'content-type, x-admin-password',
    },
  })
}

function csvResponse(csv) {
  return new Response(`\uFEFF${csv}`, {
    status: 200,
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': 'attachment; filename=cda-service-orders.csv',
      'access-control-allow-origin': '*',
      'access-control-allow-headers': 'content-type, x-admin-password',
    },
  })
}

function toCsv(orders) {
  const headers = ['排单号', '客户', '联系方式', '渠道', '来源', '服务', '状态', '优先级', '负责人', '排单时间', '截止', '跟进', '对接信息', '意向等级', '价格', '已付', '付款状态', '标签', '交付物', '备注', '创建时间', '更新时间']
  const rows = orders.map(order => [
    order.queue_no,
    order.client_name,
    order.contact,
    order.channel,
    order.source,
    order.service_type,
    order.status,
    order.priority,
    order.practitioner,
    order.appointment_at,
    order.deadline_at,
    order.follow_up_at,
    order.info_status,
    order.intent_level,
    order.price,
    order.paid,
    order.payment_status,
    (order.tags || []).join(' / '),
    order.deliverable,
    order.notes,
    order.created_at,
    order.updated_at,
  ])
  return [headers, ...rows].map(row => row.map(csvCell).join(',')).join('\n')
}

function csvCell(value) {
  return `"${String(value ?? '').replaceAll('"', '""')}"`
}
