/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  Sparkles, 
  Building, 
  Star, 
  Clock, 
  FileText, 
  Phone, 
  Calendar, 
  Check, 
  Sliders,
  AlertCircle
} from "lucide-react";

import confetti from "canvas-confetti";
import { INITIAL_VENDORS, Vendor } from "@/lib/vendorData";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export interface Inquiry {
  id: string;
  customerName: string;
  customerPhone: string;
  cityName: string;
  vendorId: string;
  vendorName: string;
  vendorCategory: string;
  guestsCount: number;
  weddingDate: string;
  status: "new" | "contacted" | "negotiation" | "booked" | "lost";
  notes?: string;
  totalBudget?: number;
  timestamp: string;
}

function mapDbVendorToVendor(dbV: any): Vendor {
  return {
    id: dbV.id,
    name: dbV.name,
    category: dbV.category,
    city: dbV.city,
    rating: Number(dbV.rating || 5.0),
    reviewsCount: dbV.reviews_count || 0,
    price: dbV.price || 0,
    priceUnit: dbV.price_unit || "per event",
    imageUrl: dbV.image_url || "/images/venue_luxury.png",
    galleryUrls: dbV.gallery_urls || [],
    address: dbV.address || "",
    contact: dbV.contact || "",
    services: dbV.services || [],
    description: dbV.description || "",
    featured: !!dbV.featured,
    verified: !!dbV.verified,
    reviews: dbV.reviews ? (typeof dbV.reviews === 'string' ? JSON.parse(dbV.reviews) : dbV.reviews) : []
  };
}

function mapDbInquiryToInquiry(dbI: any): Inquiry {
  return {
    id: dbI.id,
    customerName: dbI.customer_name,
    customerPhone: dbI.customer_phone,
    cityName: dbI.city_name,
    vendorId: dbI.vendor_id,
    vendorName: dbI.vendor_name || "",
    vendorCategory: dbI.vendor_category || "",
    guestsCount: dbI.guests_count || 250,
    weddingDate: dbI.wedding_date,
    status: dbI.status || "new",
    notes: dbI.notes || "",
    totalBudget: dbI.total_budget || 0,
    timestamp: dbI.created_at ? new Date(dbI.created_at).toISOString().replace("T", " ").substring(0, 16) : ""
  };
}

