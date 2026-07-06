import { Clock, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { CONTACT_DETAILS } from "@/lib/siteContent";

const CONTACT_ICONS = { PhoneCall, Mail, MapPin, Clock };

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-black font-sans text-white">
      <SiteHeader />

      <div className="flex-grow">
        <section className="mx-auto max-w-7xl space-y-3 px-4 pb-10 pt-14 text-center sm:px-6 lg:px-8">
          <span className="block text-[9px] font-bold uppercase tracking-widest text-[#C9A24B]">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl font-black tracking-wide text-white md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-xs text-white/50 md:text-sm">
            Have a question before you enquire? Reach us directly - we usually reply
            within minutes on WhatsApp.
          </p>
        </section>

        <section className="mx-auto max-w-7xl space-y-10 px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CONTACT_DETAILS.map((contact, index) => {
              const Icon = CONTACT_ICONS[contact.iconName];
              return (
                <div key={index} className="space-y-3 border border-white/10 bg-[#0F0F0F] p-6">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#C9A24B]/25 text-[#C9A24B]">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="block text-[9px] font-bold uppercase tracking-widest text-white/40">
                    {contact.label}
                  </span>
                  {"href" in contact ? (
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs leading-relaxed text-white/80 transition-colors hover:text-[#C9A24B]"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-xs leading-relaxed text-white/80">{contact.value}</p>
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
              className="inline-flex h-12 items-center gap-2.5 bg-[#C9A24B] px-8 text-xs font-extrabold uppercase tracking-widest text-black transition-all duration-300 hover:bg-[#dfc282]"
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
