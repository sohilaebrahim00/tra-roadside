import { isDemoMode } from "@/lib/env";
import { SetupRequired } from "@/components/admin/setup-required";
import { DriverLoginForm } from "@/components/driver/driver-login-form";

// Server component: the demo-mode check reads server-side config, so it
// (and SetupRequired's integrationStatus() call) never needs to ship to the
// client — only the interactive form below does.
export default function DriverLoginPage() {
  if (isDemoMode()) return <SetupRequired area="The driver portal" />;
  return <DriverLoginForm />;
}
