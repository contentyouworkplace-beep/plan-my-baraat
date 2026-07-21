"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface SiteHeaderProps {
  wishlistCount?: number;
  onWishlistClick?: () => void;
}

const NAV_ITEMS = [
  { href: "/", label: "Home", sectionId: "home", pageHref: "/" },
  { href: "/#about", label: "About Us", sectionId: "about", pageHref: "/about" },
  { href: "/gallery", label: "Gallery", sectionId: "gallery", pageHref: "/gallery" },
  { href: "/#testimonials", label: "Testimonials", sectionId: "testimonials", pageHref: "/testimonials" },
  { href: "/#contact", label: "Contact Us", sectionId: "contact", pageHref: "/contact" },
];

export default function SiteHeader({
  wishlistCount = 0,
  onWishlistClick,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 24);

      if (pathname !== "/") return;

      const sectionIds = ["home", "about", "gallery", "testimonials", "contact"];
      let nextActive = "home";

      for (const sectionId of sectionIds) {
        if (sectionId === "home") {
          if (window.scrollY < window.innerHeight * 0.4) {
            nextActive = "home";
          }
          continue;
        }

        const section = document.getElementById(sectionId);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 180 && rect.bottom >= 180) {
          nextActive = sectionId;
        }
      }

      setActiveSection(nextActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-black/8 bg-[rgba(248,244,238,0.95)] shadow-sm backdrop-blur-md transition-all duration-300 ${
        isCompact ? "shadow-md" : ""
      }`}
    >
      <div className="h-[3px] bg-[#9F1239]" />
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          isCompact ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" className="flex cursor-pointer select-none flex-col items-start gap-0.5">
          <Image
            src="/logo.png"
            alt="PlanMyBaraat"
            width={170}
            height={46}
            className={`w-auto object-contain transition-all duration-300 ${
              isCompact ? "h-8" : "h-10"
            }`}
            priority
          />
          <span
            className={`font-bold uppercase leading-tight tracking-widest text-black transition-all duration-300 ${
              isCompact ? "text-[8px]" : "text-[9px]"
            }`}
          >
            Managed by Ronak
          </span>
          <span
            className={`font-medium uppercase leading-tight tracking-widest text-black/40 transition-all duration-300 ${
              isCompact ? "text-[6px]" : "text-[7px]"
            }`}
          >
            CEO &amp; Director, Safawala.com
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active =
                  pathname === "/" && item.sectionId
                ? activeSection === item.sectionId
                : item.pageHref === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.pageHref);

            return (
              <Link
                key={item.label}
                href={item.pageHref}
                className={`group relative border px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-200 ${
                  active
                    ? "border-[#9F1239]/30 text-[#9F1239]"
                    : "border-transparent text-black/50 hover:text-black"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-[2px] origin-left bg-[#9F1239] transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {onWishlistClick ? (
            <button
              onClick={onWishlistClick}
              className="relative rounded-full border border-black/10 p-3 text-black/70 transition-all hover:border-[#9F1239]/20 hover:text-[#9F1239]"
              title="View Shortlist"
            >
              <Heart
                className={`h-4.5 w-4.5 ${wishlistCount > 0 ? "fill-[#9F1239] text-[#9F1239]" : ""}`}
              />
              {wishlistCount > 0 ? (
                <span className="absolute -right-1.5 -top-1.5 flex h-5.5 w-5.5 items-center justify-center rounded-full border-2 border-[#F8F4EE] bg-[#9F1239] text-[10px] font-black text-white">
                  {wishlistCount}
                </span>
              ) : null}
            </button>
          ) : null}

          <button
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-full border border-black/10 p-3 text-black/70 transition-all hover:border-[#9F1239]/20 hover:text-[#9F1239] lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav className="border-t border-black/8 bg-[#F8F4EE] lg:hidden">
          <div className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.pageHref}
                onClick={() => setMobileOpen(false)}
                className="border-b border-black/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black/60 transition-colors hover:text-[#9F1239]"
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
