-- Two new services (owner, 2026-11-04). Dispatch quotes the price. The request API
-- creates a missing service row itself, so this only keeps the database's list tidy.
insert into service_types (slug, name, needs_destination, description, sort_order) values
  ('stripped-lug-nut-removal', 'Stripped Lug Nut Removal', false, 'A stripped, rounded or seized lug nut taken off so the wheel can come off. Dispatch confirms the price.', 9),
  ('valve-stem-replacement', 'Valve Stem Replacement', false, 'A cracked or leaking valve stem replaced at your car. Dispatch confirms the price.', 10)
on conflict (slug) do update set description = excluded.description, name = excluded.name;
