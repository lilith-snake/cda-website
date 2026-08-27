#!/usr/bin/env node
import { execFile } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import path from 'node:path'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)

const API_BASE = 'https://cda-website-3t2.pages.dev/api/admin'
const SUPPORT_DIR = path.join(homedir(), 'Library', 'Application Support', 'CDA')
const PASSWORD_FILE = path.join(SUPPORT_DIR, 'admin-password.txt')
const DESKTOP_DIR = path.join(homedir(), 'Desktop', 'CDA申请通知')
const OUTPUT_FILE = path.join(DESKTOP_DIR, 'CDA本机后台.html')

async function main() {
  await mkdir(DESKTOP_DIR, { recursive: true })
  const password = (await readFile(PASSWORD_FILE, 'utf8')).trim()
  if (!password) throw new Error(`后台密码文件为空：${PASSWORD_FILE}`)

  const [contacts, orders, surveys] = await Promise.all([
    fetchRows('/applications', password),
    fetchRows('/orders', password),
    fetchRows('/submissions', password).catch(() => []),
  ])

  await writeFile(OUTPUT_FILE, renderHtml({ contacts, orders, surveys }), 'utf8')
  await execFileAsync('/usr/bin/open', [OUTPUT_FILE])
}

async function fetchRows(pathname, password) {
  const response = await fetch(`${API_BASE}${pathname}?t=${Date.now()}`, {
    headers: {
      'cache-control': 'no-cache',
      'x-admin-password': password,
      'user-agent': 'cda-local-admin/1.0',
    },
  })
  if (!response.ok) throw new Error(`${pathname} returned ${response.status}`)
  const json = await response.json()
  if (Array.isArray(json.applications)) return json.applications
  if (Array.isArray(json.orders)) return json.orders
  return Array.isArray(json) ? json : []
}

function renderHtml({ contacts, orders, surveys }) {
  const contactRows = contacts.map(row => tableRow([
    row.id,
    row.timestamp,
    row.name,
    row.contact,
    row.inquiry_label || row.inquiry_type,
    row.service_interest,
    row.role,
    row.mj_context,
    row.message,
    row.status,
  ])).join('')

  const orderRows = orders.map(row => tableRow([
    row.id,
    row.queue_no,
    row.created_at,
    row.client_name,
    row.contact,
    row.channel,
    row.source,
    row.service_type,
    row.status,
    row.priority,
    row.practitioner,
    row.appointment_at,
    row.deadline_at,
    row.follow_up_at,
    row.info_status,
    row.intent_level,
    row.price,
    row.paid,
    row.payment_status,
    row.tags,
    row.deliverable,
    row.notes,
  ])).join('')

  const surveyRows = surveys.map(row => tableRow([
    row.id,
    row.timestamp,
    row.age,
    row.region,
    row.used_transmission,
    row.want_contact,
    row.contact_info,
    row.suggestion,
  ])).join('')

  return `<!doctype html>
<html lang="zh-Hans">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CDA 本机后台</title>
  <style>
    body{margin:0;padding:28px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#11100f;color:#f5f0e7}
    h1{margin:0 0 6px;font-size:24px;font-weight:650}
    h2{margin:30px 0 12px;font-size:18px}
    a{color:#d2ad66}
    .meta{color:#b9b0a1;font-size:13px;margin-bottom:18px}
    .stats{display:flex;gap:12px;flex-wrap:wrap;margin:18px 0}
    .stat{padding:12px 16px;background:#1b1917;border:1px solid #413b34;border-radius:8px}
    .stat strong{display:block;font-size:22px}
    .links{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0 18px}
    .links a{display:inline-flex;align-items:center;min-height:36px;padding:0 12px;border:1px solid #413b34;border-radius:6px;background:#24211e;text-decoration:none}
    input{width:100%;box-sizing:border-box;margin:8px 0 16px;padding:10px 12px;border:1px solid #413b34;border-radius:6px;background:#141210;color:#f5f0e7;font-size:14px}
    .table-wrap{overflow:auto;background:#1b1917;border:1px solid #413b34;border-radius:8px}
    table{width:100%;border-collapse:collapse;font-size:13px;min-width:1560px}
    th,td{padding:10px;border-bottom:1px solid #413b34;text-align:left;vertical-align:top}
    th{position:sticky;top:0;background:#24211e;color:#d2ad66;z-index:1}
    td{max-width:260px;white-space:pre-wrap;word-break:break-word}
    tr:hover td{background:#24211e}
  </style>
</head>
<body>
  <h1>CDA 本机后台</h1>
  <div class="meta">生成时间：${escapeHtml(new Date().toLocaleString())} · 数据从 Cloudflare D1 后台接口读取，文件仅保存在本机。</div>
  <div class="links">
    <a href="https://lilith-snake.github.io/cda-website/application-notify.html">打开实时网站申请后台</a>
    <a href="https://lilith-snake.github.io/cda-website/order-admin.html">打开实时排单预约后台</a>
  </div>
  <div class="stats">
    <div class="stat"><strong>${contacts.length}</strong>官网申请</div>
    <div class="stat"><strong>${orders.length}</strong>排单预约</div>
    <div class="stat"><strong>${contacts.filter(row => row.service_interest === '爱人传讯与关系梳理').length}</strong>爱人传讯相关</div>
    <div class="stat"><strong>${surveys.length}</strong>问卷数据</div>
  </div>
  <input id="search" placeholder="搜索全部表格内容..." autofocus>
  <h2>官网申请</h2>
  <div class="table-wrap">
    <table>
      <thead><tr><th>ID</th><th>时间</th><th>称呼</th><th>联系方式</th><th>类型</th><th>服务意向</th><th>身份</th><th>爱人 / 体验背景</th><th>具体问题（原话）</th><th>对接状态</th></tr></thead>
      <tbody>${contactRows || tableRow(['暂无数据'])}</tbody>
    </table>
  </div>
  <h2>排单预约</h2>
  <div class="table-wrap">
    <table>
      <thead><tr><th>ID</th><th>排单号</th><th>创建时间</th><th>客户</th><th>联系方式</th><th>渠道</th><th>来源</th><th>服务</th><th>状态</th><th>优先级</th><th>负责人</th><th>排单时间</th><th>截止时间</th><th>跟进时间</th><th>对接信息</th><th>意向等级</th><th>价格</th><th>已收</th><th>付款状态</th><th>标签</th><th>交付物</th><th>备注</th></tr></thead>
      <tbody>${orderRows || tableRow(['暂无数据'])}</tbody>
    </table>
  </div>
  <h2>问卷数据</h2>
  <div class="table-wrap">
    <table>
      <thead><tr><th>ID</th><th>时间</th><th>年龄</th><th>地区</th><th>使用传讯</th><th>愿意联系</th><th>联系方式</th><th>建议</th></tr></thead>
      <tbody>${surveyRows || tableRow(['暂无数据'])}</tbody>
    </table>
  </div>
  <script>
    const input = document.getElementById('search');
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      for (const row of document.querySelectorAll('tbody tr')) {
        row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
      }
    });
  </script>
</body>
</html>`
}

function tableRow(values) {
  return `<tr>${values.map(value => `<td>${escapeHtml(display(value))}</td>`).join('')}</tr>`
}

function display(value) {
  if (value == null || value === '') return '—'
  if (Array.isArray(value)) return value.join('、')
  return String(value)
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
