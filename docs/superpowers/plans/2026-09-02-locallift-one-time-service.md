# LocalLift $500 One-Time Service Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition every LocalLift route around one $500 one-time website build with clear scope, client ownership, accurate claims, reliable lead capture, and complete search/social metadata.

**Architecture:** Preserve the existing navy/blue visual system and shared UI primitives while replacing duplicated pricing and process content with focused reusable sections. Keep route pages as Server Components wherever possible, confine interactivity to the header and lead form, and use Next.js 16 metadata file conventions for discoverability.

**Tech Stack:** Next.js 16.2 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide React, Node test runner, and the Resend HTTPS API.

**Spec:** User-provided LocalLift redesign and one-time-service specification.

## Global Constraints

- The standard offer is exactly `$500` one time for up to five core pages.
- There are no required LocalLift subscriptions, maintenance plans, or recurring LocalLift fees.
- The client is responsible for domain, paid hosting, premium software, and other third-party expenses unless explicitly agreed otherwise.
- Ownership/handoff occurs after project completion and full payment.
- Include two reasonable revision rounds; advanced functionality and material scope expansion require a separate quote.
- Do not fabricate testimonials, ratings, customer counts, performance statistics, SEO rankings, or business results.
- Preserve the existing Manrope/Inter typography, navy/blue palette, rounded cards, and restrained reveal motion.
- Use the Metadata API only from Server Components and use `next/image` for content images, per the repository's bundled Next.js 16 documentation.

---

### Task 1: Establish offer and lead-form contracts

**Files:**
- Create: `lib/site.ts`
- Create: `lib/contact.ts`
- Create: `tests/contact.test.mjs`
- Modify: `package.json`

**Interfaces:**
- `siteConfig`: canonical URL, brand name, description, email, location, navigation.
- `websiteOffer`: price, scope, inclusions, third-party disclosure, exclusions.
- `validateContactSubmission(formData: FormData): ContactValidationResult`.
- `ContactFormState`: success flag, message, and field errors consumed by the client form.

- [x] Write a failing Node test proving empty required lead fields are rejected before an external request is made.
- [x] Run `npm test` and confirm the failure is caused by missing validation.
- [x] Implement field normalization, required-field validation, email validation, length limits, and honeypot handling.
- [x] Add tests for valid normalization, invalid email, required fields, and honeypot behavior; run each red-green cycle.
- [x] Add `npm test` using Node's built-in test runner and verify the suite passes.

### Task 2: Centralize shared marketing sections

**Files:**
- Create: `components/sections/WebsiteOffer.tsx`
- Create: `components/sections/FAQList.tsx`
- Create: `components/sections/ProcessSteps.tsx`
- Create: `components/seo/JsonLd.tsx`

**Interfaces:**
- `WebsiteOffer({ compact?: boolean })` renders the same $500 offer on `/` and `/pricing`.
- `FAQList({ items })` renders accessible native disclosure controls without page-level client state.
- `ProcessSteps({ detailed?: boolean })` renders the four review/build/review/handoff steps.
- `JsonLd({ data })` safely serializes static schema data.

- [x] Build one prominent offer card with all required inclusions, scope limit, ownership, exclusions, CTA, and visible third-party-cost disclosure.
- [x] Build a semantic FAQ list using `<details>`/`<summary>` with focus-visible styling.
- [x] Build the four-step process with no maintenance step.
- [x] Build static Organization/Service and FAQ structured-data support without unverifiable claims.

### Task 3: Rewrite the global shell and homepage

**Files:**
- Modify: `components/layout/Header.tsx`
- Modify: `components/layout/Footer.tsx`
- Modify: `app/globals.css`
- Replace: `app/page.tsx`

**Interfaces:**
- Header navigation: Home, Work, How It Works, About, FAQ, Contact, and one “Get a Free Review” CTA.
- Homepage section order follows the approved ten-section flow in the supplied specification.

- [x] Simplify header behavior, remove the recurring-support announcement, standardize navigation/CTA labels, and retain an accessible mobile menu.
- [x] Replace footer copy and links with the approved LocalLift Studios one-time-offer language and `team@localliftstudios.com`.
- [x] Extend shared styles for focus visibility, native FAQ disclosures, selection, and reduced motion while preserving brand tokens.
- [x] Rewrite the homepage: concise hero, four benefits, clearly labeled concept work, problem framing, included scope, four-step process, local/founder positioning, one offer card, FAQ, and final CTA.
- [x] Remove aggressive ranking claims and all unsupported statistics/results.

