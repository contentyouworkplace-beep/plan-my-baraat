"use client";

import Image from "next/image";

import { PORTFOLIO_PROJECTS } from "@/lib/siteContent";

export default function PortfolioClient() {
  return (
    <>
      <section className="mx-auto max-w-7xl space-y-3 px-4 pb-6 pt-14 text-center sm:px-6 lg:px-8">
        <span className="block text-[9px] font-bold uppercase tracking-widest text-[#C9A24B]">
          Real Baraats, Real Stories
        </span>
        <h1 className="font-serif text-3xl font-black tracking-wide text-black md:text-5xl">
          Portfolio
        </h1>
        <p className="mx-auto max-w-2xl text-xs text-black/50 md:text-sm">
          A look at baraats we&apos;ve delivered across Gujarat - the packages, the
          teams, and the moments that made each entry unforgettable.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden border border-black/10 bg-white/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute right-3 top-3 bg-[#C9A24B] px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-black">
                  {project.package}
                </span>
                <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-widest text-white">
                  {project.city}
                </span>
              </div>
              <div className="space-y-2 p-4">
                <h2 className="font-serif text-base font-black text-black">
                  {project.title}
                </h2>
                <ul className="flex flex-wrap gap-1.5">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="border border-[#C9A24B]/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-black/60"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
