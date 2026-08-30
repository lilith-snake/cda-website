export const MUTUAL_AID_CAPACITY = 10

export async function getMutualAidStatus(db) {
  const result = await db.prepare(
    "SELECT COUNT(*) AS count FROM contact_submissions WHERE inquiry_type = 'mutual_aid'",
  ).first()
  const claimed = Number(result?.count || 0)

  return {
    capacity: MUTUAL_AID_CAPACITY,
    claimed,
    remaining: Math.max(MUTUAL_AID_CAPACITY - claimed, 0),
    full: claimed >= MUTUAL_AID_CAPACITY,
  }
}
