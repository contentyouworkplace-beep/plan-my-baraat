"use client";

import React from "react";
import { MessageCircle, PhoneCall, Mail, MapPin, Clock } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { CONTACT_DETAILS } from "@/lib/siteContent";

const CONTACT_ICONS = { PhoneCall, Mail, MapPin, Clock };

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans relative">
      <SiteHeader />

      <div className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 text-center space-y-3">
          <span className="text-[9px] uppercase text-[#C9A24B] font-bold tracking-widest block">Get In Touch</span>
          <h1 className="font-serif font-black text-3xl md:text-5xl text-white tracking-wide">Contact Us</h1>
          <p className="text-white/50 text-xs md:text-sm max-w-2xl mx-auto">
            Have a question before you enquire? Reach us directly — we usually reply within minutes on WhatsApp.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_DETAILS.map((c, i) => {
              const Icon = CONTACT_ICONS[c.iconName];
              return (
                <div key={i} className="bg-[#0F0F0F] border border-white/10 p-6 space-y-3">
                  <div className="h-10 w-10 border border-[#C9A24B]/25 text-[#C9A24B] flex items-center justify-center">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold block">{c.label}</span>
                  {"href" in c ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-xs text-white/80 hover:text-[#C9A24B] transition-colors leading-relaxed block">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-xs text-white/80 leading-relaxed">{c.value}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/918830612287"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 h-12 px-8 bg-[#C9A24B] hover:bg-[#dfc282] text-black font-extrabold uppercase tracking-widest text-xs transition-all duration-350"
            >
              <MessageCircle className="h-4 w-4" />
              Chat With Us on WhatsApp
            </a>
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
