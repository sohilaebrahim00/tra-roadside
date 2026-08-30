/**
 * Hand-written mirror of supabase/migrations/*.sql for use with
 * @supabase/supabase-js generics. If you connect a real Supabase project,
 * you can regenerate this with `supabase gen types typescript` and it should
 * come out structurally compatible with what's used across the app.
 */

export type AppRole = "super_admin" | "dispatcher" | "driver" | "content_editor";
export type RequestStatusDb =
  | "new" | "reviewing" | "accepted" | "driver_assigned" | "driver_en_route"
  | "driver_nearby" | "arrived" | "in_progress" | "completed" | "canceled"
  | "unable_to_complete";
export type VehicleTypeDb = "sedan" | "suv" | "pickup_truck" | "van" | "motorcycle" | "box_truck" | "semi_truck" | "other";
export type ContactMethodDb = "call" | "sms" | "email";
export type DriverStatusDb = "available" | "en_route" | "off_duty";
export type PhotoKindDb = "vehicle" | "damage" | "location" | "before" | "after";
export type UploadedByKindDb = "customer" | "driver" | "staff";
export type NotificationChannelDb = "email" | "sms";
export type NotificationStatusDb = "queued" | "sent" | "failed" | "skipped";
export type ContentStatusDb = "draft" | "published";

interface Table<Row, Insert, Update = Partial<Insert>> {
  Row: Row;
  Insert: Insert;
  Update: Update;
  Relationships: [];
}

