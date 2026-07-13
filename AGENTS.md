# AGENTS.md

This document describes the project structure for developers and AI agents working on this codebase.

## Project Overview

A marketing website for Evergreen Landscaping, a landscaping services business. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── __forms.html      # Static skeleton so Netlify's build bot detects the contact form (TanStack Start renders forms client-side)
│   ├── favicon.ico
│   └── placeholder.png   # Placeholder imagery for hero/gallery photos — replace with real project photos
├── src
│   ├── components
│   │   ├── NavBar.tsx    # Site header/navigation, shared across all pages
│   │   └── Footer.tsx    # Site footer with contact info and quick links
│   ├── routes
│   │   ├── __root.tsx    # Root layout: HTML shell, global styles, page metadata
│   │   ├── index.tsx     # Homepage: hero, services, before/after, reviews, CTA
│   │   ├── gallery.tsx   # Project gallery with before/after sliders
│   │   ├── quote.tsx     # "Get a Free Quote" page embedding a Google Form
│   │   └── contact.tsx   # Contact page: Netlify form, map embed, contact details
│   ├── router.tsx        # TanStack Router setup
│   └── styles.css        # Tailwind entry point + global styles
├── netlify.toml           # Build command, publish dir, dev server settings
├── tsconfig.json          # `@/*` path alias for `src/*`
└── vite.config.ts         # TanStack Start, React, Tailwind, Netlify plugins
```

## Key Concepts

### File-Based Routing
Routes are files under `src/routes/`. `__root.tsx` is the shared layout; every other file maps to a URL path (e.g. `gallery.tsx` → `/gallery`).

### Contact Form (Netlify Forms)
The contact form on `/contact` submits via AJAX to Netlify Forms. Because TanStack Start renders the form client-side, `public/__forms.html` exists purely so Netlify's build-time bot can detect and register the form (`name="contact"`). Submissions land in the Netlify dashboard under Forms. Do not remove `public/__forms.html` or rename the form without updating both files together.

### Get a Free Quote Page
`src/routes/quote.tsx` embeds a Google Form via `<iframe>` instead of a custom form. **The `src` URL is a placeholder** — replace it with the real embed URL from Google Forms (Send → the `<>` embed tab). Form responses feed into a Google Sheet automatically, with no additional backend needed.

### Gallery Before/After Sliders
`src/routes/gallery.tsx` implements a simple drag-slider comparison per project using a range input and clipped overlay image — no external slider library.

## Conventions

- Components: PascalCase, one per file in `src/components/`
- Routes: kebab-case/lowercase files in `src/routes/`
- Styling: Tailwind utility classes only, green-themed palette
- Import paths use the `@/` alias for `src/`
- TypeScript strict mode is on

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
```

## Replacing Placeholder Content

- All photos currently use `public/placeholder.png` — swap in real project photos (hero, gallery, before/after pairs).
- The Google Form embed URL in `src/routes/quote.tsx` must be replaced with a real form.
- The Google Maps embed URL and service area text in `src/routes/contact.tsx` should be updated to the real location/service area.
- Phone number and email in `NavBar.tsx`/`Footer.tsx`/`contact.tsx` are placeholders.
