-- Drop "New" from the tire replacement description.
--
-- A factual correction, not a style edit: TRA fits used tires as well as new
-- ones, so "New tire supplied by TRA" was a false claim on a live commercial
-- page — the kind that turns into an argument at the roadside. The wording is
-- deliberately neither "new tire" nor "used tire", just "tire".
--
-- Migration 0008 still carries the old wording and is left untouched, since it
-- has already been applied; this supersedes it.
update service_types
set description = 'Tire supplied by TRA and fitted on site — 15 to 20 inch $189, 21 inch and larger $230.'
where slug = 'tire-replacement';
