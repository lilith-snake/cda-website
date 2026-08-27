#!/usr/bin/env node
import { execFileSync } from 'node:child_process'
import { chmod, mkdir, writeFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')
const nodePath = process.execPath
const uid = String(process.getuid?.() || execFileSync('/usr/bin/id', ['-u'], { encoding: 'utf8' }).trim())

const label = 'com.cda.contact-notifier'
const notifierPath = path.join(repoRoot, 'scripts', 'contact-notifier.mjs')
const desktopRoot = path.join(homedir(), 'Desktop')
const desktopDir = path.join(homedir(), 'Desktop', 'CDA申请通知')
const supportDir = path.join(homedir(), 'Library', 'Application Support', 'CDA')
const launchAgentsDir = path.join(homedir(), 'Library', 'LaunchAgents')
const logsDir = path.join(homedir(), 'Library', 'Logs')
const passwordPath = path.join(supportDir, 'admin-password.txt')
const plistPath = path.join(launchAgentsDir, `${label}.plist`)
const stdoutPath = path.join(logsDir, 'cda-contact-notifier.launchd.log')
const stderrPath = path.join(logsDir, 'cda-contact-notifier.launchd.err.log')
const dashboardPath = path.join(desktopDir, 'CDA后台中心.html')
const siteUrl = 'https://lilith-snake.github.io/cda-website'
const applicationUrl = `${siteUrl}/application-notify.html`
const orderUrl = `${siteUrl}/order-admin.html`
const orderAdminUrl = `${siteUrl}/order-admin.html?admin=1`

async function main() {
  await mkdir(desktopDir, { recursive: true })
  await mkdir(supportDir, { recursive: true })
  await mkdir(launchAgentsDir, { recursive: true })
  await mkdir(logsDir, { recursive: true })

  await createDesktopCommands()
  await installLaunchAgent()

  execFileSync(nodePath, [notifierPath, '--init'], {
    cwd: repoRoot,
    stdio: 'inherit',
  })

  reloadLaunchAgent()

  console.log('')
  console.log('CDA申请通知已经安装完成。')
  console.log(`桌面入口：${desktopDir}`)
  console.log(`官网地址：${siteUrl}`)
  console.log(`后台密码文件：${passwordPath}`)
  console.log('系统会每 20 秒审查一次：新官网申请、新排单、已有排单修改。')
}

async function createDesktopCommands() {
  await writeFile(dashboardPath, dashboardHtml(), 'utf8')

  await createCommandAt(desktopRoot, 'CDA后台中心.command', [
    '#!/bin/zsh',
    `/usr/bin/open "${dashboardPath}"`,
  ].join('\n'))

  await createCommand('CDA后台中心.command', [
    '#!/bin/zsh',
    `/usr/bin/open "${dashboardPath}"`,
  ].join('\n'))

  await createCommand('打开CDA后台.command', [
    '#!/bin/zsh',
    `/usr/bin/open "${applicationUrl}"`,
  ].join('\n'))

  await createCommand('打开网站申请后台.command', [
    '#!/bin/zsh',
    `/usr/bin/open "${applicationUrl}"`,
  ].join('\n'))

  await createCommand('打开排单预约后台.command', [
    '#!/bin/zsh',
    `/usr/bin/open "${orderUrl}"`,
  ].join('\n'))

  await createCommand('打开管理员排单后台.command', [
    '#!/bin/zsh',
    `pbcopy < "${passwordPath}"`,
    `/usr/bin/open "${orderAdminUrl}"`,
    'echo "管理员密码已复制到剪贴板，已打开管理员排单后台。"',
    'echo ""',
    'echo "按任意键关闭。"',
    'read -k 1',
  ].join('\n'))

  await createCommand('打开本机CDA后台.command', [
    '#!/bin/zsh',
    `cd "${repoRoot}"`,
    `"${nodePath}" "${path.join(repoRoot, 'scripts', 'open-local-admin.mjs')}"`,
  ].join('\n'))

  await createCommand('复制后台密码.command', [
    '#!/bin/zsh',
    `pbcopy < "${passwordPath}"`,
    'echo "后台密码已复制到剪贴板。"',
    'echo ""',
    'echo "按任意键关闭。"',
    'read -k 1',
  ].join('\n'))

  await createCommand('立即检查新申请和新排单.command', [
    '#!/bin/zsh',
    `cd "${repoRoot}"`,
    `"${nodePath}" "${notifierPath}" --manual`,
    'echo ""',
    'echo "检查完成。按任意键关闭。"',
    'read -k 1',
  ].join('\n'))

  await createCommand('立即检查新申请.command', [
    '#!/bin/zsh',
    `cd "${repoRoot}"`,
    `"${nodePath}" "${notifierPath}" --manual`,
    'echo ""',
    'echo "检查完成。按任意键关闭。"',
    'read -k 1',
  ].join('\n'))

  await createCommand('开启CDA实时通知.command', [
    '#!/bin/zsh',
    `cd "${repoRoot}"`,
    `"${nodePath}" "${path.join(repoRoot, 'scripts', 'install-contact-notifier.mjs')}"`,
    'echo ""',
    'echo "已开启。按任意键关闭。"',
    'read -k 1',
  ].join('\n'))

  await createCommand('开启CDA申请通知.command', [
    '#!/bin/zsh',
    `cd "${repoRoot}"`,
    `"${nodePath}" "${path.join(repoRoot, 'scripts', 'install-contact-notifier.mjs')}"`,
    'echo ""',
    'echo "已开启。按任意键关闭。"',
    'read -k 1',
  ].join('\n'))

  await createCommand('关闭CDA实时通知.command', [
    '#!/bin/zsh',
    `launchctl bootout "gui/$(id -u)" "${plistPath}" 2>/dev/null || true`,
    'echo "CDA实时通知已关闭。"',
    'echo "如需重新开启，请双击桌面文件夹里的：开启CDA实时通知.command"',
    'echo ""',
    'echo "按任意键关闭。"',
    'read -k 1',
  ].join('\n'))

  await createCommand('关闭CDA申请通知.command', [
    '#!/bin/zsh',
    `launchctl bootout "gui/$(id -u)" "${plistPath}" 2>/dev/null || true`,
    'echo "CDA实时通知已关闭。"',
    'echo "如需重新开启，请双击桌面文件夹里的：开启CDA实时通知.command"',
    'echo ""',
    'echo "按任意键关闭。"',
    'read -k 1',
  ].join('\n'))

  await createCommand('通知测试.command', [
    '#!/bin/zsh',
    `cd "${repoRoot}"`,
    `"${nodePath}" "${notifierPath}" --test`,
    'echo ""',
    'echo "测试通知已发送。按任意键关闭。"',
    'read -k 1',
  ].join('\n'))
}

async function createCommand(name, content) {
  await createCommandAt(desktopDir, name, content)
}

async function createCommandAt(directory, name, content) {
  const filePath = path.join(directory, name)
  await writeFile(filePath, `${content}\n`, 'utf8')
  await chmod(filePath, 0o755)
}

function dashboardHtml() {
  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CDA 后台中心</title>
    <style>
      :root {
        color-scheme: dark;
        --bg: #11100f;
        --panel: #1b1917;
        --panel2: #24211e;
        --line: #413b34;
        --ink: #f5f0e7;
        --muted: #b9b0a1;
        --gold: #d2ad66;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        padding: 28px;
        background: var(--bg);
        color: var(--ink);
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", Arial, sans-serif;
      }
      main { max-width: 760px; margin: 0 auto; }
      .brand { color: var(--gold); font-family: Georgia, "Times New Roman", serif; font-weight: 800; }
      h1 { margin: 14px 0 8px; font-size: 36px; line-height: 1.08; }
      p { margin: 0; color: var(--muted); line-height: 1.7; }
      .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 24px; }
      a, button {
        min-height: 48px;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: var(--panel);
        color: var(--ink);
        padding: 14px;
        text-decoration: none;
        font: inherit;
        cursor: pointer;
      }
      a strong, button strong { display: block; color: var(--gold); margin-bottom: 5px; }
      a span, button span { display: block; color: var(--muted); font-size: 13px; line-height: 1.5; }
      .note { margin-top: 18px; padding-top: 16px; border-top: 1px solid var(--line); font-size: 13px; }
      @media (max-width: 680px) { .grid { grid-template-columns: 1fr; } }
    </style>
  </head>
  <body>
    <main>
      <div class="brand">CDA</div>
      <h1>后台中心</h1>
      <p>本机入口已开启实时通知；每 20 秒审查新官网申请、新排单和已有排单修改。申请和排单数据在线同步，助理打开同一链接也能看到最新内容。</p>
      <section class="grid">
        <a href="${applicationUrl}">
          <strong>网站申请后台</strong>
          <span>查看官网申请、更新对接状态、转入排单。</span>
        </a>
        <a href="${orderUrl}">
          <strong>排单预约后台</strong>
          <span>查看和编辑预约排单、负责人、金额、交付进度。</span>
        </a>
        <a href="${orderAdminUrl}">
          <strong>管理员排单后台</strong>
          <span>管理员专用，可删除排单。</span>
        </a>
        <a href="file://${path.join(desktopDir, 'CDA本机后台.html')}">
          <strong>本机汇总后台</strong>
          <span>打开保存在桌面的本机汇总快照。</span>
        </a>
        <a href="file://${path.join(desktopDir, '通知测试.command')}">
          <strong>通知测试</strong>
          <span>测试本机是否能收到 CDA 系统通知。</span>
        </a>
      </section>
      <p class="note">后台密码保存在本机：${passwordPath}</p>
    </main>
  </body>
</html>`
}

async function installLaunchAgent() {
  const plist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>${label}</string>
  <key>ProgramArguments</key>
  <array>
    <string>${escapeXml(nodePath)}</string>
    <string>${escapeXml(notifierPath)}</string>
  </array>
  <key>WorkingDirectory</key>
  <string>${escapeXml(repoRoot)}</string>
  <key>StartInterval</key>
  <integer>20</integer>
  <key>RunAtLoad</key>
  <true/>
  <key>StandardOutPath</key>
  <string>${escapeXml(stdoutPath)}</string>
  <key>StandardErrorPath</key>
  <string>${escapeXml(stderrPath)}</string>
</dict>
</plist>
`

  await writeFile(plistPath, plist, 'utf8')
}

function reloadLaunchAgent() {
  try {
    execFileSync('/bin/launchctl', ['bootout', `gui/${uid}`, plistPath], { stdio: 'ignore' })
  } catch {
    // The first install has nothing to unload yet.
  }
  execFileSync('/bin/launchctl', ['bootstrap', `gui/${uid}`, plistPath], { stdio: 'inherit' })
  execFileSync('/bin/launchctl', ['enable', `gui/${uid}/${label}`], { stdio: 'inherit' })
  execFileSync('/bin/launchctl', ['kickstart', '-k', `gui/${uid}/${label}`], { stdio: 'inherit' })
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
