"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { GALLERY_IMAGES, GALLERY_VIDEOS, VideoPlaceholder } from "@/lib/siteContent";

export default function GalleryPage() {
  const [tab, setTab] = useState<"photos" | "videos">("photos");
  const [activeVideo, setActiveVideo] = useState<VideoPlaceholder | null>(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans relative">
      <SiteHeader />

      <div className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6 text-center space-y-3">
          <span className="text-[9px] uppercase text-[#C9A24B] font-bold tracking-widest block">Moments We Love</span>
          <h1 className="font-serif font-black text-3xl md:text-5xl text-white tracking-wide">Gallery</h1>
          <p className="text-white/50 text-xs md:text-sm max-w-2xl mx-auto">
            Photos and videos from real baraats we&apos;ve delivered across Gujarat — from DJ trucks to dhol to the
            final vintage car entry.
          </p>

          <div className="flex justify-center gap-2 pt-4">
            {[
              { id: "photos", label: `Photos (${GALLERY_IMAGES.length})` },
              { id: "videos", label: `Videos (${GALLERY_VIDEOS.length})` },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id as "photos" | "videos")}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-205 border ${
                  tab === t.id
                    ? "text-[#C9A24B] border-[#C9A24B]/40"
                    : "text-white/50 hover:text-white border-transparent"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </section>

        {tab === "photos" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {GALLERY_IMAGES.map((g, i) => (
                <div key={i} className="relative overflow-hidden group border border-white/10 aspect-square">
                  <Image src={g.src} alt={g.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] uppercase font-bold tracking-widest text-white">{g.label}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "videos" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {GALLERY_VIDEOS.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVideo(v)}
                  className="relative overflow-hidden group border border-white/10 aspect-video text-left"
                >
                  <Image src={v.thumb} alt={v.label} fill className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-[#C9A24B] flex items-center justify-center group-hover:bg-[#dfc282] transition-colors">
                      <Play className="h-6 w-6 text-black fill-black ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 text-[9px] font-bold text-white bg-black/60 px-2 py-0.5">{v.duration}</span>
                  <span className="absolute bottom-3 left-3 text-xs uppercase font-bold tracking-widest text-white">{v.label}</span>
                </button>
              ))}
            </div>
            <p className="text-center text-[10px] text-white/30 uppercase tracking-widest mt-8">
              Video previews coming soon — placeholders shown until final footage is uploaded.
            </p>
          </section>
        )}
      </div>

      <SiteFooter />

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-3xl aspect-video bg-[#0F0F0F] border border-[#C9A24B]/25" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 p-2 bg-white/5 text-white/60 hover:text-[#C9A24B] transition-colors z-10"
            >
              <X className="h-4 w-4" />
            </button>
            <Image src={activeVideo.thumb} alt={activeVideo.label} fill className="object-cover opacity-40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
              <div className="h-16 w-16 rounded-full bg-[#C9A24B] flex items-center justify-center">
                <Play className="h-7 w-7 text-black fill-black ml-0.5" />
              </div>
              <p className="text-white font-serif font-black text-lg">{activeVideo.label}</p>
              <p className="text-white/40 text-xs uppercase tracking-widest">Video placeholder — full footage coming soon</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
