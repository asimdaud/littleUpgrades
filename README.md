# Little Upgrades

Curated upgrades for daily life.

Little Upgrades is a premium storefront landing experience built with Next.js. The site is intentionally editorial and lightweight: it presents the brand, sourcing direction, category scope, and contact flow for a curated product business spanning kitchen, toys, pets, skincare, travel, workspace, and home life.

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS v4
- Framer Motion
- EmailJS for the contact form
- Vercel for hosting and production deployment

## Current UI Direction

- Warm neutral palette with premium editorial typography
- Responsive section-based layout across home, shop, about, and contact
- Branded logo, favicon, and Apple icon
- Production-safe image fallbacks for category and hero media
- Subtle reveal motion and polished interaction states

## Pages

- `/` Home
- `/shop` Shop direction / collection holding page
- `/about` Brand positioning and sourcing approach
- `/contact` EmailJS-backed enquiry form

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` with EmailJS keys:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Start the dev server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Run the production server locally:

```bash
npm run start
```

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment

This repository is pushed to GitHub and intended to deploy through Vercel from the production branch.

Recommended Vercel settings:

- Git provider connected to this repository
- Production branch set to `main`
- Domain attached to the same Vercel project that tracks this repo

## Notes

- The contact form falls back to `info@littleupgrades.co.uk` if EmailJS is not configured.
- Premium source PNGs used during asset generation are not required for runtime; the site uses optimized `.webp` assets in `public/images/premium`.
- There are local untracked scratch files in some developer environments; they are not part of the app itself.

## Links

- Live domain: [littleupgrades.co.uk](https://littleupgrades.co.uk)
- Contact: [info@littleupgrades.co.uk](mailto:info@littleupgrades.co.uk)
