import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MessageCircle } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { BARAAT_KEYWORDS, getKeywordBySlug } from "@/lib/data/baraatKeywords";
import { BARAAT_PACKAGES } from "@/lib/packagesData";
import { WHATSAPP_NUMBER } from "@/lib/seoHelpers";
import { keywordIntro } from "@/lib/data/baraatContentVariants";

export function generateStaticParams() {
  return BARAAT_KEYWORDS.map((k) => ({ keyword: k.slug }));
}

export function generateMetadata({ params }: { params: { keyword: string } }): Metadata {
  const kw = getKeywordBySlug(params.keyword);
  if (!kw) return {};
  const title = `${kw.phrase.charAt(0).toUpperCase() + kw.phrase.slice(1)} | PlanMyBaraat`;
  const description = `${kw.phrase.charAt(0).toUpperCase() + kw.phrase.slice(1)} — included as part of PlanMyBaraat's curated baraat packages. Get a WhatsApp quote today.`;
  return { title, description };
}

export default function KeywordPage({ params }: { params: { keyword: string } }) {
  const kw = getKeywordBySlug(params.keyword);
  if (!kw) return notFound();

  const waText = encodeURIComponent(
    `Hi PlanMyBaraat! 🎊\n\nI'm interested in: ${kw.phrase}. Please share package details and availability.`
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  const related = BARAAT_KEYWORDS.filter((k) => k.category === kw.category && k.slug !== kw.slug).slice(0, 6);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans relative">
      <SiteHeader />

      <div className="flex-grow">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 text-center space-y-4">
          <nav className="text-[10px] uppercase tracking-widest text-black/40 flex items-center justify-center gap-1.5">
            <Link href="/" className="hover:text-[#E70D1D]">Home</Link>
            <span>/</span>
            <span className="text-black/70">{kw.category}</span>
          </nav>

          <span className="text-[9px] uppercase text-[#E70D1D] font-bold tracking-widest block">{kw.category}</span>
          <h1 className="font-serif font-black text-2xl md:text-4xl text-black tracking-wide capitalize">
            {kw.phrase}
          </h1>

          <p className="text-black/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {keywordIntro(kw.slug, { phrase: kw.phrase, category: kw.category })}
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
            <span className="text-[9px] uppercase text-[#E70D1D] font-bold tracking-widest block">Included In Our Packages</span>
            <h2 className="font-serif font-black text-2xl md:text-3xl text-black tracking-wide">Choose Your Royal Experience</h2>
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

        {related.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-4">
            <h2 className="font-serif font-black text-lg text-black tracking-wide">Related to {kw.category}</h2>
            <div className="flex flex-wrap gap-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/baraat-services/${r.slug}`}
                  className="text-xs px-3 py-1.5 border border-black/15 text-black/70 hover:border-[#E70D1D]/40 hover:text-[#E70D1D] transition-colors capitalize"
                >
                  {r.phrase}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
