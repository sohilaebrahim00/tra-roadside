-- Storage buckets for request photos, driver/before-after photos, and CMS media.
-- Request photos are private (accessed via signed URLs from staff/driver
-- sessions or the service-role tracking API); CMS media is public.

insert into storage.buckets (id, name, public)
values
  ('request-photos', 'request-photos', false),
  ('cms-media', 'cms-media', true)
on conflict (id) do nothing;

create policy "request_photos_staff_read" on storage.objects for select
  using (bucket_id = 'request-photos' and is_admin_or_dispatch());

create policy "request_photos_driver_read" on storage.objects for select
  using (
    bucket_id = 'request-photos'
    and is_assigned_driver((storage.foldername(name))[1]::uuid)
  );

create policy "request_photos_driver_upload" on storage.objects for insert
  with check (
    bucket_id = 'request-photos'
    and is_assigned_driver((storage.foldername(name))[1]::uuid)
  );

create policy "cms_media_public_read" on storage.objects for select
  using (bucket_id = 'cms-media');

create policy "cms_media_staff_write" on storage.objects for insert
  with check (bucket_id = 'cms-media' and is_content_manager());

create policy "cms_media_staff_update" on storage.objects for update
  using (bucket_id = 'cms-media' and is_content_manager());

create policy "cms_media_staff_delete" on storage.objects for delete
  using (bucket_id = 'cms-media' and is_content_manager());
