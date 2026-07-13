import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FAQAccordion from "@/components/FAQAccordion";
import EnquireNowButton from "@/components/EnquireNowButton";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import SeoLinkBlock from "@/components/SeoLinkBlock";
import { ALL_BARAAT_LOCATIONS, getLocationBySlug } from "@/lib/data/baraatLocations";
import { getSeoPageContent } from "@/lib/data/seoContentEngine";
import { BARAAT_PACKAGES } from "@/lib/packagesData";
import { SITE_IMAGES } from "@/lib/siteImages";
import { WHATSAPP_NUMBER } from "@/lib/seoHelpers";
import { CLEAN_200_KEYWORDS, SEO_KEYWORD_PAGES } from "@/lib/data/seoDirectory";

import {
  generateJsonLdBreadcrumbGeneric,
  generateJsonLdServiceGeneric,
  generateJsonLdFAQGeneric,
} from "@/lib/seoHelpers";

const BASE_URL = "https://planmybaraat.com";

export function generateStaticParams() {
  const locationSlugs = ALL_BARAAT_LOCATIONS.map((loc) => ({ location: loc.slug }));
  const seoKeywordSlugs = SEO_KEYWORD_PAGES.map((page) => ({ location: page.slug }));
  const keywordSlugs = CLEAN_200_KEYWORDS.map((kw) => ({
    location: kw
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-"),
  }));
  return [...locationSlugs, ...seoKeywordSlugs, ...keywordSlugs];
}

function paragraphs(text: string) {
  return text.split("\n\n");
}

