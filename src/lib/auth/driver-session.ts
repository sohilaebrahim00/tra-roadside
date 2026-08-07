import "server-only";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export interface DriverSession {
  driverId: string;
  fullName: string;
  phone: string | null;
}

export async function getDriverSession(): Promise<DriverSession | null> {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, full_name, phone, is_active")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile || profile.role !== "driver" || !profile.is_active) return null;

  return { driverId: user.id, fullName: profile.full_name, phone: profile.phone };
}
