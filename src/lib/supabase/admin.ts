import "server-only";
import { createClient } from "@supabase/supabase-js";
import { env } from "@/lib/env";
import type { Database } from "@/lib/types/database";

/**
 * Service-role Supabase client. Bypasses Row Level Security — never import
 * this from client components, and never forward its results to a customer
 * without first checking they're scoped to the right request/token.
 *
 * Used for: request creation (writing on behalf of an unauthenticated
 * customer), the tracking API route (resolving an opaque token), and
 * notification dispatch.
 */
export function createAdminSupabaseClient() {
  if (!env.supabaseUrl || !env.supabaseServiceRoleKey) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    );
  }

  return createClient<Database>(env.supabaseUrl, env.supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
