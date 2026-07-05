"use client";

import React from "react";
import Image from "next/image";
import { Check, Award, Users, Star } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_IMAGES } from "@/lib/siteImages";
import { ABOUT_POINTS } from "@/lib/siteContent";

const VALUES = [
  {
    icon: Award,
    title: "3rd Generation Legacy",
    text: "Three generations deep in the Indian wedding industry — this isn't a startup, it's a family craft.",
  },
  {
    icon: Users,
    title: "One Point of Contact",
    text: "From your first WhatsApp message to the last dhol beat, one team owns your entire baraat.",
  },
  {
    icon: Star,
    title: "In-House Fleet",
    text: "Our own double-decker DJ trucks and vintage cars — no third-party subcontracting, no delays.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans relative">
      <SiteHeader />

      <div className="flex-grow">
        <section className="relative overflow-hidden bg-black border-b border-white/10">
          <div className="absolute inset-0 opacity-25">
            <Image src={SITE_IMAGES.goldCrownMoment} alt="" fill className="object-cover grayscale" priority />
          </div>
          <div className="absolute inset-0 bg-black/70" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-4 relative z-10">
            <span className="text-[9px] uppercase text-[#C9A24B] font-bold tracking-widest block">About Us</span>
            <h1 className="font-serif font-black text-3xl md:text-5xl text-white tracking-wide">
              Gujarat&apos;s Trusted Name in Baraat Celebrations
            </h1>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
              PlanMyBaraat by Ronak brings together everything a groom&apos;s entry needs — double-decker DJ trucks,
              vintage cars, dhol artists, pyro effects, and safa teams — under one roof.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] sm:h-[380px] lg:h-[440px]">
            <div className="absolute inset-0 overflow-hidden border border-[#C9A24B]/25">
              <Image src={SITE_IMAGES.coupleGolden} alt="PlanMyBaraat celebration" fill className="object-cover grayscale-[15%]" />
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-[9px] uppercase text-[#C9A24B] font-bold tracking-widest block">Our Story</span>
            <h2 className="font-serif font-black text-2xl md:text-3xl text-white tracking-wide">
              Three Generations of Baraat Craftsmanship
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              What started as a family tradition of arranging Baraat processions has grown into Gujarat&apos;s most
              trusted end-to-end baraat management brand. We&apos;ve managed over 500 baraats across 6 cities —
              always with the same promise: one call, one team, zero coordination headaches for the family.
            </p>
            <ul className="space-y-3">
              {ABOUT_POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-white/70">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-[#C9A24B]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
          <div className="text-center space-y-1">
            <span className="text-[9px] uppercase text-[#C9A24B] font-bold tracking-widest block">Why Families Trust Us</span>
            <h2 className="font-serif font-black text-2xl md:text-4xl text-white tracking-wide">What Sets Us Apart</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-[#0F0F0F] border border-white/10 p-7">
                <div className="h-11 w-11 border border-[#C9A24B]/25 text-[#C9A24B] flex items-center justify-center mb-4">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif font-black text-lg text-white">{v.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed mt-2">{v.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
