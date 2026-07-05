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
  Check,
  Mail,
  Clock,
  Play,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PackageCard from "@/components/PackageCard";
import PackageEnquiryModal from "@/components/PackageEnquiryModal";
import { BARAAT_PACKAGES, BaraatPackage } from "@/lib/packagesData";
import { SITE_IMAGES } from "@/lib/siteImages";
import { ABOUT_POINTS, TESTIMONIALS, CONTACT_DETAILS, GALLERY_IMAGES, GALLERY_VIDEOS } from "@/lib/siteContent";

const CONTACT_ICONS = { PhoneCall, Mail, MapPin, Clock };

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

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<BaraatPackage | null>(null);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans relative">
      <SiteHeader />

      <div className="flex-grow">
        {/* Hero — split layout with photography */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 opacity-40">
            <Image src={SITE_IMAGES.traditionalCouple} alt="" fill className="object-cover grayscale" priority />
          </div>
          <div className="absolute inset-0 bg-white/80" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left: copy */}
            <div className="space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 border border-[#E70D1D]/30 px-5 py-1.5 text-[10px] md:text-[11px] font-bold text-[#E70D1D] tracking-widest uppercase">
                <Award className="h-3.5 w-3.5" />
                <span>Gujarat&apos;s Trusted Baraat Specialists</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-wide leading-tight text-black">
                Your Baraat.
                <br />
                <span className="text-[#E70D1D]">Royally Reimagined.</span>
              </h1>

              <p className="text-black/60 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                Double-decker DJ trucks, dhol, pyro, vintage cars and safa teams — assembled into four ready-made
                packages so your entry is unforgettable and your planning is effortless.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2.5 h-12 px-8 bg-[#E70D1D] hover:bg-[#c40d1a] text-white font-extrabold uppercase tracking-widest text-xs transition-all duration-350"
                >
                  <MessageCircle className="h-4 w-4" />
                  Explore Packages
                </a>
              </div>
            </div>

            {/* Right: image collage */}
            <div className="relative h-[360px] sm:h-[420px] lg:h-[480px]">
              <div className="absolute top-0 right-0 w-[72%] h-[78%] overflow-hidden border border-[#E70D1D]/25">
                <Image src={SITE_IMAGES.heroMain} alt="Royal Indian wedding celebration" fill className="object-cover grayscale-[15%]" priority />
              </div>
              <div className="absolute bottom-0 left-0 w-[58%] h-[55%] overflow-hidden border border-[#E70D1D]/25">
                <Image src={SITE_IMAGES.heroFloral} alt="Gold floral wedding decor" fill className="object-cover grayscale-[15%]" />
              </div>
              <div className="absolute bottom-6 right-4 bg-white border border-[#E70D1D]/30 px-5 py-3.5 flex items-center gap-3 shadow-md">
                <div className="h-9 w-9 border border-[#E70D1D]/30 flex items-center justify-center text-[#E70D1D]">
                  <Users className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="font-serif font-black text-sm text-black leading-none">500+ Baraats</p>
                  <p className="text-[9px] uppercase tracking-widest text-black/40 mt-1">Delivered Since 2021</p>
                </div>
              </div>
              <p className="absolute bottom-0 right-4 translate-y-[calc(100%+10px)] text-[9px] uppercase tracking-widest text-black/40 font-bold text-right">
                Proudly Serving the Wedding Industry Since Our 3rd Generation
              </p>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-y border-black/10 bg-[#F7F7F7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="h-11 w-11 border border-[#E70D1D]/25 text-[#E70D1D] flex items-center justify-center">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-serif font-black text-xl md:text-2xl text-black">{s.value}</span>
                <span className="text-[9px] uppercase tracking-widest text-black/40 font-bold">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] sm:h-[380px] lg:h-[440px] order-2 lg:order-1">
            <div className="absolute inset-0 overflow-hidden border border-[#E70D1D]/25">
              <Image src={SITE_IMAGES.goldCrownMoment} alt="PlanMyBaraat team at a wedding celebration" fill className="object-cover grayscale-[15%]" />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-[9px] uppercase text-[#E70D1D] font-bold tracking-widest block">About Us</span>
            <h2 className="font-serif font-black text-2xl md:text-4xl text-black tracking-wide">
              Gujarat&apos;s Trusted Name in Baraat Celebrations
            </h2>
            <p className="text-black/60 text-sm leading-relaxed">
              PlanMyBaraat by Ronak brings together everything a groom&apos;s entry needs — double-decker DJ trucks,
              vintage cars, dhol artists, pyro effects, and safa teams — under one roof, so families can focus on
              celebrating instead of coordinating five different vendors.
            </p>
            <ul className="space-y-3">
              {ABOUT_POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-black/70">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-[#E70D1D]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
          <div className="text-center space-y-1">
            <span className="text-[9px] uppercase text-[#E70D1D] font-bold tracking-widest block">Simple Process</span>
            <h2 className="font-serif font-black text-2xl md:text-4xl text-black tracking-wide">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="relative bg-white border border-black/10 p-7 shadow-sm">
                <span className="absolute -top-4 -left-2 font-serif font-black text-5xl text-black/5">0{i + 1}</span>
                <div className="h-11 w-11 border border-[#E70D1D]/25 text-[#E70D1D] flex items-center justify-center mb-4 relative z-10">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif font-black text-lg text-black relative z-10">{step.title}</h3>
                <p className="text-xs text-black/50 leading-relaxed mt-2 relative z-10">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
          <div className="text-center space-y-1">
            <span className="text-[9px] uppercase text-[#E70D1D] font-bold tracking-widest block">Curated Baraat Packages</span>
            <h2 className="font-serif font-black text-2xl md:text-4xl text-black tracking-wide">Choose Your Royal Experience</h2>
            <p className="text-black/50 text-xs md:text-sm max-w-2xl mx-auto pt-2">
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
        <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
          <div className="text-center space-y-1">
            <span className="text-[9px] uppercase text-[#E70D1D] font-bold tracking-widest block">Moments We Love</span>
            <h2 className="font-serif font-black text-2xl md:text-4xl text-black tracking-wide">From Real Celebrations</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {GALLERY_IMAGES.slice(0, 5).map((g, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group border border-black/10 ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:h-full" : "aspect-square"}`}
              >
                <Image src={g.src} alt={g.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] uppercase font-bold tracking-widest text-white">{g.label}</span>
              </div>
            ))}

            {/* Video placeholder tile */}
            <div className="relative overflow-hidden group border border-black/10 aspect-square bg-[#F7F7F7]">
              <Image src={GALLERY_VIDEOS[0].thumb} alt={GALLERY_VIDEOS[0].label} fill className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-[#E70D1D] flex items-center justify-center">
                  <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                </div>
              </div>
              <span className="absolute top-3 right-3 text-[9px] font-bold text-white bg-black/60 px-2 py-0.5">{GALLERY_VIDEOS[0].duration}</span>
              <span className="absolute bottom-3 left-3 text-[10px] uppercase font-bold tracking-widest text-white">{GALLERY_VIDEOS[0].label}</span>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2.5 h-12 px-8 border border-black/20 text-black font-extrabold uppercase tracking-widest text-xs hover:border-[#E70D1D]/50 hover:text-[#E70D1D] transition-all duration-350"
            >
              View Full Gallery
            </a>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
          <div className="text-center space-y-1">
            <span className="text-[9px] uppercase text-[#E70D1D] font-bold tracking-widest block">What Families Say</span>
            <h2 className="font-serif font-black text-2xl md:text-4xl text-black tracking-wide">Testimonials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div key={i} className="p-8 bg-white border border-black/10 text-center relative overflow-hidden flex flex-col shadow-sm">
                <div className="flex items-center justify-center gap-1 text-[#E70D1D] mb-4">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <p className="font-serif italic text-xs md:text-sm text-black/80 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#E70D1D] mt-5">{t.name} • {t.place}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/testimonials"
              className="inline-flex items-center gap-2.5 h-12 px-8 border border-black/20 text-black font-extrabold uppercase tracking-widest text-xs hover:border-[#E70D1D]/50 hover:text-[#E70D1D] transition-all duration-350"
            >
              View All Testimonials
            </a>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
          <div className="text-center space-y-1">
            <span className="text-[9px] uppercase text-[#E70D1D] font-bold tracking-widest block">Get In Touch</span>
            <h2 className="font-serif font-black text-2xl md:text-4xl text-black tracking-wide">Contact Us</h2>
            <p className="text-black/50 text-xs md:text-sm max-w-2xl mx-auto pt-2">
              Have a question before you enquire? Reach us directly — we usually reply within minutes on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_DETAILS.map((c, i) => {
              const Icon = CONTACT_ICONS[c.iconName];
              return (
                <div key={i} className="bg-white border border-black/10 p-6 space-y-3 shadow-sm">
                  <div className="h-10 w-10 border border-[#E70D1D]/25 text-[#E70D1D] flex items-center justify-center">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-black/40 font-bold block">{c.label}</span>
                  {"href" in c ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-xs text-black/80 hover:text-[#E70D1D] transition-colors leading-relaxed block">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-xs text-black/80 leading-relaxed">{c.value}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/918830612287"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 h-12 px-8 bg-[#E70D1D] hover:bg-[#c40d1a] text-white font-extrabold uppercase tracking-widest text-xs transition-all duration-350"
            >
              <MessageCircle className="h-4 w-4" />
              Chat With Us on WhatsApp
            </a>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative overflow-hidden">
          <div className="relative h-[280px] md:h-[340px]">
            <Image src={SITE_IMAGES.ctaBanner} alt="Book your baraat celebration" fill className="object-cover grayscale-[30%]" />
            <div className="absolute inset-0 bg-white/85" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="text-center md:text-left space-y-2">
                  <h2 className="font-serif font-black text-2xl md:text-4xl text-black tracking-wide">Ready to Plan Your Baraat?</h2>
                  <p className="text-black/60 text-xs md:text-sm">Tell us your name, event, and number — we&apos;ll take it from there.</p>
                </div>
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center gap-2.5 h-12 px-8 bg-[#E70D1D] hover:bg-[#c40d1a] text-white font-extrabold uppercase tracking-widest text-xs transition-all duration-350 mx-auto md:mx-0"
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
