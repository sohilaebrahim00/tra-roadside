import { redirect } from "next/navigation";
import { isDemoMode } from "@/lib/env";
import { getDriverSession } from "@/lib/auth/driver-session";
import { DriverShell } from "@/components/driver/driver-shell";
import { SetupRequired } from "@/components/admin/setup-required";

export default async function ProtectedDriverLayout({ children }: { children: React.ReactNode }) {
  if (isDemoMode()) return <SetupRequired area="The driver portal" />;

  const session = await getDriverSession();
  if (!session) redirect("/driver/login");

  return <DriverShell fullName={session.fullName}>{children}</DriverShell>;
}
