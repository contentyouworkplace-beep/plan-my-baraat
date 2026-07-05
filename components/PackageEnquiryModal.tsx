"use client";

import React, { useState } from "react";
import { X, MessageCircle, PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";
import type { BaraatPackage } from "@/lib/packagesData";
import { buildPackageWhatsAppLink } from "@/lib/seoHelpers";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

interface PackageEnquiryModalProps {
  pkg: BaraatPackage;
  onClose: () => void;
}

export default function PackageEnquiryModal({ pkg, onClose }: PackageEnquiryModalProps) {
  const [name, setName] = useState("");
  const [eventName, setEventName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Please enter your name";
    if (!eventName.trim()) newErrors.eventName = "Please enter the event name";
    if (!phone.trim() || !/^[6-9]\d{9}$/.test(phone.trim()))
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    if (supabase && isSupabaseConfigured) {
      try {
        await supabase.from("crm_baraat_enquiries").insert([{
          customer_name: name.trim(),
          event_name: eventName.trim(),
          mobile: phone.trim(),
          package_name: pkg.name,
          status: "New",
        }]);
      } catch (err) {
        console.error("Failed to save baraat enquiry to CRM", err);
      }
    } else {
      try {
        const saved = localStorage.getItem("pmb_baraat_enquiries");
        const list = saved ? JSON.parse(saved) : [];
        list.push({
          id: `baraat-${Date.now()}`,
          customer_name: name.trim(),
          event_name: eventName.trim(),
          mobile: phone.trim(),
          package_name: pkg.name,
          status: "New",
          created_at: new Date().toISOString(),
        });
        localStorage.setItem("pmb_baraat_enquiries", JSON.stringify(list));
      } catch (err) {
        console.error("Failed to save baraat enquiry locally", err);
      }
    }

    const link = buildPackageWhatsAppLink(name.trim(), phone.trim(), eventName.trim(), pkg.name);
    window.open(link, "_blank");
    confetti({ particleCount: 60, spread: 40 });
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#0F0F0F] w-full max-w-md border border-[#C9A24B]/25 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/5 text-white/60 hover:text-[#C9A24B] transition-colors z-10"
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="h-14 w-14 border border-[#C9A24B]/30 text-[#C9A24B] flex items-center justify-center mx-auto">
              <PartyPopper className="h-7 w-7" />
            </div>
            <h3 className="font-serif font-black text-xl text-white">Enquiry Sent!</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Your enquiry for the <span className="font-bold text-white/80">{pkg.name}</span> has been sent on WhatsApp. Our team will get back to you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-2 h-11 px-6 bg-[#C9A24B] hover:bg-[#dfc282] text-black text-xs font-extrabold uppercase tracking-widest transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            <div className="space-y-1">
              <span className="text-[9px] uppercase text-[#C9A24B] font-bold tracking-widest">Enquire Now</span>
              <h3 className="font-serif font-black text-xl text-white">{pkg.name}</h3>
              <p className="text-xs text-white/50">Share your details and we&apos;ll reach out on WhatsApp.</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase text-white/50 font-bold tracking-widest">Your Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className={`w-full bg-white/5 border px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A24B] text-white placeholder:text-white/30 ${errors.name ? "border-red-400" : "border-white/15"}`}
              />
              {errors.name && <span className="text-[10px] text-red-400">{errors.name}</span>}
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase text-white/50 font-bold tracking-widest">Event Name *</label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="e.g. Groom's Baraat, Sagai"
                className={`w-full bg-white/5 border px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A24B] text-white placeholder:text-white/30 ${errors.eventName ? "border-red-400" : "border-white/15"}`}
              />
              {errors.eventName && <span className="text-[10px] text-red-400">{errors.eventName}</span>}
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase text-white/50 font-bold tracking-widest">Phone Number *</label>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white/60 bg-white/5 border border-white/15 px-3 py-2.5">+91</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="9876543210"
                  className={`flex-1 bg-white/5 border px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A24B] text-white placeholder:text-white/30 ${errors.phone ? "border-red-400" : "border-white/15"}`}
                />
              </div>
              {errors.phone && <span className="text-[10px] text-red-400">{errors.phone}</span>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full h-12 bg-[#C9A24B] hover:bg-[#dfc282] text-black font-extrabold uppercase tracking-widest text-xs transition-all duration-350 flex items-center justify-center gap-2.5 disabled:opacity-60"
            >
              <MessageCircle className="h-4 w-4" />
              {submitting ? "Sending..." : "Send Enquiry on WhatsApp"}
            </button>

            <p className="text-[10px] text-white/30 text-center">
              🔒 Your details are safe. We never share your information with third parties.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
