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
import { BARAAT_CITY_CONTENT } from "@/lib/data/baraatCityContent";
import { BARAAT_PACKAGES } from "@/lib/packagesData";
import { SITE_IMAGES } from "@/lib/siteImages";
import { WHATSAPP_NUMBER } from "@/lib/seoHelpers";
import {
  generateJsonLdBreadcrumbGeneric,
  generateJsonLdServiceGeneric,
  generateJsonLdFAQGeneric,
} from "@/lib/seoHelpers";

const BASE_URL = "https://planmybaraat.com";

export function generateStaticParams() {
  return Object.keys(BARAAT_CITY_CONTENT).map((slug) => ({ location: slug }));
}

function paragraphs(text: string) {
  return text.split("\n\n");
}

export async function generateMetadata({
  params,
}: {
  params: { location: string };
}): Promise<Metadata> {
  const loc = getLocationBySlug(params.location);
  const content = BARAAT_CITY_CONTENT[params.location];
  if (!loc || !content) return {};

  const title = `Baraat Packages in ${loc.name}`;
  const description = `DJ truck, dhol team, vintage car, and safa styling for your baraat in ${loc.name}, ${loc.state}. Four curated packages, real pricing guidance, one WhatsApp enquiry.`;
  const canonical = `/${params.location}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "PlanMyBaraat",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function LocationPage({
  params,
}: {
  params: { location: string };
}) {
  const loc = getLocationBySlug(params.location);
  const content = BARAAT_CITY_CONTENT[params.location];

  if (!loc || !content) notFound();

  const parent = loc.parentCity
    ? ALL_BARAAT_LOCATIONS.find((l) => l.slug === loc.parentCity && l.type === "city")
    : undefined;
  const displayRegion = parent ? `${loc.name}, ${parent.name}` : `${loc.name}, ${loc.state}`;

  const waText = encodeURIComponent(
    `Hi PlanMyBaraat!\n\nI'm looking for baraat package services in ${loc.name}${parent ? `, ${parent.name}` : ""}. Please share package details and availability.`
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  const breadcrumbItems = [
    { name: "Home", url: BASE_URL },
    ...(parent ? [{ name: parent.name, url: `${BASE_URL}/${parent.slug}` }] : []),
    { name: loc.name, url: `${BASE_URL}/${loc.slug}` },
  ];

  const jsonLdBreadcrumb = generateJsonLdBreadcrumbGeneric(breadcrumbItems);
  const jsonLdService = generateJsonLdServiceGeneric({
    name: `Baraat Package Services in ${loc.name}`,
    description: `DJ truck, dhol team, vintage car, and safa styling for baraat processions in ${loc.name}, ${loc.state}.`,
    areaServedName: displayRegion,
    url: `${BASE_URL}/${loc.slug}`,
  });
  const jsonLdFaq = generateJsonLdFAQGeneric(content.faqs);

  const childAreas = ALL_BARAAT_LOCATIONS.filter(
    (l) => l.parentCity === loc.slug && (l.type === "area" || l.type === "town")
  );

  const sections: Array<{ eyebrow: string; heading: string; body: string }> = [
    { eyebrow: "Local Area", heading: `Where we work in ${loc.name}`, body: content.localArea },
    { eyebrow: "What's Included", heading: "What every package includes", body: content.whatsIncluded },
    { eyebrow: "Why PlanMyBaraat", heading: `Why families in ${loc.name} choose us`, body: content.whyUs },
    { eyebrow: "Pricing", heading: "How pricing works", body: content.pricingGuidance },
    { eyebrow: "Planning", heading: "Planning your baraat entry", body: content.planningNotes },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdBreadcrumb }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdService }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdFaq }} />

      <SiteHeader />

      <main className="bg-[#fcfbf9] text-[#1c1917]">
        {/* ── Hero ── */}
        <section className="border-b border-black/8 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <nav className="mb-3 flex items-center justify-center gap-1 text-[9px] uppercase tracking-wide text-black/30">
              <Link href="/" className="hover:text-[#9F1239]">Home</Link>
              <span>/</span>
              {parent ? (
                <>
                  <Link href={`/${parent.slug}`} className="hover:text-[#9F1239]">{parent.name}</Link>
                  <span>/</span>
                </>
              ) : null}
              <span className="text-black/50">{loc.name}</span>
            </nav>

            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9F1239]">
              {displayRegion}
            </span>
            <h1 className="mt-3 font-serif text-4xl font-black leading-tight tracking-wide text-black sm:text-5xl">
              Baraat Packages in {loc.name}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
              A double-decker DJ truck, a dhol team, a vintage car, and safa styling —
              booked as one package for your baraat entry in {loc.name}.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-xl">
          <LeadCaptureForm variant="hero" defaultLocation={loc.name} />
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[28px]">
            <Image
              src={SITE_IMAGES.heroFloral}
              alt={`Baraat procession in ${loc.name}`}
              width={1600}
              height={1000}
              className="h-auto w-full object-cover"
              priority={false}
            />
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-4 text-[0.95rem] leading-relaxed text-black/70">
            {paragraphs(content.intro).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* ── Packages ── */}
        <section className="border-y border-black/8 bg-[#F8F4EE] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9F1239]">
                Our Packages
              </span>
              <h2 className="mt-2 font-serif text-2xl font-black tracking-wide text-black sm:text-3xl">
                Choose your entry for {loc.name}
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

        {/* ── Body sections ── */}
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

        {/* ── FAQ ── */}
        <section className="border-t border-black/8 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9F1239]">
              Common Questions
            </span>
            <h2 className="mt-2 font-serif text-2xl font-black tracking-wide text-black">
              FAQs for a baraat in {loc.name}
            </h2>
            <div className="mt-6">
              <FAQAccordion
                faqs={content.faqs.map((f) => ({ question: f.q, answer: f.a }))}
              />
            </div>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="bg-[#1c1917] px-4 py-16 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <h2 className="font-serif text-2xl font-black tracking-wide text-white sm:text-3xl">
              Ready to plan your baraat in {loc.name}?
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
        {/* ── Areas mesh ── */}
        {childAreas.length > 0 ? (
          <section className="border-t border-black/8 bg-[#f7f1ea] px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <SeoLinkBlock
                title={`Areas we serve in ${loc.name}`}
                summary={`${childAreas.length} localities across ${loc.name} where we run baraat packages.`}
                items={childAreas.map((a) => ({ label: a.name, href: `/${a.slug}` }))}
              />
            </div>
          </section>
        ) : null}
      </main>

      <SiteFooter />
    </>
  );
}
