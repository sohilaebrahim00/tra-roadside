-- Battery pricing changed to a single product, and jump start moves ahead of
-- battery replacement in the rendered order.
--
-- service_types.sort_order drives the order every listing renders in, so the
-- code array in src/lib/content/services.ts and this table have to agree.
-- Jump start is the wider door: a customer arrives wanting a jump, and the
-- battery is upsold on site.
update service_types set sort_order = 1 where slug = 'jump-start';
update service_types set sort_order = 2 where slug = 'battery-replacement';

-- One battery product, not two. AGM is no longer published — dispatch handles
-- AGM requests by phone. $189 is the price of the BATTERY ALONE: no labour, no
-- service call, no installation. The qualifier is stored with the figure so
-- the description can never be surfaced as a bare price.
update service_types
set description = 'Mobile battery replacement at your location. Battery from $189 — battery only, installation quoted by dispatch.'
where slug = 'battery-replacement';
