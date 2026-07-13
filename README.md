# TUFCO Landscaping

A marketing website for a landscaping business, built with TanStack Start, React 19, and Tailwind CSS, deployed on Netlify.

## Pages

- **Home** — hero section, service list, before/after highlights, customer reviews, and calls to action
- **Gallery** — project photo gallery with interactive before/after sliders
- **Get a Free Quote** — an embedded Google Form for quote requests (responses flow into a Google Sheet)
- **Contact** — phone/email/service area, a Netlify-powered contact form, and an embedded map

## Tech Stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router)
- React 19
- Tailwind CSS 4
- [lucide-react](https://lucide.dev/) for icons
- [Netlify Forms](https://docs.netlify.com/forms/setup/) for the contact form
- Deployed on [Netlify](https://www.netlify.com/)

## Running Locally

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

Note: Netlify Forms submissions only work on a deployed site (Netlify Dev/local dev does not process form submissions).

## Building for Production

```bash
npm run build
```

## Before Going Live

- Replace the placeholder photos (`public/placeholder.png`) throughout the site with real project photos.
- Replace the Google Form embed URL in `src/routes/quote.tsx` with your own form's embed link.
- Replace the map embed and service area details in `src/routes/contact.tsx`.
- Update the phone number and email address used across the site.
