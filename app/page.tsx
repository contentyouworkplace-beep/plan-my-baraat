"use client";

import Image from "next/image";
import {
  Award,
  Check,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  PartyPopper,
  PhoneCall,
  Play,
  Search,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";

import PackageCard from "@/components/PackageCard";
import PackageEnquiryModal from "@/components/PackageEnquiryModal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { BaraatPackage } from "@/lib/packagesData";
import { BARAAT_PACKAGES } from "@/lib/packagesData";
import {
  ABOUT_POINTS,
  CONTACT_DETAILS,
  GALLERY_IMAGES,
  GALLERY_VIDEOS,
  TESTIMONIALS,
} from "@/lib/siteContent";
import { SITE_IMAGES } from "@/lib/siteImages";

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
    text: "Send your name, event, and number - our team calls you back within hours.",
  },
  {
    icon: Palette,
    title: "Customize & Confirm",
    text: "We tailor the truck branding, dhol count, lights and effects to your baraat, then lock the date.",
  },
];

export default function HomePage() {
  const [selectedPackage, setSelectedPackage] = useState<BaraatPackage | null>(null);

  return (
    <div className="relative flex min-h-screen flex-col bg-white font-sans text-black">
      <SiteHeader />

      <div className="flex-grow">
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 opacity-40">
            <Image
              src={SITE_IMAGES.traditionalCouple}
              alt=""
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-white/80" />
          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
            <div className="space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 border border-[#E70D1D]/30 px-5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#E70D1D] md:text-[11px]">
                <Award className="h-3.5 w-3.5" />
                <span>Gujarat&apos;s Trusted Baraat Specialists</span>
              </div>

              <h1 className="font-serif text-4xl font-black leading-tight tracking-wide text-black sm:text-5xl md:text-6xl">
                Your Baraat.
                <br />
                <span className="text-[#E70D1D]">Royally Reimagined.</span>
              </h1>

              <p className="mx-auto max-w-lg text-sm leading-relaxed text-black/60 md:text-base lg:mx-0">
                Double-decker DJ trucks, dhol, pyro, vintage cars and safa teams -
                assembled into four ready-made packages so your entry is unforgettable
                and your planning is effortless.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
                <a
                  href="#packages"
                  className="inline-flex h-12 items-center gap-2.5 bg-[#E70D1D] px-8 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#c40d1a]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Explore Packages
                </a>
              </div>
            </div>

            <div className="relative h-[360px] sm:h-[420px] lg:h-[480px]">
              <div className="absolute right-0 top-0 h-[78%] w-[72%] overflow-hidden border border-[#E70D1D]/25">
                <Image
                  src={SITE_IMAGES.heroMain}
                  alt="Royal Indian wedding celebration"
                  fill
                  className="object-cover grayscale-[15%]"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 h-[55%] w-[58%] overflow-hidden border border-[#E70D1D]/25">
                <Image
                  src={SITE_IMAGES.heroFloral}
                  alt="Gold floral wedding decor"
                  fill
                  className="object-cover grayscale-[15%]"
                />
              </div>
              <div className="absolute bottom-6 right-4 flex items-center gap-3 border border-[#E70D1D]/30 bg-white px-5 py-3.5 shadow-md">
                <div className="flex h-9 w-9 items-center justify-center border border-[#E70D1D]/30 text-[#E70D1D]">
                  <Users className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="font-serif text-sm font-black leading-none text-black">
                    500+ Baraats
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-widest text-black/40">
                    Delivered Since 2021
                  </p>
                </div>
              </div>
              <p className="absolute bottom-0 right-4 translate-y-[calc(100%+10px)] text-right text-[9px] font-bold uppercase tracking-widest text-black/40">
                Proudly Serving the Wedding Industry Since Our 3rd Generation
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-[#F7F7F7]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
            {STATS.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-11 w-11 items-center justify-center border border-[#E70D1D]/25 text-[#E70D1D]">
                  <stat.icon className="h-5 w-5" />
                </div>
                <span className="font-serif text-xl font-black text-black md:text-2xl">
                  {stat.value}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-black/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8"
        >
          <div className="order-2 relative h-[300px] sm:h-[380px] lg:order-1 lg:h-[440px]">
            <div className="absolute inset-0 overflow-hidden border border-[#E70D1D]/25">
              <Image
                src={SITE_IMAGES.goldCrownMoment}
                alt="PlanMyBaraat team at a wedding celebration"
                fill
                className="object-cover grayscale-[15%]"
              />
            </div>
          </div>

          <div className="order-1 space-y-6 lg:order-2">
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">
              About Us
            </span>
            <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl">
              Gujarat&apos;s Trusted Name in Baraat Celebrations
            </h2>
            <p className="text-sm leading-relaxed text-black/60">
              PlanMyBaraat by Ronak brings together everything a groom&apos;s entry
              needs - double-decker DJ trucks, vintage cars, dhol artists, pyro
              effects, and safa teams - under one roof, so families can focus on
              celebrating instead of coordinating five different vendors.
            </p>
            <ul className="space-y-3">
              {ABOUT_POINTS.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-xs text-black/70">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E70D1D]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-1 text-center">
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">
              Simple Process
            </span>
            <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <div key={index} className="relative border border-black/10 bg-white p-7 shadow-sm">
                <span className="absolute -left-2 -top-4 font-serif text-5xl font-black text-black/5">
                  0{index + 1}
                </span>
                <div className="relative z-10 mb-4 flex h-11 w-11 items-center justify-center border border-[#E70D1D]/25 text-[#E70D1D]">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="relative z-10 font-serif text-lg font-black text-black">
                  {step.title}
                </h3>
                <p className="relative z-10 mt-2 text-xs leading-relaxed text-black/50">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="packages" className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-1 text-center">
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">
              Curated Baraat Packages
            </span>
            <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl">
              Choose Your Royal Experience
            </h2>
            <p className="mx-auto max-w-2xl pt-2 text-xs text-black/50 md:text-sm">
              Every package can be customized - enquire on WhatsApp with your name,
              event, and number to get a personalized quote and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {BARAAT_PACKAGES.map((pkg, index) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                featured={index === 2}
                onEnquire={setSelectedPackage}
              />
            ))}
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-1 text-center">
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">
              Moments We Love
            </span>
            <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl">
              From Real Celebrations
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
            {GALLERY_IMAGES.slice(0, 5).map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden border border-black/10 ${
                  index === 0
                    ? "col-span-2 row-span-2 aspect-square md:h-full md:aspect-auto"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white">
                  {image.label}
                </span>
              </div>
            ))}

            <div className="group relative aspect-square overflow-hidden border border-black/10 bg-[#F7F7F7]">
              <Image
                src={GALLERY_VIDEOS[0].thumb}
                alt={GALLERY_VIDEOS[0].label}
                fill
                className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E70D1D]">
                  <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
                </div>
              </div>
              <span className="absolute right-3 top-3 bg-black/60 px-2 py-0.5 text-[9px] font-bold text-white">
                {GALLERY_VIDEOS[0].duration}
              </span>
              <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white">
                {GALLERY_VIDEOS[0].label}
              </span>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/gallery"
              className="inline-flex h-12 items-center gap-2.5 border border-black/20 px-8 text-xs font-extrabold uppercase tracking-widest text-black transition-all duration-300 hover:border-[#E70D1D]/50 hover:text-[#E70D1D]"
            >
              View Full Gallery
            </a>
          </div>
        </section>

        <section id="testimonials" className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-1 text-center">
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">
              What Families Say
            </span>
            <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl">
              Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="relative flex flex-col overflow-hidden border border-black/10 bg-white p-8 text-center shadow-sm"
              >
                <div className="mb-4 flex items-center justify-center gap-1 text-[#E70D1D]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="flex-1 font-serif text-xs italic leading-relaxed text-black/80 md:text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5 text-[10px] font-bold uppercase tracking-widest text-[#E70D1D]">
                  {testimonial.name} • {testimonial.place}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/testimonials"
              className="inline-flex h-12 items-center gap-2.5 border border-black/20 px-8 text-xs font-extrabold uppercase tracking-widest text-black transition-all duration-300 hover:border-[#E70D1D]/50 hover:text-[#E70D1D]"
            >
              View All Testimonials
            </a>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-1 text-center">
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">
              Get In Touch
            </span>
            <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl">
              Contact Us
            </h2>
            <p className="mx-auto max-w-2xl pt-2 text-xs text-black/50 md:text-sm">
              Have a question before you enquire? Reach us directly - we usually reply
              within minutes on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CONTACT_DETAILS.map((contact, index) => {
              const Icon = CONTACT_ICONS[contact.iconName];
              return (
                <div key={index} className="space-y-3 border border-black/10 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#E70D1D]/25 text-[#E70D1D]">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="block text-[9px] font-bold uppercase tracking-widest text-black/40">
                    {contact.label}
                  </span>
                  {"href" in contact ? (
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs leading-relaxed text-black/80 transition-colors hover:text-[#E70D1D]"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-xs leading-relaxed text-black/80">{contact.value}</p>
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
              className="inline-flex h-12 items-center gap-2.5 bg-[#E70D1D] px-8 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#c40d1a]"
            >
              <MessageCircle className="h-4 w-4" />
              Chat With Us on WhatsApp
            </a>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="relative h-[280px] md:h-[340px]">
            <Image
              src={SITE_IMAGES.ctaBanner}
              alt="Book your baraat celebration"
              fill
              className="object-cover grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-white/85" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                <div className="space-y-2 text-center md:text-left">
                  <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl">
                    Ready to Plan Your Baraat?
                  </h2>
                  <p className="text-xs text-black/60 md:text-sm">
                    Tell us your name, event, and number - we&apos;ll take it from there.
                  </p>
                </div>
                <a
                  href="#packages"
                  className="mx-auto inline-flex h-12 items-center justify-center gap-2.5 bg-[#E70D1D] px-8 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#c40d1a] md:mx-0"
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

      {selectedPackage ? (
        <PackageEnquiryModal pkg={selectedPackage} onClose={() => setSelectedPackage(null)} />
      ) : null}
    </div>
  );
}
