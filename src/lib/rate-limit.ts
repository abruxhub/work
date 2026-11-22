// In-memory rate limit. Good enough for one small site: it resets on cold start.
export function createRateLimiter(limit = 5, windowMs = 60 * 60 * 1000) {
  const hits = new Map<string, number[]>();
  return function allow(key: string, now = Date.now()): boolean {
    const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
    if (recent.length >= limit) {
      hits.set(key, recent);
      return false;
    }
    recent.push(now);
    hits.set(key, recent);
    return true;
  };
}
