# Jenish Modi — Portfolio

A single-page portfolio built with React + Vite, Framer Motion, and Lenis smooth scroll.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Before you deploy — things to personalize

1. **`src/data/content.js`**
   - `profile.linkedin` and `profile.github` are placeholders — replace with your real URLs.
   - Add, remove, or reorder projects; adjust descriptions or links as needed.
2. **Project images** — cards are text-only right now. If you want screenshots, drop images in `public/projects/` and reference them in `content.js` (happy to wire this up if you want it).
3. **Colors/fonts** — all design tokens live at the top of `src/index.css` under `:root`.

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```
Or connect the GitHub repo at vercel.com/new — it auto-detects Vite, no config needed.

## Deploy to Netlify

- Build command: `npm run build`
- Publish directory: `dist`

## Deploy to GitHub Pages

Add `base: '/your-repo-name/'` to `vite.config.js`, then:
```bash
npm run build
npx gh-pages -d dist
```

## Project structure

```
src/
  components/     — all sections (Hero, Work, Research, Experience, Skills, Contact, Nav)
  data/content.js — all your resume/project content, kept separate from layout
  index.css       — design tokens (colors, fonts) + responsive rules
```
