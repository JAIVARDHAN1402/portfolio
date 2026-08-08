# Jaivardhan Singh — Portfolio

A modern, single-page developer portfolio built with React, Vite, Tailwind CSS v4 and Framer Motion.

## Run it

```bash
npm run dev
```

Then open http://localhost:5173

Other scripts:

- `npm run build` — production build into `dist/`
- `npm run preview` — serve the production build locally

## Where things live

| What                                            | File                          |
| ----------------------------------------------- | ----------------------------- |
| All content — bio, skills, jobs, projects, links | `src/data.js`                 |
| Colors, fonts, animations                        | `src/index.css` (`@theme`)    |
| Section order                                    | `src/App.jsx`                 |
| Individual sections                              | `src/components/`             |
| Resume PDF served by the Download button         | `public/Jaivardhan_Singh_Resume.pdf` |
| IEEE certificate image                           | `public/certificates/ieee-sense-a-thon.png` |

**Editing content:** almost everything is in `src/data.js` — change the text there and the UI updates. No need to touch the components.

**Replacing the resume:** drop a new PDF at `public/Jaivardhan_Singh_Resume.pdf` (keep the filename), or update `profile.resume` in `src/data.js`.

**Certificate image:** lives at `public/certificates/ieee-sense-a-thon.png` and is referenced by `achievements[].image` in `src/data.js`. If the file is missing, the card shows a placeholder instead of a broken image.

## Coding stats

- **LeetCode** is fetched live in the browser from a public community API, with a hardcoded fallback in `codingProfiles.leetcode.fallback` (`src/data.js`) for when that API is down. A green "Live" badge shows when the fetch succeeded.
- **GeeksforGeeks** has no CORS-friendly public API, so those numbers are static in `codingProfiles.gfg`. Update them by hand after a big practice push.

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo on [vercel.com](https://vercel.com) — it auto-detects Vite.
3. Build command `npm run build`, output directory `dist`.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`, configured in CSS — no `tailwind.config.js`)
- Framer Motion for scroll reveals, the nav pill and the progress bar
- lucide-react for icons (GitHub/LinkedIn marks are hand-rolled in `src/components/BrandIcons.jsx`, since lucide v1 dropped brand icons)
