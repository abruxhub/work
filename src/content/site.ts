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
    items: ["Rosters and scheduling", "Scrims and bootcamps", "Match-day ops", "Player and staff comms"],
    body: "Schedules, rosters, scrims and match days for college teams. I'm the person players and staff talk to when something needs sorting out.",
  },
  {
    title: "Event production",
    items: ["Run of show", "Bracket logistics", "Team manager liaison", "On-site staff"],
    body: "Planning and running LAN and online events, from bracket logistics to being the contact between team managers and staff.",
  },
  {
    title: "Observing and replays",
    items: ["In-game observer (POV)", "Replay operator", "Production assistant", "VALORANT and LoL"],
    body: "In-game observer (POV) and replay operator for VALORANT and League of Legends broadcasts.",
  },
  {
    title: "Localization",
    items: ["Spanish translation", "Portuguese translation", "Esports copy", "Full-game localization"],
    body: "Game and esports content translated into Spanish and Portuguese, by someone who actually plays.",
  },
] as const;

export const workCategories = ["management", "broadcast", "marketing", "event organizer", "more"] as const;
export type WorkCategory = (typeof workCategories)[number];

// To add photos of a job: drop the images in /public/work/ and list them in that
// entry's `photos`, e.g. { src: "/work/nace-finals-1.jpg", alt: "Observer desk at the NACE finals" }.
// Up to 4 show per entry. `points` are optional bullet lines.
export type Credit = {
  year: string;
  /** Shown in the work log, e.g. "Apr 2026". */
  date: string;
  /** Used to sort the work log, newest first: YYYYMM. */
  sort: number;
  org: string;
  game: string;
  /** Short role pill in the work log. */
  tag: string;
  title: string;
  role: string;
  category: WorkCategory;
  points?: string[];
  photos?: { src: string; alt: string }[];
};

