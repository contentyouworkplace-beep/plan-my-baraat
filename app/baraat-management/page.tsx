import type { Metadata } from "next";
import Link from "next/link";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ALL_BARAAT_LOCATIONS } from "@/lib/data/baraatLocations";
import { SEO_KEYWORD_PAGES, BARAAT_KEYWORD_PAGES } from "@/lib/data/seoDirectory";
import { generateJsonLdCollectionPage, generateJsonLdItemList } from "@/lib/seoHelpers";

export const metadata: Metadata = {
  title: "Baraat Management Directory | PlanMyBaraat",
  description:
    "Browse high-intent baraat service keywords and location landing pages across Vadodara, Surat, Ahmedabad and all major cities in Gujarat.",
  alternates: {
    canonical: "/baraat-management",
  },
  openGraph: {
    title: "Baraat Management Directory | PlanMyBaraat",
    description:
      "Browse high-intent baraat service keywords and location landing pages across Vadodara, Surat, Ahmedabad and all major cities in Gujarat.",
    url: "/baraat-management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baraat Management Directory | PlanMyBaraat",
    description:
      "Browse high-intent baraat service keywords and location landing pages across Vadodara, Surat, Ahmedabad and all major cities in Gujarat.",
  },
};

export default function BaraatManagementDirectoryPage() {
  const jsonLdCollectionPage = generateJsonLdCollectionPage(
    "Baraat management directory",
    "Commercial-intent location and service keyword pages.",
    "https://planmybaraat.com/baraat-management"
  );
  
  const allPages = [
    ...ALL_BARAAT_LOCATIONS.map((loc) => ({
      name: `Baraat Packages in ${loc.name}`,
      href: `/baraat-management/${loc.slug}`,
      type: "Location",
    })),
    ...SEO_KEYWORD_PAGES.map((page) => ({
      name: page.label,
      href: page.href,
      type: "Service Keyword",
    })),
    ...BARAAT_KEYWORD_PAGES.map((page) => ({
      name: page.label,
      href: page.href,
      type: "Procession Guide",
    })),
  ];

  const jsonLdItemList = generateJsonLdItemList(
    allPages.map((page) => ({
      name: page.name,
      url: `https://planmybaraat.com${page.href}`,
    }))
  );

  return (
    <main className="min-h-screen bg-[#fcfbf9] text-stone-900 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdCollectionPage }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdItemList }}
      />

      <SiteHeader />

      <section className="border-b border-stone-200 bg-[#F8F4EE] flex-grow-0">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9F1239]">
            Baraat Directory
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl">
            Baraat management and service pages
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            These pages connect wedding location searches and high-intent keyword phrases
            directly to our curated baraat packages.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 flex-grow">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {allPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-[24px] border border-stone-200 bg-[#F8F4EE] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9F1239]">
                {page.type}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-stone-950">{page.name}</h2>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Keyword-led landing page pointing to our curated baraat packages.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
