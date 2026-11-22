"use client";

import { useState } from "react";
import { Camera } from "lucide-react";
import type { Credit } from "@/content/site";

const labels: Record<string, string> = {
  management: "Management",
  broadcast: "Broadcast",
  marketing: "Marketing",
  tournament: "Tournament",
  "event organizer": "Events",
  more: "More",
};

/* Compact work log: filter chips, one row per job, photos behind a toggle. */
export function WorkLog({ credits, categories }: { credits: Credit[]; categories: readonly string[] }) {
  const [filter, setFilter] = useState<string>("all");
  const [open, setOpen] = useState<string | null>(null);
  const counts = categories.map((c) => ({ c, n: credits.filter((x) => x.category === c).length })).filter((x) => x.n);
  const rows = credits
    .filter((c) => filter === "all" || c.category === filter)
    .sort((a, b) => b.sort - a.sort);

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${active ? "border-espresso bg-espresso text-cream" : "border-line hover:border-espresso"}`;

  return (
    <div>
      <div role="group" aria-label="Filter by type" className="flex flex-wrap gap-2">
        <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")} className={chip(filter === "all")}>All</button>
        {counts.map(({ c, n }) => (
          <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)} className={chip(filter === c)}>
            {labels[c] ?? c} · {n}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <div aria-hidden="true" className="hidden grid-cols-[6rem_1.6fr_1.2fr_1fr_8rem] gap-4 border-b border-line px-3 pb-3 text-xs font-bold uppercase tracking-[0.16em] text-fg-3 md:grid">
          <span>Date</span><span>Event</span><span>Organization</span><span>Game</span><span>Role</span>
        </div>
        <ul>
          {rows.map((c) => {
            const id = `${c.title}-${c.role}`;
            const pics = c.photos ?? [];
            const isOpen = open === id;
            return (
              <li key={id} className="border-b border-line">
                <div className="grid gap-x-4 gap-y-1 px-3 py-4 md:grid-cols-[6rem_1.6fr_1.2fr_1fr_8rem] md:items-start">
                  <span className="text-sm text-fg-3">{c.date}</span>
                  <div>
                    <p className="font-semibold leading-snug">{c.title}</p>
                    <p className="text-sm text-fg-2">{c.role}</p>
                    {pics.length > 0 && (
                      <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : id)}
                        className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-oxblood underline-offset-4 hover:underline">
                        <Camera aria-hidden="true" className="size-3.5" strokeWidth={2} />
                        {isOpen ? "Hide photos" : `Photos · ${pics.length}`}
                      </button>
                    )}
                  </div>
                  <span className="text-sm text-fg-2"><span className="text-fg-3 md:hidden">Org: </span>{c.org}</span>
                  <span className="text-sm text-fg-2"><span className="text-fg-3 md:hidden">Game: </span>{c.game}</span>
                  <span className="mt-1 md:mt-0"><span className="inline-block rounded-full border border-oxblood/40 bg-raised px-3 py-0.5 text-xs font-bold text-oxblood">{c.tag}</span></span>
                </div>
                {isOpen && (
                  <ul className="grid grid-cols-2 gap-3 px-3 pb-5 sm:grid-cols-4">
                    {pics.map((p) => (
                      <li key={p.src}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.src} alt={p.alt} className="aspect-[4/3] w-full object-cover" />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
