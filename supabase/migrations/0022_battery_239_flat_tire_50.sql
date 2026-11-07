-- Owner, 2026-11-07: battery replacement is $239 (it was $239-$255), the flat
-- tire change is from $50 (it was from $75), and the semi truck jump start is
-- listed last, after every other service. The site renders prices and order
-- from src/lib/content/services.ts and these descriptions are not shown to
-- customers; this keeps the database's own copy in step.
update service_types set description = 'Mobile battery replacement at your location, $239 for eligible vehicles and batteries, covering the battery, core charge and installation, plus the $19 dispatch fee.' where slug = 'battery-replacement';
update service_types set description = 'Swap to the spare carried in your vehicle, from $50 plus the $19 dispatch fee.' where slug = 'flat-tire-change';
update service_types set sort_order = 11 where slug = 'semi-truck-jump-start';
