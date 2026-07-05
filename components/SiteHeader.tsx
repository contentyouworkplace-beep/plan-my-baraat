"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";

interface SiteHeaderProps {
  wishlistCount?: number;
  onWishlistClick?: () => void;
}

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" },
];

export default function SiteHeader({ wishlistCount = 0, onWishlistClick }: SiteHeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E70D1D]/15 shadow-sm">
      <div className="h-[3px] bg-[#E70D1D]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col items-start gap-0.5 cursor-pointer select-none">
          <Image src="/logo.png" alt="PlanMyBaraat" width={170} height={46} className="h-10 w-auto object-contain" priority />
          <span className="text-[9px] uppercase tracking-widest font-bold text-black leading-tight">
            Managed by Ronak
          </span>
          <span className="text-[7px] uppercase tracking-widest font-medium text-black/40 leading-tight">
            CEO &amp; Director, Safawala.com
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-205 border ${
                  active
                    ? "text-[#E70D1D] border-[#E70D1D]/40"
                    : "text-black/50 hover:text-black border-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {onWishlistClick && (
            <button
              onClick={onWishlistClick}
              className="relative p-3 border border-black/10 text-black/70 hover:text-[#E70D1D] hover:border-[#E70D1D]/30 transition-all"
              title="View Shortlist"
            >
              <Heart className={`h-4.5 w-4.5 ${wishlistCount > 0 ? "fill-[#E70D1D] text-[#E70D1D]" : ""}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 h-5.5 w-5.5 bg-[#E70D1D] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white">
                  {wishlistCount}
                </span>
              )}
            </button>
          )}

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-3 border border-black/10 text-black/70 hover:text-[#E70D1D] hover:border-[#E70D1D]/30 transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-[#E70D1D]/15 bg-white">
          <div className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black/60 hover:text-[#E70D1D] border-b border-black/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
