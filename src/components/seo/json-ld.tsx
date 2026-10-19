import { BUSINESS, SERVICE_AREAS } from "@/lib/content/business";
import { env } from "@/lib/env";

function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${env.siteUrl}/#organization`,
    name: BUSINESS.legalName,
    alternateName: BUSINESS.shortName,
    url: env.siteUrl,
    // A real job photo (the same 1200x630 image used for link previews).
    image: `${env.siteUrl}/images/og/og-default.jpg`,
    telephone: BUSINESS.phoneDisplay,
    email: BUSINESS.email,
    // TRA is a service-area business with no published street address. The
    // correct schema shape is geo + areaServed and NO PostalAddress: an
    // invented address here would be worse than omitting one, because search
    // engines would surface it to customers as a real place they could visit.
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: SERVICE_AREAS.map((c) => ({ "@type": "City", name: c.name })),
    hasMap: BUSINESS.googleListingUrl,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      BUSINESS.socials.facebook,
      BUSINESS.socials.instagram,
      BUSINESS.socials.youtube,
      BUSINESS.googleListingUrl,
    ],
  };

  return <JsonLdScript data={data} />;
}

export function ServiceJsonLd({
  name,
  description,
  path,
  areaServed,
  priceFrom,
}: {
  name: string;
  description: string;
  /**
   * Site path of the page this Service describes. Passed whole rather than
   * built from a slug: City x Service pages live under /service-areas, and
   * deriving `/services/${slug}` for them pointed every one of those 97
   * Service blocks at a URL that 404s.
   */
  path: string;
  /** Defaults to every served city. City pages pass their own city. */
  areaServed?: string;
  /** Lowest published total in whole USD, when one can be stated without misleading. */
  priceFrom?: number;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    description,
    provider: { "@id": `${env.siteUrl}/#organization` },
    areaServed: areaServed
      ? { "@type": "City", name: areaServed }
      : SERVICE_AREAS.map((c) => c.name),
    url: `${env.siteUrl}${path}`,
    ...(priceFrom
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: priceFrom,
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: priceFrom,
              priceCurrency: "USD",
              description: "Published total from this figure. Final price depends on vehicle and location.",
            },
          },
        }
      : {}),
  };
  return <JsonLdScript data={data} />;
}

export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return <JsonLdScript data={data} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <JsonLdScript data={data} />;
}

export function BlogPostingJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  authorName,
  image,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  image?: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    dateModified,
    author: { "@type": "Organization", name: authorName },
    image,
    mainEntityOfPage: url,
    publisher: { "@id": `${env.siteUrl}/#organization` },
  };
  return <JsonLdScript data={data} />;
}
