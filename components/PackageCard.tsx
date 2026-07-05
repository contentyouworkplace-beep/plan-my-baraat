"use client";

import React from "react";
import { Check, MessageCircle, Crown } from "lucide-react";
import type { BaraatPackage } from "@/lib/packagesData";

interface PackageCardProps {
  pkg: BaraatPackage;
  featured?: boolean;
  onEnquire: (pkg: BaraatPackage) => void;
}

export default function PackageCard({ pkg, featured, onEnquire }: PackageCardProps) {
  return (
    <div
      className={`relative flex flex-col border p-7 transition-all duration-350 hover:-translate-y-1 ${
        featured
          ? "bg-[#141210] border-[#C9A24B]/50"
          : "bg-[#0F0F0F] border-white/10 hover:border-[#C9A24B]/30"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A24B] text-black text-[9px] font-black uppercase tracking-widest px-4 py-1">
          Most Popular
        </span>
      )}

      <div className="h-11 w-11 border border-[#C9A24B]/30 flex items-center justify-center mb-4 text-[#C9A24B]">
        <Crown className="h-5 w-5" />
      </div>

      <h3 className="font-serif font-black text-xl tracking-wide text-white">
        {pkg.name}
      </h3>
      <span className="text-[10px] uppercase font-bold tracking-widest mt-1 text-[#C9A24B]">
        {pkg.tagline}
      </span>
      <p className="text-xs mt-3 leading-relaxed text-white/50">
        {pkg.description}
      </p>

      <ul className="mt-5 space-y-2.5 flex-1">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-xs leading-snug">
            <Check className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#C9A24B]" />
            <span className="text-white/75">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onEnquire(pkg)}
        className={`mt-7 w-full h-12 font-extrabold uppercase tracking-widest text-xs flex items-center justify-center gap-2.5 transition-all duration-350 ${
          featured
            ? "bg-[#C9A24B] hover:bg-[#dfc282] text-black"
            : "bg-white hover:bg-[#C9A24B] text-black"
        }`}
      >
        <MessageCircle className="h-4 w-4" />
        Enquire on WhatsApp
      </button>
    </div>
  );
}
