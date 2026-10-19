/**
 * One labeled line of a text message, with its own leading line break:
 * "\nVehicle: 2019 Toyota Camry", or "" when there is no value. Templates
 * write `Service: {{serviceShort}}{{vehicleLine}}` so a request with no
 * vehicle details leaves no empty "Vehicle:" line behind.
 *
 * Labels are plain ASCII, so the text stays on GSM-7 encoding.
 */
export function smsLine(label: string, value: string | null | undefined): string {
  const v = value?.trim();
  return v ? `\n${label}: ${v}` : "";
}
