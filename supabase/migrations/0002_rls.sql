-- Row Level Security policies.
--
-- Design decision: customer-facing writes (creating a request, uploading
-- photos, reading tracking data via an opaque token) all go through Next.js
-- Route Handlers using the service-role client (src/lib/supabase/admin.ts),
-- which validates input with Zod and enforces token scoping in application
-- code. This keeps anonymous-customer RLS surface at zero — anon can INSERT
-- or SELECT nothing directly. Authenticated staff/driver access is enforced
-- with RLS below so the dashboard and driver portal can query Supabase
-- directly from server components using the user's own session.

alter table profiles enable row level security;
alter table drivers enable row level security;
alter table customers enable row level security;
alter table service_types enable row level security;
alter table service_areas enable row level security;
alter table service_requests enable row level security;
alter table request_photos enable row level security;
alter table request_status_history enable row level security;
alter table driver_assignments enable row level security;
alter table driver_locations enable row level security;
alter table customer_tracking_tokens enable row level security;
alter table internal_notes enable row level security;
alter table notification_templates enable row level security;
alter table notification_logs enable row level security;
alter table blog_categories enable row level security;
alter table blog_posts enable row level security;
alter table faqs enable row level security;
alter table gallery_items enable row level security;
alter table videos enable row level security;
alter table site_settings enable row level security;
alter table audit_logs enable row level security;
alter table roles enable row level security;

-- ---------------------------------------------------------------------------
-- Helper functions (security definer so they can read `profiles` without
-- recursing into the RLS policies that call them)
-- ---------------------------------------------------------------------------

create or replace function current_role_is(roles_in app_role[]) returns boolean as $$
  select exists (
    select 1 from profiles
    where id = auth.uid() and role = any(roles_in) and is_active
  );
$$ language sql stable security definer set search_path = public;

create or replace function is_staff() returns boolean as $$
  select current_role_is(array['super_admin', 'dispatcher', 'content_editor']::app_role[]);
$$ language sql stable security definer set search_path = public;

create or replace function is_admin_or_dispatch() returns boolean as $$
  select current_role_is(array['super_admin', 'dispatcher']::app_role[]);
$$ language sql stable security definer set search_path = public;

create or replace function is_super_admin() returns boolean as $$
  select current_role_is(array['super_admin']::app_role[]);
$$ language sql stable security definer set search_path = public;

create or replace function is_content_manager() returns boolean as $$
  select current_role_is(array['super_admin', 'content_editor']::app_role[]);
$$ language sql stable security definer set search_path = public;

create or replace function is_driver() returns boolean as $$
  select current_role_is(array['driver']::app_role[]);
$$ language sql stable security definer set search_path = public;

create or replace function is_assigned_driver(req_id uuid) returns boolean as $$
  select exists (
    select 1 from service_requests
    where id = req_id and assigned_driver_id = auth.uid()
  );
$$ language sql stable security definer set search_path = public;

-- ---------------------------------------------------------------------------
-- profiles / roles / drivers
-- ---------------------------------------------------------------------------

create policy "profiles_self_select" on profiles for select using (id = auth.uid());
create policy "profiles_staff_select" on profiles for select using (is_admin_or_dispatch());
create policy "profiles_self_update" on profiles for update using (id = auth.uid());
create policy "profiles_admin_write" on profiles for all using (is_super_admin());

create policy "roles_read_authenticated" on roles for select using (auth.uid() is not null);

create policy "drivers_self_select" on drivers for select using (id = auth.uid());
create policy "drivers_self_update" on drivers for update using (id = auth.uid());
create policy "drivers_staff_select" on drivers for select using (is_admin_or_dispatch());
create policy "drivers_admin_write" on drivers for all using (is_admin_or_dispatch());

-- ---------------------------------------------------------------------------
-- customers — staff only (customer writes happen via service role in API routes)
-- ---------------------------------------------------------------------------

create policy "customers_staff_select" on customers for select using (is_admin_or_dispatch());

-- ---------------------------------------------------------------------------
-- service_types / service_areas — public read of active rows, staff manage
-- ---------------------------------------------------------------------------

create policy "service_types_public_read" on service_types for select using (active = true);
create policy "service_types_staff_write" on service_types for all using (is_admin_or_dispatch());

create policy "service_areas_public_read" on service_areas for select using (active = true);
create policy "service_areas_staff_write" on service_areas for all using (is_admin_or_dispatch());

-- ---------------------------------------------------------------------------
-- service_requests
-- ---------------------------------------------------------------------------

create policy "requests_staff_select" on service_requests for select using (is_admin_or_dispatch());
create policy "requests_staff_write" on service_requests for all using (is_admin_or_dispatch());
create policy "requests_driver_select" on service_requests for select using (assigned_driver_id = auth.uid());
create policy "requests_driver_update_own" on service_requests for update using (assigned_driver_id = auth.uid());

-- ---------------------------------------------------------------------------
-- request_photos / status history / notes / assignments
-- ---------------------------------------------------------------------------

create policy "photos_staff_select" on request_photos for select using (is_admin_or_dispatch());
create policy "photos_driver_select" on request_photos for select using (is_assigned_driver(request_id));
create policy "photos_driver_insert" on request_photos for insert with check (is_assigned_driver(request_id));

create policy "history_staff_select" on request_status_history for select using (is_admin_or_dispatch());
create policy "history_driver_select" on request_status_history for select using (is_assigned_driver(request_id));

create policy "assignments_staff_all" on driver_assignments for all using (is_admin_or_dispatch());
create policy "assignments_driver_select" on driver_assignments for select using (driver_id = auth.uid());

create policy "notes_staff_all" on internal_notes for all using (is_admin_or_dispatch());

-- ---------------------------------------------------------------------------
-- driver_locations — drivers write only their own current position;
-- staff can see everything; drivers can see history for their own jobs
-- ---------------------------------------------------------------------------

create policy "locations_driver_insert" on driver_locations for insert with check (driver_id = auth.uid());
create policy "locations_driver_select_own" on driver_locations for select using (driver_id = auth.uid());
create policy "locations_staff_select" on driver_locations for select using (is_admin_or_dispatch());

-- customer_tracking_tokens — no direct client access at all (service role only)
create policy "tokens_staff_select" on customer_tracking_tokens for select using (is_admin_or_dispatch());

-- ---------------------------------------------------------------------------
-- notifications
-- ---------------------------------------------------------------------------

create policy "templates_staff_all" on notification_templates for all using (is_admin_or_dispatch());
create policy "logs_staff_select" on notification_logs for select using (is_admin_or_dispatch());

-- ---------------------------------------------------------------------------
-- CMS content — public reads published rows, content managers write
-- ---------------------------------------------------------------------------

create policy "blog_categories_public_read" on blog_categories for select using (true);
create policy "blog_categories_staff_write" on blog_categories for all using (is_content_manager());

create policy "blog_posts_public_read" on blog_posts for select using (status = 'published');
create policy "blog_posts_staff_all" on blog_posts for all using (is_content_manager());

create policy "faqs_public_read" on faqs for select using (is_published = true);
create policy "faqs_staff_all" on faqs for all using (is_content_manager());

create policy "gallery_public_read" on gallery_items for select using (is_published = true);
create policy "gallery_staff_all" on gallery_items for all using (is_content_manager());

create policy "videos_public_read" on videos for select using (is_published = true);
create policy "videos_staff_all" on videos for all using (is_content_manager());

create policy "settings_public_read" on site_settings for select using (true);
create policy "settings_admin_write" on site_settings for all using (is_super_admin());

create policy "audit_admin_select" on audit_logs for select using (is_super_admin());
