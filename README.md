# LocalLift Studios

Marketing site for LocalLift Studios’ $500 one-time website-build service for local businesses.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion for restrained reveal effects
- Resend for server-side inquiry delivery

## Local development

Use Node.js 24, then install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

Run the automated checks before deploying:

```bash
npm test
npm run lint
npm run build
```

The public routes are defined once in `lib/site.ts` and used by the sitemap. Metadata defaults live in `app/layout.tsx`; each route provides its own title, description, canonical URL, and social metadata through `lib/metadata.ts`.

## Contact form

`app/contact/actions.ts` validates each inquiry, silently rejects honeypot submissions, and sends an allow-listed plain-text message to `team@localliftstudios.com` through Resend. Configure these server-only variables locally and in the production host:

```bash
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL="LocalLift Studios <website@your-verified-domain.example>"
```

Copy `.env.example` to `.env.local` for local development. Both values are required, and `RESEND_FROM_EMAIL` must use a sender domain verified in Resend. Never expose `RESEND_API_KEY` through a `NEXT_PUBLIC_` variable.

## Deployment

The app uses the standard Next.js production commands:

```bash
npm run build
npm run start
```

It can be deployed to Vercel or another Node-compatible platform. Point the production project at `www.localliftstudios.com`, make that the canonical host, redirect the apex domain to it, and add the contact-form environment variables above. After deployment, verify inbox delivery and all routes plus `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, and `/opengraph-image` on the production host.
