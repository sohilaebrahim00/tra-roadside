import type { CityHubContent } from "../city-hubs";
import { CIUDADES_ESTE } from "./ciudades-este";
import { CIUDADES_OESTE } from "./ciudades-oeste";

/** Spanish city page copy, translated from city-hubs-east.ts and city-hubs-west.ts. */
const POR_CIUDAD = new Map([...CIUDADES_ESTE, ...CIUDADES_OESTE].map((c) => [c.city, c]));

export function getCiudadEs(slug: string): CityHubContent | undefined {
  return POR_CIUDAD.get(slug);
}
