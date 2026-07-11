import type { Metadata } from "next";

import PortfolioClient from "@/components/PortfolioClient";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Portfolio | PlanMyBaraat",
  description:
    "Explore PlanMyBaraat's portfolio of real baraats delivered across Gujarat, featuring Maharaja, Rajwada, and Signature package highlights.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio | PlanMyBaraat",
    description:
      "Explore PlanMyBaraat's portfolio of real baraats delivered across Gujarat, featuring Maharaja, Rajwada, and Signature package highlights.",
    url: "/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | PlanMyBaraat",
    description:
      "Explore PlanMyBaraat's portfolio of real baraats delivered across Gujarat, featuring Maharaja, Rajwada, and Signature package highlights.",
  },
};

export default function PortfolioPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#F8F4EE] font-sans text-black">
      <SiteHeader />

      <div className="flex-grow">
        <PortfolioClient />
      </div>

      <SiteFooter />
    </div>
  );
}