// Categories with no credits are hidden. "marketing" is empty until marketing work is added.
export const credits: Credit[] = [
  {
    category: "management", year: "2026", title: "St. Clair College Esports", role: "Esports coordinator, varsity and academy teams", date: "Aug 2026", sort: 202608, org: "St. Clair College Saints", game: "Varsity & academy", tag: "Coordinator",
    points: ["Manage the Saints varsity and academy rosters", "Run match days, including the VALORANT playoffs", "Support college events and bootcamps"],
    photos: [{ src: "/photos/jersey.webp", alt: "Abril in a St. Clair Saints jersey" }],
  },
  {
    category: "broadcast", year: "2026", title: "NACE VALORANT Grand Finals", role: "Observer (POV) and production assistant", date: "Apr 2026", sort: 202604, org: "NACE", game: "VALORANT", tag: "Observer",
    points: ["POV observer at one of the biggest North American collegiate LANs", "Production assistant on the broadcast"],
    photos: [
      { src: "/work/nace-3.webp", alt: "Production desk with broadcast monitors at the NACE VALORANT Grand Finals" },
      { src: "/work/nace-4.webp", alt: "Observers at their stations during the NACE finals" },
      { src: "/work/nace-2.webp", alt: "Analyst desk being filmed at the NACE finals" },
      { src: "/work/nace-1.webp", alt: "Observer station with VALORANT on screen" },
    ],
  },
  {
    category: "broadcast", year: "2026", title: "Creator Cup VALORANT", role: "Observer (POV)", date: "Mar 2026", sort: 202603, org: "1000 Dreams Fund", game: "VALORANT", tag: "Observer",
    points: ["Fundraising event supporting 1000 Dreams Fund"],
    photos: [
      { src: "/work/creator-1.webp", alt: "Production room during the Creator Cup VALORANT" },
      { src: "/work/creator-2.webp", alt: "Abril observing at a PC during the Creator Cup" },
    ],
  },
  { category: "broadcast", year: "2025", title: "St. Clair College Esports", role: "Replay operator, League of Legends", date: "2025", sort: 202509, org: "St. Clair College Saints", game: "League of Legends", tag: "Replay op" },
  {
    category: "event organizer", year: "2026", title: "Tau Ceti Cup (Bungie’s Marathon)", role: "Referee and admin, Spanish creator team", date: "Mar 2026", sort: 202603, org: "Bungie", game: "Marathon", tag: "Referee",
    points: ["Creator event for the launch of Bungie’s Marathon", "Admin for Rubius, TheGrefg and IlloJuan, and kept score"],
    photos: [{ src: "/work/tauceti-2.webp", alt: "Tau Ceti Cup scoreboard graphic for Marathon" }],
  },
  { category: "event organizer", year: "2026", title: "Last Chance", role: "Online coordination, team manager contact", date: "Nov 2026", sort: 202611, org: "Last Chance", game: "Online event", tag: "Tournament ops" },
  { category: "event organizer", year: "2026", title: "Fragadelphia Windsor", role: "Event staff", date: "Jul 2026", sort: 202607, org: "Fragadelphia", game: "LAN event", tag: "Event staff" },
  { category: "event organizer", year: "2026", title: "The Summoning", role: "Event staff", date: "Jul 2026", sort: 202607, org: "The Summoning", game: "LAN event", tag: "Event staff" },
  {
    category: "event organizer", year: "2026", title: "St. Clair summer camps", role: "Camp staff", date: "Jul 2026", sort: 202607, org: "St. Clair College Saints", game: "Summer camp", tag: "Camp staff",
    photos: [
      { src: "/work/july-2.webp", alt: "Campers gathered in the St. Clair esports arena" },
      { src: "/work/july-3.webp", alt: "Campers working at tables in the St. Clair esports arena" },
    ],
  },
  {
    category: "event organizer", year: "2024", title: "AGS with ShindeN", role: "Event staff (UADE industry placement)", date: "Oct 2024", sort: 202410, org: "ShindeN", game: "Expo booth", tag: "Event staff",
    photos: [
      { src: "/work/ags-1.webp", alt: "Event team photo at the ShindeN booth" },
      { src: "/work/ags-2.webp", alt: "Abril at the ShindeN booth" },
      { src: "/work/ags-3.webp", alt: "Players at the ShindeN booth stations" },
    ],
  },
  {
    category: "more", year: "2026", title: "Relic Arena localization", role: "Full game translation into Spanish and Portuguese", date: "May 2026", sort: 202605, org: "Relic Arena", game: "Relic Arena", tag: "Translator",
    points: ["Out now on Steam"],
    photos: [{ src: "/work/relic.webp", alt: "Relic Arena key art" }],
  },
  { category: "more", year: "2025", title: "No Sweat Blossom", role: "Professional VALORANT player", date: "Jun 2025", sort: 202506, org: "No Sweat Blossom", game: "VALORANT", tag: "Player" },
  { category: "more", year: "2025", title: "Leviatán", role: "Professional VALORANT player", date: "2025", sort: 202500, org: "Leviatán", game: "VALORANT", tag: "Player" },
  { category: "more", year: "2023", title: "Ebro", role: "Professional VALORANT player", date: "2023", sort: 202300, org: "Ebro", game: "VALORANT", tag: "Player" },
];

export const about = [
  "I'm Argentine and German, and I moved to Canada in 2025 to study Esports Administration and Entrepreneurship at St. Clair College. I joined the events team in my first term and became esports coordinator at the start of my second year.",
  "Playing at a pro level taught me what teams actually need from the people around them. I care about the scene growing, in Canada and in Latin America, and I like being the one who makes the day run on time.",
] as const;

// Names from Abril's real work. Logos can replace the text later (add `logo: "/brands/x.png"`).
export const brands = [
  "St. Clair Saints",
  "NACE",
  "Last Chance",
  "Fragadelphia",
  "The Summoning",
  "No Sweat Blossom",
  "VCT Game Changers LATAM",
  "Bungie",
  "ShindeN",
  "Relic Arena",
] as const;

// Event photos for the film strips (from Abril's LinkedIn posts).
export const eventPhotos: Photo[] = [
  { src: "/work/july-1.webp", alt: "Group photo in the St. Clair Saints esports arena" },
  { src: "/work/nace-3.webp", alt: "Broadcast production desk at the NACE finals" },
  { src: "/work/ags-1.webp", alt: "Event team at the ShindeN booth" },
  { src: "/work/nace-4.webp", alt: "Observer stations at the NACE finals" },
  { src: "/work/july-4.webp", alt: "Staff badge and camera at an event" },
  { src: "/work/creator-1.webp", alt: "Production room at the Creator Cup" },
  { src: "/work/ags-3.webp", alt: "Players at the ShindeN booth" },
  { src: "/work/july-3.webp", alt: "Campers in the St. Clair esports arena" },
];

