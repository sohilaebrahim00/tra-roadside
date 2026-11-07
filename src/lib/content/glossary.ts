import type { ServiceTypeSlug } from "@/lib/types/domain";

/**
 * Plain-English definitions of the words drivers meet on a roadside call, for
 * /glossary. General automotive facts that hold for any car; where a term
 * touches a TRA service, `service` links it. Prices only through tokens.
 */
export interface GlossaryTerm {
  term: string;
  /** Anchor id, lowercase with hyphens. */
  id: string;
  definition: string;
  service?: ServiceTypeSlug;
}

export const GLOSSARY: GlossaryTerm[] = [];
