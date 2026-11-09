# Dev Engine AI — Website

The public website for Dev Engine AI, a founder-led software engineering and AI studio.

## Stack

- React 19, TypeScript and Vite
- Framer Motion for interface motion
- Tailwind CSS utilities with custom CSS for the visual system
- Web3Forms for contact-form delivery

## Run locally

Requirements: Node.js 20.19+ or 22.12+, and npm 10+.

```bash
npm ci
npm run dev
```

Vite prints the local development URL (normally `http://localhost:5173`).

## Validate a production build

```bash
npm run typecheck
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Contact form configuration

The contact form sends enquiries through Web3Forms. It reads the access key from the Vite environment variable `VITE_WEB3FORMS_ACCESS_KEY`.

1. Create or manage the form in Web3Forms and confirm the registered notification inbox is the Dev Engine AI business mailbox.
2. Add the key to a local `.env.local` file in the repository root:

   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
   ```

3. Add the same variable in Cloudflare Pages for both Production and Preview environments, then trigger a fresh build.
4. Submit a real test enquiry and confirm the notification arrives in the intended business inbox.

Never commit `.env`, `.env.local`, a real access key, or any other secret. The committed `.env.example` contains a placeholder only.

## Content and portfolio

- Edit services, project summaries, project links and technology labels in `src/data/content.ts`.
- Project links are public destinations and open in a new tab with `noopener noreferrer`.
- Email (`mailto:`) and phone (`tel:`) links intentionally hand off to the visitor's configured mail or calling app.
- Portfolio interface artwork is illustrative; it is not presented as a screenshot of a live client product.
- Do not add client names, logos, testimonials, metrics or project details without permission and verification.

## Deployment

The website is a static Vite application deployed through Cloudflare Pages.

- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

The deployed build must receive `VITE_WEB3FORMS_ACCESS_KEY` as a Cloudflare Pages environment variable. Vite embeds `VITE_*` variables into the client bundle at build time, so never place private server credentials in these variables.