export async function generateMetadata({
  params,
}: {
  params: { location: string };
}): Promise<Metadata> {
  const content = getSeoPageContent(params.location);
  if (!content) return {};

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `/${params.location}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `/${params.location}`,
      siteName: "PlanMyBaraat",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
    },
  };
}

export default function BaraatUnifiedPage({
  params,
}: {
  params: { location: string };
}) {
  const loc = getLocationBySlug(params.location);
  const content = getSeoPageContent(params.location);

  if (!content) notFound();

  // Determine breadcrumbs
  const breadcrumbItems = [
    { name: "Home", url: BASE_URL },
    ...(loc?.parentCity ? [{ name: loc.parentCity.toUpperCase(), url: `${BASE_URL}/${loc.parentCity}` }] : []),
    { name: loc ? loc.name : content.pageTitle, url: `${BASE_URL}/${params.location}` },
  ];

  const jsonLdBreadcrumb = generateJsonLdBreadcrumbGeneric(breadcrumbItems);
  const jsonLdService = generateJsonLdServiceGeneric({
    name: content.pageTitle,
    description: content.metaDescription,
    areaServedName: loc ? `${loc.name}, ${loc.state}` : "Gujarat",
    url: `${BASE_URL}/${params.location}`,
  });
  const jsonLdFaq = generateJsonLdFAQGeneric(content.faqs);

  const sections = [
    { eyebrow: "Local Knowledge", heading: "Baraat Operations & Logistics", body: content.localArea },
    { eyebrow: "What's Included", heading: "Baraat Package Features & Details", body: content.whatsIncluded },
    { eyebrow: "Why Choose Us", heading: "Gujarat's Professional Baraat Team", body: content.whyUs },
    { eyebrow: "Pricing", heading: "Baraat Package Pricing & Quotes", body: content.pricingGuidance },
    { eyebrow: "Planning", heading: "Procession Timing & Curfew Notes", body: content.planningNotes },
  ];

  const waText = encodeURIComponent(
    `Hi PlanMyBaraat!\n\nI am interested in ${content.pageTitle}. Please share package details and availability.`
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  // Local links navigation mesh
  let relatedLinks: { label: string; href: string }[] = [];
  if (loc) {
    if (loc.type === "city") {
      // Show areas of this city
      const childAreas = ALL_BARAAT_LOCATIONS.filter(
        (a) => a.parentCity === loc.slug && a.type === "area"
      );
      relatedLinks = childAreas.map((a) => ({ label: a.name, href: `/${a.slug}` }));
    } else if (loc.type === "area" && loc.parentCity) {
      // Show sibling areas
      const siblingAreas = ALL_BARAAT_LOCATIONS.filter(
        (a) => a.parentCity === loc.parentCity && a.type === "area" && a.slug !== loc.slug
      ).slice(0, 15);
      relatedLinks = siblingAreas.map((a) => ({ label: a.name, href: `/${a.slug}` }));
    }
  } else {
    // For keyword pages, link to major priority cities
    const priorityCities = ALL_BARAAT_LOCATIONS.filter((l) => l.type === "city").slice(0, 10);
    relatedLinks = priorityCities.map((c) => ({
      label: `${content.pageTitle} in ${c.name}`,
      href: `/${params.location}-${c.slug}`,
    }));
  }

  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: jsonLdFaq }}
      />

      <SiteHeader />

      <main className="relative flex-grow bg-[#fcfbf9] text-black">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-black/10 bg-[#F8F4EE] px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-5">
            <Image
              src={SITE_IMAGES.goldCrownMoment}
              alt=""
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl space-y-4">
            <nav className="mb-6 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-black/40">
              <Link href="/" className="hover:text-[#9F1239]">
                Home
              </Link>
              <span>/</span>
              <span className="text-black/80">{loc ? loc.name : "Guide"}</span>
            </nav>
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.24em] text-[#9F1239]">
              {loc ? `${loc.name} Baraat Services` : "Baraat Procession Guide"}
            </span>
            <h1 className="mt-3 font-serif text-4xl font-black leading-tight tracking-wide text-black sm:text-5xl">
              {content.pageTitle}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
              {content.pageSubtitle}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-xl">
            <LeadCaptureForm
              variant="hero"
              defaultLocation={loc ? loc.name : ""}
              defaultPackage=""
            />
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[28px]">
            <Image
              src={SITE_IMAGES.heroFloral}
              alt={`Baraat entry setup`}
              width={1600}
              height={1000}
              className="h-auto w-full object-cover"
              priority={false}
            />
          </div>
        </section>

        {/* Intro */}
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-4 text-[0.95rem] leading-relaxed text-black/70">
            {paragraphs(content.intro).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section className="border-y border-black/8 bg-[#F8F4EE] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9F1239]">
                Our Packages
              </span>
              <h2 className="mt-2 font-serif text-2xl font-black tracking-wide text-black sm:text-3xl">
                Choose your entry setup
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {BARAAT_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="flex flex-col rounded-[24px] border border-black/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-serif text-lg font-black text-black">{pkg.name}</h3>
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#9F1239]">
                    {pkg.tagline}
                  </span>
                  <p className="mt-2 text-xs text-black/50">{pkg.description}</p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-black/70">
                        <span className="mt-0.5 text-[#9F1239]">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center gap-2">
                    <EnquireNowButton
                      packageName={pkg.name}
                      className="flex h-11 flex-1 items-center justify-center rounded-full bg-black text-xs font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-[#9F1239]"
                    >
                      Enquire Now
                    </EnquireNowButton>
                    <a
                      href={`/packages/${pkg.id}`}
                      className="flex h-11 items-center justify-center rounded-full border border-black/15 px-4 text-[10px] font-bold uppercase tracking-widest text-black/60 transition-colors hover:border-black/30 hover:text-black"
                    >
                      View
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Body Sections */}
        {sections.map((section, idx) => (
          <section
            key={section.heading}
            className={`px-4 py-14 sm:px-6 lg:px-8 ${idx % 2 === 1 ? "bg-[#F8F4EE]" : ""}`}
          >
            <div className="mx-auto max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9F1239]">
                {section.eyebrow}
              </span>
              <h2 className="mt-2 font-serif text-2xl font-black tracking-wide text-black">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-[0.95rem] leading-relaxed text-black/70">
                {paragraphs(section.body).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* FAQs */}
        <section className="border-t border-black/8 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9F1239]">
              Common Questions
            </span>
            <h2 className="mt-2 font-serif text-2xl font-black tracking-wide text-black">
              Frequently Asked Questions
            </h2>
            <div className="mt-6">
              <FAQAccordion
                faqs={content.faqs.map((f) => ({ question: f.q, answer: f.a }))}
              />
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-[#1c1917] px-4 py-16 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <h2 className="font-serif text-2xl font-black tracking-wide text-white sm:text-3xl">
              Ready to plan your baraat procession?
            </h2>
            <p className="mt-3 text-sm text-white/60">{content.closing}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#9F1239] px-8 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#7d0f2d]"
              >
                Chat on WhatsApp
              </a>
              <EnquireNowButton className="inline-flex h-12 items-center gap-2.5 rounded-full border border-white/30 px-8 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/10">
                Get a Callback
              </EnquireNowButton>
            </div>
          </div>
        </section>

        {/* Related Links Mesh */}
        {relatedLinks.length > 0 ? (
          <section className="border-t border-black/8 bg-[#f7f1ea] px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <SeoLinkBlock
                title="Explore Other Areas & Keywords"
                summary="Browse other wedding entry solutions and locations in our Gujarat network."
                items={relatedLinks}
              />
            </div>
          </section>
        ) : null}
      </main>

      <SiteFooter />
    </>
  );
}
