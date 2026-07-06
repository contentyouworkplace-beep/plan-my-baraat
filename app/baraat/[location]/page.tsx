import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MessageCircle, MapPin } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ALL_BARAAT_LOCATIONS, getLocationBySlug } from "@/lib/data/baraatLocations";
import { BARAAT_PACKAGES } from "@/lib/packagesData";
import { WHATSAPP_NUMBER } from "@/lib/seoHelpers";
import { locationIntro, locationWhyUs, locationClosing } from "@/lib/data/baraatContentVariants";

export function generateStaticParams() {
  return ALL_BARAAT_LOCATIONS.map((l) => ({ location: l.slug }));
}

export function generateMetadata({ params }: { params: { location: string } }): Metadata {
  const loc = getLocationBySlug(params.location);
  if (!loc) return {};
  const title = `Baraat Package Services in ${loc.name} | PlanMyBaraat`;
  const description = `DJ truck, dhol team, vintage car, and safa styling for your baraat in ${loc.name}, ${loc.state}. Four curated packages, one WhatsApp enquiry.`;
  return { title, description };
}

export default function LocationPage({ params }: { params: { location: string } }) {
  const loc = getLocationBySlug(params.location);
  if (!loc) return notFound();

  const parent = loc.parentCity ? ALL_BARAAT_LOCATIONS.find((l) => l.slug === loc.parentCity && l.type === "city") : undefined;
  const regionPhrase = parent ? `in ${loc.name}, ${parent.name}` : `in ${loc.name}`;
  const displayRegion = parent ? `${loc.name}, ${parent.name}` : `${loc.name}, ${loc.state}`;

  const waText = encodeURIComponent(
    `Hi PlanMyBaraat! 🎊\n\nI'm looking for baraat package services in ${loc.name}${parent ? `, ${parent.name}` : ""}. Please share package details and availability.`
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans relative">
      <SiteHeader />

      <div className="flex-grow">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 text-center space-y-4">
          <nav className="text-[10px] uppercase tracking-widest text-black/40 flex items-center justify-center gap-1.5">
            <Link href="/" className="hover:text-[#E70D1D]">Home</Link>
            <span>/</span>
            {parent && <><Link href={`/baraat/${parent.slug}`} className="hover:text-[#E70D1D]">{parent.name}</Link><span>/</span></>}
            <span className="text-black/70">{loc.name}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-[#E70D1D]">
            <MapPin className="h-4 w-4" />
            <span className="text-[10px] uppercase tracking-widest font-bold">{displayRegion}</span>
          </div>

          <h1 className="font-serif font-black text-3xl md:text-5xl text-black tracking-wide">
            Baraat Package Services {regionPhrase}
          </h1>

          <p className="text-black/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {locationIntro(loc.slug, { name: loc.name, region: regionPhrase, tier: loc.type })}
          </p>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 h-12 px-8 bg-[#E70D1D] hover:bg-[#c40d1a] text-white font-extrabold uppercase tracking-widest text-xs transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4" />
            Enquire on WhatsApp
          </a>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center space-y-1">
            <span className="text-[9px] uppercase text-[#E70D1D] font-bold tracking-widest block">Our Packages</span>
            <h2 className="font-serif font-black text-2xl md:text-3xl text-black tracking-wide">
              Choose Your Royal Experience {regionPhrase}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {BARAAT_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="border border-black/10 p-6 bg-white shadow-sm">
                <h3 className="font-serif font-black text-lg text-black">{pkg.name}</h3>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E70D1D]">{pkg.tagline}</span>
                <p className="text-xs text-black/50 mt-2 mb-4">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-black/70">
                      <Check className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#E70D1D]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4">
          <h2 className="font-serif font-black text-xl md:text-2xl text-black tracking-wide">
            Why Families {regionPhrase} Choose PlanMyBaraat
          </h2>
          <p className="text-black/60 text-sm leading-relaxed">
            {locationWhyUs(loc.slug, { name: loc.name, region: regionPhrase, tier: loc.type })}
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center space-y-4">
          <p className="text-black/70 text-sm">{locationClosing(loc.slug, { name: loc.name, region: regionPhrase, tier: loc.type })}</p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 h-12 px-8 bg-[#E70D1D] hover:bg-[#c40d1a] text-white font-extrabold uppercase tracking-widest text-xs transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
