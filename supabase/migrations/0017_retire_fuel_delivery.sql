-- Fuel delivery is no longer offered (owner's pricing brief, 2026-11-03).
--
-- Deactivated, never deleted, as in migrations 0008 and 0016: past fuel
-- delivery requests reference this row, so active = false takes it off the
-- site while those requests stay readable in the admin dashboard.
--
-- The site already stopped offering fuel delivery in code (SERVICES and
-- SERVICE_TYPE_SLUGS no longer list it, the API rejects it, and its pages
-- redirect). This keeps the database's own list in step with that.
update service_types set active = false where slug = 'fuel-delivery';

-- The published descriptions follow the new prices: each is a service price
-- before tax, plus the $19 dispatch fee charged once per job.
update service_types set description = 'Dead battery jump start, $49-$75 plus the $19 dispatch fee, before tax.' where slug = 'jump-start';
update service_types set description = 'Mobile battery replacement at your location, $239-$255 for eligible vehicles and batteries, plus the $19 dispatch fee, before tax.' where slug = 'battery-replacement';
update service_types set description = 'Non-destructive lockout entry, from $50. Keys locked in the trunk, $120. Plus the $19 dispatch fee, before tax.' where slug = 'lockout';
update service_types set description = 'Puncture repaired roadside with a plug or patch, $54-$60 plus the $19 dispatch fee, before tax.' where slug = 'tire-repair-plug-patch';
update service_types set description = 'Swap to the spare carried in your vehicle, from $75 plus the $19 dispatch fee, before tax.' where slug = 'flat-tire-change';
update service_types set description = 'Tire supplied by TRA and fitted on site, from $129 plus the $19 dispatch fee, before tax; tire availability varies.' where slug = 'tire-replacement';
update service_types set description = 'Screw or nail removed from the tire and the tire made safe, $70 plus the $19 dispatch fee, before tax.' where slug = 'stuck-screw-in-tire';
update service_types set description = 'Seized or keyless wheel lock removed so the wheel can come off, $70 plus the $19 dispatch fee, before tax.' where slug = 'rim-lock-removal';
