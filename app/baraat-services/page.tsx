import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { BARAAT_KEYWORDS } from "@/lib/data/baraatKeywords";

export const metadata: Metadata = {
  title: "Baraat Services Guide | PlanMyBaraat",
  description: "Everything included in a PlanMyBaraat package — DJ trucks, dhol, vintage cars, safa teams, entry effects, pricing, and booking answered.",
};

export default function ServicesIndexPage() {
  const categories = Array.from(new Set(BARAAT_KEYWORDS.map((k) => k.category)));

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans relative">
      <SiteHeader />

      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[9px] uppercase text-[#E70D1D] font-bold tracking-widest block">Guide</span>
          <h1 className="font-serif font-black text-3xl md:text-5xl text-black tracking-wide">Baraat Services Guide</h1>
          <p className="text-black/60 text-sm max-w-2xl mx-auto">
            Browse by topic — every element of a PlanMyBaraat package explained, plus pricing and booking answers.
          </p>
        </div>

        {categories.map((cat) => (
          <div key={cat} className="space-y-3">
            <h2 className="font-serif font-black text-lg text-black tracking-wide border-b border-black/10 pb-2">{cat}</h2>
            <div className="flex flex-wrap gap-2">
              {BARAAT_KEYWORDS.filter((k) => k.category === cat).map((k) => (
                <Link
                  key={k.slug}
                  href={`/baraat-services/${k.slug}`}
                  className="text-xs px-3 py-1.5 border border-black/10 text-black/60 hover:border-[#E70D1D]/40 hover:text-[#E70D1D] transition-colors capitalize"
                >
                  {k.phrase}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <SiteFooter />
    </div>
  );
}
