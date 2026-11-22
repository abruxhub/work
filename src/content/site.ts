// All site copy lives here so it's easy to edit.
// DRAFT: gathered from public profiles on 2026-11-22. Abril should check every line.

export const site = {
  name: "Abril Molins Sandner",
  handle: "abruX",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: "Ontario, Canada",
  role: "Esports coordinator and producer",
  headline: "I run esports teams and events, and I make broadcasts work.",
  intro:
    "I'm Abril. I coordinate the varsity and academy teams at St. Clair College, work on event production and broadcasts, and translate games into Spanish and Portuguese. Before that, I played VALORANT professionally.",
  languages: ["Spanish", "English", "Portuguese"],
  links: [
    { label: "X", href: "https://x.com/abruxgg" },
    { label: "Instagram", href: "https://instagram.com/abruxmo" },
    { label: "LinkedIn", href: "https://ca.linkedin.com/in/abril-molins-sandner-388102272" },
  ],
} as const;

export const skillGroups = [
  { title: "esports ops", items: ["Team and roster management", "Scheduling and match days", "Scrims and bootcamps", "Player and staff communication"] },
  { title: "production", items: ["In-game observer (POV)", "Replay operator", "Production assistant", "Broadcast workflow"] },
  { title: "events", items: ["LAN events", "Online tournament coordination", "Team manager liaison", "Summer camps"] },
  { title: "games", items: ["VALORANT (ex-pro)", "League of Legends"] },
  { title: "languages", items: ["Spanish", "English", "Portuguese", "Game localization ES / PT"] },
] as const;

// DRAFT: only the St. Clair diploma is known. Add earlier schooling if you want it shown.
export const education = [
  {
    school: "St. Clair College",
    place: "Windsor, Ontario",
    program: "Esports Administration and Entrepreneurship",
    credential: "Diploma",
    years: "2025 – now",
    note: "in progress",
    detail: "Running teams, events and esports businesses. Joined the college events team in my first term and became esports coordinator in my second year.",
  },
] as const;

export const services = [
  {
    title: "Team coordination",
    body: "Schedules, rosters, scrims and match days for college teams. I'm the person players and staff talk to when something needs sorting out.",
  },
  {
    title: "Event production",
    body: "Planning and running LAN and online events, from bracket logistics to being the contact between team managers and staff.",
  },
  {
    title: "Observing and replays",
    body: "In-game observer (POV) and replay operator for VALORANT and League of Legends broadcasts.",
  },
  {
    title: "Localization",
    body: "Game and esports content translated into Spanish and Portuguese, by someone who actually plays.",
  },
] as const;

export type Credit = { year: string; title: string; role: string };

export const credits: Credit[] = [
  { year: "2026", title: "St. Clair College Esports", role: "Esports coordinator, varsity and academy teams" },
  { year: "2026", title: "Last Chance", role: "Online coordination, team manager contact" },
  { year: "2026", title: "Fragadelphia Windsor", role: "Event staff" },
  { year: "2026", title: "The Summoning", role: "Event staff" },
  { year: "2026", title: "St. Clair summer camps", role: "Camp staff" },
  { year: "2026", title: "NACE VALORANT Grand Finals", role: "Observer (POV) and production assistant" },
  { year: "2026", title: "Full game localization", role: "Translation into Spanish and Portuguese" },
  { year: "2025", title: "St. Clair College Esports", role: "Replay operator, League of Legends" },
  { year: "2025", title: "No Sweat Blossom", role: "Professional VALORANT player" },
  { year: "Earlier", title: "VCT Game Changers LATAM", role: "Professional VALORANT player" },
];

export const about = [
  "I'm Argentine and German, and I moved to Canada in 2025 to study Esports Administration and Entrepreneurship at St. Clair College. I joined the events team in my first term and became esports coordinator at the start of my second year.",
  "Playing at a pro level taught me what teams actually need from the people around them. I care about the scene growing, in Canada and in Latin America, and I like being the one who makes the day run on time.",
] as const;

// Drop photos into /public/photos and list them here. The hero badge uses the
// first one, the film strip uses the rest. With none, the collage still works.
export type Photo = { src: string; alt: string };
export const photos: Photo[] = [
  { src: "/photos/badge-saints.webp", alt: "Abril in a green St. Clair Saints jersey, framing her face with her hands" },
  { src: "/photos/flag.webp", alt: "Abril in a Saints jersey holding the Argentina flag" },
  { src: "/photos/headset.webp", alt: "Abril at her desk wearing a headset" },
  { src: "/photos/jersey.webp", alt: "Abril in a St. Clair Saints jersey" },
  { src: "/photos/portrait.webp", alt: "Abril with arms crossed against a plain wall" },
];
