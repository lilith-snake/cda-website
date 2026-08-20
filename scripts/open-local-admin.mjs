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

  const [contacts, surveys] = await Promise.all([
    fetchRows('/contacts', password),
    fetchRows('/submissions', password).catch(() => []),
  ])

  await writeFile(OUTPUT_FILE, renderHtml({ contacts, surveys }), 'utf8')
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
  return Array.isArray(json) ? json : []
}

function renderHtml({ contacts, surveys }) {
  const contactRows = contacts.map(row => tableRow([
    row.id,
    row.timestamp,
    row.name,
    row.contact,
    row.inquiry_label || row.inquiry_type,
    row.service_interest,
    row.role,
    row.message,
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
    body{margin:0;padding:28px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#f7f5ef;color:#24211d}
    h1{margin:0 0 6px;font-size:24px;font-weight:650}
    h2{margin:30px 0 12px;font-size:18px}
    .meta{color:#736b60;font-size:13px;margin-bottom:18px}
    .stats{display:flex;gap:12px;flex-wrap:wrap;margin:18px 0}
    .stat{padding:12px 16px;background:#fff;border:1px solid #ded6c8;border-radius:8px}
    .stat strong{display:block;font-size:22px}
    input{width:100%;box-sizing:border-box;margin:8px 0 16px;padding:10px 12px;border:1px solid #cfc6b7;border-radius:6px;font-size:14px}
    .table-wrap{overflow:auto;background:#fff;border:1px solid #ded6c8;border-radius:8px}
    table{width:100%;border-collapse:collapse;font-size:13px;min-width:1080px}
    th,td{padding:10px;border-bottom:1px solid #eee7dc;text-align:left;vertical-align:top}
    th{position:sticky;top:0;background:#f1ece3;z-index:1}
    td{max-width:260px;white-space:pre-wrap;word-break:break-word}
    tr:hover td{background:#fbf7ef}
  </style>
</head>
<body>
  <h1>CDA 本机后台</h1>
  <div class="meta">生成时间：${escapeHtml(new Date().toLocaleString())} · 数据从 Cloudflare D1 后台接口读取，文件仅保存在本机。</div>
  <div class="stats">
    <div class="stat"><strong>${contacts.length}</strong>联系申请</div>
    <div class="stat"><strong>${contacts.filter(row => row.service_interest === '爱人传讯与关系梳理').length}</strong>爱人传讯相关</div>
    <div class="stat"><strong>${surveys.length}</strong>问卷数据</div>
  </div>
  <input id="search" placeholder="搜索全部表格内容..." autofocus>
  <h2>联系申请</h2>
  <div class="table-wrap">
    <table>
      <thead><tr><th>ID</th><th>时间</th><th>称呼</th><th>联系方式</th><th>类型</th><th>服务意向</th><th>身份</th><th>问题描述</th></tr></thead>
      <tbody>${contactRows || tableRow(['暂无数据'])}</tbody>
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
