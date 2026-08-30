// GET /api/mutual-aid-status — 梦女免费互助计划名额状态
import { getMutualAidStatus } from './_mutualAid.js'

export async function onRequest(context) {
  if (context.request.method === 'OPTIONS') {
    return json(null, 204)
  }

  if (context.request.method !== 'GET') {
    return json({ error: 'method not allowed' }, 405)
  }

  try {
    return json(await getMutualAidStatus(context.env.DB))
  } catch (error) {
    console.error('Mutual aid status error:', error)
    return json({ error: 'server error' }, 500)
  }
}

function json(data, status = 200) {
  return new Response(status === 204 ? null : JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, OPTIONS',
      'access-control-allow-headers': 'content-type',
    },
  })
}
