-- Towing is now priced as a $120 base rate, then $5 per mile (owner's rate as
-- of 2026-10-19). Brings the stored description in line with SERVICES in
-- src/lib/content/services.ts, which the site reads its prices from.
update service_types
set description = 'Light and medium-duty towing to the destination of your choice: $120, then $5 per mile.'
where slug = 'towing';
