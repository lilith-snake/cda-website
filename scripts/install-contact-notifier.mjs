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
const desktopDir = path.join(homedir(), 'Desktop', 'CDA申请通知')
const supportDir = path.join(homedir(), 'Library', 'Application Support', 'CDA')
const launchAgentsDir = path.join(homedir(), 'Library', 'LaunchAgents')
const logsDir = path.join(homedir(), 'Library', 'Logs')
const passwordPath = path.join(supportDir, 'admin-password.txt')
const plistPath = path.join(launchAgentsDir, `${label}.plist`)
const stdoutPath = path.join(logsDir, 'cda-contact-notifier.launchd.log')
const stderrPath = path.join(logsDir, 'cda-contact-notifier.launchd.err.log')
const siteUrl = 'https://lilith-snake.github.io/cda-website'

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
  console.log('系统会每 20 秒检查一次新的联系申请。')
}

async function createDesktopCommands() {
  await createCommand('打开CDA后台.command', [
    '#!/bin/zsh',
    `cd "${repoRoot}"`,
    `"${nodePath}" "${path.join(repoRoot, 'scripts', 'open-local-admin.mjs')}"`,
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

  await createCommand('立即检查新申请.command', [
    '#!/bin/zsh',
    `cd "${repoRoot}"`,
    `"${nodePath}" "${notifierPath}" --manual`,
    'echo ""',
    'echo "检查完成。按任意键关闭。"',
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

  await createCommand('关闭CDA申请通知.command', [
    '#!/bin/zsh',
    `launchctl bootout "gui/$(id -u)" "${plistPath}" 2>/dev/null || true`,
    'echo "CDA申请通知已关闭。"',
    'echo "如需重新开启，请双击桌面文件夹里的：开启CDA申请通知.command"',
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
  const filePath = path.join(desktopDir, name)
  await writeFile(filePath, `${content}\n`, 'utf8')
  await chmod(filePath, 0o755)
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
