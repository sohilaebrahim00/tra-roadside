-- TRA (Texas Roadside Assistance) — initial schema
-- Mirrors src/lib/types/domain.ts. Keep both in sync when changing enums.

create extension if not exists "pgcrypto";

-- ============================================================================
-- ENUMS
-- ============================================================================

create type app_role as enum ('super_admin', 'dispatcher', 'driver', 'content_editor');

create type request_status as enum (
  'new', 'reviewing', 'accepted', 'driver_assigned', 'driver_en_route',
  'driver_nearby', 'arrived', 'in_progress', 'completed', 'canceled',
  'unable_to_complete'
);

create type vehicle_type as enum ('sedan', 'suv', 'pickup_truck', 'van', 'motorcycle', 'box_truck', 'other');
create type contact_method as enum ('call', 'sms', 'email');
create type driver_status as enum ('available', 'en_route', 'off_duty');
create type photo_kind as enum ('vehicle', 'damage', 'location', 'before', 'after');
create type uploaded_by_kind as enum ('customer', 'driver', 'staff');
create type notification_channel as enum ('email', 'sms');
create type notification_status as enum ('queued', 'sent', 'failed', 'skipped');
create type content_status as enum ('draft', 'published');

-- ============================================================================
-- ROLES (reference table for admin UI; source of truth for role semantics
-- is the app_role enum used on profiles)
-- ============================================================================

create table roles (
  id app_role primary key,
  label text not null,
  description text not null
);

insert into roles (id, label, description) values
  ('super_admin', 'Super Admin', 'Full access to all dashboard features, settings, and user management.'),
  ('dispatcher', 'Dispatcher', 'Manages incoming requests, driver assignment, and customer communication.'),
  ('driver', 'Driver', 'Field driver with access to the mobile driver portal only.'),
  ('content_editor', 'Content Editor', 'Manages blog, FAQ, gallery, and video content only.');

-- ============================================================================
-- PROFILES — one row per Supabase auth user (staff + drivers, NOT customers)
-- ============================================================================

