# Backend and email: what is set up, and what is left

Status on 2026-10-18.

## Supabase: working, with one gap

- The project in `.env.local` and on Vercel (`gljfsescsudzqkrmgsdr`) exists. Earlier
  that day its address did not resolve at all, which is what a paused free-plan
  project looks like. It is back online with its data intact. All 11 migrations
  are applied, and 16 customer requests are stored.
- **No admin login exists** (0 users in Authentication). See step 2.
- **It will pause again.** Free Supabase projects pause after about a week
  without activity, and while paused, bookings, the admin dashboard, driver
  sign-in and tracking all stop. Either upgrade the project to the Pro plan, or
  ask for a small daily keep-alive to be added to the site.

## 1. Never paste secret keys into chat or email

They go only into `.env.local` on your computer and into Vercel's environment
settings. The Supabase secret key (`sb_secret_…`) was shared in a chat on
2026-10-18, so rotate it once everything works (step 6).

## 2. Create your admin login (you)

There is no built-in admin password. An admin is a normal login plus a row
that marks it as `super_admin`.

1. Supabase → **Authentication → Users → Add user → Create new user**. Enter
   your email and a password you choose, and tick **Auto Confirm User**.
2. In **SQL Editor**, run this with your email in place of the example:

```sql
insert into profiles (id, role, full_name, is_active)
select id, 'super_admin', 'Owner', true
from auth.users
where email = 'you@example.com'
on conflict (id) do update set role = 'super_admin', is_active = true;
```

3. Sign in at `https://www.txroadsideassistance.com/admin/login`.

Drivers are added the same way with role `driver`, or from the admin dashboard.

## 3. Email sending (Resend): verified

- `txroadsideassistance.com` is **Verified** in Resend (Hostinger DNS,
  us-east-1). Send from it.
- Set this on **Vercel → Settings → Environment Variables** (Production and
  Preview), then redeploy:

```
RESEND_FROM_EMAIL = Texas Roadside Assistance <dispatch@txroadsideassistance.com>
```

- Since 2026-10-25 the business mailbox is `info@txroadsideassistance.com`
  (Hostinger mail on the same domain). Every email sets **Reply-To** to it, so
  customer replies land there. Set `DISPATCH_EMAIL` on Vercel to it as well,
  or delete that variable so the code's default (the same address) applies.
- The older `texasroadside-assistance.com` entry in Resend can be left as it is.
  Nothing sends from it any more.

## 4. After the next deploy: new email templates

Migration `supabase/migrations/0012_rich_request_emails.sql` shortens the
template text for the branded request emails. Run it in the SQL Editor
**after** the new code is live, never before (the old code would send the short
text as the whole email).

## 5. Google reviews, live (optional)

The homepage shows a verified snapshot of the Google reviews. To make it update
itself, add `GOOGLE_MAPS_SERVER_API_KEY` (an API key restricted to the Places
API) on Vercel. `GOOGLE_PLACE_ID` is already set there. The code calls the
original Places Details endpoint, which new Google Cloud projects can no longer
enable, so a new key may need a small code update first.

`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (the map in the request form) is also not set
on Vercel.

## 6. Afterwards

Rotate any key that has been shared outside your own computer and Vercel:
- Supabase: secret key
- Resend: API key
- Twilio: auth token

Then update the new values in `.env.local` and on Vercel, and redeploy.
