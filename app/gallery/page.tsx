import type { Metadata } from "next";

import GalleryClient from "@/components/GalleryClient";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Gallery | PlanMyBaraat",
  description:
    "Browse PlanMyBaraat gallery photos and wedding baraat moments featuring DJ trucks, dhol teams, vintage cars, and celebration highlights.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | PlanMyBaraat",
    description:
      "Browse PlanMyBaraat gallery photos and wedding baraat moments featuring DJ trucks, dhol teams, vintage cars, and celebration highlights.",
    url: "/gallery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | PlanMyBaraat",
    description:
      "Browse PlanMyBaraat gallery photos and wedding baraat moments featuring DJ trucks, dhol teams, vintage cars, and celebration highlights.",
  },
};

export default function GalleryPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#F8F4EE] font-sans text-black">
      <SiteHeader />

      <div className="flex-grow">
        <GalleryClient />
      </div>

      <SiteFooter />
    </div>
  );
}
