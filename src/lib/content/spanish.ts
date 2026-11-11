import { BUSINESS } from "./business";
import { SERVICES, getService, type ServiceContent } from "./services";
import { DISPATCH_FEE_USD, headlineLine } from "./pricing";
import { formatAmount, type Amount } from "./price-format";
import type { ServiceTypeSlug } from "@/lib/types/domain";

/**
 * Spanish for the drivers who search in it. Texas Spanish: "carro", "llanta",
 * "paso de corriente". Figures come from SERVICES, so a price change reaches
 * these too.
 */

/** "$49–$75", "desde $75", "$70" */
export function precio(a: Amount): string {
  return formatAmount(a, "–", "from").replace(/^from /, "desde ");
}

/** "desde $90, más $19 de envío": the service price first, the trip fee on its own. */
export function precioConEnvio(a: Amount): string {
  return `${precio(a)}, más ${DISPATCH_FEE_USD} de envío`;
}

const WORDS: Record<ServiceTypeSlug, { titulo: (ciudad: string) => string; nombre: string; costo: string }> = {
  "jump-start": { titulo: (c) => `Paso de corriente a domicilio en ${c}`, nombre: "Paso de corriente", costo: "Un paso de corriente cuesta" },
  "semi-truck-jump-start": { titulo: (c) => `Paso de corriente para tráileres en ${c}`, nombre: "Paso de corriente para tráiler", costo: "Un paso de corriente para tráiler cuesta" },
  "battery-replacement": { titulo: (c) => `Cambio de batería a domicilio en ${c}`, nombre: "Batería nueva instalada", costo: "Una batería nueva instalada cuesta" },
  lockout: { titulo: (c) => `¿Se quedó fuera de su carro en ${c}?`, nombre: "Abrir su carro", costo: "Abrir su carro cuesta" },
  "tire-repair-plug-patch": { titulo: (c) => `Llantera a domicilio 24 horas en ${c}`, nombre: "Reparar una llanta ponchada", costo: "Reparar una llanta ponchada cuesta" },
  "flat-tire-change": { titulo: (c) => `Cambio de llanta a domicilio 24 horas en ${c}`, nombre: "Poner su llanta de refacción", costo: "Poner su llanta de refacción cuesta" },
  "tire-replacement": { titulo: (c) => `Llanta nueva a domicilio en ${c}`, nombre: "Llanta nueva instalada", costo: "Una llanta nueva instalada cuesta" },
  "stuck-screw-in-tire": { titulo: (c) => `Clavo o tornillo en la llanta en ${c}`, nombre: "Sacar un clavo o tornillo de la llanta", costo: "Sacar el clavo o tornillo cuesta" },
  "rim-lock-removal": { titulo: (c) => `Quitar el birlo de seguridad en ${c}`, nombre: "Quitar el birlo de seguridad", costo: "Quitar el birlo de seguridad cuesta" },
  "stripped-lug-nut-removal": { titulo: (c) => `Birlo barrido en ${c}`, nombre: "Sacar un birlo barrido", costo: "Sacar un birlo barrido cuesta" },
  "valve-stem-replacement": { titulo: (c) => `Cambio de válvula de llanta en ${c}`, nombre: "Cambiar la válvula de la llanta", costo: "Cambiar la válvula de la llanta cuesta" },
};

/** "Paso de corriente": the service's name in Spanish. */
export function nombreServicio(slug: ServiceTypeSlug): string {
  return WORDS[slug].nombre;
}

/** "Paso de corriente a domicilio en Plano": a page title in Spanish. */
export function tituloServicio(slug: ServiceTypeSlug, ciudad: string): string {
  return WORDS[slug].titulo(ciudad);
}

/** Price tier labels from services.ts, in Spanish. A label missing here falls back to the English. */
const ETIQUETAS: Record<string, string> = {
  "Semi trucks and 18-wheelers": "Tráileres y camiones de 18 ruedas",
  "Keys locked in the trunk": "Llaves adentro de la cajuela",
};

export function etiquetaPrecio(label: string): string {
  return ETIQUETAS[label] ?? label;
}

