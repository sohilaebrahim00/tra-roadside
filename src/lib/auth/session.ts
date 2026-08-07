import "server-only";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { AppRole } from "@/lib/types/domain";

export interface StaffSession {
  userId: string;
  email: string | null;
  role: AppRole;
  fullName: string;
}

/** Returns the signed-in user's profile/role, or null if unauthenticated. Never throws. */
export async function getStaffSession(): Promise<StaffSession | null> {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, full_name, is_active")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile || !profile.is_active) return null;

  return { userId: user.id, email: user.email ?? null, role: profile.role, fullName: profile.full_name };
}

export const STAFF_ROLES: AppRole[] = ["super_admin", "dispatcher", "content_editor"];
