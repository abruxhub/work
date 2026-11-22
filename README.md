# abruX site

Personal site for Abril Molins Sandner. Next.js 15 (App Router), React 19, Tailwind CSS 4, hosted on Vercel.

## Edit the content

All copy lives in `src/content/site.ts`: headline, intro, services, work credits and about text.

## Add photos to a work entry

1. Put the images in `public/work/` (JPG, PNG or WebP, ideally under 500 KB each).
2. In `src/content/site.ts`, find the entry in `credits` and add, for example:
   `photos: [{ src: "/work/nace-finals-1.jpg", alt: "Observer desk at the NACE finals" }]`
3. Up to 4 photos show per entry. Entries without photos sit side by side as cards.

## Run it

```bash
npm install
cp .env.example .env.local   # optional; the form logs to the console without keys
npm run dev
npm test
```

## Contact form

`src/lib/contact.ts` validates with zod, drops honeypot submissions, rate-limits to 5 per IP per hour, saves the message to Vercel Blob first and then emails through Resend. An email outage never loses a message.

## Environment variables (set in Vercel)

| Name | Used for |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap and OG image |
| `BLOB_READ_WRITE_TOKEN` | Saving contact messages (added automatically when you connect a Blob store) |
| `RESEND_API_KEY` | Sending email |
| `CONTACT_TO_EMAIL` | Where new messages go |
| `CONTACT_FROM_EMAIL` | Sender, for example `abruX <hello@yourdomain>` once the domain is verified in Resend |