export interface Database {
  public: {
    Tables: {
      roles: Table<
        { id: AppRole; label: string; description: string },
        { id: AppRole; label: string; description: string }
      >;
      profiles: Table<
        {
          id: string; role: AppRole; full_name: string; phone: string | null;
          avatar_url: string | null; is_active: boolean; created_at: string; updated_at: string;
        },
        { id: string; role?: AppRole; full_name: string; phone?: string | null; avatar_url?: string | null; is_active?: boolean }
      >;
      drivers: Table<
        {
          id: string; photo_url: string | null; vehicle_description: string | null;
          license_plate: string | null; status: DriverStatusDb; location_sharing_active: boolean;
          created_at: string; updated_at: string;
        },
        { id: string; photo_url?: string | null; vehicle_description?: string | null; license_plate?: string | null; status?: DriverStatusDb; location_sharing_active?: boolean }
      >;
      customers: Table<
        { id: string; full_name: string; phone: string; email: string | null; created_at: string },
        { id?: string; full_name: string; phone: string; email?: string | null }
      >;
      service_types: Table<
        { id: string; slug: string; name: string; needs_destination: boolean; description: string | null; sort_order: number; active: boolean },
        { id?: string; slug: string; name: string; needs_destination?: boolean; description?: string | null; sort_order?: number; active?: boolean }
      >;
      service_areas: Table<
        { id: string; slug: string; name: string; county: string | null; sort_order: number; active: boolean },
        { id?: string; slug: string; name: string; county?: string | null; sort_order?: number; active?: boolean }
      >;
      service_requests: Table<
        {
          id: string; request_number: string; status: RequestStatusDb;
          customer_id: string; service_type_id: string;
          vehicle_year: string | null; vehicle_make: string | null; vehicle_model: string | null;
          vehicle_color: string | null; vehicle_license_plate: string | null; vehicle_vin: string | null; vehicle_type: VehicleTypeDb;
          is_drivable: boolean | null; notes: string | null;
          truck_type: string | null; truck_unit_number: string | null; trailer_attached: boolean | null;
          pickup_lat: number; pickup_lng: number; pickup_address: string;
          destination_lat: number | null; destination_lng: number | null;
          destination_address: string | null; destination_notes: string | null;
          preferred_contact_method: ContactMethodDb; sms_consent: boolean;
          sms_consent_at: string | null; sms_consent_text_version: string | null;
          assigned_driver_id: string | null;
          accepted_at: string | null; completed_at: string | null; canceled_at: string | null;
          source: string; created_at: string; updated_at: string; deleted_at: string | null;
        },
        {
          id?: string; request_number: string; status?: RequestStatusDb;
          customer_id: string; service_type_id: string;
          vehicle_year?: string | null; vehicle_make?: string | null; vehicle_model?: string | null;
          vehicle_color?: string | null; vehicle_license_plate?: string | null; vehicle_vin?: string | null; vehicle_type?: VehicleTypeDb;
          is_drivable?: boolean | null; notes?: string | null;
          truck_type?: string | null; truck_unit_number?: string | null; trailer_attached?: boolean | null;
          pickup_lat: number; pickup_lng: number; pickup_address: string;
          destination_lat?: number | null; destination_lng?: number | null;
          destination_address?: string | null; destination_notes?: string | null;
          preferred_contact_method?: ContactMethodDb; sms_consent?: boolean;
          sms_consent_at?: string | null; sms_consent_text_version?: string | null;
          assigned_driver_id?: string | null;
          accepted_at?: string | null; completed_at?: string | null; canceled_at?: string | null;
          source?: string;
        }
      >;
      request_photos: Table<
        { id: string; request_id: string; storage_path: string; kind: PhotoKindDb; uploaded_by: UploadedByKindDb; created_at: string },
        { id?: string; request_id: string; storage_path: string; kind?: PhotoKindDb; uploaded_by?: UploadedByKindDb }
      >;
      request_status_history: Table<
        { id: string; request_id: string; previous_status: RequestStatusDb | null; new_status: RequestStatusDb; changed_by: string | null; changed_by_role: string | null; note: string | null; created_at: string },
        { id?: string; request_id: string; previous_status?: RequestStatusDb | null; new_status: RequestStatusDb; changed_by?: string | null; changed_by_role?: string | null; note?: string | null }
      >;
      driver_assignments: Table<
        { id: string; request_id: string; driver_id: string; assigned_by: string | null; assigned_at: string; unassigned_at: string | null; active: boolean },
        { id?: string; request_id: string; driver_id: string; assigned_by?: string | null; active?: boolean }
      >;
      driver_locations: Table<
        { id: string; driver_id: string; request_id: string | null; lat: number; lng: number; heading: number | null; speed: number | null; accuracy: number | null; recorded_at: string },
        { id?: string; driver_id: string; request_id?: string | null; lat: number; lng: number; heading?: number | null; speed?: number | null; accuracy?: number | null }
      >;
      customer_tracking_tokens: Table<
        { id: string; request_id: string; token: string; expires_at: string; revoked: boolean; created_at: string },
        { id?: string; request_id: string; token: string; expires_at: string; revoked?: boolean }
      >;
      internal_notes: Table<
        { id: string; request_id: string; author_id: string | null; body: string; created_at: string },
        { id?: string; request_id: string; author_id?: string | null; body: string }
      >;
      notification_templates: Table<
        { id: string; event: string; channel: NotificationChannelDb; subject: string | null; body: string; is_active: boolean; updated_at: string },
        { id?: string; event: string; channel: NotificationChannelDb; subject?: string | null; body: string; is_active?: boolean }
      >;
      notification_logs: Table<
        { id: string; request_id: string | null; event: string; channel: NotificationChannelDb; recipient: string; status: NotificationStatusDb; provider_message_id: string | null; error: string | null; created_at: string },
        { id?: string; request_id?: string | null; event: string; channel: NotificationChannelDb; recipient: string; status?: NotificationStatusDb; provider_message_id?: string | null; error?: string | null }
      >;
      blog_categories: Table<
        { id: string; slug: string; name: string },
        { id?: string; slug: string; name: string }
      >;
      blog_posts: Table<
        {
          id: string; slug: string; title: string; excerpt: string | null; content: string;
          cover_image_url: string | null; category_id: string | null; author_name: string;
          status: ContentStatusDb; published_at: string | null; seo_title: string | null;
          seo_description: string | null; og_image_url: string | null; created_at: string; updated_at: string;
        },
        {
          id?: string; slug: string; title: string; excerpt?: string | null; content: string;
          cover_image_url?: string | null; category_id?: string | null; author_name?: string;
          status?: ContentStatusDb; published_at?: string | null; seo_title?: string | null;
          seo_description?: string | null; og_image_url?: string | null;
        }
      >;
      faqs: Table<
        { id: string; category: string; question: string; answer: string; sort_order: number; is_published: boolean; created_at: string; updated_at: string },
        { id?: string; category?: string; question: string; answer: string; sort_order?: number; is_published?: boolean }
      >;
      gallery_items: Table<
        { id: string; title: string; alt_text: string; category: string; image_url: string; sort_order: number; is_published: boolean; created_at: string },
        { id?: string; title: string; alt_text: string; category?: string; image_url: string; sort_order?: number; is_published?: boolean }
      >;
      videos: Table<
        { id: string; title: string; description: string | null; youtube_id: string | null; video_url: string | null; poster_url: string | null; duration_seconds: number | null; category: string; sort_order: number; is_published: boolean; created_at: string },
        { id?: string; title: string; description?: string | null; youtube_id?: string | null; video_url?: string | null; poster_url?: string | null; duration_seconds?: number | null; category?: string; sort_order?: number; is_published?: boolean }
      >;
      site_settings: Table<
        { key: string; value: unknown; updated_at: string },
        { key: string; value: unknown }
      >;
      audit_logs: Table<
        { id: string; actor_id: string | null; action: string; entity_type: string; entity_id: string | null; metadata: unknown; created_at: string },
        { id?: string; actor_id?: string | null; action: string; entity_type: string; entity_id?: string | null; metadata?: unknown }
      >;
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
}
