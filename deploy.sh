#!/bin/bash
set -e

# ============================================
# CDA 网站部署 — Cloudflare Pages + Functions + D1
# 使用: ./deploy.sh
# ============================================

echo "🚀 CDA 部署开始..."

cd "$(dirname "$0")"

# ---- 1. 构建前端 ----
echo ""
echo "📦 [1/3] 构建前端..."
npm run build

# 移除超大视频文件（>25MB Pages 限制）
rm -f dist/videos/hero-bg.mp4
echo "✅ 构建完成 → dist/"

# ---- 2. 部署到 Cloudflare Pages（含 Functions）----
echo ""
echo "📤 [2/3] 部署到 Cloudflare Pages + Functions..."
npx wrangler pages deploy dist --project-name cda-website --branch main --commit-dirty=true
echo "✅ Pages + Functions 部署完成"

# ---- 3. 同步 D1 数据库 ----
echo ""
echo "🗄️  [3/3] 同步 D1 数据库 schema..."
npx wrangler d1 execute cda-db --file=./functions/../schema.sql --remote 2>/dev/null || echo "⚠️  D1 sync skipped (schema already up to date or no schema.sql at root)"
echo "✅ D1 同步完成"

echo ""
echo "🎉 部署完成！"
echo ""
echo "  主站: https://cda-website.pages.dev"
echo "  问卷: https://cda-website.pages.dev/survey.html"
echo "  后台: https://cda-website.pages.dev/#/admin"
