import type { Metadata } from "next";

import HomeClient from "@/components/HomeClient";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "PlanMyBaraat | Wedding Vendors & Baraat Services Across India",
  description:
    "Discover verified wedding vendors, venues, and baraat services across India's most popular wedding cities. Browse by specialty, compare options, and enquire instantly on WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PlanMyBaraat | Wedding Vendors & Baraat Services Across India",
    description:
      "Discover verified wedding vendors, venues, and baraat services across India's most popular wedding cities. Browse by specialty, compare options, and enquire instantly on WhatsApp.",
    url: "/",
    siteName: "PlanMyBaraat",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlanMyBaraat | Wedding Vendors & Baraat Services Across India",
    description:
      "Discover verified wedding vendors, venues, and baraat services across India's most popular wedding cities. Browse by specialty, compare options, and enquire instantly on WhatsApp.",
  },
};

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#F8F4EE] font-sans text-black">
      <SiteHeader />
      <HomeClient />
      <SiteFooter />
    </div>
  );
}
