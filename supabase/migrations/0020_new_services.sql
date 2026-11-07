-- Two new services (owner, 2026-11-04), $55 each (2026-11-07), and the semi
-- truck jump start as its own service from $90 (2026-11-07). The request API
-- creates a missing service row itself, so this only keeps the database's list tidy.
insert into service_types (slug, name, needs_destination, description, sort_order) values
  ('stripped-lug-nut-removal', 'Stripped Lug Nut Removal', false, 'A stripped, rounded or seized lug nut taken off so the wheel can come off, $55 plus the $19 dispatch fee.', 9),
  ('valve-stem-replacement', 'Valve Stem Replacement', false, 'A cracked or leaking valve stem replaced at your car, $55 plus the $19 dispatch fee.', 10),
  ('semi-truck-jump-start', 'Semi Truck Jump Start', false, 'Heavy-duty jump start for semi trucks and big rigs, from $90 plus the $19 dispatch fee.', 3)
on conflict (slug) do update set description = excluded.description, name = excluded.name;
