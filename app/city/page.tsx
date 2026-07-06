import type { Metadata } from "next";
import Link from "next/link";

import PublicSeoFooter from "@/components/PublicSeoFooter";
import { DIRECTORY_CITIES, PRIORITY_CITIES } from "@/lib/data/seoDirectory";
import { CATEGORIES } from "@/lib/data/categories";
import {
  cityToSlug,
  generateJsonLdCollectionPage,
  generateJsonLdItemList,
  specialtyToSlug,
} from "@/lib/seoHelpers";

export const metadata: Metadata = {
  title: "Wedding Cities Directory",
  description:
    "Browse wedding vendor discovery pages by city and jump into service-specific landing pages across India's major wedding markets.",
  alternates: {
    canonical: "/city",
  },
  openGraph: {
    title: "Wedding Cities Directory",
    description:
      "Browse wedding vendor discovery pages by city and jump into service-specific landing pages across India's major wedding markets.",
    url: "/city",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Cities Directory",
    description:
      "Browse wedding vendor discovery pages by city and jump into service-specific landing pages across India's major wedding markets.",
  },
};

export default function CityDirectoryPage() {
  const defaultCategory = CATEGORIES[0];
  const jsonLdCollectionPage = generateJsonLdCollectionPage(
    "Wedding cities directory",
    "City discovery hub for wedding vendor and baraat planning landing pages.",
    "https://planmybaraat.com/city"
  );
  const jsonLdItemList = generateJsonLdItemList(
    PRIORITY_CITIES.map((city) => ({
      name: `${city.name} wedding vendors`,
      url: `https://planmybaraat.com/${specialtyToSlug(defaultCategory)}/${cityToSlug(city)}`,
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
            City directory
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl">
            Wedding vendor city pages built for discovery
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            Start from a city hub, then move into the exact wedding specialty and area
            page you want to rank and index quickly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <h2 className="text-2xl font-bold text-stone-950">Priority city hubs</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PRIORITY_CITIES.map((city) => (
            <Link
              key={city.name}
              href={`/${specialtyToSlug(defaultCategory)}/${cityToSlug(city)}`}
              className="overflow-hidden rounded-[26px] border border-stone-200 bg-[#F8F4EE] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${city.imageUrl})` }}
              />
              <div className="space-y-2 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  {city.state}
                </p>
                <h2 className="text-2xl font-bold text-stone-950">{city.name}</h2>
                <p className="text-sm leading-6 text-stone-600">{city.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-[#F8F4EE]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <h2 className="text-2xl font-bold text-stone-950">All target cities</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {DIRECTORY_CITIES.map((city) => (
              <Link
                key={city.name}
                href={`/${specialtyToSlug(defaultCategory)}/${cityToSlug(city)}`}
                className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <h2 className="text-2xl font-bold text-stone-950">Popular service shortcuts</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {CATEGORIES.slice(0, 10).map((category) => (
            <Link
              key={category.id}
              href={`/${specialtyToSlug(category)}`}
              className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>

      <PublicSeoFooter />
    </main>
  );
}
