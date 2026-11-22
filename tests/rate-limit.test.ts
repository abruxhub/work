import { describe, expect, it } from "vitest";
import { createRateLimiter } from "@/lib/rate-limit";

describe("createRateLimiter", () => {
  it("allows up to the limit per key, then blocks", () => {
    const allow = createRateLimiter(5, 1000);
    for (let i = 0; i < 5; i++) expect(allow("a", 0)).toBe(true);
    expect(allow("a", 10)).toBe(false);
    expect(allow("b", 10)).toBe(true);
  });

  it("frees up once the window passes", () => {
    const allow = createRateLimiter(1, 1000);
    expect(allow("a", 0)).toBe(true);
    expect(allow("a", 999)).toBe(false);
    expect(allow("a", 1000)).toBe(true);
  });
});
