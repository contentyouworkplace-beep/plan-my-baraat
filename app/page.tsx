"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Star,
  MapPin,
  Users,
  Award,
  PhoneCall,
  Search,
  Palette,
  PartyPopper,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PackageCard from "@/components/PackageCard";
import PackageEnquiryModal from "@/components/PackageEnquiryModal";
import { BARAAT_PACKAGES, BaraatPackage } from "@/lib/packagesData";
import { SITE_IMAGES } from "@/lib/siteImages";

const STATS = [
  { icon: PartyPopper, value: "500+", label: "Baraats Organized" },
  { icon: MapPin, value: "6", label: "Cities Covered" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Award, value: "5 Yrs", label: "In Business" },
];

const STEPS = [
  {
    icon: Search,
    title: "Pick a Package",
    text: "Browse Raj Tilak, Rajwada, Maharaja or Signature and shortlist what fits your celebration.",
  },
  {
    icon: PhoneCall,
    title: "Share Your Details",
    text: "Send your name, event, and number — our team calls you back within hours.",
  },
  {
    icon: Palette,
    title: "Customize & Confirm",
    text: "We tailor the truck branding, dhol count, lights and effects to your baraat, then lock the date.",
  },
];

const GALLERY = [
  { src: SITE_IMAGES.coupleGolden, label: "Golden Hour Vows" },
  { src: SITE_IMAGES.traditionalCouple, label: "Traditional Attire" },
  { src: SITE_IMAGES.confettiCelebration, label: "Confetti Celebration" },
  { src: SITE_IMAGES.floralCanopy, label: "Floral Canopy Entry" },
  { src: SITE_IMAGES.outdoorTentEvent, label: "Grand Outdoor Setup" },
  { src: SITE_IMAGES.floralUmbrella, label: "Chhatri Procession" },
];

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<BaraatPackage | null>(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans relative">
      <SiteHeader />

      <div className="flex-grow">
        {/* Hero — split layout with photography */}
        <section className="relative overflow-hidden bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left: copy */}
            <div className="space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 border border-[#C9A24B]/30 px-5 py-1.5 text-[10px] md:text-[11px] font-bold text-[#C9A24B] tracking-widest uppercase">
                <Award className="h-3.5 w-3.5" />
                <span>Gujarat&apos;s Trusted Baraat Specialists</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-wide leading-tight text-white">
                Your Baraat.
                <br />
                <span className="text-[#C9A24B]">Royally Reimagined.</span>
              </h1>

              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                Double-decker DJ trucks, dhol, pyro, vintage cars and safa teams — assembled into four ready-made
                packages so your entry is unforgettable and your planning is effortless.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2.5 h-12 px-8 bg-[#C9A24B] hover:bg-[#dfc282] text-black font-extrabold uppercase tracking-widest text-xs transition-all duration-350"
                >
                  <MessageCircle className="h-4 w-4" />
                  Explore Packages
                </a>
                <a
                  href="/marketplace"
                  className="inline-flex items-center gap-2.5 h-12 px-8 border border-white/20 text-white font-extrabold uppercase tracking-widest text-xs hover:border-[#C9A24B]/50 hover:text-[#C9A24B] transition-all duration-350"
                >
                  Browse Marketplace
                </a>
              </div>
            </div>

            {/* Right: image collage */}
            <div className="relative h-[360px] sm:h-[420px] lg:h-[480px]">
              <div className="absolute top-0 right-0 w-[72%] h-[78%] overflow-hidden border border-[#C9A24B]/25">
                <Image src={SITE_IMAGES.heroMain} alt="Royal Indian wedding celebration" fill className="object-cover grayscale-[15%]" priority />
              </div>
              <div className="absolute bottom-0 left-0 w-[58%] h-[55%] overflow-hidden border border-[#C9A24B]/25">
                <Image src={SITE_IMAGES.heroFloral} alt="Gold floral wedding decor" fill className="object-cover grayscale-[15%]" />
              </div>
              <div className="absolute bottom-6 right-4 bg-black border border-[#C9A24B]/30 px-5 py-3.5 flex items-center gap-3">
                <div className="h-9 w-9 border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B]">
                  <Users className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="font-serif font-black text-sm text-white leading-none">500+ Baraats</p>
                  <p className="text-[9px] uppercase tracking-widest text-white/40 mt-1">Delivered Since 2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-y border-white/10 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="h-11 w-11 border border-[#C9A24B]/25 text-[#C9A24B] flex items-center justify-center">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-serif font-black text-xl md:text-2xl text-white">{s.value}</span>
                <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
          <div className="text-center space-y-1">
            <span className="text-[9px] uppercase text-[#C9A24B] font-bold tracking-widest block">Simple Process</span>
            <h2 className="font-serif font-black text-2xl md:text-4xl text-white tracking-wide">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="relative bg-[#0F0F0F] border border-white/10 p-7">
                <span className="absolute -top-4 -left-2 font-serif font-black text-5xl text-white/5">0{i + 1}</span>
                <div className="h-11 w-11 border border-[#C9A24B]/25 text-[#C9A24B] flex items-center justify-center mb-4 relative z-10">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif font-black text-lg text-white relative z-10">{step.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed mt-2 relative z-10">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
          <div className="text-center space-y-1">
            <span className="text-[9px] uppercase text-[#C9A24B] font-bold tracking-widest block">Curated Baraat Packages</span>
            <h2 className="font-serif font-black text-2xl md:text-4xl text-white tracking-wide">Choose Your Royal Experience</h2>
            <p className="text-white/50 text-xs md:text-sm max-w-2xl mx-auto pt-2">
              Every package can be customized — enquire on WhatsApp with your name, event, and number to get a
              personalized quote and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {BARAAT_PACKAGES.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} featured={i === 2} onEnquire={setSelectedPackage} />
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
          <div className="text-center space-y-1">
            <span className="text-[9px] uppercase text-[#C9A24B] font-bold tracking-widest block">Moments We Love</span>
            <h2 className="font-serif font-black text-2xl md:text-4xl text-white tracking-wide">From Real Celebrations</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {GALLERY.map((g, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group border border-white/10 ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:h-full" : "aspect-square"}`}
              >
                <Image src={g.src} alt={g.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] uppercase font-bold tracking-widest text-white">{g.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="max-w-5xl mx-auto px-4 md:px-6 pb-16 space-y-6">
          <div className="p-8 md:p-12 bg-[#0F0F0F] border border-white/10 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <div className="flex items-center justify-center gap-1 text-[#C9A24B]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="font-serif italic text-sm md:text-base text-white/80 leading-relaxed">
                &ldquo;The Maharaja package made our baraat entry unforgettable — the DJ truck, lights, and pyro
                effects had every guest recording the moment.&rdquo;
              </p>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#C9A24B]">Aditi &amp; Kunal • Vadodara Baraat</div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative overflow-hidden">
          <div className="relative h-[280px] md:h-[340px]">
            <Image src={SITE_IMAGES.ctaBanner} alt="Book your baraat celebration" fill className="object-cover grayscale-[30%]" />
            <div className="absolute inset-0 bg-black/80" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="text-center md:text-left space-y-2">
                  <h2 className="font-serif font-black text-2xl md:text-4xl text-white tracking-wide">Ready to Plan Your Baraat?</h2>
                  <p className="text-white/60 text-xs md:text-sm">Tell us your name, event, and number — we&apos;ll take it from there.</p>
                </div>
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center gap-2.5 h-12 px-8 bg-[#C9A24B] hover:bg-[#dfc282] text-black font-extrabold uppercase tracking-widest text-xs transition-all duration-350 mx-auto md:mx-0"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />

      {selectedPackage && (
        <PackageEnquiryModal pkg={selectedPackage} onClose={() => setSelectedPackage(null)} />
      )}
    </div>
  );
}
