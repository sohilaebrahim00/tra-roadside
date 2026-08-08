-- Adds the Battery Replacement and Tire Repair (Plug & Patch) service types.
-- service_types is a plain table (not a Postgres enum), so this is just an
-- idempotent insert — safe to run whether or not supabase/seed.sql has ever
-- been (re-)applied to this project.

insert into service_types (slug, name, needs_destination, description, sort_order) values
  ('battery-replacement', 'Battery Replacement', false, 'Mobile battery replacement with a 2-year warranty, installed on site.', 12),
  ('tire-repair-plug-patch', 'Tire Repair — Plug & Patch', false, 'Puncture repaired roadside with a plug or patch, when the damage allows it.', 13)
on conflict (slug) do update set
  name = excluded.name,
  needs_destination = excluded.needs_destination,
  description = excluded.description,
  sort_order = excluded.sort_order;