// Public numbers as of Nov 2026. Update when they change.
export const stats = [
  { icon: "users", value: "1.6K", label: "followers on X" },
  { icon: "languages", value: "3", label: "languages, ES · EN · PT" },
  { icon: "clipboard", value: `${credits.length}`, label: "credits on this page" },
  { icon: "gamepad", value: "2", label: "games, played and broadcast" },
] as const;

// Drop photos into /public/photos and list them here. They show in the film strips
// and in frames around the page.
export type Photo = { src: string; alt: string };
export const photos: Photo[] = [
  { src: "/photos/badge-saints.webp", alt: "Abril in a green St. Clair Saints jersey, hands framing the face" },
  { src: "/photos/flag.webp", alt: "Abril in a Saints jersey holding the Argentina flag" },
  { src: "/photos/headset.webp", alt: "Abril at a desk wearing a headset" },
  { src: "/photos/jersey.webp", alt: "Abril in a St. Clair Saints jersey" },
  { src: "/photos/portrait.webp", alt: "Abril with arms crossed against a plain wall" },
];

// Cut-out versions (background removed, cream sticker edge) in /public/cutouts.
export const cutouts = {
  hands: { src: "/cutouts/badge-saints.webp", alt: "Abril in a St. Clair Saints jersey, hands framing the face" },
  portrait: { src: "/cutouts/portrait.webp", alt: "Abril with arms crossed, smiling" },
  headset: { src: "/cutouts/headset.webp", alt: "Abril wearing a gaming headset" },
  jersey: { src: "/cutouts/jersey.webp", alt: "Abril in a St. Clair Saints jersey" },
  flag: { src: "/cutouts/flag.webp", alt: "Abril in a Saints jersey with the Argentina flag" },
} satisfies Record<string, Photo>;

// Three highlight cards (in the layout's "kind words" slot). From Abril's own LinkedIn posts.
// When real quotes from colleagues come in, they can go here as testimonials instead.
export const highlights = [
  { photo: { src: "/photos/jersey.webp", alt: "Abril in a St. Clair Saints jersey" }, title: "St. Clair College Esports", text: "Coordinator for the Saints varsity and academy teams, and replay operator on League of Legends broadcasts." },
  { photo: { src: "/work/creator-2.webp", alt: "Abril observing at a PC during the Creator Cup" }, title: "Creator Cup VALORANT", text: "POV observer for the 1000 Dreams Fund charity Creator Cup." },
  { photo: { src: "/work/nace-3.webp", alt: "Production desk at the NACE VALORANT Grand Finals" }, title: "NACE VALORANT Grand Finals", text: "POV observer and production assistant at one of the biggest North American collegiate LANs." },
  { photo: { src: "/work/tauceti-2.webp", alt: "Tau Ceti Cup scoreboard for Marathon" }, title: "Tau Ceti Cup for Bungie’s Marathon", text: "Referee and admin for the Spanish creator team: Rubius, TheGrefg and IlloJuan." },
  { photo: { src: "/work/relic.webp", alt: "Relic Arena key art" }, title: "Relic Arena", text: "Translated the whole game into Spanish and Portuguese. Out now on Steam." },
] as const;

// FAQ. Answers only state things already on this page.
export const faqs = [
  { q: "What kind of work do you do?", a: "Esports team coordination, event production, in-game observing and replays, and Spanish and Portuguese localization." },
  { q: "Which games do you know best?", a: "VALORANT, which I played professionally, and League of Legends, where I work as a replay operator." },
  { q: "Which languages do you work in?", a: "Spanish, English and Portuguese, all fluently." },
  { q: "Where are you based?", a: "Ontario, Canada. I also work on online events and projects for Latin America." },
  { q: "Do you translate games?", a: "Yes. I translated Relic Arena into Spanish and Portuguese, and I can do esports and game copy too." },
  { q: "How do I get in touch?", a: "Use the form at the bottom of this page, or message me on X, Instagram or LinkedIn." },
] as const;