export default function VendorPortal() {
  const [vendors, setVendors] = useState<Vendor[]>(INITIAL_VENDORS);
  const [leads, setLeads] = useState<Inquiry[]>([]);
  const [selectedVendorId, setSelectedVendorId] = useState<string>("gen-ahmedabad-bandparty-0");
  const [availability, setAvailability] = useState<string>("active");

  const actingVendor = useMemo(() => {
    return vendors.find(v => v.id === selectedVendorId) || vendors[0] || INITIAL_VENDORS[0];
  }, [vendors, selectedVendorId]);

  const loadData = async () => {
    if (!supabase || !isSupabaseConfigured) return;
    try {
      const { data: dbVendors } = await supabase.from("vendors").select("*").order("created_at", { ascending: false });
      if (dbVendors) setVendors(dbVendors.map(mapDbVendorToVendor));

      const { data: dbInquiries } = await supabase.from("inquiries").select("*").order("created_at", { ascending: false });
      if (dbInquiries) setLeads(dbInquiries.map(mapDbInquiryToInquiry));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!supabase || !isSupabaseConfigured) {
      const savedVendors = localStorage.getItem("pmv_vendors");
      const savedLeads = localStorage.getItem("pmv_leads");
      if (savedVendors) setVendors(JSON.parse(savedVendors));
      if (savedLeads) setLeads(JSON.parse(savedLeads));
      return;
    }

    loadData();

    const client = supabase;
    const inquiriesChannel = client
      .channel("vendor-portal-inquiries")
      .on("postgres_changes", { event: "*", schema: "public", table: "inquiries" }, () => { loadData(); })
      .subscribe();

    const vendorsChannel = client
      .channel("vendor-portal-vendors")
      .on("postgres_changes", { event: "*", schema: "public", table: "vendors" }, () => { loadData(); })
      .subscribe();

    return () => {
      client.removeChannel(inquiriesChannel);
      client.removeChannel(vendorsChannel);
    };
  }, []);

  const updateLeadStatus = async (leadId: string, newStatus: Inquiry["status"]) => {
    if (supabase && isSupabaseConfigured) {
      try {
        await supabase.from("inquiries").update({ status: newStatus }).eq("id", leadId);
        loadData();
      } catch (e) {
        console.error(e);
      }
    } else {
      const updated = leads.map(l => l.id === leadId ? { ...l, status: newStatus } : l);
      setLeads(updated);
      localStorage.setItem("pmv_leads", JSON.stringify(updated));
    }
  };

  const handleUpdatePrice = async (price: number) => {
    if (supabase && isSupabaseConfigured) {
      try {
        await supabase.from("vendors").update({ price: price }).eq("id", actingVendor.id);
        loadData();
      } catch (e) {
        console.error(e);
      }
    } else {
      const updated = vendors.map(v => v.id === actingVendor.id ? { ...v, price: price } : v);
      setVendors(updated);
      localStorage.setItem("pmv_vendors", JSON.stringify(updated));
    }
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#1c1917] flex flex-col font-sans">
      {/* Header */}
      <header className="bg-stone-955 text-white py-5 px-8 flex items-center justify-between border-b border-[#B8860B]/30 shadow-xl bg-stone-950">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[#7C1C2B]/10 border border-[#7C1C2B]/45 flex items-center justify-center text-rose-500 shadow-[0_0_15px_rgba(124,28,43,0.2)] animate-pulse">
            <Sparkles className="h-4.5 w-4.5 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-black text-sm uppercase tracking-widest text-[#F5EBE0]">PlanMyBaraat Partner Portal</span>
              <span className={`text-[9px] px-2.5 py-0.5 rounded-full font-black tracking-wide uppercase ${
                isSupabaseConfigured 
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
              }`}>
                {isSupabaseConfigured ? "Live Sync Active" : "Local Workspace"}
              </span>
            </div>
            <span className="text-[10px] text-stone-400 block mt-0.5">Supplier Pricing Index & Matched Leads Workspace</span>
          </div>
        </div>
        <a href="/" className="px-4 py-2 border border-stone-850 hover:bg-stone-900 text-[#F5EBE0] font-bold text-xs uppercase tracking-wider rounded-xl transition-all">
          Go To Directory Website &rarr;
        </a>
      </header>

      {/* Main Vendor Body */}
      <main className="max-w-6xl mx-auto px-6 py-8 flex-grow w-full flex flex-col md:flex-row gap-8">
        
        {/* Left Column: Vendor Select & Status Profile */}
        <aside className="w-full md:w-80 shrink-0 space-y-6">
          <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-card space-y-4">
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-[#B8860B] font-bold block">Profile Credentials</span>
              <h3 className="font-serif font-black text-base text-stone-900">Act As Vendor</h3>
              <p className="text-[10px] text-stone-450 leading-tight">Switch credentials profile to manage matched category inquiries for that supplier listing.</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Select Login</label>
              <select
                value={selectedVendorId}
                onChange={(e) => setSelectedVendorId(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-stone-800 cursor-pointer focus:border-[#B8860B]"
              >
                {vendors.length === 0 ? (
                  <option value="">No vendors live</option>
                ) : (
                  <>
                    <optgroup label="Ahmedabad Seeding">
                      {vendors.filter(v => v.city === "Ahmedabad").slice(0,3).map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                    </optgroup>
                    <optgroup label="Vadodara Seeding">
                      {vendors.filter(v => v.city === "Vadodara").slice(0,3).map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                    </optgroup>
                    <optgroup label="Surat Seeding">
                      {vendors.filter(v => v.city === "Surat").slice(0,3).map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                    </optgroup>
                    <optgroup label="Delhi NCR Seeding">
                      {vendors.filter(v => v.city === "Delhi-NCR").slice(0,3).map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                    </optgroup>
                    <optgroup label="Mumbai Seeding">
                      {vendors.filter(v => v.city === "Mumbai").slice(0,3).map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                    </optgroup>
                    <optgroup label="Bengaluru Seeding">
                      {vendors.filter(v => v.city === "Bengaluru").slice(0,3).map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                    </optgroup>
                  </>
                )}
              </select>
            </div>

            {actingVendor && (
              <div className="border-t border-stone-100 pt-4 space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-400 font-medium">Category:</span>
                  <span className="font-extrabold text-stone-800">{actingVendor.category}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-400 font-medium">Headquarters:</span>
                  <span className="font-extrabold text-stone-800">{actingVendor.city}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-400 font-medium">Rating Score:</span>
                  <span className="font-extrabold text-amber-600 flex items-center gap-0.5">★ {actingVendor.rating}</span>
                </div>
              </div>
            )}
          </div>

          {actingVendor && (
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-card space-y-4">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-[#B8860B] font-bold block">Business Settings</span>
                <h3 className="font-serif font-black text-sm text-stone-900">Manage Status & Rates</h3>
              </div>

              {/* Status active/inactive toggle */}
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Availability</label>
                <div className="flex gap-1.5">
                  {["active", "fully_booked", "inactive"].map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setAvailability(status);
                        alert(`Status set to ${status.replace("_", " ")}!`);
                      }}
                      className={`flex-1 py-1.5 px-2 rounded-xl text-[9px] font-bold uppercase border transition-all ${
                        status === availability
                          ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                          : "bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100"
                      }`}
                    >
                      {status.replace("_", " ")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom price manager */}
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Package Price (INR)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={actingVendor.price}
                    onChange={(e) => {
                      const newPrice = Number(e.target.value);
                      handleUpdatePrice(newPrice);
                    }}
                    className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs font-bold text-stone-850 focus:outline-none focus:border-[#B8860B]"
                  />
                  <span className="px-3 py-2 bg-stone-100 rounded-xl text-[9px] text-stone-500 uppercase flex items-center font-bold">event</span>
                </div>
              </div>
            </div>
          )}
        </aside>

        {/* Right Column: Inquiries */}
        <section className="flex-1 space-y-6">
          <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-card space-y-4">
            <h2 className="font-serif font-black text-xl text-stone-900 border-b border-stone-100 pb-4">Matched Inquiries</h2>
            
            {!actingVendor || leads.filter(l => l.vendorId === actingVendor.id).length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <FileText className="h-10 w-10 text-stone-300 mx-auto" />
                <h4 className="text-xs font-extrabold text-stone-450 uppercase tracking-widest">No active lead matches</h4>
                <p className="text-[10px] text-stone-400 max-w-sm mx-auto">Go to the search directory at planmybaraat.com, select {actingVendor?.name || "this vendor"}, submit an inquiry, and verify it updates live here.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {leads.filter(l => l.vendorId === actingVendor.id).map(lead => (
                  <div key={lead.id} className="border border-stone-150 p-5 rounded-2xl space-y-4 bg-[#FCFBF9] relative hover:shadow-md transition-all duration-300">
                    <span className="absolute top-5 right-5 text-[9px] uppercase font-bold text-amber-700 bg-amber-50 border border-amber-200/50 px-2.5 py-0.5 rounded-full font-sans">
                      Status: {lead.status}
                    </span>
                    
                    <div className="space-y-1">
                      <h4 className="font-serif font-extrabold text-base text-stone-900">{lead.customerName}</h4>
                      <div className="flex flex-wrap gap-4 text-[10px] text-stone-550 font-semibold font-sans">
                        <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-[#B8860B]" /> {lead.customerPhone}</span>
                        <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-[#B8860B]" /> Wedding: {lead.weddingDate}</span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-600 bg-white p-3.5 rounded-xl border border-stone-150 leading-relaxed font-sans italic">&ldquo;{lead.notes}&rdquo;</p>

                    <div className="flex gap-2 border-t border-stone-150/70 pt-4">
                      {lead.status === "new" && (
                        <button
                          onClick={() => {
                            updateLeadStatus(lead.id, "negotiation");
                            confetti({ particleCount: 30, spread: 20 });
                          }}
                          className="py-2 px-4 bg-[#B8860B] hover:bg-amber-600 text-stone-900 font-extrabold uppercase rounded-xl text-[10.5px] tracking-wider transition-colors shadow-sm"
                        >
                          Accept inquiry
                        </button>
                      )}
                      
                      {(lead.status === "new" || lead.status === "negotiation") && (
                        <button
                          onClick={() => {
                            updateLeadStatus(lead.id, "booked");
                            confetti({ particleCount: 95, spread: 65, colors: ["#0B4F35", "#b8860b"] });
                          }}
                          className="py-2 px-4 bg-[#7C1C2B] hover:bg-rose-900 text-white font-extrabold uppercase rounded-xl text-[10.5px] tracking-wider transition-colors shadow-sm"
                        >
                          Confirm &amp; Bill Booking
                        </button>
                      )}

                      {lead.status === "booked" && (
                        <div className="w-full bg-emerald-500/[0.04] border border-emerald-300/40 rounded-2xl p-4 space-y-3">
                          <div className="flex items-center gap-1.5 text-emerald-800 text-[10px] font-bold uppercase tracking-widest border-b border-emerald-100 pb-2">
                            <AlertCircle className="h-4 w-4" />
                            <span>Invoice generated &amp; Booked</span>
                          </div>
                          <div className="text-[10px] space-y-1.5 font-mono text-stone-700">
                            <div className="flex justify-between"><span>Base package rate:</span> <span>{formatPrice(actingVendor.price)}</span></div>
                            <div className="flex justify-between"><span>GST @ 18%:</span> <span>{formatPrice(actingVendor.price * 0.18)}</span></div>
                            <div className="flex justify-between border-t border-stone-250 pt-2 font-black text-stone-950 text-xs"><span>Grand Total:</span> <span>{formatPrice(actingVendor.price * 1.18)}</span></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
