-- The owner's definitive service list.
--
-- Services no longer offered are DEACTIVATED, never deleted:
-- service_requests.service_type_id is a NOT NULL foreign key with no ON
-- DELETE behaviour, so deleting a row here would either fail outright or
-- destroy the service history of every past request that used it. Setting
-- active = false removes it from the site while leaving old requests
-- readable in the admin dashboard.
update service_types set active = false
where slug in (
  'tire-inflation',
  'spare-tire-install',
  'winching-recovery',
  'minor-repair',
  'truck-assistance',
  'other-roadside-service'
);

-- The current list, with published totals in the description. Prices here are
-- totals the customer pays; parts-and-labour breakdowns are never published.
insert into service_types (slug, name, needs_destination, description, sort_order, active) values
  ('battery-replacement', 'Battery Replacement', false, 'Mobile battery replacement installed on site — standard $290, AGM $380, installation included.', 1, true),
  ('jump-start', 'Jump Start', false, 'Dead battery jump start, $55-65.', 2, true),
  ('lockout', 'Vehicle Lockout', false, 'Non-destructive lockout entry, $55-65. Keys locked in the trunk, $120.', 3, true),
  ('tire-repair-plug-patch', 'Tire Repair — Plug & Patch', false, 'Puncture repaired roadside with a plug or patch, $65-70.', 4, true),
  ('flat-tire-change', 'Flat Tire Change', false, 'Swap to the spare carried in your vehicle, $65.', 5, true),
  ('tire-replacement', 'Tire Replacement', false, 'New tire supplied by TRA and fitted on site — 15 to 20 inch $189, 21 inch and larger $230.', 6, true),
  ('stuck-screw-in-tire', 'Stuck Screw in Tire', false, 'Screw or nail removed from the tire and the tire made safe, $70.', 7, true),
  ('rim-lock-removal', 'Rim Lock Removal', false, 'Seized or keyless wheel lock removed so the wheel can come off, $70.', 8, true),
  ('fuel-delivery', 'Fuel Delivery', false, 'Gas or diesel delivered roadside, $65 plus the cost of the fuel.', 9, true),
  ('towing', 'Towing', true, 'Light and medium-duty towing at $5 per mile to the destination of your choice.', 10, true)
on conflict (slug) do update set
  name = excluded.name,
  needs_destination = excluded.needs_destination,
  description = excluded.description,
  sort_order = excluded.sort_order,
  active = true;
