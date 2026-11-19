import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Tidies page links that arrive slightly wrong, so they open the page instead
 * of the 404.
 *
 * AI answers and chat apps sometimes hand out a link with punctuation stuck to
 * its end ("/pricing." or "/pricing)"), an invisible character, or capitals
 * ("/Pricing"). Every page path on this site is lowercase, so such a link is
 * sent with one 308 to the same path in lowercase, without the trailing junk.
 * The query string is kept as it came.
 *
 * Left alone: paths whose case matters or that belong to the app rather than
 * the public pages (tracking and confirmation tokens, admin, driver, API), and
 * files in /public (anything ending in an extension).
 */
const KEEP_AS_IS = /^\/(?:t|track|request\/confirmation|admin|driver|api)(?:\/|$)/;

// Punctuation, quotes, brackets, spaces and invisible characters at the end.
const TRAILING_JUNK = /[\s ​-‍⁠﻿.,;:!?)\]}"'‘’“”»>]+$/;

export function proxy(request: NextRequest) {
  const raw = request.nextUrl.pathname;
  let path = raw;
  try {
    path = decodeURIComponent(raw);
  } catch {
    return NextResponse.next();
  }
  if (KEEP_AS_IS.test(path)) return NextResponse.next();

  const clean = path.replace(TRAILING_JUNK, "").toLowerCase() || "/";
  if (clean === path) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = clean;
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Pages only: no build assets, image optimizer or files with an extension.
  matcher: ["/((?!_next/|.*\\.[A-Za-z0-9]{2,5}$).*)"],
};
