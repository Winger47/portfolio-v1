# Shikhar Pandav — Portfolio

Next.js 14 (App Router) + Tailwind CSS. Dark "instrument-panel" theme.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
```

## Edit content
Almost everything lives in **`content.ts`**. Change copy, projects, stats, and links there.
Search the file for `TODO` — those are values you must fill in before shipping:
- LinkedIn / LeetCode handles and email
- Specific GitHub repo URLs per project
- Drop your `resume.pdf` into the `public/` folder

## Deploy to Vercel
1. Push this folder to a GitHub repo (e.g. `Winger47/portfolio`).
2. Go to vercel.com → New Project → import the repo.
3. Framework auto-detects as Next.js. Click Deploy. Done.

To add screenshots to projects later, put images in `public/images/` and
reference them in `content.ts`.
