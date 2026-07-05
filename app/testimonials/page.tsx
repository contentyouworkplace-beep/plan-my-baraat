"use client";

import React from "react";
import { Star, MessageCircle } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { TESTIMONIALS } from "@/lib/siteContent";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans relative">
      <SiteHeader />

      <div className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 text-center space-y-3">
          <span className="text-[9px] uppercase text-[#C9A24B] font-bold tracking-widest block">What Families Say</span>
          <h1 className="font-serif font-black text-3xl md:text-5xl text-white tracking-wide">Testimonials</h1>
          <p className="text-white/50 text-xs md:text-sm max-w-2xl mx-auto">
            Real words from families who trusted us with their baraat — across Vadodara, Ahmedabad and Surat.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 bg-[#0F0F0F] border border-white/10 text-center relative overflow-hidden flex flex-col">
                <div className="flex items-center justify-center gap-1 text-[#C9A24B] mb-4">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <p className="font-serif italic text-xs md:text-sm text-white/80 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#C9A24B] mt-5">{t.name} • {t.place}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
          <a
            href="https://wa.me/918830612287"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 h-12 px-8 bg-[#C9A24B] hover:bg-[#dfc282] text-black font-extrabold uppercase tracking-widest text-xs transition-all duration-350"
          >
            <MessageCircle className="h-4 w-4" />
            Start Your Own Baraat Story
          </a>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
