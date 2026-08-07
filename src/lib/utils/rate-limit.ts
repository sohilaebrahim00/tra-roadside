const buckets = new Map<string, { count: number; resetAt: number }>();

/**
 * Best-effort in-memory rate limit (per server instance — good enough for a
 * single-region deployment; swap for a Redis/Upstash-backed limiter if you
 * scale to multiple instances).
 */
export function isRateLimited(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  bucket.count += 1;
  return bucket.count > limit;
}
