const CLOUDFLARE_API_URL = 'https://cda-website-3t2.pages.dev/api'

function getDefaultApiUrl() {
  if (typeof window === 'undefined') return '/api'
  if (window.location.hostname.endsWith('github.io')) return CLOUDFLARE_API_URL
  return '/api'
}

export const API_URL = import.meta.env.VITE_API_URL || getDefaultApiUrl()
