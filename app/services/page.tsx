import Link from "next/link";

import PublicHeader from "@/components/PublicHeader";
import PublicSeoFooter from "@/components/PublicSeoFooter";
import { CATEGORIES } from "@/lib/data/categories";
import { FEATURED_CITIES } from "@/lib/data/cities";
import { cityToSlug, specialtyToSlug } from "@/lib/seoHelpers";

export const metadata = {
  title: "Wedding Services",
  description:
    "Browse wedding vendor categories and jump into city-specific service pages across India's key wedding destinations.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Wedding Services",
    description:
      "Browse wedding vendor categories and jump into city-specific service pages across India's key wedding destinations.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  const featuredCities = FEATURED_CITIES.filter((city) => !city.isInternational).slice(0, 4);

  return (
    <main className="min-h-screen bg-[#fcfbf9] text-stone-900">
      <PublicHeader />
      <section className="border-b border-stone-200 bg-[#F8F4EE]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
            Services
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl">
            Explore wedding services by category and city
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
            Start with the service you need first, then move into city-specific and
            area-specific pages for a stronger shortlist.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/${specialtyToSlug(category)}`}
              className="rounded-[24px] border border-stone-200 bg-[#F8F4EE] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                {category.group}
              </p>
              <h2 className="mt-3 text-xl font-bold text-stone-950">{category.name}</h2>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Open category pages and browse city-wise discovery routes.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-200 bg-[#F8F4EE]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
          <h2 className="text-2xl font-bold text-stone-950">Popular city shortcuts</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {featuredCities.map((city) => (
              <Link
                key={city.name}
                href={`/${specialtyToSlug(CATEGORIES[0])}/${cityToSlug(city)}`}
                className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PublicSeoFooter />
    </main>
  );
}
