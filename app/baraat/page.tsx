import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { BARAAT_CITIES, BARAAT_AREAS, BARAAT_TOWNS } from "@/lib/data/baraatLocations";

export const metadata: Metadata = {
  title: "Baraat Package Locations | PlanMyBaraat",
  description: "Find PlanMyBaraat's baraat package services across Gujarat, Mumbai, Delhi NCR and Bengaluru — city by city, area by area.",
};

export default function LocationsIndexPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans relative">
      <SiteHeader />

      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[9px] uppercase text-[#E70D1D] font-bold tracking-widest block">Service Areas</span>
          <h1 className="font-serif font-black text-3xl md:text-5xl text-black tracking-wide">Where We Deliver Baraats</h1>
          <p className="text-black/60 text-sm max-w-2xl mx-auto">
            Browse by city to see the specific areas we cover, or find your town below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BARAAT_CITIES.map((c) => {
            const areasForCity = BARAAT_AREAS.filter((a) => a.parentCity === c.slug);
            return (
              <div key={c.slug} className="border border-black/10 p-5 space-y-3">
                <Link href={`/baraat/${c.slug}`} className="font-serif font-black text-base text-black hover:text-[#E70D1D] transition-colors block">
                  {c.name}
                </Link>
                <p className="text-[10px] text-black/40 uppercase tracking-widest">{c.state}</p>
                {areasForCity.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {areasForCity.slice(0, 6).map((a) => (
                      <Link key={a.slug} href={`/baraat/${a.slug}`} className="text-[10px] px-2 py-1 border border-black/10 text-black/60 hover:border-[#E70D1D]/40 hover:text-[#E70D1D] transition-colors">
                        {a.name}
                      </Link>
                    ))}
                    {areasForCity.length > 6 && (
                      <Link href={`/baraat/${c.slug}`} className="text-[10px] px-2 py-1 text-[#E70D1D] font-bold">
                        +{areasForCity.length - 6} more
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="space-y-3">
          <h2 className="font-serif font-black text-lg text-black tracking-wide">Also Serving</h2>
          <div className="flex flex-wrap gap-2">
            {BARAAT_TOWNS.map((t) => (
              <Link key={t.slug} href={`/baraat/${t.slug}`} className="text-xs px-3 py-1.5 border border-black/10 text-black/60 hover:border-[#E70D1D]/40 hover:text-[#E70D1D] transition-colors">
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
