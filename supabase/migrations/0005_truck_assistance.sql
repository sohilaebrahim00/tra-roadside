-- Truck Assistance service: a new commercial-truck vehicle type plus a
-- few truck-specific fields on service_requests. service_types itself is a
-- plain table (see 0001_init.sql), so the "truck-assistance" and
-- "other-roadside-service" service rows are added via seed.sql, not here.

alter type vehicle_type add value if not exists 'semi_truck';

alter table service_requests
  add column if not exists truck_type text,
  add column if not exists truck_unit_number text,
  add column if not exists trailer_attached boolean;
