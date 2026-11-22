import { describe, expect, it, vi } from "vitest";
import { handleContact, type ContactDeps } from "@/lib/contact";

function form(over: Record<string, string> = {}) {
  const f = new FormData();
  const base = { name: "Sam", email: "sam@example.com", topic: "event", message: "We're running a LAN in March.", ...over };
  for (const [k, v] of Object.entries(base)) f.set(k, v);
  return f;
}

function deps(over: Partial<ContactDeps> = {}): ContactDeps {
  return {
    allow: () => true,
    saveLead: vi.fn(async () => {}),
    sendEmails: vi.fn(async () => {}),
    now: () => new Date("2026-11-22T00:00:00Z"),
    log: () => {},
    ...over,
  };
}

describe("handleContact", () => {
  it("saves then emails a valid message", async () => {
    const order: string[] = [];
    const d = deps({
      saveLead: vi.fn(async () => { order.push("save"); }),
      sendEmails: vi.fn(async () => { order.push("email"); }),
    });
    const res = await handleContact(form(), "1.1.1.1", d);
    expect(res.status).toBe("ok");
    expect(order).toEqual(["save", "email"]);
    expect(d.saveLead).toHaveBeenCalledWith(expect.objectContaining({ email: "sam@example.com", receivedAt: "2026-11-22T00:00:00.000Z" }));
  });

  it("silently drops honeypot submissions", async () => {
    const d = deps();
    const res = await handleContact(form({ website: "spam.biz" }), "1.1.1.1", d);
    expect(res.status).toBe("ok");
    expect(d.saveLead).not.toHaveBeenCalled();
  });

  it("returns field errors for bad input", async () => {
    const d = deps();
    const res = await handleContact(form({ email: "nope", message: "hi" }), "1.1.1.1", d);
    expect(res.status).toBe("error");
    expect(res.fieldErrors?.email).toBeDefined();
    expect(res.fieldErrors?.message).toBeDefined();
    expect(d.saveLead).not.toHaveBeenCalled();
  });

  it("blocks when rate limited", async () => {
    const d = deps({ allow: () => false });
    const res = await handleContact(form(), "1.1.1.1", d);
    expect(res.status).toBe("error");
    expect(d.saveLead).not.toHaveBeenCalled();
  });

  it("still succeeds when email fails after saving", async () => {
    const d = deps({ sendEmails: vi.fn(async () => { throw new Error("resend down"); }) });
    expect((await handleContact(form(), "1.1.1.1", d)).status).toBe("ok");
  });

  it("fails and skips email when saving fails", async () => {
    const d = deps({ saveLead: vi.fn(async () => { throw new Error("blob down"); }) });
    const res = await handleContact(form(), "1.1.1.1", d);
    expect(res.status).toBe("error");
    expect(d.sendEmails).not.toHaveBeenCalled();
  });
});
