#!/usr/bin/env node
import { execFile } from 'node:child_process'
import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import path from 'node:path'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)

const API_URL = 'https://cda-website-3t2.pages.dev/api/admin/contacts'
const ADMIN_URL = 'https://lilith-snake.github.io/cda-website/admin'
const ADMIN_PASSWORD = 'cda2026admin'
const FETCH_TIMEOUT_MS = 15000
const FETCH_RETRIES = 3

const SUPPORT_DIR = path.join(homedir(), 'Library', 'Application Support', 'CDA')
const LOG_DIR = path.join(homedir(), 'Library', 'Logs')
const STATE_FILE = path.join(SUPPORT_DIR, 'contact-notifier-state.json')
const LOG_FILE = path.join(LOG_DIR, 'cda-contact-notifier.log')

const args = new Set(process.argv.slice(2))

async function main() {
  await ensureRuntimeDirs()

  if (args.has('--test')) {
    await notify(
      'CDA申请通知测试',
      '通知已经可以弹出',
      '以后有新的联系申请时，这里会提醒你。'
    )
    await log('test notification sent')
    return
  }

  const rows = await fetchContacts()
  const latestId = getLatestId(rows)

  if (args.has('--status')) {
    const state = await readState()
    console.log(JSON.stringify({
      lastSeenId: state.lastSeenId || 0,
      latestId,
      total: rows.length,
      adminUrl: ADMIN_URL,
      stateFile: STATE_FILE,
      logFile: LOG_FILE,
    }, null, 2))
    return
  }

  if (args.has('--init')) {
    await writeState({ lastSeenId: latestId, updatedAt: new Date().toISOString() })
    await notify(
      'CDA申请通知已开启',
      '每 1 分钟自动检查一次',
      latestId ? `当前已记录到第 ${latestId} 号申请。` : '当前还没有联系申请。'
    )
    await log(`initialized at latest id ${latestId}`)
    return
  }

  const state = await readState()
  const lastSeenId = Number(state.lastSeenId || 0)
  const newRows = rows
    .filter(row => Number(row.id || 0) > lastSeenId)
    .sort((a, b) => Number(a.id || 0) - Number(b.id || 0))

  if (newRows.length > 0) {
    await sendNewSubmissionNotification(newRows)
    await writeState({ lastSeenId: latestId, updatedAt: new Date().toISOString() })
    await log(`notified ${newRows.length} new submission(s), latest id ${latestId}`)
    return
  }

  if (latestId > lastSeenId) {
    await writeState({ lastSeenId: latestId, updatedAt: new Date().toISOString() })
  }

  if (args.has('--manual')) {
    await notify('CDA申请通知', '暂无新的联系申请', '后台检查完成。')
  }

  await log(`checked, no new submissions, latest id ${latestId}`)
}

async function fetchContacts() {
  let lastError

  for (let attempt = 1; attempt <= FETCH_RETRIES; attempt += 1) {
    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)

      const response = await fetch(`${API_URL}?t=${Date.now()}`, {
        signal: controller.signal,
        headers: {
          'cache-control': 'no-cache',
          'x-admin-password': ADMIN_PASSWORD,
          'user-agent': 'cda-contact-notifier/1.1',
        },
      })

      clearTimeout(timeout)

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`)
      }

      const data = await response.json()
      if (!Array.isArray(data)) {
        throw new Error('API response is not a list')
      }

      return data
    } catch (error) {
      lastError = error
      await log(`fetch attempt ${attempt}/${FETCH_RETRIES} failed: ${error.message}`)
      if (attempt < FETCH_RETRIES) await sleep(1500 * attempt)
    }
  }

  throw lastError
}

function getLatestId(rows) {
  return rows.reduce((max, row) => Math.max(max, Number(row.id || 0)), 0)
}

async function sendNewSubmissionNotification(newRows) {
  const latest = newRows.at(-1)
  const count = newRows.length
  const title = count === 1 ? 'CDA收到新的联系申请' : `CDA收到 ${count} 份新的联系申请`
  const subtitle = latest?.inquiry_label || latest?.inquiry_type || '联系申请'
  const detail = compact([
    latest?.name && `称呼：${latest.name}`,
    latest?.contact && `联系方式：${latest.contact}`,
    latest?.service_interest && `意向：${latest.service_interest}`,
  ]).join(' ｜ ')

  await notify(title, subtitle, detail || '请打开后台查看详情。')
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
