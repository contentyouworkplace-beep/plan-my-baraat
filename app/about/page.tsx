import Image from "next/image";
import type { Metadata } from "next";
import { Award, Check, Star, Users } from "lucide-react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { ABOUT_POINTS } from "@/lib/siteContent";
import { SITE_IMAGES } from "@/lib/siteImages";

export const metadata: Metadata = {
  title: "About PlanMyBaraat",
  description:
    "Learn about PlanMyBaraat, our three-generation baraat legacy, and the team behind Gujarat's trusted baraat packages and wedding entry experiences.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About PlanMyBaraat",
    description:
      "Learn about PlanMyBaraat, our three-generation baraat legacy, and the team behind Gujarat's trusted baraat packages and wedding entry experiences.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About PlanMyBaraat",
    description:
      "Learn about PlanMyBaraat, our three-generation baraat legacy, and the team behind Gujarat's trusted baraat packages and wedding entry experiences.",
  },
};

const VALUES = [
  {
    icon: Award,
    title: "3rd Generation Legacy",
    text: "Three generations deep in the Indian wedding industry - this isn't a startup, it's a family craft.",
  },
  {
    icon: Users,
    title: "One Point of Contact",
    text: "From your first WhatsApp message to the last dhol beat, one team owns your entire baraat.",
  },
  {
    icon: Star,
    title: "In-House Fleet",
    text: "Our own double-decker DJ trucks and vintage cars - no third-party subcontracting, no delays.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#F8F4EE] font-sans text-black">
      <SiteHeader />

      <div className="flex-grow">
        <section className="relative overflow-hidden border-b border-black/10 bg-[#F8F4EE]">
          <div className="absolute inset-0 opacity-20">
            <Image src={SITE_IMAGES.goldCrownMoment} alt="" fill className="object-cover grayscale" priority />
          </div>
          <div className="absolute inset-0 bg-[rgba(248,244,238,0.86)]" />
          <div className="relative z-10 mx-auto max-w-4xl space-y-4 px-4 py-20 text-center sm:px-6 lg:px-8">
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#C9A24B]">
              About Us
            </span>
            <h1 className="font-serif text-3xl font-black tracking-wide text-black md:text-5xl">
              Gujarat&apos;s Trusted Name in Baraat Celebrations
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-black/60 md:text-base">
              PlanMyBaraat by Ronak brings together everything a groom&apos;s entry needs -
              double-decker DJ trucks, vintage cars, dhol artists, pyro effects, and
              safa teams - under one roof.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative h-[300px] sm:h-[380px] lg:h-[440px]">
            <div className="absolute inset-0 overflow-hidden border border-[#C9A24B]/25">
              <Image
                src={SITE_IMAGES.coupleGolden}
                alt="PlanMyBaraat celebration"
                fill
                className="object-cover grayscale-[15%]"
              />
            </div>
          </div>

          <div className="space-y-6">
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#C9A24B]">
              Our Story
            </span>
            <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-3xl">
              Three Generations of Baraat Craftsmanship
            </h2>
            <p className="text-sm leading-relaxed text-black/60">
              What started as a family tradition of arranging Baraat processions has grown
              into Gujarat&apos;s most trusted end-to-end baraat management brand. We&apos;ve
              managed over 500 baraats across 6 cities - always with the same promise:
              one call, one team, zero coordination headaches for the family.
            </p>
            <ul className="space-y-3">
              {ABOUT_POINTS.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-xs text-black/70">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A24B]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl space-y-10 px-4 pb-16 sm:px-6 lg:px-8">
          <div className="space-y-1 text-center">
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#C9A24B]">
              Why Families Trust Us
            </span>
            <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {VALUES.map((value, index) => (
              <div key={index} className="border border-black/10 bg-[#F8F4EE] p-7 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center border border-[#C9A24B]/25 text-[#C9A24B]">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-black text-black">{value.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-black/50">{value.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
