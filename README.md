# TRA — Texas Roadside Assistance

A production-grade roadside assistance platform: mobile-first public site,
multi-step request flow with live GPS, secure live driver tracking, a driver
mobile portal, and a role-based admin/dispatch dashboard.

Built with Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS v4,
Supabase (Postgres/Auth/Storage/Realtime), Zod, React Hook Form, and Framer
Motion.

## Table of contents

- [Quick start (demo mode)](#quick-start-demo-mode)
- [Architecture](#architecture)
- [Connecting Supabase](#connecting-supabase)
- [Connecting Google Maps](#connecting-google-maps)
- [Connecting Twilio (SMS)](#connecting-twilio-sms)
- [Connecting Resend (email)](#connecting-resend-email)
- [Demo mode vs. production mode](#demo-mode-vs-production-mode)
- [Project structure](#project-structure)
- [Integration checklist](#integration-checklist)
- [Testing checklist](#testing-checklist)
- [Deployment](#deployment)
- [Known limitations / next steps](#known-limitations--next-steps)

## Quick start (demo mode)

The site runs and is fully navigable with **zero configuration** — every
integration degrades gracefully when its environment variables are missing.

```bash
npm install
npm run dev
```

Open http://localhost:3000. In demo mode:

- The public site, services, service areas, blog/FAQ/gallery/video pages,
  and the full request-help wizard all work.
- Submitting a request generates a real request number and a **demo
  tracking token** that encodes your submission — no database required.
  Visit the tracking link and watch status + a simulated driver position
  progress automatically over a few minutes (clearly labeled as a
  simulation in the UI).
- `/admin` and `/driver` show a setup screen listing which integrations are
  configured, since they require Supabase Auth.

## Architecture

```
Browser (customer)              Browser (driver / staff)
      │                                   │
      ▼                                   ▼
 Next.js App Router (Vercel or Node host)
   ├─ (site) route group  — public marketing + request flow
   ├─ admin route group   — role-gated dispatch dashboard
   ├─ driver route group  — role-gated mobile driver portal
   └─ api/*                — route handlers (requests, uploads, geocoding, tracking)
      │
      ▼
 Supabase — Postgres (RLS) + Auth + Storage + Realtime
      │
      ├─ Twilio (SMS)
      ├─ Resend (email)
      └─ Google Maps / Places / Geocoding (server-proxied)
```

**Key design decisions** (documented here since the spec asked for
assumptions to be written down, not silently made):

- **Customer requests never touch RLS directly.** `POST /api/requests` uses
  the Supabase **service-role** client, validates with Zod, and is the only
  write path for anonymous customers. This keeps the RLS surface for
  unauthenticated users at zero instead of trying to thread anon policies
  through customers/service_requests.
- **Staff and drivers use RLS directly** via their own session
  (`src/lib/supabase/server.ts`), since they're authenticated and the
  policies in `supabase/migrations/0002_rls.sql` scope exactly what each
  role can see.
- **Live customer tracking polls** `/api/track/[token]` every ~6s rather
  than using a Supabase Realtime subscription for anonymous customers.
  Realtime for anonymous, token-scoped viewers requires either Realtime
  Broadcast Authorization with anonymous auth + custom claims, or a
  security-definer function — meaningfully more moving parts for a
  stressed customer on a weak highway connection. Polling is simpler, more
  resilient to flaky connections, and just as "live" in practice. The
  admin live ops map and driver-assigned dashboards, by contrast, use real
  **Supabase Realtime `postgres_changes`** subscriptions since those users
  are authenticated.
- **Demo-mode tracking tokens** (`demo.<base64>`) encode the submitted
  request directly in the token when Supabase isn't configured, so the
  confirmation → tracking flow is genuinely functional with zero backend.
  Once Supabase is connected, real tokens are opaque random strings stored
  in `customer_tracking_tokens` as designed in the spec.
- **Request photos** upload to a `draft/<draftId>/...` path during the
  wizard, then get referenced by the created request. Moving them to a
  `request/<id>/...` path is a nice-to-have left for later (see Known
  limitations).

## Connecting Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. In the SQL editor, run the migrations in order:
   - `supabase/migrations/0001_init.sql`
   - `supabase/migrations/0002_rls.sql`
   - `supabase/migrations/0003_storage.sql`
   - `supabase/seed.sql` (demo/reference content — safe to re-run)
3. Copy **Project URL**, **anon public key**, and **service_role key** from
   Project Settings → API into `.env.local`.
4. Create your first Super Admin: sign up a user in Supabase Auth (or use
   `supabase.auth.admin.createUser`), then insert a matching row into
   `profiles` with `role = 'super_admin'`.
5. Drivers are created from the admin dashboard (**Drivers → Invite
   Driver**), which calls `supabase.auth.admin.createUser` under the hood
   and generates a temporary password to hand off securely.

## Connecting Google Maps

1. In Google Cloud Console, enable **Maps JavaScript API**, **Places API**,
   and **Geocoding API** (Routes API if you extend ETA calculation to use
   real road routing instead of the current straight-line/simulated ETA).
2. Create a browser key restricted by HTTP referrer for
   `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`.
3. Optionally create a second, IP-restricted server key for
   `GOOGLE_MAPS_SERVER_API_KEY` used by the geocoding proxy routes.

Without these, the request flow and tracking page fall back to manual
address entry and an abstract (non-fake) route visualization — see
`src/components/request/map-picker.tsx` and
`src/components/tracking/tracking-map.tsx`.

## Connecting Twilio (SMS)

1. Create a Twilio account and a phone number capable of sending SMS.
2. Set `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER`.
3. SMS only sends to customers who checked the SMS consent box — consent is
   recorded per-request (`sms_consent`, `sms_consent_at`,
   `sms_consent_text_version` on `service_requests`).

## Connecting Resend (email)

1. Create a Resend account and verify a sending domain.
2. Set `RESEND_API_KEY` and `RESEND_FROM_EMAIL`.

Both notification adapters (`src/lib/notifications/email.ts` and `sms.ts`)
log to the server console instead of sending when unconfigured, and every
send attempt is recorded in `notification_logs` (once Supabase is
connected) with status `sent` / `failed` / `skipped`, so nothing is silently
duplicated or lost.

## Demo mode vs. production mode

`src/lib/env.ts` → `isDemoMode()` is the single source of truth: it's true
whenever Supabase isn't configured. `integrationStatus()` powers the setup
screens at `/admin/login`, `/driver/login`, and can be surfaced anywhere
else you want a "what's connected" view.

| Feature | Demo mode | With Supabase |
|---|---|---|
| Public site, services, blog/FAQ/gallery | ✅ real | ✅ real |
| Request submission | ✅ real, encoded in tracking token | ✅ real, persisted in Postgres |
| Live tracking | ✅ simulated progression (labeled) | ✅ real status + driver location |
| Admin dashboard | Setup screen | ✅ full |
| Driver portal | Setup screen | ✅ full |
| Notifications | Logged to console | ✅ sent via Twilio/Resend |

## Project structure

```
src/
  app/
    (site)/            Public marketing site + request flow + tracking
    admin/
      login/           Public login (outside the auth guard)
      (protected)/     Role-gated dashboard (dashboard, requests, drivers,
                        map, blog/faq/gallery/video CMS, notifications, settings)
    driver/
      login/
      (protected)/     Mobile driver portal (jobs, job detail, history)
    api/               Route handlers: requests, uploads, geocoding, tracking, contact
    sitemap.ts, robots.ts
  components/
    ui/                Button, Container, SectionHeading primitives
    layout/             Header, footer, mobile emergency action bar
    home/, request/, tracking/, faq/, gallery/, videos/, admin/, driver/
    brand/             Logo + social icon components
    seo/               JSON-LD structured data
  lib/
    content/           Real, audited business data (services, cities, FAQs)
    data/              Supabase-or-fallback data fetchers
    supabase/          Browser / server / admin / public clients
    notifications/     Template rendering + email/SMS adapters + orchestrator
    demo/              Demo-mode token + tracking simulation
    validation/        Zod schemas
    types/             Domain enums + hand-written Database type
supabase/
  migrations/          Schema, RLS policies, storage buckets
  seed.sql             Demo/reference content
```

## Integration checklist

- [ ] Supabase project created, migrations + seed run
- [ ] First super_admin profile created
- [ ] Google Maps key(s) added and APIs enabled
- [ ] Twilio account + number configured
- [ ] Resend domain verified + API key added
- [ ] `NEXT_PUBLIC_SITE_URL` set to the real production URL
- [ ] Real business email/address confirmed in `src/lib/content/business.ts`
      (currently marked as editable placeholders where the source site
      didn't expose confirmed data)
- [ ] Real gallery photos and videos uploaded via the admin dashboard
      (intentionally empty by default — no stock/AI placeholders)
- [ ] Pricing/cancellation legal language reviewed by counsel (marked with
      inline placeholders in `/terms` and `/privacy-policy`)
- [ ] Analytics IDs added if using GA4/GTM/Meta Pixel

## Testing checklist

- [ ] `npm run build` passes with no type errors
- [ ] Request flow: GPS allow/deny, manual address entry, all 9 services,
      destination step (towing only), photo upload + skip, contact +
      consent, review/edit, submit, duplicate-submit guard
- [ ] Confirmation page renders request number + tracking link
- [ ] Tracking page: demo simulation progresses; with Supabase, status
      changes from admin/driver reflect within one poll cycle
- [ ] Admin: sign in, dashboard stats, request detail status transitions,
      driver assignment, notes, notification log
- [ ] Driver: sign in, job list, start trip, location sharing toggle,
      status progression to completed, history
- [ ] Responsive check at 320/375/390/768/1024/1440px — no horizontal
      scroll, mobile action bar doesn't cover form submit buttons
- [ ] Keyboard navigation through the request wizard and FAQ accordion
- [ ] `prefers-reduced-motion` disables animations

## Deployment

Any Next.js host works (Vercel is the path of least resistance for Next.js
16 + Turbopack). Set all `.env.example` variables in the host's environment
configuration, then:

```bash
npm run build
npm run start
```

Run the Supabase migrations against your production project before first
deploy.

## Known limitations / next steps

- Request photos are referenced by their `draft/<id>/...` upload path
  rather than moved to a `request/<id>/...` path after submission — fine
  functionally (storage RLS still scopes by request ownership via the
  `request_photos` table), but a nice cleanup for later.
- ETA on the tracking page is a straight-line simulation in demo mode and
  a placeholder (`null` until you wire it) once Supabase is connected —
  wire it to the Google Routes API for real road-distance ETAs.
- The `LogoGlyph` in `src/components/brand/logo-mark.tsx` is a lightweight
  SVG recreation of the brand mark, not the original artwork — drop the
  official logo files into `public/brand/` and swap the component if
  pixel-exact reproduction is required.
- hCaptcha env vars are wired in `src/lib/env.ts` but not yet enforced on
  the request form — add the widget + server verification if spam becomes
  an issue.
- hourly/geographic pricing and cancellation policy language are
  placeholders pending legal review (see `/terms`).
