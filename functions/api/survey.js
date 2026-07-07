// POST /api/survey — 问卷提交
export async function onRequest(context) {
  if (context.request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'method not allowed' }), { status: 405 })
  }

  try {
    const body = await context.request.json()
    if (!body) return new Response(JSON.stringify({ error: 'empty body' }), { status: 400 })

    const toJson = (v) => (Array.isArray(v) ? JSON.stringify(v) : v ?? null)
    const s = (v) => v ?? null

    const result = await context.env.DB.prepare(`
      INSERT INTO submissions (
        timestamp, user_agent, ip,
        age, gender, occupation, region, is_dream_girl,
        mj_type, mj_type_other, mj_source, mj_source_other,
        mj_relation, mj_count, mj_existence_view,
        belief_reasons, belief_story, favorite_thing,
        strange_events, strange_event_story,
        sync_events, sync_event_story,
        used_transmission, transmitter_count, total_spend, monthly_spend,
        satisfaction, transmission_surprise,
        east_west_occult, east_west_story,
        trust_factor, become_transmitter, transmitter_story,
        confusions, biggest_confusion,
        pain_points, worst_pain,
        interests, price_accept,
        want_blind_test, want_contact, contact_info, suggestion
      ) VALUES (
        datetime('now'), ?, ?,
        ?, ?, ?, ?, ?,
        ?, ?, ?, ?,
        ?, ?, ?,
        ?, ?, ?,
        ?, ?,
        ?, ?,
        ?, ?, ?, ?,
        ?, ?,
        ?, ?,
        ?, ?, ?,
        ?, ?,
        ?, ?,
        ?, ?,
        ?, ?, ?, ?
      )
    `).bind(
      s(body.userAgent) || '', s(context.request.headers.get('cf-connecting-ip')) || '',
      s(body.age), s(body.gender), toJson(body.occupation), s(body.region), s(body.isDreamGirl),
      toJson(body.mjType), s(body.mjTypeOther), toJson(body.mjSource), s(body.mjSourceOther),
      s(body.mjRelation), s(body.mjCount), s(body.mjExistenceView),
      toJson(body.beliefReasons), s(body.beliefStory), s(body.favoriteThing),
      toJson(body.strangeEvents), s(body.strangeEventStory),
      toJson(body.syncEvents), s(body.syncEventStory),
      s(body.usedTransmission), s(body.transmitterCount), s(body.totalSpend), s(body.monthlySpend),
      s(body.satisfaction), s(body.transmissionSurprise),
      toJson(body.eastWestOccult), s(body.eastWestStory),
      s(body.trustFactor), toJson(body.becomeTransmitter), s(body.transmitterStory),
      toJson(body.confusions), s(body.biggestConfusion),
      toJson(body.painPoints), s(body.worstPain),
      toJson(body.interests), s(body.priceAccept),
      s(body.wantBlindTest), s(body.wantContact), s(body.contactInfo), s(body.suggestion)
    ).run()

    return new Response(JSON.stringify({ ok: true, id: result.meta.last_row_id }), {
      headers: { 'content-type': 'application/json' },
    })
  } catch (err) {
    console.error('Survey error:', err)
    return new Response(JSON.stringify({ error: 'server error', detail: err.message, stack: err.stack?.slice(0, 300) }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }
}
