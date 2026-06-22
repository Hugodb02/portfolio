# Hugo De Bosschere — Portfolio

A clean, fast, single-page portfolio for **Hugo De Bosschere**, a junior software engineer from Ghent, Belgium specialising in **C# / .NET** back-end development.

![Portfolio social card](./public/images/og-image.png)

> **Live:** _deploying to Vercel — URL added here once live._

---

## Tech stack

| Concern | Choice |
|---|---|
| Framework | [Astro](https://astro.build) (static output) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (Vite plugin) |
| Language | TypeScript |
| Fonts | Self-hosted [Fraunces](https://fonts.google.com/specimen/Fraunces) + [Inter](https://fonts.google.com/specimen/Inter) via Fontsource |
| Hosting | Vercel |

Built with **zero client-side framework JavaScript** — interactivity (theme toggle, sticky-nav highlight, mobile menu, reveal-on-scroll) is a handful of tiny inline scripts. The result is a near-instant, accessible page targeting Lighthouse ≥ 95 across the board.

## Features

- Single page: Hero · About · Selected Work · Experience · Education · Skills · Languages · Contact
- Light / dark mode with system-preference detection and no flash of the wrong theme
- Responsive from 375px to 1440px+, smooth scrolling, sticky nav with active-section highlight
- Optimised, responsive images via `astro:assets`
- Full SEO + Open Graph / Twitter card meta
- Content is fully visible without JavaScript

## Local development

```bash
# Node 18+ required
npm install
npm run dev      # start the dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
src/
├── components/   # Astro UI components (Nav, Hero, About, SelectedWork, …)
├── data/         # typed content: site, projects, experience, education, skills
├── layouts/      # BaseLayout (head, meta, theme bootstrap)
├── pages/        # index.astro (the single page)
└── styles/       # global.css (design tokens + Tailwind)
public/
├── cv/           # downloadable CV (PDF)
└── images/       # social card and static assets
scripts/
└── generate-og.mjs   # regenerates the Open Graph image
```

## License

[MIT](./LICENSE) © 2026 Hugo De Bosschere
