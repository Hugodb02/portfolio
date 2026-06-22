# Portfolio Website — Product Requirements Document

**Owner:** Hugo De Bosschere — Junior Software Engineer
**Location:** Oostakker, Ghent (Belgium)
**Last updated:** 2026-06-22
**Status:** Phase 1 (PRD) — awaiting approval to build

---

## 1. Goal & Audience

A clean, fast, minimalist **single-page** portfolio that showcases real work and helps Hugo land a job as a junior software / .NET engineer.

- **Primary audience:** Recruiters, hiring managers and tech leads in Belgium (Ghent/Flanders), hiring for junior C#/.NET and full-stack roles.
- **Goal:** In under 30 seconds a visitor should understand *who Hugo is*, *what he can build*, and *how to contact him* — then be able to download his CV and reach the flagship XR project.
- **Tone:** Confident but honest junior. "Less but polished." Whitespace over noise.
- **Inspiration:** [manudevloo.com](https://www.manudevloo.com) — generous whitespace, restrained palette, large typography, calm rhythm. Used as a *style reference only*, not copied.

### Success criteria
- Lighthouse ≥ 95 across Performance / Accessibility / Best Practices / SEO (mobile + desktop).
- Renders cleanly at **375px** (iPhone SE) and **1440px** (laptop).
- Zero layout shift, no horizontal scroll, all interactive targets ≥ 44px.
- Deployed live on Vercel; public, active-looking GitHub repo.

---

## 2. Locked Tech Choices

| Concern | Choice |
|---|---|
| Framework | **Astro** (static output) |
| Styling | **Tailwind CSS** (v4 via the official Vite plugin) |
| Interactivity | **React islands ONLY where real interactivity is needed** (see §8) |
| Language | **TypeScript** throughout |
| Fonts | Self-hosted via `@fontsource` (no render-blocking Google Fonts request) |
| Hosting | **Vercel** (Astro static preset) |
| Source control | Git + public GitHub repo under `github.com/Hugodb02` |

> No additional dependencies, UI kits, or animation libraries will be added without explicit approval. Smooth scroll and the theme toggle are done with native CSS + a tiny inline script — no library.

### Decided in this PRD
- **Light/dark mode:** ✅ **Included** as a nice-to-have. Light is the default; a small theme toggle in the nav switches to dark and persists the choice in `localStorage`. Implemented with a Tailwind `dark:` class strategy and a ~10-line inline script (no React, no flash-of-wrong-theme).
- **Language:** **English only for v1.** A Dutch version is noted as possible future work (see §13) but is out of scope for the first launch.

---

## 3. Folder Structure

```
portfolio/
├── public/
│   ├── cv/Hugo-De-Bosschere-CV.pdf        # copied from Desktop CV
│   ├── images/
│   │   ├── profile.jpg                     # 1761069463061.jpeg, optimized
│   │   ├── og-image.png                    # social share card
│   │   └── work/                           # project screenshots (XR only has real ones)
│   │       ├── xr-hotspots-overview.jpg
│   │       ├── xr-hotspot-detail.jpg
│   │       ├── xr-in-action.jpg
│   │       └── xr-info-panel.jpg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.astro                       # sticky nav + theme toggle
│   │   ├── Hero.astro
│   │   ├── About.astro                     # includes profile photo
│   │   ├── SelectedWork.astro
│   │   ├── ProjectCard.astro
│   │   ├── Experience.astro
│   │   ├── Education.astro
│   │   ├── Skills.astro
│   │   ├── Languages.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── ThemeToggle.astro
│   ├── data/
│   │   ├── projects.ts                     # typed project data (single source of truth)
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   └── skills.ts
│   ├── layouts/
│   │   └── BaseLayout.astro                # <head>, meta/OG/SEO, theme bootstrap
│   ├── pages/
│   │   └── index.astro                     # the single page, composes all sections
│   └── styles/
│       └── global.css                      # Tailwind import + design tokens
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── .gitignore
├── LICENSE                                 # MIT
├── README.md
└── prd.md
```

---

## 4. Page Structure (single page, in order)

`Hero · About · Selected Work · Experience · Education · Skills · Languages · Contact`

- **Sticky nav:** thin, translucent, anchors to each section, smooth scroll, active-section highlight, theme toggle on the right. Collapses to a compact menu on mobile.
- **Smooth scroll:** `scroll-behavior: smooth` + `scroll-margin-top` on each section so anchors clear the sticky nav.
- **Section rhythm:** consistent vertical padding, max content width ~ 70ch / 1100px, generous whitespace.

---

## 5. Section-by-Section Content & Copy

All copy below is the intended English source text (final wording may be refined slightly during build).

### Hero
- **Eyebrow:** "Junior Software Engineer · Ghent, Belgium"
- **Headline (large display):** "Hugo De Bosschere"
- **Sub-headline:** "I build back-ends in C# / .NET — and the occasional spatial computing experience."
- **Supporting line:** "Recent graduate (high distinction), looking to deepen my .NET expertise in a team that values quality and technical freedom."
- **Primary CTA:** "Download CV" → `/cv/Hugo-De-Bosschere-CV.pdf`
- **Secondary CTA:** "Get in touch" → scrolls to Contact
- **Inline links:** GitHub · LinkedIn
- *No photo in hero (per decision — text-forward hero).*

### About
- Profile photo (`profile.jpg`) on one side, text on the other; stacks on mobile.
- Copy: "I'm a recent graduate with a Graduate Degree in Programming (high distinction). I want to deepen my C# and .NET expertise in a professional setting. During my internship at In The Pocket I built C# back-end logic, Web APIs and a custom WebSocket system, and fixed threading bugs in production. I'm analytical, eager to learn and proactive, and I thrive in a team that values quality and technical freedom."
- Small chip row of soft skills: analytical & solution-oriented · eager to learn & proactive · strong communicator · sense of responsibility · team player.

### Selected Work — featured cards
Three featured project cards (see §6). Card anatomy: title · role · 1–2 sentence impact · tech tags · links.

### More Projects
A compact list (not full cards) of secondary projects (see §6).

### Experience
Timeline / stacked entries:

**In The Pocket — .NET & XR Developer** · Dok Noord, Ghent · 2025
- Built C# back-end logic and a WebSocket system for real-time AI interaction.
- Built Web API integrations and fixed threading bugs in production.
- Performed code reviews and UI improvements via a GitLab workflow.
- Built front-end in TypeScript and Remix with a component-based architecture.
- Built an XR app for Apple VisionOS with Unity & PolySpatial; live-demoed on Vision Pro.
- Implemented object tracking with CreateML on a Polestar 2.
- Developed React Native and cross-platform components.

**Volvo Logistics — Order Picker Outbound** · Oostakker · 2021–2023
- Picking and dispatching orders; managing goods flows and warehouse processes.

### Education
**Graduate Degree in Programming — HoGent** · High distinction · 2023–2025
**Se-n-Se Integral Safety — IVV Sint Vincentius** · 2020–2021

### Skills
Grouped (chips/badges):
- **Core:** C#, .NET / ASP.NET, Entity Framework, Web API, TypeScript, React Native, Remix
- **Frontend:** JavaScript, HTML & CSS, Tailwind
- **Database:** MySQL, Firebase, Supabase
- **Tools & DevOps:** Git, GitLab, Docker, Jira, Confluence
- **XR & other:** Unity XR, PolySpatial, VisionOS, CreateML, Blender

### Languages
- Dutch — Native
- English — Professional
- French — Basic
(Rendered as a simple proficiency row.)

### Contact
- Email: **debosscherehugo@hotmail.com** (mailto link)
- Phone: **+32 468 19 27 99** (tel link)
- GitHub: https://github.com/Hugodb02
- LinkedIn: https://www.linkedin.com/in/hugo-de-bosschere-36141a330/
- Location: Oostakker, Ghent · Driver's license B
- Repeat "Download CV" button.

### Footer
- © Hugo De Bosschere · built with Astro & Tailwind · link to the site's own GitHub repo.

---

## 6. Final "Selected Work" Selection

### Featured (full cards) — 3

**1. XR Training & Assistance (Apple Vision Pro) — FLAGSHIP**
- **Role:** .NET & XR Developer — built during internship at In The Pocket.
- **Impact:** A proof-of-concept spatial-computing app that overlays interactive hotspots and a real-time multimodal AI assistant onto real equipment (demoed on a Polestar 2), enabling hands-free industrial training and troubleshooting through the Vision Pro.
- **Tech tags:** Unity · PolySpatial · VisionOS · C# · RealityKit Object Capture · Real-time multimodal AI · Blender
- **Links:** Canva demo & presentation (`https://canva.link/9mtzwwxeh5b0pt2`). *Note: presented as a finished showcase — not extendable (needs Vision Pro hardware + licenses Hugo no longer has).*
- **Screenshots:** the 4 real images from `XR_Readme/` (overview, detail, in-action, info-panel).

**2. Job Application Tracker (AppTracker)**
- **Role:** Solo full-stack build.
- **Impact:** A full-stack job-tracking app with table & drag-and-drop Kanban views, an analytics dashboard (applications/week, pipeline donut, response rate), per-application notes, auth and row-level security so each user only sees their own data.
- **Tech tags:** React 19 · TypeScript · Vite · Tailwind v4 · Supabase (Postgres + RLS) · Recharts · dnd-kit · React Router · Vitest
- **Links:** GitHub repo (under `github.com/Hugodb02` — exact name to confirm during build).

**3. Mobile Todo App (school capstone — eindproject)**
- **Role:** Solo build for the Mobile course.
- **Impact:** A cross-platform mobile to-do app with Firebase-backed data, persisted global state, form validation and multi-pattern navigation — the capstone project for the Mobile module.
- **Tech tags:** React Native · Expo · TypeScript · Firebase · Redux Toolkit + redux-persist · React Query · React Navigation · Formik + Yup · NativeWind
- **Links:** GitHub repo (under `github.com/Hugodb02` — exact name to confirm during build).

### More Projects (compact list) — secondary

- **Habit Tracker** — React Native · Expo · TypeScript · expo-router · FlashList · Reanimated. A lightweight habit-tracking mobile app. (GitHub link to confirm.)
- *(Optional, only if useful as filler:)* WebAppDemo / MyApp (.NET) — small demos; included only if they strengthen the page, otherwise omitted to keep "less but polished."

> **Links policy (per decision):** project cards link to **GitHub repos only** (plus the XR Canva demo). No live-deploy links in v1. Exact repo URLs will be confirmed with Hugo during the build before they are committed.

---

## 7. Design Guidelines

### Color palette
Warm, neutral, restrained — one accent.

**Light (default)**
- Background: `#FAFAF7` (warm off-white)
- Surface / card: `#FFFFFF`
- Ink (text): `#1A1A1A`
- Muted text: `#6B6B6B`
- Border / hairline: `#E6E5E0`
- Accent: `#3B5BDB` (calm indigo-blue — used sparingly for links, CTAs, active nav)

**Dark**
- Background: `#0E0E10`
- Surface / card: `#17171A`
- Ink: `#F2F2F0`
- Muted text: `#9A9A9A`
- Border: `#26262A`
- Accent: `#7C93F0` (lightened for contrast on dark)

Tokens defined as CSS variables in `global.css` and mapped into Tailwind so `dark:` variants stay trivial.

### Typography (font pairing)
- **Display / headings:** **Fraunces** (a warm, high-contrast serif) — gives the page personality and the manudevloo-style large editorial feel.
- **Body / UI:** **Inter** — neutral, highly legible at small sizes.
- Self-hosted via `@fontsource-variable/fraunces` and `@fontsource-variable/inter`. Subset to latin; `font-display: swap`.
- Scale: large fluid hero headline (`clamp()`), clear hierarchy, body ~17–18px, comfortable line-height (~1.6).

### Spacing & layout principles
- 8px spacing baseline; sections separated by large vertical rhythm (~6–8rem desktop, ~4rem mobile).
- Single readable column; content max-width ~1100px, text blocks ~70ch.
- Hairline borders and lots of negative space instead of heavy boxes/shadows.
- Subtle, tasteful motion only: gentle fade/slide-in on scroll via CSS (respecting `prefers-reduced-motion`), hover transitions on links/cards. No parallax, no heavy animation.

### Accessibility
- Semantic landmarks (`header`/`nav`/`main`/`section`/`footer`), one `h1`, logical heading order.
- Color contrast ≥ WCAG AA in both themes; visible focus rings; `aria-label`s on icon-only controls (theme toggle, social icons).
- Respects `prefers-reduced-motion` and `prefers-color-scheme` for initial theme.

---

## 8. React Islands — where (and only where)

Astro renders everything static by default. React is used **only** if a piece needs real client interactivity. Current assessment:

- **Theme toggle:** vanilla inline script — **no React needed.**
- **Sticky nav active-section highlight:** small vanilla `IntersectionObserver` — **no React needed.**
- **Mobile menu open/close:** vanilla `<details>`/script — **no React needed.**

➡️ **Likely zero React islands.** If during the build a section genuinely benefits from React (e.g. a more complex interactive widget), it will be flagged and approved before adding. This keeps the bundle near-zero JS and protects the Lighthouse target.

---

## 9. Responsive & Performance Targets

- **Breakpoints mentally tested at 375px and 1440px**; fluid in between.
- Lighthouse **≥ 95** on all four categories, mobile and desktop.
- Images: optimized + correctly sized, `width`/`height` set (no CLS), `loading="lazy"` below the fold, modern formats where sensible.
- Near-zero JavaScript shipped (static Astro). Self-hosted subset fonts. No blocking third-party requests.
- Proper `<title>`, meta description, Open Graph + Twitter card, favicon, `lang="en"`, canonical URL.

---

## 10. Assets Plan

- **Profile photo:** `1761069463061.jpeg` → optimized to `public/images/profile.jpg`. **Used in the About section only** (per decision). Originals on Desktop are never modified — only copied.
- **CV:** `CV – Hugo De Bosschere.pdf` → copied to `public/cv/Hugo-De-Bosschere-CV.pdf`, linked from Hero + Contact.
- **XR screenshots:** the 4 real `.jpg` files from `C:\Users\hugod\Desktop\XR_Readme\` → copied (optimized) into `public/images/work/`. These are the only real project screenshots; other cards use clean typographic cards (no fabricated screenshots).
- **Diploma.png:** not published on the site (kept private); the "high distinction" is stated in text.

> Rule: source folders are read-only; assets are **copied**, never moved or edited in place.

---

## 11. Deploy Plan (Vercel)

1. Build with Astro static output (`npm run build` → `dist/`).
2. Connect the GitHub repo to Vercel (framework preset: Astro).
3. Production deploy on push to `main`; preview deploys on branches.
4. Confirm the live URL, then add it to the README and the page footer.
5. (Optional, later) custom domain.

---

## 12. GitHub Repo Plan

- Git initialized **inside** `C:\Users\hugod\Desktop\portfolio` (clean repo; nothing outside this folder is touched).
- Includes `.gitignore` (node_modules, dist, .env*, .vercel, OS junk), **MIT LICENSE**, and a polished `README.md` (description · screenshot · live URL · tech stack · local-dev instructions).
- **Public** GitHub repo under `github.com/Hugodb02` via the `gh` CLI. `gh` is already authenticated as **Hugodb02** ✅.
- **STOP-and-ASK before the first push:** confirm repo **name** + **public** visibility before anything lands on the public profile.
- Commits use **real timestamps** as work happens — never backdated or fabricated.

---

## 13. Planned Commit Sequence (cadence)

Small, logical, conventional commits — roughly 12–16 across the build. After each milestone commit, the message is surfaced for review; pushes happen in confirmed batches.

1. `docs: add product requirements (prd.md)` ← **Phase 1, this commit**
2. `chore: scaffold astro + tailwind + typescript`
3. `chore: add gitignore, MIT license, base config`
4. `feat: base layout, design tokens, fonts, theme toggle`
5. `feat: sticky nav with smooth scroll + active section`
6. `feat: hero section`
7. `feat: about section with profile photo`
8. `feat: typed project data + selected-work cards`
9. `feat: more-projects list`
10. `feat: experience + education sections`
11. `feat: skills + languages sections`
12. `feat: contact section + footer`
13. `style: refine spacing, typography, responsive at 375/1440`
14. `perf: optimize images, meta/OG tags, lighthouse pass`
15. `docs: write project README (screenshot, live URL, setup)`
16. `chore: vercel deploy config`

(Exact split may flex by ±a few commits as the work actually unfolds — cadence stays incremental, not one giant commit.)

---

## 14. Open Questions / Assumptions

**Assumptions made (flag if wrong):**
- The only portrait image is `1761069463061.jpeg`; it's an appropriate professional headshot. (To be eyeballed when copied.)
- Featured project GitHub repos are/will be **public** under `github.com/Hugodb02`; exact repo names will be confirmed before they're linked/committed.
- Hero shows no photo (text-forward); photo lives in About. ✅ decided.
- Dark mode included, light default. ✅ decided.
- English only for v1. ✅ decided.

**To confirm during the build:**
- Exact GitHub repo names/URLs for: Job Application Tracker, Mobile Todo app, Habit Tracker.
- Repo name + visibility for *this* portfolio repo (asked right before first push).
- Whether to include WebAppDemo / MyApp in "More projects" or omit them.

**Future work (out of scope for v1):**
- Dutch (`nl`) language version with a toggle.
- Custom domain.
- Live-deploy links on project cards (once those projects are deployed).
```
