# Dev Engine AI — Website

A responsive, single-page marketing website for Dev Engine AI, a founder-led software engineering and AI consultancy.

## Requirements

- Node.js 20.19+ or 22.12+
- npm 10+

## Run locally

```bash
npm install
npm run dev
```

Vite prints a local URL (normally `http://localhost:5173`).

## Production build

```bash
npm run typecheck
npm run build
npm run preview
```

The production-ready static site is generated in `dist/`.

## Contact form setup

The form UI, browser-side validation, loading state, success state, error state, and an explicit unconfigured state are implemented. **It does not send enquiries until a delivery endpoint is configured.**

1. Create a form at [Formspree](https://formspree.io/).
2. Copy its endpoint URL.
3. Create a local `.env` file in the project root (do not commit it).
4. Add:

   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

5. Restart the Vite dev server and submit a test enquiry.

The browser sends the form to the configured Formspree endpoint. Keep any private API credentials out of frontend code. The endpoint is intentionally blank in `.env.example`.

## Brand assets and content

- `public/favicon.svg` is a temporary typographic mark, not a replacement for an official supplied logo. Replace it with approved brand assets when available.
- `public/og-image.svg` is a social-sharing graphic that can be updated with final brand assets.
- The official business email and social URLs have not been supplied, so no fabricated contact details or social links are displayed.
- Project descriptions are deliberately high-level. Arch-OS is presented without protected product concepts or confidential implementation details.
- Edit service and project copy in `src/data/content.ts`.

## Deployment

This is a static Vite SPA and can be deployed to Vercel, Netlify, Cloudflare Pages, Firebase Hosting, or any static host.

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

For Firebase Hosting, configure the hosting `public` directory as `dist` and add an SPA rewrite from `**` to `/index.html` if your hosting setup requires it. Add the contact endpoint as an environment variable in your deployment provider and rebuild.

## Notes

- Responsive navigation, anchor navigation, FAQ accordion, contact validation and submission states are implemented.
- Motion respects `prefers-reduced-motion`.
- Google Fonts are loaded remotely; system fallbacks are defined.
- No database or custom backend is required for this marketing site.

## Validation note for this delivery

The source files were checked for TypeScript/TSX syntax. A full dependency install, TypeScript project check, production build, and browser preview could not be completed in the generation environment because outbound DNS access to the npm registry was unavailable. Run the commands above in a network-enabled local environment before deploying.
