import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FAQAccordion from "@/components/FAQAccordion";
import EnquireNowButton from "@/components/EnquireNowButton";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { BARAAT_PACKAGES } from "@/lib/packagesData";
import { WHATSAPP_NUMBER } from "@/lib/seoHelpers";
import {
  generateJsonLdBreadcrumbGeneric,
  generateJsonLdServiceGeneric,
  generateJsonLdFAQGeneric,
} from "@/lib/seoHelpers";

const BASE_URL = "https://planmybaraat.com";

export function generateStaticParams() {
  return BARAAT_PACKAGES.map((pkg) => ({ id: pkg.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const pkg = BARAAT_PACKAGES.find((p) => p.id === params.id);
  if (!pkg) return {};

  const title = `${pkg.name} – ${pkg.tagline} | PlanMyBaraat`;
  const description = `${pkg.description} Full details on what's included, pricing guidance, and FAQs for the ${pkg.name} baraat package by PlanMyBaraat.`;
  const canonical = `/packages/${pkg.id}`;

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

function paragraphs(text: string) {
  return text.split("\n\n");
}

export default function PackagePage({ params }: { params: { id: string } }) {
  const pkg = BARAAT_PACKAGES.find((p) => p.id === params.id);
  if (!pkg) notFound();

  const waText = encodeURIComponent(
    `Hi PlanMyBaraat!\n\nI'm interested in the *${pkg.name}* (${pkg.tagline}).\n\nCould you share pricing and availability? Looking forward to hearing from you!`
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  const breadcrumbItems = [
    { name: "Home", url: BASE_URL },
    { name: "Packages", url: `${BASE_URL}/packages` },
    { name: pkg.name, url: `${BASE_URL}/packages/${pkg.id}` },
  ];

  const jsonLdBreadcrumb = generateJsonLdBreadcrumbGeneric(breadcrumbItems);
  const jsonLdService = generateJsonLdServiceGeneric({
    name: pkg.name,
    description: pkg.description,
    areaServedName: "Gujarat, India",
    url: `${BASE_URL}/packages/${pkg.id}`,
  });
  const jsonLdFaq = generateJsonLdFAQGeneric(pkg.faqs);

  // Tier badge colours
  const tierColors: Record<string, { bg: string; text: string; border: string }> = {
    "raj-tilak":  { bg: "bg-amber-50",   text: "text-amber-700",   border: "border-amber-200" },
    rajwada:      { bg: "bg-rose-50",    text: "text-rose-700",    border: "border-rose-200" },
    maharaja:     { bg: "bg-violet-50",  text: "text-violet-700",  border: "border-violet-200" },
    signature:    { bg: "bg-yellow-50",  text: "text-yellow-700",  border: "border-yellow-300" },
  };
  const tier = tierColors[pkg.id] ?? tierColors["raj-tilak"];

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
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center justify-center gap-1 text-[9px] uppercase tracking-wide text-black/30">
              <Link href="/" className="hover:text-[#9F1239]">Home</Link>
              <span>/</span>
              <Link href="/#packages" className="hover:text-[#9F1239]">Packages</Link>
              <span>/</span>
              <span className="text-black/50">{pkg.name}</span>
            </nav>

            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9F1239]">
              Baraat Package
            </span>
            <h1 className="mt-3 font-serif text-4xl font-black leading-tight tracking-wide text-black sm:text-5xl">
              {pkg.name}
            </h1>
            <p className="mt-2 text-base font-medium text-[#9F1239] sm:text-lg">{pkg.tagline}</p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
              {pkg.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#9F1239] px-8 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#7d0f2d]"
              >
                Chat on WhatsApp
              </a>
              <EnquireNowButton
                packageName={pkg.name}
                className="inline-flex h-12 items-center gap-2.5 rounded-full border border-black/20 px-8 text-xs font-extrabold uppercase tracking-widest text-black transition-all duration-300 hover:bg-black hover:text-white"
              >
                Enquire Now
              </EnquireNowButton>
            </div>
          </div>
        </section>

        {/* ── What's Included ── */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9F1239]">
                Full Inclusions
              </span>
              <h2 className="mt-2 font-serif text-2xl font-black tracking-wide text-black sm:text-3xl">
                What&apos;s included in {pkg.name}
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {pkg.features.map((f) => {
                const [title, ...rest] = f.split(" - ");
                const subtitle = rest.join(" - ");
                return (
                  <li
                    key={f}
                    className={`flex items-start gap-3 rounded-2xl border p-4 ${tier.bg} ${tier.border}`}
                  >
                    <span className={`mt-0.5 text-lg leading-none ${tier.text}`}>✓</span>
                    <div>
                      <p className="text-sm font-bold text-black">{title}</p>
                      {subtitle && (
                        <p className="mt-0.5 text-xs text-black/50">{subtitle}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ── Highlights ── */}
        <section className="border-y border-black/8 bg-[#F8F4EE] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9F1239]">
                Key Highlights
              </span>
              <h2 className="mt-2 font-serif text-2xl font-black tracking-wide text-black sm:text-3xl">
                What makes this package stand out
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {pkg.highlights.map((h) => (
                <div
                  key={h.heading}
                  className="flex flex-col rounded-[24px] border border-black/10 bg-white p-7 shadow-sm"
                >
                  <span className="text-4xl leading-none">{h.icon}</span>
                  <h3 className="mt-4 font-serif text-lg font-black text-black">{h.heading}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About / Long Description ── */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9F1239]">
              In Detail
            </span>
            <h2 className="mt-2 font-serif text-2xl font-black tracking-wide text-black">
              About the {pkg.name}
            </h2>
            <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-black/70">
              {paragraphs(pkg.longDescription).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Best For ── */}
        <section className="border-y border-black/8 bg-[#F8F4EE] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9F1239]">
              Ideal For
            </span>
            <h2 className="mt-2 font-serif text-2xl font-black tracking-wide text-black">
              Who should pick the {pkg.name}
            </h2>
            <ul className="mt-6 space-y-3">
              {pkg.bestFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9F1239] text-[10px] text-white">✓</span>
                  <span className="text-sm leading-relaxed text-black/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9F1239]">
              Common Questions
            </span>
            <h2 className="mt-2 font-serif text-2xl font-black tracking-wide text-black">
              FAQs for the {pkg.name}
            </h2>
            <div className="mt-6">
              <FAQAccordion
                faqs={pkg.faqs.map((f) => ({ question: f.q, answer: f.a }))}
              />
            </div>
          </div>
        </section>

        {/* ── Lead Form ── */}
        <section className="border-t border-black/8 bg-[#F8F4EE] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9F1239]">
              Get a Quote
            </span>
            <h2 className="mt-2 font-serif text-2xl font-black tracking-wide text-black sm:text-3xl">
              Book the {pkg.name} for your baraat
            </h2>
            <p className="mt-3 text-sm text-black/60">
              Fill in your details and we&apos;ll confirm availability and pricing within the hour.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-xl">
            <LeadCaptureForm variant="hero" defaultPackage={pkg.name} />
          </div>
        </section>

        {/* ── Compare Packages ── */}
        <section className="border-t border-black/8 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9F1239]">
                Compare
              </span>
              <h2 className="mt-2 font-serif text-2xl font-black tracking-wide text-black">
                Other baraat packages
              </h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {BARAAT_PACKAGES.filter((p) => p.id !== pkg.id).map((other) => (
                <Link
                  key={other.id}
                  href={`/packages/${other.id}`}
                  className="flex flex-col rounded-[20px] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="font-serif text-base font-black text-black">{other.name}</h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#9F1239]">
                    {other.tagline}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-black/50">{other.description}</p>
                  <span className="mt-4 text-xs font-bold text-black/40 underline underline-offset-2">
                    View details →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="bg-[#1c1917] px-4 py-16 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <h2 className="font-serif text-2xl font-black tracking-wide text-white sm:text-3xl">
              Ready to plan your baraat?
            </h2>
            <p className="mt-3 text-sm text-white/60">
              Message us on WhatsApp with your date and city — we&apos;ll confirm the {pkg.name} is available and send a full quote within the hour.
            </p>
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

      </main>

      <SiteFooter />
    </>
  );
}
