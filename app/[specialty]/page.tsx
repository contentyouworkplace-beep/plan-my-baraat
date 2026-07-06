import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import PublicSeoFooter from "@/components/PublicSeoFooter";
import { CITIES, FEATURED_CITIES } from "@/lib/data/cities";
import { getVendorImages } from "@/lib/data/vendorImages";
import {
  cityToSlug,
  generateJsonLdCollectionPage,
  generateJsonLdItemList,
  slugToSpecialty,
  specialtyToSlug,
} from "@/lib/seoHelpers";

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: { specialty: string };
}): Promise<Metadata> {
  const specialty = slugToSpecialty(params.specialty);
  if (!specialty) return {};

  const title = `${specialty.name} in Top Wedding Cities`;
  const description = `Explore ${specialty.name.toLowerCase()} across India's leading wedding destinations. Browse city landing pages, compare locations, and send quick WhatsApp enquiries.`;
  const image = getVendorImages(specialty.id)[0];

  return {
    title,
    description,
    alternates: {
      canonical: `/${params.specialty}`,
    },
    openGraph: {
      title,
      description,
      url: `/${params.specialty}`,
      images: [{ url: image, width: 900, height: 600 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function SpecialtyPage({
  params,
}: {
  params: { specialty: string };
}) {
  const specialty = slugToSpecialty(params.specialty);

  if (!specialty) notFound();

  const priorityCities = FEATURED_CITIES.filter((city) => !city.isInternational).slice(0, 12);
  const moreCities = CITIES.filter(
    (city) =>
      !city.isInternational &&
      !priorityCities.some((priorityCity) => priorityCity.name === city.name)
  ).slice(0, 24);
  const jsonLdCollectionPage = generateJsonLdCollectionPage(
    `${specialty.name} wedding services`,
    `Specialty hub for ${specialty.name.toLowerCase()} across top wedding cities in India.`,
    `https://planmybaraat.com/${specialtyToSlug(specialty)}`
  );
  const jsonLdItemList = generateJsonLdItemList(
    priorityCities.map((city) => ({
      name: `${specialty.name} in ${city.name}`,
      url: `https://planmybaraat.com/${specialtyToSlug(specialty)}/${cityToSlug(city)}`,
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
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
          <nav className="mb-6 text-sm text-stone-500">
            <Link href="/" className="hover:text-stone-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-semibold text-stone-900">{specialty.name}</span>
          </nav>
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              {specialty.group}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl">
              {specialty.name} across India&apos;s top wedding cities
            </h1>
            <p className="text-lg leading-8 text-stone-700">
              This hub replaces the broken intermediate route and gives every specialty a
              crawlable overview page with valid links into city-specific landing pages.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <h2 className="text-2xl font-bold text-stone-950">Featured city pages</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {priorityCities.map((city) => (
            <Link
              key={city.name}
              href={`/${specialtyToSlug(specialty)}/${cityToSlug(city)}`}
              className="overflow-hidden rounded-[26px] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${city.imageUrl})` }}
              />
              <div className="space-y-2 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  {city.state}
                </p>
                <h3 className="text-2xl font-bold text-stone-950">{city.name}</h3>
                <p className="text-sm leading-6 text-stone-600">{city.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
          <h2 className="text-2xl font-bold text-stone-950">More cities</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {moreCities.map((city) => (
              <Link
                key={city.name}
                href={`/${specialtyToSlug(specialty)}/${cityToSlug(city)}`}
                className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PublicSeoFooter currentSpecialtySlug={params.specialty} />
    </main>
  );
}
