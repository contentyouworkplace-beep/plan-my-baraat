"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

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

export default function SiteHeader({
  wishlistCount = 0,
  onWishlistClick,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E70D1D]/15 bg-[rgba(248,244,238,0.95)] backdrop-blur-md shadow-sm">
      <div className="h-[3px] bg-[#E70D1D]" />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex cursor-pointer select-none flex-col items-start gap-0.5">
          <Image
            src="/logo.png"
            alt="PlanMyBaraat"
            width={170}
            height={46}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="text-[9px] font-bold uppercase leading-tight tracking-widest text-black">
            Managed by Ronak
          </span>
          <span className="text-[7px] font-medium uppercase leading-tight tracking-widest text-black/40">
            CEO &amp; Director, Safawala.com
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-200 ${
                  active
                    ? "border-[#E70D1D]/40 text-[#E70D1D]"
                    : "border-transparent text-black/50 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {onWishlistClick ? (
            <button
              onClick={onWishlistClick}
              className="relative border border-black/10 p-3 text-black/70 transition-all hover:border-[#E70D1D]/30 hover:text-[#E70D1D]"
              title="View Shortlist"
            >
              <Heart
                className={`h-4.5 w-4.5 ${wishlistCount > 0 ? "fill-[#E70D1D] text-[#E70D1D]" : ""}`}
              />
              {wishlistCount > 0 ? (
                <span className="absolute -right-1.5 -top-1.5 flex h-5.5 w-5.5 items-center justify-center rounded-full border-2 border-[#F8F4EE] bg-[#E70D1D] text-[10px] font-black text-white">
                  {wishlistCount}
                </span>
              ) : null}
            </button>
          ) : null}

          <button
            onClick={() => setMobileOpen((value) => !value)}
            className="border border-black/10 p-3 text-black/70 transition-all hover:border-[#E70D1D]/30 hover:text-[#E70D1D] lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav className="border-t border-[#E70D1D]/15 bg-[#F8F4EE] lg:hidden">
          <div className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-black/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black/60 transition-colors hover:text-[#E70D1D]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
