import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import FAQAccordion from "@/components/FAQAccordion";
import PublicSeoFooter from "@/components/PublicSeoFooter";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";
import { getAreasForCity } from "@/lib/data/seoDirectory";
import { getVendorImages } from "@/lib/data/vendorImages";
import {
  areaToSlug,
  cityToSlug,
  generateAreaBodyCopy,
  generateAreaFAQs,
  generateAreaMetaDescription,
  generateJsonLdFAQ,
  generateJsonLdService,
  slugToCity,
  slugToSpecialty,
  specialtyToSlug,
} from "@/lib/seoHelpers";

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: { specialty: string; city: string; area: string };
}): Promise<Metadata> {
  const specialty = slugToSpecialty(params.specialty);
  const city = slugToCity(params.city);
  if (!specialty || !city) return {};

  const area = getAreasForCity(city.name).find((item) => areaToSlug(item) === params.area);
  if (!area) return {};

  const title = `${specialty.name} in ${area}, ${city.name}`;
  const description = generateAreaMetaDescription(specialty, city, area);
  const image = getVendorImages(specialty.id)[0];

  return {
    title,
    description,
    alternates: {
      canonical: `/${params.specialty}/${params.city}/${params.area}`,
    },
    openGraph: {
      title,
      description,
      url: `/${params.specialty}/${params.city}/${params.area}`,
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

export default function AreaPage({
  params,
}: {
  params: { specialty: string; city: string; area: string };
}) {
  const specialty = slugToSpecialty(params.specialty);
  const city = slugToCity(params.city);

  if (!specialty || !city) notFound();

  const area = getAreasForCity(city.name).find((item) => areaToSlug(item) === params.area);
  if (!area) notFound();

  const bodyCopy = generateAreaBodyCopy(specialty, city, area);
  const faqs = generateAreaFAQs(specialty, city, area);
  const images = getVendorImages(specialty.id);
  const jsonLdFaq = generateJsonLdFAQ(faqs);
  const jsonLdService = generateJsonLdService(specialty, city, area);
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
        name: specialty.name,
        item: `https://planmybaraat.com/${specialtyToSlug(specialty)}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: city.name,
        item: `https://planmybaraat.com/${specialtyToSlug(specialty)}/${cityToSlug(city)}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: area,
        item: `https://planmybaraat.com/${specialtyToSlug(specialty)}/${cityToSlug(city)}/${areaToSlug(area)}`,
      },
    ],
  });

  return (
    <main className="min-h-screen bg-[#fcfbf9] text-stone-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdFaq }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdService }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdBreadcrumb }} />

      <section className="border-b border-stone-200 bg-[#F8F4EE]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          <div>
            <nav className="mb-6 text-sm text-stone-500">
              <Link href="/" className="hover:text-stone-900">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href={`/${params.specialty}`} className="hover:text-stone-900">
                {specialty.name}
              </Link>
              <span className="mx-2">/</span>
              <Link href={`/${params.specialty}/${params.city}`} className="hover:text-stone-900">
                {city.name}
              </Link>
              <span className="mx-2">/</span>
              <span className="font-semibold text-stone-900">{area}</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              {city.name} area page
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl">
              {specialty.name} in {area}, {city.name}
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-8 text-stone-700">
              {bodyCopy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-[#F8F4EE] shadow-sm">
            <img
              src={images[0]}
              alt={`${specialty.name} in ${area}, ${city.name}`}
              className="h-80 w-full object-cover"
            />
            <div className="p-6">
              <WhatsAppInquiryForm
                specialtyName={`${specialty.name} in ${area}`}
                cityName={city.name}
                variant="hero"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <h2 className="text-2xl font-bold text-stone-950">Frequently asked questions</h2>
        <div className="mt-6">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <PublicSeoFooter currentCityName={city.name} currentSpecialtySlug={params.specialty} />
    </main>
  );
}