/** "paso de corriente desde $49, abrir su carro desde $50 ...": the short price line for Spanish meta descriptions. */
export function preciosCortos(): string {
  const desde = (slug: ServiceTypeSlug) => {
    const svc = getService(slug);
    const line = svc && headlineLine(svc);
    return line ? `desde ${formatAmount({ min: line.min }, "–", "from")}` : "";
  };
  return `paso de corriente ${desde("jump-start")}, abrir su carro ${desde("lockout")}, reparar una llanta ${desde("tire-repair-plug-patch")} + ${DISPATCH_FEE_USD} de envío`;
}

/** The short Spanish block on a city and service page. */
export function bloqueCiudadServicio(svc: ServiceContent, ciudad: string): { titulo: string; texto: string } | undefined {
  const line = headlineLine(svc);
  if (!line) return undefined;
  const w = WORDS[svc.slug];
  return {
    titulo: w.titulo(ciudad),
    // The battery price stands alone, as in English (owner, 2026-11-07).
    texto: `Texas Roadside Assistance llega hasta su carro en ${ciudad}, las 24 horas, sin membresía. ${w.costo} ${precio(line)}${svc.feeAtBooking ? "" : `, más ${DISPATCH_FEE_USD} de envío`}. Atendemos en español. Llame al ${BUSINESS.phoneDisplay} o envíe su solicitud en línea.`,
  };
}

/** Every published price, for the Spanish page, with its service. */
export function listaDePrecios(): { nombre: string; precio: string; svc: ServiceContent }[] {
  return SERVICES.flatMap((svc) => {
    const line = headlineLine(svc);
    return line ? [{ nombre: WORDS[svc.slug].nombre, precio: precio(line), svc }] : [];
  });
}

const p = (slug: ServiceTypeSlug) => {
  const svc = getService(slug);
  const line = svc && headlineLine(svc);
  return line ? precio(line) : "";
};

export function preguntasFrecuentes(): { q: string; a: string }[] {
  return [
    { q: "¿Cuánto cuesta la asistencia en carretera?", a: `Un paso de corriente cuesta ${p("jump-start")}, abrir su carro ${p("lockout")}, reparar una llanta ${p("tire-repair-plug-patch")}, poner su llanta de refacción ${p("flat-tire-change")} y una batería nueva instalada ${p("battery-replacement")}. A cada trabajo se le suman ${DISPATCH_FEE_USD} de envío, una sola vez.` },
    { q: "¿Necesito membresía?", a: "No. No hay membresía, ni cuota anual, ni contrato. Usted paga solo por el trabajo que pidió." },
    { q: "¿Están abiertos ahorita?", a: "Sí. Despachamos las 24 horas, los 365 días del año, incluso de noche, en fines de semana y días festivos." },
    { q: "¿En cuánto tiempo llegan?", a: "Mandamos al técnico disponible más cercano lo antes posible. El tiempo real depende de dónde esté y del tráfico. Le avisamos por mensaje o por teléfono cuando el técnico va en camino." },
    { q: "¿Hablan español?", a: "Sí. Le atendemos en español por teléfono y por mensaje, desde que llama hasta que termina el trabajo." },
    { q: "¿Cómo se paga?", a: "En efectivo. Antes de mandar al técnico le confirmamos el precio, así sabe cuánto tener listo." },
    { q: "Tengo una llanta ponchada y no tengo refacción. ¿Qué hago?", a: `Le podemos llevar una llanta nueva e instalarla donde esté: ${p("tire-replacement")}, más ${DISPATCH_FEE_USD} de envío. La disponibilidad depende de la medida; la encuentra escrita en el costado de la llanta.` },
    { q: "Hay un niño o una mascota encerrados en el carro. ¿Qué hago?", a: `Si alguien está en peligro, llame primero al 911. Después llámenos al ${BUSINESS.phoneDisplay}: lo tratamos como urgente y mandamos al técnico más cercano.` },
    { q: "¿Hacen remolque o llevan gasolina?", a: "No. Nos dedicamos a baterías, pasos de corriente, carros cerrados y llantas, todo donde está su carro." },
  ];
}
