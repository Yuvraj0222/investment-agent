#!/usr/bin/env bash
set -e

echo "==> Installing pnpm..."
npm install -g pnpm@9

echo "==> Installing all dependencies (including devDependencies)..."
# Override NODE_ENV so pnpm installs devDeps (vite, typescript, tailwind, etc.)
NODE_ENV=development pnpm install --no-frozen-lockfile

echo "==> Building frontend (Vite)..."
NODE_ENV=production pnpm --filter @workspace/investment-agent run build

echo "==> Building backend (esbuild)..."
NODE_ENV=production pnpm --filter @workspace/api-server run build

echo "==> Pushing database schema (non-fatal — DB auto-initializes on first start)..."
pnpm --filter @workspace/db run push || echo "DB push skipped (DB may not be ready at build time — schema will auto-create on server start)"

echo "==> Build complete!"
