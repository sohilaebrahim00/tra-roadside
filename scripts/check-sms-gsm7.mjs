/**
 * Fails the build if anything that can reach an SMS falls outside GSM-7.
 *
 *   node scripts/check-sms-gsm7.mjs
 *
 * Why this is a build gate and not a code review note: a single character
 * outside the GSM-7 alphabet — a curly quote, an en dash, an emoji — silently
 * switches a message from 7-bit to UCS-2 encoding. The per-segment limit drops
 * from 160 characters to 70, so a two-segment message becomes five. Nothing
 * errors, nothing looks wrong in the admin UI, and the cost lands on the Twilio
 * bill weeks later, multiplied by every message TRA has sent since.
 *
 * That already nearly happened once: the display name "Tire Repair — Plug &
 * Patch" carries an em dash, and adding it to the request_received SMS would
 * have taken that message from 2 segments to 5 for every tire repair booking.
 *
 * Covered:
 *   1. every `channel: "sms"` template body in notification-templates.ts
 *   2. every service `shortName` (interpolated as {{serviceShort}})
 *   3. every STATUS_META `customerLabel` (interpolated as {{statusLabel}})
 *   4. BUSINESS.phoneDisplay (interpolated as {{supportPhone}})
 *   5. the rule that no SMS template may reference {{serviceName}} or
 *      {{vehicleDetails}} — those fields are ALLOWED to contain non-GSM-7
 *      characters (the display name's em dash, the VIN separator), so they are
 *      email-only by contract. This is the rule that stops someone
 *      reintroducing the problem by swapping a variable rather than a string.
 */
import { readFileSync } from "node:fs";
import process from "node:process";

const GSM7_BASE =
  "@£$¥èéùìòÇ\nØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ !\"#¤%&'()*+,-./0123456789:;<=>?" +
  "¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà";
const GSM7_EXT = "^{}\\[~]|€";

/** Email-only variables: allowed to carry characters that would break SMS encoding. */
const EMAIL_ONLY_VARS = ["serviceName", "vehicleDetails"];

function offenders(text) {
  const bad = new Map();
  for (const ch of text) {
    if (GSM7_BASE.includes(ch) || GSM7_EXT.includes(ch)) continue;
    bad.set(ch, (bad.get(ch) ?? 0) + 1);
  }
  return [...bad.entries()].map(([ch, n]) => `${JSON.stringify(ch)} (U+${ch.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")}) x${n}`);
}

const read = (p) => readFileSync(p, "utf8");
const failures = [];

function check(label, text) {
  const bad = offenders(text);
  if (bad.length) failures.push(`${label}\n    ${bad.join("\n    ")}\n    in: ${JSON.stringify(text.slice(0, 120))}`);
}

// 1 + 5. SMS template bodies, and the email-only variable rule.
const templates = read("src/lib/content/notification-templates.ts");
const smsRows = [...templates.matchAll(/\{ event: "([a-z_]+)", channel: "sms", subject: null, body: "((?:[^"\\]|\\.)*)" \}/g)];
if (smsRows.length === 0) failures.push("could not parse any SMS templates — the check would pass vacuously");
for (const [, event, raw] of smsRows) {
  const body = JSON.parse(`"${raw}"`);
  check(`SMS template "${event}"`, body);
  for (const v of EMAIL_ONLY_VARS) {
    if (body.includes(`{{${v}}}`)) {
      failures.push(
        `SMS template "${event}" references {{${v}}}, which is email-only.\n` +
          `    That field may contain characters outside GSM-7, which would force UCS-2\n` +
          `    encoding and roughly double the segment count. Use {{serviceShort}} /\n` +
          `    {{vehicleClause}} in SMS instead.`
      );
    }
  }
}

// 2. Service short names.
const services = read("src/lib/content/services.ts");
for (const m of services.matchAll(/^    shortName: "([^"]+)",$/gm)) check(`service shortName "${m[1]}"`, m[1]);

// 3. Customer-facing status labels.
const domain = read("src/lib/types/domain.ts");
for (const m of domain.matchAll(/^    customerLabel: "([^"]+)",$/gm)) check(`statusLabel "${m[1]}"`, m[1]);

// 4. Support phone.
const business = read("src/lib/content/business.ts");
const phone = business.match(/^  phoneDisplay: "([^"]+)",$/m);
if (phone) check(`BUSINESS.phoneDisplay "${phone[1]}"`, phone[1]);

const checked = smsRows.length;
if (failures.length) {
  console.error(`\nSMS GSM-7 check FAILED (${failures.length} problem${failures.length > 1 ? "s" : ""}):\n`);
  for (const f of failures) console.error(`  - ${f}\n`);
  console.error("Every character above is outside GSM-7 and would switch the message to");
  console.error("UCS-2, cutting the segment limit from 160 characters to 70.\n");
  process.exit(1);
}

console.log(`SMS GSM-7 check passed: ${checked} SMS templates, all shortNames, status labels and the support phone are 7-bit safe.`);
