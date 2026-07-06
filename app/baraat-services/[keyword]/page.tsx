import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import FAQAccordion from "@/components/FAQAccordion";
import PublicSeoFooter from "@/components/PublicSeoFooter";
import {
  SEO_KEYWORD_PAGES,
  getSeoKeywordPageBySlug,
} from "@/lib/data/seoDirectory";
import {
  areaToSlug,
  cityToSlug,
  generateJsonLdBreadcrumb,
  generateJsonLdCollectionPage,
  generateJsonLdFAQ,
  generateJsonLdItemList,
  generateJsonLdService,
  generateMetaDescription,
  generateFAQs,
  slugToCity,
  slugToSpecialty,
  specialtyToSlug,
} from "@/lib/seoHelpers";

export function generateStaticParams() {
  return SEO_KEYWORD_PAGES.map((page) => ({
    keyword: page.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { keyword: string };
}): Metadata {
  const keywordPage = getSeoKeywordPageBySlug(params.keyword);

  if (!keywordPage) {
    return {};
  }

  return {
    title: `${keywordPage.label} | Plan My Baraat`,
    description: `Explore ${keywordPage.label.toLowerCase()}, compare city and area options, and move to the right wedding vendor landing pages faster.`,
    alternates: {
      canonical: `/baraat-services/${params.keyword}`,
    },
    openGraph: {
      title: `${keywordPage.label} | Plan My Baraat`,
      description: `Explore ${keywordPage.label.toLowerCase()}, compare city and area options, and move to the right wedding vendor landing pages faster.`,
      url: `/baraat-services/${params.keyword}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${keywordPage.label} | Plan My Baraat`,
      description: `Explore ${keywordPage.label.toLowerCase()}, compare city and area options, and move to the right wedding vendor landing pages faster.`,
    },
  };
}

export default function KeywordPage({
  params,
}: {
  params: { keyword: string };
}) {
  const keywordPage = getSeoKeywordPageBySlug(params.keyword);

  if (!keywordPage) {
    notFound();
  }

  const specialty = slugToSpecialty(keywordPage.specialtySlug);
  const city = slugToCity(keywordPage.citySlug);

  if (!specialty || !city) {
    notFound();
  }

  const cityPageHref = `/${specialtyToSlug(specialty)}/${cityToSlug(city)}`;
  const specialtyPageHref = `/${specialtyToSlug(specialty)}`;
  const faqs = generateFAQs(specialty, city);
  const areaLinks = keywordPage.areaNames.map((area) => ({
    label: area,
    href: `/${specialtyToSlug(specialty)}/${cityToSlug(city)}/${areaToSlug(area)}`,
  }));
  const relatedKeywordPages = SEO_KEYWORD_PAGES.filter(
    (page) => page.slug !== keywordPage.slug && page.cityName === keywordPage.cityName
  ).slice(0, 8);

  const jsonLdCollectionPage = generateJsonLdCollectionPage(
    keywordPage.label,
    generateMetaDescription(specialty, city),
    `https://planmybaraat.com/baraat-services/${keywordPage.slug}`
  );
  const jsonLdItemList = generateJsonLdItemList(
    [
      { name: `${specialty.name} hub`, url: `https://planmybaraat.com${specialtyPageHref}` },
      { name: `${specialty.name} in ${city.name}`, url: `https://planmybaraat.com${cityPageHref}` },
      ...areaLinks.map((area) => ({
        name: `${specialty.name} in ${area.label}, ${city.name}`,
        url: `https://planmybaraat.com${area.href}`,
      })),
    ].slice(0, 10)
  );
  const jsonLdFaq = generateJsonLdFAQ(faqs);
  const jsonLdBreadcrumb = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://planmybaraat.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Baraat Services",
        item: "https://planmybaraat.com/baraat-services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: keywordPage.label,
        item: `https://planmybaraat.com/baraat-services/${keywordPage.slug}`,
      },
    ],
  });
  const jsonLdService = generateJsonLdService(specialty, city);
  const cityBreadcrumb = generateJsonLdBreadcrumb(specialty, city);

  return (
    <main className="min-h-screen bg-[#fcfbf9] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdCollectionPage }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdItemList }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdFaq }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdBreadcrumb }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdService }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: cityBreadcrumb }}
      />

      <section className="border-b border-stone-200 bg-[#F8F4EE]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
          <nav className="mb-6 text-sm text-stone-500">
            <Link href="/" className="hover:text-stone-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/baraat-services" className="hover:text-stone-900">
              Baraat Services
            </Link>
            <span className="mx-2">/</span>
            <span className="font-semibold text-stone-900">{keywordPage.label}</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            Keyword landing page
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl">
            {keywordPage.label}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            This page supports search discovery for {keywordPage.label.toLowerCase()} and
            connects searchers to the main city hub, service hub, and location-specific
            area pages.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={cityPageHref}
              className="rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              Open city page
            </Link>
            <Link
              href={specialtyPageHref}
              className="rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
            >
              Open service hub
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[28px] border border-stone-200 bg-[#F8F4EE] p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-950">
              Why this keyword page matters
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-stone-700">
              <p>
                {keywordPage.label} is a commercial-intent search phrase. Instead of
                leaving it as plain footer text, this page gives Google a crawlable,
                indexable landing page with direct links into the exact service and city
                combinations people are searching for.
              </p>
              <p>
                Families looking for {specialty.name.toLowerCase()} in {city.name} usually
                compare city-wide options first and then narrow the shortlist by venue
                zone, guest movement, budget, and event-day logistics.
              </p>
              <p>
                Use the city page below for the main landing page, then drill into the
                area pages for local SEO coverage around high-intent wedding zones.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-stone-200 bg-[#F8F4EE] p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-950">Primary landing paths</h2>
            <div className="mt-5 space-y-3">
              <Link
                href={cityPageHref}
                className="block rounded-[20px] border border-stone-200 bg-white/60 p-4 transition hover:border-stone-900"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Main city page
                </p>
                <p className="mt-2 text-lg font-bold text-stone-950">
                  {specialty.name} in {city.name}
                </p>
              </Link>
              <Link
                href={specialtyPageHref}
                className="block rounded-[20px] border border-stone-200 bg-white/60 p-4 transition hover:border-stone-900"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Service overview
                </p>
                <p className="mt-2 text-lg font-bold text-stone-950">{specialty.name}</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {areaLinks.length > 0 ? (
        <section className="border-y border-stone-200 bg-[#F8F4EE]">
          <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
            <h2 className="text-2xl font-bold text-stone-950">
              Areas we serve in {city.name}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {areaLinks.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <h2 className="text-2xl font-bold text-stone-950">
          FAQs for {specialty.name} in {city.name}
        </h2>
        <div className="mt-6">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {relatedKeywordPages.length > 0 ? (
        <section className="border-t border-stone-200 bg-[#F8F4EE]">
          <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
            <h2 className="text-2xl font-bold text-stone-950">
              More keyword pages for {city.name}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {relatedKeywordPages.map((page) => (
                <Link
                  key={page.slug}
                  href={page.href}
                  className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <PublicSeoFooter
        currentCityName={city.name}
        currentSpecialtySlug={keywordPage.specialtySlug}
      />
    </main>
  );
}
