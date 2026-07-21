"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useState } from "react";

import { GALLERY_IMAGES, GALLERY_VIDEOS, type GalleryVideo } from "@/lib/siteContent";

export default function GalleryClient() {
  const [tab, setTab] = useState<"photos" | "videos">("photos");
  const [activeVideo, setActiveVideo] = useState<GalleryVideo | null>(null);

  return (
    <>
      <section className="mx-auto max-w-7xl space-y-3 px-4 pb-6 pt-14 text-center sm:px-6 lg:px-8">
        <span className="block text-[9px] font-bold uppercase tracking-widest text-[#C9A24B]">
          Moments We Love
        </span>
        <h1 className="font-serif text-3xl font-black tracking-wide text-black md:text-5xl">
          Gallery
        </h1>
        <p className="mx-auto max-w-2xl text-xs text-black/50 md:text-sm">
          Photos and videos from real baraats we&apos;ve delivered across Gujarat -
          from DJ trucks to dhol to the final vintage car entry.
        </p>

        <div className="flex justify-center gap-2 pt-4">
          {[
            { id: "photos", label: `Photos (${GALLERY_IMAGES.length})` },
            { id: "videos", label: `Videos (${GALLERY_VIDEOS.length})` },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id as "photos" | "videos")}
              className={`border px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                tab === item.id
                  ? "border-[#C9A24B]/40 text-[#C9A24B]"
                  : "border-transparent text-black/50 hover:text-black"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {tab === "photos" ? (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden border border-black/10"
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white">
                  {image.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {GALLERY_VIDEOS.map((video, index) => (
              <button
                key={index}
                onClick={() => setActiveVideo(video)}
                className="group relative aspect-video overflow-hidden border border-black/10 text-left"
              >
                <Image
                  src={video.thumb}
                  alt={video.label}
                  fill
                  className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A24B] transition-colors group-hover:bg-[#dfc282]">
                    <Play className="ml-0.5 h-6 w-6 fill-black text-black" />
                  </div>
                </div>
                <span className="absolute right-3 top-3 bg-black/60 px-2 py-0.5 text-[9px] font-bold text-white">
                  {video.duration}
                </span>
                <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-widest text-white">
                  {video.label}
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {activeVideo ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative aspect-video w-full max-w-3xl border border-[#C9A24B]/25 bg-[#F8F4EE]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute right-3 top-3 z-10 bg-black/5 p-2 text-black/60 transition-colors hover:text-[#C9A24B]"
            >
              <X className="h-4 w-4" />
            </button>
            <video
              key={activeVideo.src}
              src={activeVideo.src}
              poster={activeVideo.thumb}
              controls
              autoPlay
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
