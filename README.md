# Shikhar Pandav — Portfolio

Backend & GenAI Engineer · Delhi NCR. Next.js 14 (App Router) + Tailwind CSS,
warm light theme with a dark variant.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
```

## Edit content
- Copy, projects, experience, links, and location (**Delhi NCR**) live in **`content.ts`**.
- Skills live in **`data/skills.ts`** (single source for the hero Skills card, the
  skills dialog, and the Tech Stack section).
- Search the repo for `TODO` — those are values to fill in before shipping
  (cover/avatar images, project engineering details, RushOrder, impact metrics).

## Résumé
`public/Shikhar_Pandav_Resume.pdf`, referenced as `resumeUrl` in `content.ts`
(`/Shikhar_Pandav_Resume.pdf`). Replace the file in place to update it.

## Deploy to Vercel
1. Push to a GitHub repo (e.g. `Winger47/portfolio`).
2. vercel.com → New Project → import the repo. Next.js auto-detects. Deploy.

To add project screenshots, drop images in `public/images/` and set each
project's `imageUrl` in `content.ts`.
