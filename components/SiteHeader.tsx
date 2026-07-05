"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart } from "lucide-react";

interface SiteHeaderProps {
  wishlistCount?: number;
  onWishlistClick?: () => void;
}

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/marketplace", label: "Marketplace" },
];

export default function SiteHeader({ wishlistCount = 0, onWishlistClick }: SiteHeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-[#C9A24B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer select-none">
          <Image src="/logo.png" alt="PlanMyBaraat" width={170} height={46} className="h-10 w-auto object-contain" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-205 border ${
                  active
                    ? "text-[#C9A24B] border-[#C9A24B]/40"
                    : "text-white/50 hover:text-white border-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {onWishlistClick && (
          <div className="flex items-center gap-3">
            <button
              onClick={onWishlistClick}
              className="relative p-3 border border-white/10 text-white/70 hover:text-[#C9A24B] hover:border-[#C9A24B]/30 transition-all"
              title="View Shortlist"
            >
              <Heart className={`h-4.5 w-4.5 ${wishlistCount > 0 ? "fill-[#C9A24B] text-[#C9A24B]" : ""}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 h-5.5 w-5.5 bg-[#C9A24B] text-black text-[10px] font-black rounded-full flex items-center justify-center border-2 border-black">
                  {wishlistCount}
                </span>
              )}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
