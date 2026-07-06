import type { Metadata } from "next";
import Link from "next/link";

import PublicSeoFooter from "@/components/PublicSeoFooter";
import { SEO_KEYWORD_PAGES } from "@/lib/data/seoDirectory";
import { generateJsonLdCollectionPage, generateJsonLdItemList } from "@/lib/seoHelpers";

export const metadata: Metadata = {
  title: "Baraat Service Keywords Directory",
  description:
    "Browse high-intent baraat service keyword pages mapped to real city and service landing pages for faster discovery and indexing.",
  alternates: {
    canonical: "/baraat-services",
  },
  openGraph: {
    title: "Baraat Service Keywords Directory",
    description:
      "Browse high-intent baraat service keyword pages mapped to real city and service landing pages for faster discovery and indexing.",
    url: "/baraat-services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baraat Service Keywords Directory",
    description:
      "Browse high-intent baraat service keyword pages mapped to real city and service landing pages for faster discovery and indexing.",
  },
};

export default function BaraatServicesPage() {
  const jsonLdCollectionPage = generateJsonLdCollectionPage(
    "Baraat services keyword directory",
    "Commercial-intent keyword pages connected to city and service landing pages.",
    "https://planmybaraat.com/baraat-services"
  );
  const jsonLdItemList = generateJsonLdItemList(
    SEO_KEYWORD_PAGES.map((page) => ({
      name: page.label,
      url: `https://planmybaraat.com${page.href}`,
    }))
  );

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

      <section className="border-b border-stone-200 bg-[#F8F4EE]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            Keyword directory
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl">
            Baraat service pages built for faster indexing
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            These keyword pages connect high-intent searches to real city, service, and
            area landing pages so search engines can discover your commercial pages
            faster.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {SEO_KEYWORD_PAGES.map((page) => (
            <Link
              key={page.slug}
              href={page.href}
              className="rounded-[24px] border border-stone-200 bg-[#F8F4EE] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                {page.cityName}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-stone-950">{page.label}</h2>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Keyword-led landing page mapped to the city hub, service hub, and local
                area pages.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <PublicSeoFooter />
    </main>
  );
}
