#!/usr/bin/env node
import { execFile } from 'node:child_process'
import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import path from 'node:path'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)

const API_BASE = 'https://cda-website-3t2.pages.dev/api/admin'
const APPLICATION_ADMIN_URL = 'https://lilith-snake.github.io/cda-website/application-notify.html'
const ORDER_ASSISTANT_URL = 'https://lilith-snake.github.io/cda-website/order-assistant.html'
const ORDER_ADMIN_URL = 'https://lilith-snake.github.io/cda-website/order-admin.html?admin=1'
const FETCH_TIMEOUT_MS = 15000
const FETCH_RETRIES = 3

const SUPPORT_DIR = path.join(homedir(), 'Library', 'Application Support', 'CDA')
const LOG_DIR = path.join(homedir(), 'Library', 'Logs')
const PASSWORD_FILE = path.join(SUPPORT_DIR, 'admin-password.txt')
const STATE_FILE = path.join(SUPPORT_DIR, 'contact-notifier-state.json')
const LOG_FILE = path.join(LOG_DIR, 'cda-contact-notifier.log')

const args = new Set(process.argv.slice(2))

async function main() {
  await ensureRuntimeDirs()

  if (args.has('--test')) {
    await notify(
      'CDA实时审查通知测试',
      '通知已经可以弹出',
      '新官网申请、新排单、排单修改都会在这里提醒。'
    )
    await log('test notification sent')
    return
  }

  const [applications, orders] = await Promise.all([
    fetchApplications(),
    fetchOrders(),
  ])
  const latestApplicationId = getLatestId(applications)
  const latestOrderId = getLatestId(orders)
  const orderFingerprints = buildOrderFingerprints(orders)

  if (args.has('--status')) {
    const state = await readState()
    console.log(JSON.stringify({
      lastSeenApplicationId: state.lastSeenApplicationId || state.lastSeenId || 0,
      lastSeenOrderId: state.lastSeenOrderId || 0,
      latestApplicationId,
      latestOrderId,
      applicationsTotal: applications.length,
      ordersTotal: orders.length,
      trackedOrderFingerprints: Object.keys(state.orderFingerprints || {}).length,
      applicationAdminUrl: APPLICATION_ADMIN_URL,
      orderAssistantUrl: ORDER_ASSISTANT_URL,
      orderAdminUrl: ORDER_ADMIN_URL,
      stateFile: STATE_FILE,
      logFile: LOG_FILE,
    }, null, 2))
    return
  }

  if (args.has('--init')) {
    await writeState({
      lastSeenApplicationId: latestApplicationId,
      lastSeenOrderId: latestOrderId,
      orderFingerprints,
      updatedAt: new Date().toISOString(),
    })
    await notify(
      'CDA实时通知已开启',
      '每 20 秒自动检查一次',
      `自动审查官网申请、新排单和排单修改。当前：${applications.length} 条申请，${orders.length} 条排单。`
    )
    await log(`initialized at application ${latestApplicationId}, order ${latestOrderId}`)
    return
  }

  const state = await readState()
  const lastSeenApplicationId = Number(state.lastSeenApplicationId || state.lastSeenId || 0)
  const lastSeenOrderId = Number(state.lastSeenOrderId || 0)
  const previousOrderFingerprints = state.orderFingerprints || {}
  const newApplications = applications
    .filter(row => Number(row.id || 0) > lastSeenApplicationId)
    .sort((a, b) => Number(a.id || 0) - Number(b.id || 0))
  const newOrders = orders
    .filter(row => Number(row.id || 0) > lastSeenOrderId)
    .sort((a, b) => Number(a.id || 0) - Number(b.id || 0))
  const modifiedOrders = orders
    .filter(row => {
      const id = String(row.id || '')
      if (!id || Number(row.id || 0) > lastSeenOrderId) return false
      return Boolean(previousOrderFingerprints[id]) && previousOrderFingerprints[id] !== orderFingerprints[id]
    })
    .sort((a, b) => Number(a.id || 0) - Number(b.id || 0))

  if (newApplications.length > 0) {
    await sendNewApplicationNotification(newApplications)
  }
  if (newOrders.length > 0) {
    await sendNewOrderNotification(newOrders)
  }
  if (modifiedOrders.length > 0) {
    await sendModifiedOrderNotification(modifiedOrders)
  }

  if (newApplications.length > 0 || newOrders.length > 0 || modifiedOrders.length > 0) {
    await writeState({
      lastSeenApplicationId: latestApplicationId,
      lastSeenOrderId: latestOrderId,
      orderFingerprints,
      updatedAt: new Date().toISOString(),
    })
    await log(`notified applications=${newApplications.length}, new orders=${newOrders.length}, modified orders=${modifiedOrders.length}`)
    return
  }

  if (latestApplicationId > lastSeenApplicationId || latestOrderId > lastSeenOrderId || !state.orderFingerprints) {
    await writeState({
      lastSeenApplicationId: latestApplicationId,
      lastSeenOrderId: latestOrderId,
      orderFingerprints,
      updatedAt: new Date().toISOString(),
    })
  }

  if (args.has('--manual')) {
    await notify('CDA实时通知', '暂无新的官网申请或排单', `当前共 ${applications.length} 条申请，${orders.length} 条排单。`)
  }

  await log(`checked, no new or modified items, latest application ${latestApplicationId}, order ${latestOrderId}`)
}

async function fetchApplications() {
  const data = await fetchJson('/applications')
  if (Array.isArray(data)) return data
  return Array.isArray(data.applications) ? data.applications : []
}

async function fetchOrders() {
  const data = await fetchJson('/orders')
  return Array.isArray(data.orders) ? data.orders : []
}

