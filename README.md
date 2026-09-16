# Aakash Rayamajhi — Portfolio

A premium, fully animated Next.js portfolio (App Router, Tailwind CSS v4, Framer Motion, GSAP + ScrollTrigger).

## Stack

- **Next.js 16** (App Router, JavaScript)
- **Tailwind CSS v4** — theme tokens defined in `app/globals.css` (`@theme` block): cream / navy / red palette
- **Framer Motion** — entrance animations, staggered reveals, hover states
- **GSAP + ScrollTrigger** — hero headline reveal, scroll-scrubbed timeline progress line
- **next/font** — Fraunces (display serif), Inter (body), JetBrains Mono (tags, stats, dates)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content

All resume content lives in one place: `lib/data.js`. Edit that file to update your bio, stats, stack, timeline, and project details — every component reads from it.

## Adding your photo

`components/Hero.jsx` currently renders a placeholder image from placehold.co. Replace it:

1. Drop your photo at `public/photo.jpg`.
2. In `components/Hero.jsx`, swap the `<Image src="https://placehold.co/...">` for `<Image src="/photo.jpg" ... />`.

## Adding project preview videos

Project cards play a short video on hover (and on tap on mobile). Drop your clips here, named exactly as referenced in `lib/data.js`:

- `public/videos/skysearch.mp4`
- `public/videos/e-mistiri.mp4`

Until a file exists, the card gracefully falls back to a solid color panel — nothing breaks. Keep clips short (10–20s) and a few MB or less for fast loading.

## Adding your résumé

Replace `public/resume.pdf` with your own file (same filename) — the "Download résumé" button already points at it.

## Deploying

This project is deploy-ready as-is:

```bash
npx vercel
```

or push to GitHub and import the repo at vercel.com/new. No environment variables are required.
