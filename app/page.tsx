import Link from "next/link";

import PublicHeader from "@/components/PublicHeader";
import PublicSeoFooter from "@/components/PublicSeoFooter";
import { CATEGORIES } from "@/lib/data/categories";
import { FEATURED_CITIES } from "@/lib/data/cities";
import {
  cityToSlug,
  generateJsonLdOrganization,
  generateJsonLdWebSite,
  specialtyToSlug,
} from "@/lib/seoHelpers";

const featuredCategories = CATEGORIES.slice(0, 8);
const featuredCities = FEATURED_CITIES.slice(0, 8);

export default function RootPage() {
  const jsonLdOrganization = generateJsonLdOrganization();
  const jsonLdWebSite = generateJsonLdWebSite();

  return (
    <main className="min-h-screen bg-[#fcfbf9] text-stone-900">
      <PublicHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdOrganization }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdWebSite }}
      />
      <section className="relative overflow-hidden border-b border-stone-200 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.22),_transparent_30%),linear-gradient(135deg,#fcfbf9_0%,#f5ebe0_48%,#ead7c3_100%)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:px-10 lg:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="inline-flex rounded-full border border-stone-300 bg-white/75 px-4 py-1 text-sm font-semibold uppercase tracking-[0.22em] text-stone-700 backdrop-blur">
              Wedding discovery across India
            </p>
            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-stone-950 sm:text-5xl">
                Find verified wedding vendors and baraat services by city and specialty.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-700">
                Plan My Baraat helps couples discover venues, caterers, decorators,
                photographers, entertainment teams, and procession specialists with a
                cleaner city-first experience before deeper SEO expansion.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${specialtyToSlug(CATEGORIES[0])}`}
                className="rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
              >
                Explore specialties
              </Link>
              <Link
                href="/city"
                className="rounded-full border border-stone-400 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-700 hover:bg-white/80"
              >
                Browse cities
              </Link>
              <Link
                href="/crm/login"
                className="rounded-full border border-stone-400 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-700 hover:bg-white/80"
              >
                CRM login
              </Link>
            </div>
          </div>

          <div className="grid flex-1 gap-4 sm:grid-cols-2">
            {featuredCities.slice(0, 4).map((city, index) => (
              <Link
                key={city.name}
                href={`/${specialtyToSlug(featuredCategories[index % featuredCategories.length])}/${cityToSlug(city)}`}
                className="group overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="h-44 bg-cover bg-center"
                  style={{ backgroundImage: `url(${city.imageUrl})` }}
                />
                <div className="space-y-2 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                    {city.state}
                  </p>
                  <h2 className="text-2xl font-bold text-stone-950">{city.name}</h2>
                  <p className="text-sm leading-6 text-stone-600">{city.description}</p>
                  <span className="text-sm font-semibold text-stone-900">
                    Browse curated vendors
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Specialty hubs
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-950">
              Browse service categories with valid landing pages
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              href={`/${specialtyToSlug(category)}`}
              className="rounded-[24px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                {category.group}
              </p>
              <h3 className="mt-3 text-xl font-bold text-stone-950">{category.name}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Explore city pages and enquiry-ready landing pages for {category.name.toLowerCase()}.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            Featured cities
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-950">
            Stronger internal linking for priority wedding destinations
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredCities.map((city) => (
              <div
                key={city.name}
                className="rounded-[24px] border border-stone-200 bg-[#fcfbf9] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  {city.state}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-stone-950">{city.name}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{city.tagline}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredCategories.slice(0, 3).map((category) => (
                    <Link
                      key={`${city.name}-${category.id}`}
                      href={`/${specialtyToSlug(category)}/${cityToSlug(city)}`}
                      className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PublicSeoFooter />
    </main>
  );
}