async function fetchJson(pathname) {
  let lastError
  const adminPassword = await getAdminPassword()

  for (let attempt = 1; attempt <= FETCH_RETRIES; attempt += 1) {
    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)

      const response = await fetch(`${API_BASE}${pathname}?t=${Date.now()}`, {
        signal: controller.signal,
        headers: {
          'cache-control': 'no-cache',
          'x-admin-password': adminPassword,
          'user-agent': 'cda-local-notifier/2.0',
        },
      })

      clearTimeout(timeout)

      if (!response.ok) {
        throw new Error(`${pathname} returned ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      lastError = error
      await log(`fetch attempt ${attempt}/${FETCH_RETRIES} failed: ${error.message}`)
      if (attempt < FETCH_RETRIES) await sleep(1500 * attempt)
    }
  }

  throw lastError
}

async function getAdminPassword() {
  const fromEnv = process.env.CDA_ADMIN_PASSWORD?.trim()
  if (fromEnv) return fromEnv

  try {
    const fromFile = (await readFile(PASSWORD_FILE, 'utf8')).trim()
    if (fromFile) return fromFile
  } catch {
    // Fall through to the explicit error below.
  }

  throw new Error(`Missing admin password. Set CDA_ADMIN_PASSWORD or create ${PASSWORD_FILE}`)
}

function getLatestId(rows) {
  return rows.reduce((max, row) => Math.max(max, Number(row.id || 0)), 0)
}

async function sendNewApplicationNotification(newRows) {
  const latest = newRows.at(-1)
  const count = newRows.length
  const title = count === 1 ? 'CDA收到新的官网申请' : `CDA收到 ${count} 份新的官网申请`
  const subtitle = latest?.inquiry_label || latest?.inquiry_type || '联系申请'
  const detail = compact([
    latest?.name && `称呼：${latest.name}`,
    latest?.contact && `联系方式：${latest.contact}`,
    latest?.service_interest && `意向：${latest.service_interest}`,
  ]).join(' ｜ ')

  await notify(title, subtitle, detail || '请打开后台查看详情。')
}

async function sendNewOrderNotification(newRows) {
  const latest = newRows.at(-1)
  const count = newRows.length
  const title = count === 1 ? 'CDA新增排单预约' : `CDA新增 ${count} 条排单预约`
  const subtitle = latest?.queue_no || latest?.service_type || '排单后台'
  const detail = compact([
    latest?.client_name && `客户：${latest.client_name}`,
    latest?.service_type && `服务：${latest.service_type}`,
    latest?.appointment_at && `预约：${latest.appointment_at}`,
  ]).join(' ｜ ')

  await notify(title, subtitle, detail || '请打开排单后台查看详情。')
}

async function sendModifiedOrderNotification(modifiedRows) {
  const latest = modifiedRows.at(-1)
  const count = modifiedRows.length
  const title = count === 1 ? 'CDA排单被修改' : `CDA有 ${count} 条排单被修改`
  const subtitle = latest?.queue_no || latest?.client_name || '排单后台'
  const detail = compact([
    latest?.client_name && `客户：${latest.client_name}`,
    latest?.status && `状态：${latest.status}`,
    latest?.practitioner && `负责人：${latest.practitioner}`,
    latest?.appointment_at && `预约：${latest.appointment_at}`,
  ]).join(' ｜ ')

  await notify(title, subtitle, detail || '请打开排单后台查看详情。')
}

function buildOrderFingerprints(orders) {
  return Object.fromEntries(
    orders
      .filter(order => order.id)
      .map(order => [String(order.id), orderFingerprint(order)])
  )
}

function orderFingerprint(order) {
  const fields = [
    'queue_no',
    'client_name',
    'contact',
    'channel',
    'source',
    'service_type',
    'status',
    'priority',
    'practitioner',
    'appointment_at',
    'deadline_at',
    'follow_up_at',
    'price',
    'paid',
    'payment_status',
    'tags',
    'deliverable',
    'notes',
  ]
  return JSON.stringify(fields.map(field => normalizeFingerprintValue(order[field])))
}

function normalizeFingerprintValue(value) {
  if (Array.isArray(value)) return value.map(item => String(item ?? '').trim()).filter(Boolean)
  if (value == null) return ''
  return String(value).trim()
}

function compact(values) {
  return values.filter(Boolean)
}

async function readState() {
  try {
    return JSON.parse(await readFile(STATE_FILE, 'utf8'))
  } catch {
    return {}
  }
}

async function writeState(state) {
  await writeFile(STATE_FILE, JSON.stringify(state, null, 2), 'utf8')
}

async function ensureRuntimeDirs() {
  await mkdir(SUPPORT_DIR, { recursive: true })
  await mkdir(LOG_DIR, { recursive: true })
}

async function log(message) {
  await appendFile(LOG_FILE, `[${new Date().toISOString()}] ${message}\n`, 'utf8')
}

async function notify(title, subtitle, message) {
  const script = [
    `display notification "${escapeAppleScript(message)}"`,
    `with title "${escapeAppleScript(title)}"`,
    `subtitle "${escapeAppleScript(subtitle)}"`,
  ].join(' ')

  await execFileAsync('/usr/bin/osascript', ['-e', script])
  await execFileAsync('/usr/bin/afplay', ['/System/Library/Sounds/Glass.aiff']).catch(() => {})
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function escapeAppleScript(value) {
  return String(value || '')
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .slice(0, 220)
}

main().catch(async error => {
  await ensureRuntimeDirs().catch(() => {})
  await log(`error: ${error.stack || error.message}`).catch(() => {})
  if (args.has('--manual')) {
    await notify('CDA申请通知检查失败', '暂时没有查到后台', '请稍后再试，或打开后台查看。').catch(() => {})
  }
  console.error(error)
  process.exitCode = 1
})
