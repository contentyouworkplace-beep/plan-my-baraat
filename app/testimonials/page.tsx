import type { Metadata } from "next";
import { MessageCircle, Star } from "lucide-react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { TESTIMONIALS } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Testimonials | PlanMyBaraat",
  description:
    "Read testimonials from families who booked PlanMyBaraat for wedding entries, DJ trucks, dhol teams, vintage cars, and full baraat coordination.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Testimonials | PlanMyBaraat",
    description:
      "Read testimonials from families who booked PlanMyBaraat for wedding entries, DJ trucks, dhol teams, vintage cars, and full baraat coordination.",
    url: "/testimonials",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonials | PlanMyBaraat",
    description:
      "Read testimonials from families who booked PlanMyBaraat for wedding entries, DJ trucks, dhol teams, vintage cars, and full baraat coordination.",
  },
};

export default function TestimonialsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#F8F4EE] font-sans text-black">
      <SiteHeader />

      <div className="flex-grow">
        <section className="mx-auto max-w-7xl space-y-3 px-4 pb-10 pt-14 text-center sm:px-6 lg:px-8">
          <span className="block text-[9px] font-bold uppercase tracking-widest text-[#C9A24B]">
            What Families Say
          </span>
          <h1 className="font-serif text-3xl font-black tracking-wide text-black md:text-5xl">
            Testimonials
          </h1>
          <p className="mx-auto max-w-2xl text-xs text-black/50 md:text-sm">
            Real words from families who trusted us with their baraat - across
            Vadodara, Ahmedabad and Surat.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="relative flex flex-col overflow-hidden border border-black/10 bg-[#F8F4EE] p-8 text-center shadow-sm"
              >
                <div className="mb-4 flex items-center justify-center gap-1 text-[#C9A24B]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="flex-1 font-serif text-xs italic leading-relaxed text-black/80 md:text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5 text-[10px] font-bold uppercase tracking-widest text-[#C9A24B]">
                  {testimonial.name} • {testimonial.place}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 pb-16 text-center sm:px-6 lg:px-8">
          <a
            href="https://wa.me/918830612287"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2.5 bg-[#C9A24B] px-8 text-xs font-extrabold uppercase tracking-widest text-black transition-all duration-300 hover:bg-[#dfc282]"
          >
            <MessageCircle className="h-4 w-4" />
            Start Your Own Baraat Story
          </a>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
