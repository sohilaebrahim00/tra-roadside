import { createClient } from "@supabase/supabase-js";
import { env } from "@/lib/env";
import type { Database } from "@/lib/types/database";

/**
 * Anon-key Supabase client for public, unauthenticated content reads (FAQs,
 * blog, gallery, videos, service types/areas). Relies on the RLS policies in
 * supabase/migrations/0002_rls.sql that expose only published/active rows.
 */
export function createPublicSupabaseClient() {
  return createClient<Database>(env.supabaseUrl, env.supabaseAnonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
