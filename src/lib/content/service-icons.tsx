import {
  Truck, BatteryCharging, CircleDot, Gauge, Disc, Fuel, KeyRound, Anchor, Wrench,
  Container, CircleHelp,
  type LucideIcon,
} from "lucide-react";
import type { ServiceTypeSlug } from "@/lib/types/domain";

export const SERVICE_ICONS: Record<ServiceTypeSlug, LucideIcon> = {
  towing: Truck,
  "jump-start": BatteryCharging,
  "flat-tire-change": CircleDot,
  "tire-inflation": Gauge,
  "spare-tire-install": Disc,
  "fuel-delivery": Fuel,
  lockout: KeyRound,
  "winching-recovery": Anchor,
  "minor-repair": Wrench,
  "truck-assistance": Container,
  "other-roadside-service": CircleHelp,
};