create table profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role app_role not null default 'driver',
  full_name text not null,
  phone text,
  avatar_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table drivers (
  id uuid primary key references profiles (id) on delete cascade,
  photo_url text,
  vehicle_description text,
  license_plate text,
  status driver_status not null default 'off_duty',
  location_sharing_active boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============================================================================
-- CUSTOMERS — guest records, no auth account required
-- ============================================================================

create table customers (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text,
  created_at timestamptz not null default now()
);
create index customers_phone_idx on customers (phone);

-- ============================================================================
-- SERVICE TYPES / AREAS
-- ============================================================================

create table service_types (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  needs_destination boolean not null default false,
  description text,
  sort_order int not null default 0,
  active boolean not null default true
);

create table service_areas (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  county text,
  sort_order int not null default 0,
  active boolean not null default true
);

-- ============================================================================
-- SERVICE REQUESTS
-- ============================================================================

create table service_requests (
  id uuid primary key default gen_random_uuid(),
  request_number text unique not null,
  status request_status not null default 'new',

  customer_id uuid not null references customers (id),
  service_type_id uuid not null references service_types (id),

  vehicle_year text,
  vehicle_make text,
  vehicle_model text,
  vehicle_color text,
  vehicle_license_plate text,
  vehicle_type vehicle_type not null default 'sedan',
  is_drivable boolean,
  notes text,

  pickup_lat double precision not null,
  pickup_lng double precision not null,
  pickup_address text not null,

  destination_lat double precision,
  destination_lng double precision,
  destination_address text,
  destination_notes text,

  preferred_contact_method contact_method not null default 'call',
  sms_consent boolean not null default false,
  sms_consent_at timestamptz,
  sms_consent_text_version text,

  assigned_driver_id uuid references drivers (id),

  accepted_at timestamptz,
  completed_at timestamptz,
  canceled_at timestamptz,

  source text not null default 'web',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create index service_requests_status_idx on service_requests (status);
create index service_requests_driver_idx on service_requests (assigned_driver_id);
create index service_requests_created_idx on service_requests (created_at desc);

create table request_photos (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references service_requests (id) on delete cascade,
  storage_path text not null,
  kind photo_kind not null default 'vehicle',
  uploaded_by uploaded_by_kind not null default 'customer',
  created_at timestamptz not null default now()
);
create index request_photos_request_idx on request_photos (request_id);

create table request_status_history (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references service_requests (id) on delete cascade,
  previous_status request_status,
  new_status request_status not null,
  changed_by uuid references profiles (id),
  changed_by_role text,
  note text,
  created_at timestamptz not null default now()
);
create index request_status_history_request_idx on request_status_history (request_id, created_at);

create table driver_assignments (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references service_requests (id) on delete cascade,
  driver_id uuid not null references drivers (id),
  assigned_by uuid references profiles (id),
  assigned_at timestamptz not null default now(),
  unassigned_at timestamptz,
  active boolean not null default true
);
create index driver_assignments_request_idx on driver_assignments (request_id);
create index driver_assignments_driver_idx on driver_assignments (driver_id);

create table driver_locations (
  id uuid primary key default gen_random_uuid(),
  driver_id uuid not null references drivers (id) on delete cascade,
  request_id uuid references service_requests (id),
  lat double precision not null,
  lng double precision not null,
  heading double precision,
  speed double precision,
  accuracy double precision,
  recorded_at timestamptz not null default now()
);
create index driver_locations_request_idx on driver_locations (request_id, recorded_at desc);
create index driver_locations_driver_idx on driver_locations (driver_id, recorded_at desc);

create table customer_tracking_tokens (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null unique references service_requests (id) on delete cascade,
  token text unique not null,
  expires_at timestamptz not null,
  revoked boolean not null default false,
  created_at timestamptz not null default now()
);
create index customer_tracking_tokens_token_idx on customer_tracking_tokens (token);

create table internal_notes (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references service_requests (id) on delete cascade,
  author_id uuid references profiles (id),
  body text not null,
  created_at timestamptz not null default now()
);
create index internal_notes_request_idx on internal_notes (request_id);

-- ============================================================================
-- NOTIFICATIONS
-- ============================================================================

create table notification_templates (
  id uuid primary key default gen_random_uuid(),
  event text not null,
  channel notification_channel not null,
  subject text,
  body text not null,
  is_active boolean not null default true,
  updated_at timestamptz not null default now(),
  unique (event, channel)
);

create table notification_logs (
  id uuid primary key default gen_random_uuid(),
  request_id uuid references service_requests (id) on delete cascade,
  event text not null,
  channel notification_channel not null,
  recipient text not null,
  status notification_status not null default 'queued',
  provider_message_id text,
  error text,
  created_at timestamptz not null default now()
);
create index notification_logs_request_idx on notification_logs (request_id);

-- ============================================================================
-- CMS: BLOG / FAQ / GALLERY / VIDEOS / SETTINGS
-- ============================================================================

create table blog_categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null
);

create table blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  content text not null,
  cover_image_url text,
  category_id uuid references blog_categories (id),
  author_name text not null default 'TRA Team',
  status content_status not null default 'draft',
  published_at timestamptz,
  seo_title text,
  seo_description text,
  og_image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index blog_posts_status_idx on blog_posts (status, published_at desc);

create table faqs (
  id uuid primary key default gen_random_uuid(),
  category text not null default 'General',
  question text not null,
  answer text not null,
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table gallery_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  alt_text text not null,
  category text not null default 'General',
  image_url text not null,
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

create table videos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  youtube_id text,
  video_url text,
  poster_url text,
  duration_seconds int,
  category text not null default 'General',
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

create table site_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

create table audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references profiles (id),
  action text not null,
  entity_type text not null,
  entity_id text,
  metadata jsonb,
  created_at timestamptz not null default now()
);
create index audit_logs_entity_idx on audit_logs (entity_type, entity_id);

-- ============================================================================
-- updated_at triggers
-- ============================================================================

create or replace function set_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger trg_profiles_updated before update on profiles for each row execute function set_updated_at();
create trigger trg_drivers_updated before update on drivers for each row execute function set_updated_at();
create trigger trg_requests_updated before update on service_requests for each row execute function set_updated_at();
create trigger trg_blog_posts_updated before update on blog_posts for each row execute function set_updated_at();
create trigger trg_faqs_updated before update on faqs for each row execute function set_updated_at();
create trigger trg_templates_updated before update on notification_templates for each row execute function set_updated_at();

-- Record every status change automatically.
create or replace function log_request_status_change() returns trigger as $$
begin
  if (tg_op = 'UPDATE' and new.status is distinct from old.status) then
    insert into request_status_history (request_id, previous_status, new_status)
    values (new.id, old.status, new.status);
  elsif (tg_op = 'INSERT') then
    insert into request_status_history (request_id, previous_status, new_status)
    values (new.id, null, new.status);
  end if;
  return new;
end;
$$ language plpgsql;

create trigger trg_requests_status_history
  after insert or update on service_requests
  for each row execute function log_request_status_change();