### Task 4: Rewrite all commercial and company routes

**Files:**
- Replace: `app/pricing/page.tsx`
- Replace: `app/how-it-works/page.tsx`
- Replace: `app/work/page.tsx`
- Replace: `app/about/page.tsx`
- Replace: `app/free-review/page.tsx`

- [x] Replace three pricing tiers with the single shared offer plus clear standard-scope and separate-quote boundaries.
- [x] Replace the recurring process with free review, build, client review, and launch/handoff.
- [x] Label every currently unverified portfolio entry “Concept Build” and avoid results claims.
- [x] Reframe founder bios around direct communication, attention, and Downingtown roots without asking for sympathy.
- [x] Rebuild the free-review route around a practical audit of mobile usability, trust, calls to action, and structure; do not promise a free redesign.
- [x] Use `next/image` with responsive `sizes` for all local content images.

### Task 5: Make lead capture reliable and consistent

**Files:**
- Replace: `app/contact/actions.ts`
- Replace: `app/contact/page.tsx`
- Create: `components/forms/ContactForm.tsx`

**Interfaces:**
- `submitContactForm(formData: FormData): Promise<ContactFormState>` posts validated data to Resend from the server.
- `ContactForm({ inquiryType, title, description, submitLabel })` supports `/contact` and `/free-review`.

- [x] Move third-party submission to the server action and call validation before any network request.
- [x] Send only normalized allowed fields as plain text, keep provider credentials server-only, retain honeypot handling, and return stable success/error states.
- [x] Build the approved concise field set: name, business, email, optional phone and URL, business type, help requested, preferred contact method.
- [x] Render field-level errors, pending state, an `aria-live` result, retry behavior, and a direct-email fallback.
- [x] Embed the form on the contact route and free-review route with appropriate default intent.

### Task 6: Align legal pages with the one-time model

**Files:**
- Replace: `app/terms/page.tsx`
- Replace: `app/privacy/page.tsx`
- Replace: `app/cookie-policy/page.tsx`

- [x] Rewrite Terms to cover the $500 standard scope, two revisions, client-supplied assets, third-party expenses, payment/handoff, third-party licenses, project-specific cancellation/refund terms, portfolio rights, and no results/ranking guarantee.
- [x] Update Privacy to disclose the exact lead fields, Resend processing, Calendly links, purposes, retention caveat, and contact rights without claiming nonexistent systems.
- [x] Update the cookie notice to state the site's actual cookie posture and distinguish third-party destinations.
- [x] Use one business name, one domain, one email address, and a current update date throughout.

### Task 7: Implement complete metadata and technical SEO

**Files:**
- Modify: `app/layout.tsx`
- Create: `lib/metadata.ts`
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Create: `app/manifest.ts`
- Create: `app/opengraph-image.tsx`
- Modify: every route `page.tsx` to export route-specific metadata
- Modify: `next.config.ts`

**Interfaces:**
- `createPageMetadata({ title, description, path }): Metadata` creates canonical and social metadata from `siteConfig.url`.

- [x] Add global title template, description, metadata base, Open Graph, Twitter, robots, icons, and other brand fields.
- [x] Add unique title/description/canonical metadata for every route.
- [x] Generate sitemap and robots entries for all public routes.
- [x] Add a web manifest and branded dynamic 1200×630 Open Graph image.
- [x] Add truthful Organization/Service/Offer and FAQ structured data.
- [x] Disable the powered-by header and add conservative security headers without a brittle CSP.

### Task 8: Verify the entire experience and remove contradictions

**Files:**
- Modify: any implementation file implicated by verification failures.

- [x] Run `npm test`, `npm run lint`, and `npm run build`; fix all failures and rerun from the start.
- [x] Search all authored source for every prohibited legacy phrase and price, manually review legitimate uses of words such as “launch” and “cancel,” and eliminate business-model contradictions.
- [x] Start the production server and verify it in the in-app browser for blank pages, overlays, and console errors.
- [x] Visit every route at phone, Android-width, tablet, laptop, and large-desktop viewports; inspect layout, overflow, readable text, and touch targets.
- [x] Exercise desktop and mobile navigation, every internal CTA, external portfolio/Calendly link, mail link, FAQ disclosure, and both lead-form intents.
- [x] Verify `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, canonical tags, Open Graph tags, and JSON-LD in rendered output.
- [x] Perform a fresh final test/lint/build/reference scan after fixes and inspect `git diff` to confirm no unrelated user changes were overwritten.
