/**
 * Best-effort check for "don't autoplay/load heavy video here" conditions:
 * Save-Data header/setting, or a connection the browser itself classifies
 * as slow. Not available in every browser (mainly Chromium) — when the API
 * doesn't exist, this returns false (i.e. proceeds normally) rather than
 * blocking video everywhere by default.
 */
export function shouldAvoidHeavyMedia(): boolean {
  if (typeof navigator === "undefined") return false;
  const connection = (navigator as Navigator & { connection?: NetworkInformationLike }).connection;
  if (!connection) return false;
  if (connection.saveData) return true;
  if (connection.effectiveType && ["slow-2g", "2g"].includes(connection.effectiveType)) return true;
  return false;
}

interface NetworkInformationLike {
  saveData?: boolean;
  effectiveType?: string;
}
