# Bringing the backend back online

As of 2026-10-18 the Supabase project in `.env.local` no longer exists (its
address returns "non-existent domain"). Online requests, the admin dashboard,
driver sign-in, live tracking and the blog all depend on it. Follow these steps
once, in order. They take about 20 minutes.

Never paste secret keys into chat or email. They go only into `.env.local` on
your computer and into Vercel's environment settings.

## 1. Create the project (you)

1. Sign in at https://supabase.com and click **New project**.
2. Name it `tra-roadside`. Choose a US region; **East US (Ohio)** is closest to
   Dallas among the usual choices.
3. Set a database password and save it in your password manager. You will not
   need to share it with anyone.

## 2. Create the tables

In the new project, open **SQL Editor**. Paste and run each file from
`supabase/migrations/`, **one at a time, in number order**:

`0001_init.sql` → `0002_rls.sql` → `0003_storage.sql` → … → `0011_review_request_and_vehicle_in_messages.sql`

Then run `supabase/seed.sql`. It loads the 10 services with their prices, the
27 cities, the customer message templates and the FAQs. Its one blog post is a
draft and never shows on the site. Finally, turn off the demo banner:

```sql
update site_settings set value = '{"enabled": false}' where key = 'demo_mode_banner';
```

## 3. Copy the keys (you)

**Project Settings → API Keys** and **Project Settings → Data API**:

| Supabase shows | Variable name |
|---|---|
| Project URL | `NEXT_PUBLIC_SUPABASE_URL` |
| Publishable key (`sb_publishable_…`) | `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| Secret key (`sb_secret_…`) | `SUPABASE_SERVICE_ROLE_KEY` |

Put all three in:
- `.env.local` in the project folder (replacing the old values), and
- **Vercel → Project → Settings → Environment Variables**, for Production and
  Preview.

Then redeploy on Vercel. Public `NEXT_PUBLIC_` values are built into the site
at deploy time, so a redeploy is required.

## 4. Create your admin login

There is no built-in admin password. An admin is a normal login plus a row
that marks it as `super_admin`.

1. **Authentication → Users → Add user → Create new user.** Enter your email
   and a password you choose, and tick **Auto Confirm User**.
2. In **SQL Editor**, run this with your email in place of the example:

```sql
insert into profiles (id, role, full_name, is_active)
select id, 'super_admin', 'Owner', true
from auth.users
where email = 'you@example.com'
on conflict (id) do update set role = 'super_admin', is_active = true;
```

3. Sign in at `https://www.txroadsideassistance.com/admin/login` with that
   email and password.

Drivers are added the same way with role `driver`, or from the admin dashboard
once you are signed in.

## 5. Customer confirmation emails (Resend)

The site already emails customers "We received your request" with a tracking
link after the request form, if they enter an email. Sending goes through
Resend from `RESEND_FROM_EMAIL`, which uses the domain
`texasroadside-assistance.com`.

On 2026-10-18 that domain's DKIM record (`resend._domainkey`) did not exist,
so Resend will refuse to send. To fix it:

1. Sign in at https://resend.com → **Domains**.
2. Open `texasroadside-assistance.com`, or add it if it is not listed.
3. Copy every DNS record Resend shows into **Hostinger → DNS** for that
   domain, then click **Verify** in Resend.

`RESEND_FROM_EMAIL` must look like `TRA Dispatch <info@texasroadside-assistance.com>`
and must be set in Vercel as well.

## 6. Google reviews, live (optional)

The homepage shows a verified snapshot of your Google reviews today. To make
it update by itself:

1. In Google Cloud, create an API key restricted to the **Places API**, and
   add it as `GOOGLE_MAPS_SERVER_API_KEY`.
2. Add your listing's Place ID as `GOOGLE_PLACE_ID`.

Note: the code calls the original Places Details endpoint. Google no longer
lets new Cloud projects enable that version, so on a new project the code may
need a small update to "Places API (New)" first. Ask before enabling billing.

## 7. Afterwards

Rotate any key that has been shared outside your own computer and Vercel:
- Supabase: secret key
- Resend: API key
- Twilio: auth token
