-- The published prices no longer mention tax (owner, 2026-11-04: the "$420 plus
-- tax" in a voice note was an example, not an instruction). These descriptions
-- are not shown to customers; this keeps the database's copy in step with the
-- site.
update service_types
set description = replace(description, ', before tax', '')
where description like '%, before tax%';
