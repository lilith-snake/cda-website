export async function onRequest(context) {
  const request = context.request
  const url = new URL(request.url)

  if (url.pathname.startsWith('/api/')) {
    return new Response('Not found', { status: 404 })
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return context.env.ASSETS.fetch(request)
  }

  const response = await context.env.ASSETS.fetch(request)
  if (response.status !== 404) return response

  const accept = request.headers.get('accept') || ''
  if (!accept.includes('text/html') && accept !== '*/*') return response

  const indexUrl = new URL(request.url)
  indexUrl.pathname = '/index.html'
  indexUrl.search = ''

  return context.env.ASSETS.fetch(new Request(indexUrl, request))
}
