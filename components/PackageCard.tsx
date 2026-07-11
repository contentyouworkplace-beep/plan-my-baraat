"use client";

import { Check, Crown, MessageCircle } from "lucide-react";

import type { BaraatPackage } from "@/lib/packagesData";

interface PackageCardProps {
  pkg: BaraatPackage;
  featured?: boolean;
  onEnquire: (pkg: BaraatPackage) => void;
}

export default function PackageCard({ pkg, featured, onEnquire }: PackageCardProps) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden border p-7 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "border-[#E70D1D]/50 bg-white/65 backdrop-blur-xl"
          : "border-black/10 bg-white/45 backdrop-blur-xl hover:border-[#E70D1D]/30"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.58),rgba(255,255,255,0.18)_38%,rgba(255,255,255,0.06))]" />

      {featured ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E70D1D] px-4 py-1 text-[9px] font-black uppercase tracking-widest text-white">
          Most Popular
        </span>
      ) : null}

      <div className="relative z-10 mb-4 flex h-11 w-11 items-center justify-center border border-[#E70D1D]/30 text-[#E70D1D]">
        <Crown className="h-5 w-5" />
      </div>

      <h3 className="relative z-10 font-serif text-xl font-black tracking-wide text-black">
        {pkg.name}
      </h3>
      <span className="relative z-10 mt-1 text-[10px] font-bold uppercase tracking-widest text-[#E70D1D]">
        {pkg.tagline}
      </span>
      <p className="relative z-10 mt-3 text-xs leading-relaxed text-black/50">{pkg.description}</p>

      <div className="relative z-10 mt-4">
        <div className="inline-flex items-center rounded-full border border-[#E70D1D]/20 bg-white/55 px-4 py-2 backdrop-blur-lg">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
            Quote
          </span>
          <span className="mx-2 h-1 w-1 rounded-full bg-[#E70D1D]/45" />
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[#E70D1D]">
            Tailored Pricing
          </span>
          <span className="ml-3 flex">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E70D1D]/80 animate-[ping_1.8s_ease-in-out_infinite]" />
          </span>
        </div>
      </div>

      <ul className="relative z-10 mt-5 flex-1 space-y-2.5">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2.5 text-xs leading-snug">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E70D1D]" />
            <span className="text-black/75">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onEnquire(pkg)}
        className={`relative z-10 mt-7 flex h-12 w-full items-center justify-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 ${
          featured ? "bg-[#E70D1D] hover:bg-[#c40d1a]" : "bg-black hover:bg-[#E70D1D]"
        }`}
      >
        <MessageCircle className="h-4 w-4" />
        Enquire on WhatsApp
      </button>
    </div>
  );
}
