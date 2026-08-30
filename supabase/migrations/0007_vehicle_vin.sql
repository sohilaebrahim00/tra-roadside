-- VIN for battery fitment.
--
-- Nullable and unconstrained at the database level on purpose: the VIN is
-- optional in the request form (a stranded customer should never be blocked
-- from asking for help because they cannot reach their dashboard), and format
-- is enforced in src/lib/validation/request.ts where a useful error message
-- can be shown. Storing it as free text also keeps historical rows valid if
-- the VIN standard ever changes.
alter table service_requests add column if not exists vehicle_vin text;
