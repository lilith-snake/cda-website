const CLOUDFLARE_API_URL = 'https://cda-website-3t2.pages.dev/api'

function getDefaultApiUrl() {
  if (typeof window === 'undefined') return '/api'
  // GitHub Pages has no serverless runtime, and the local Vite preview does
  // not necessarily have a worker listening on port 3001. Use the deployed
  // D1-backed endpoint for both environments unless a custom URL is supplied.
  if (window.location.hostname.endsWith('github.io')) return CLOUDFLARE_API_URL
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return CLOUDFLARE_API_URL
  }
  return '/api'
}

export const API_URL = import.meta.env.VITE_API_URL || getDefaultApiUrl()
