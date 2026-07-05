/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import confetti from "canvas-confetti";

import {
  CITIES,
  CATEGORIES,
  INITIAL_VENDORS,
  Vendor,
  Review,
} from "@/lib/vendorData";

import { supabase, isSupabaseConfigured } from "@/lib/supabase";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import VendorCard from "@/components/VendorCard";
import VendorDetailModal from "@/components/VendorDetailModal";
import AddVendorForm from "@/components/AddVendorForm";
import WishlistDrawer from "@/components/WishlistDrawer";

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

function mapVendorToDbVendor(v: Vendor): any {
  return {
    id: v.id,
    name: v.name,
    category: v.category,
    city: v.city,
    rating: v.rating,
    reviews_count: v.reviewsCount,
    price: v.price,
    price_unit: v.priceUnit,
    image_url: v.imageUrl,
    gallery_urls: v.galleryUrls || [],
    address: v.address,
    contact: v.contact,
    services: v.services,
    description: v.description,
    featured: v.featured,
    verified: v.verified ?? true,
    reviews: v.reviews || []
  };
}

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState<"vendors" | "register">("vendors");

  const [vendors, setVendors] = useState<Vendor[]>(INITIAL_VENDORS);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const [searchCity, setSearchCity] = useState("All");
  const [searchCategory, setSearchCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [maxPrice, setMaxPrice] = useState<number>(2000000);
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>("featured");

  const loadSupabaseData = async () => {
    if (!supabase || !isSupabaseConfigured) return;

    try {
      const { data: dbVendors, error: vendorError } = await supabase
        .from("vendors")
        .select("*")
        .order("created_at", { ascending: false });

      if (vendorError) throw vendorError;

      if (dbVendors && dbVendors.length > 0) {
        setVendors(dbVendors.map(mapDbVendorToVendor));
      }
    } catch (e) {
      console.error("Error loading data from Supabase", e);
    }
  };

  useEffect(() => {
    if (!supabase || !isSupabaseConfigured) {
      const savedVendors = localStorage.getItem("pmv_vendors");
      const savedWishlist = localStorage.getItem("pmv_wishlist");

      if (savedVendors) {
        try { setVendors(JSON.parse(savedVendors)); } catch (e) { console.error(e); }
      }
      if (savedWishlist) {
        try { setWishlist(JSON.parse(savedWishlist)); } catch (e) { console.error(e); }
      }
      return;
    }

    loadSupabaseData();

    const client = supabase;
    const vendorsChannel = client
      .channel("directory-vendors")
      .on("postgres_changes", { event: "*", schema: "public", table: "vendors" }, () => {
        loadSupabaseData();
      })
      .subscribe();

    return () => {
      client.removeChannel(vendorsChannel);
    };
  }, []);

  const saveWishlistToStorage = (updatedWishlist: string[]) => {
    localStorage.setItem("pmv_wishlist", JSON.stringify(updatedWishlist));
  };

  const handleToggleWishlist = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const isSaved = wishlist.includes(id);
    let updated: string[];

    if (isSaved) {
      updated = wishlist.filter((item) => item !== id);
    } else {
      updated = [...wishlist, id];
    }

    setWishlist(updated);
    saveWishlistToStorage(updated);
  };

  const handleRemoveFromWishlist = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const updated = wishlist.filter((item) => item !== id);
    setWishlist(updated);
    saveWishlistToStorage(updated);
  };

  const handleAddReview = async (vendorId: string, newReview: Omit<Review, "id" | "date">) => {
    const targetVendor = vendors.find(v => v.id === vendorId);
    if (!targetVendor) return;

    const fullReview: Review = {
      ...newReview,
      id: `rev-${Date.now()}`,
      date: new Date().toISOString().split("T")[0]
    };
    const updatedReviews = [fullReview, ...(targetVendor.reviews || [])];
    const newRating = Number((updatedReviews.reduce((sum, r) => sum + r.rating, 0) / updatedReviews.length).toFixed(2));

    if (supabase && isSupabaseConfigured) {
      try {
        const { error } = await supabase
          .from("vendors")
          .update({
            reviews: updatedReviews,
            reviews_count: updatedReviews.length,
            rating: newRating
          })
          .eq("id", vendorId);
        if (error) throw error;
        loadSupabaseData();
      } catch (e: any) {
        console.error("Failed to post review", e);
      }
    } else {
      const updatedVendors = vendors.map((v) => {
        if (v.id === vendorId) {
          return {
            ...v,
            reviews: updatedReviews,
            reviewsCount: updatedReviews.length,
            rating: newRating
          };
        }
        return v;
      });
      setVendors(updatedVendors);
      localStorage.setItem("pmv_vendors", JSON.stringify(updatedVendors));
    }

    if (selectedVendor && selectedVendor.id === vendorId) {
      setSelectedVendor({
        ...selectedVendor,
        reviews: updatedReviews,
        reviewsCount: updatedReviews.length,
        rating: newRating
      });
    }
  };

  const handleOnAddInquiry = async (inquiryData: { name: string; phone: string; date: string; msg: string }) => {
    if (!selectedVendor) return;

    if (supabase && isSupabaseConfigured) {
      try {
        const { error } = await supabase
          .from("inquiries")
          .insert([{
            customer_name: inquiryData.name,
            customer_phone: inquiryData.phone,
            city_name: selectedVendor.city,
            vendor_id: selectedVendor.id,
            vendor_name: selectedVendor.name,
            vendor_category: selectedVendor.category,
            guests_count: 250,
            wedding_date: inquiryData.date,
            status: "new",
            notes: inquiryData.msg || `Inquiry submitted for ${selectedVendor.name}.`,
            total_budget: selectedVendor.price
          }]);
        if (error) throw error;
        confetti({ particleCount: 40, spread: 35 });
        alert("Booking Inquiry submitted successfully! Suppliers will reach out to you shortly.");
      } catch (e: any) {
        alert(`Failed to save inquiry: ${e.message}`);
      }
    } else {
      const savedLeads = localStorage.getItem("pmv_leads");
      let currentLeads = [];
      if (savedLeads) {
        try { currentLeads = JSON.parse(savedLeads); } catch (e) {}
      }

      const newInquiry = {
        id: `lead-${Date.now()}`,
        customerName: inquiryData.name,
        customerPhone: inquiryData.phone,
        cityName: selectedVendor.city,
        vendorId: selectedVendor.id,
        vendorName: selectedVendor.name,
        vendorCategory: selectedVendor.category,
        guestsCount: 250,
        weddingDate: inquiryData.date,
        status: "new",
        notes: inquiryData.msg || `Inquiry submitted for ${selectedVendor.name}.`,
        totalBudget: selectedVendor.price,
        timestamp: new Date().toISOString().replace("T", " ").substring(0, 16)
      };

      const updated = [newInquiry, ...currentLeads];
      localStorage.setItem("pmv_leads", JSON.stringify(updated));
      confetti({ particleCount: 30, spread: 20 });
      alert("Inquiry submitted locally.");
    }
  };

  const handleAddVendor = async (
    newVendorData: Omit<Vendor, "id" | "rating" | "reviewsCount" | "reviews" | "featured">
  ) => {
    const generatedId = `ven-${Date.now()}`;
    const newVendor: Vendor = {
      ...newVendorData,
      id: generatedId,
      rating: 5.0,
      reviewsCount: 0,
      reviews: [],
      featured: false,
      verified: false
    };

    if (supabase && isSupabaseConfigured) {
      try {
        const { error } = await supabase
          .from("vendors")
          .insert([mapVendorToDbVendor(newVendor)]);
        if (error) throw error;
        alert("Listing registered successfully! It is currently pending verification and has been routed to the CRM Dashboard for Admin approval.");
        loadSupabaseData();
      } catch (e: any) {
        alert(`Failed to save listing: ${e.message}`);
      }
    } else {
      const updated = [newVendor, ...vendors];
      setVendors(updated);
      localStorage.setItem("pmv_vendors", JSON.stringify(updated));
      confetti({ particleCount: 50, spread: 40 });
      alert("Listing registered locally (offline mode) and routed to CRM approvals.");
    }
  };

  const handleResetFilters = () => {
    setSearchCity("All");
    setSearchCategory("All");
    setSearchText("");
    setMaxPrice(2000000);
    setMinRating(0);
    setSortBy("featured");
  };

  const filteredVendors = useMemo(() => {
    return vendors
      .filter((v) => {
        if (v.verified === false) return false;

        let queryCity = searchCity;
        if (searchCity.toLowerCase() === "delhi") queryCity = "Delhi-NCR";
        if (searchCity.toLowerCase() === "bangalore") queryCity = "Bengaluru";

        const matchesCity = queryCity === "All" || v.city.toLowerCase() === queryCity.toLowerCase();
        const matchesCategory = searchCategory === "All" || v.category.toLowerCase() === searchCategory.toLowerCase();

        const matchesText =
          v.name.toLowerCase().includes(searchText.toLowerCase()) ||
          v.description.toLowerCase().includes(searchText.toLowerCase()) ||
          v.address.toLowerCase().includes(searchText.toLowerCase());

        let vendorCost = v.price;
        if (v.category === "Caterers") {
          vendorCost = v.price * 300;
        }
        const matchesPrice = vendorCost <= maxPrice;
        const matchesRating = v.rating >= minRating;

        return matchesCity && matchesCategory && matchesText && matchesPrice && matchesRating;
      })
      .sort((a, b) => {
        if (sortBy === "priceAsc") return a.price - b.price;
        if (sortBy === "priceDesc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.rating - a.rating;
      });
  }, [vendors, searchCity, searchCategory, searchText, maxPrice, minRating, sortBy]);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans relative">
      <SiteHeader wishlistCount={wishlist.length} onWishlistClick={() => setIsWishlistOpen(true)} />

      <div className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4 space-y-2">
          <span className="text-[9px] uppercase text-[#C9A24B] font-bold tracking-widest block text-center md:text-left">Vendor Directory</span>
          <h1 className="font-serif font-black text-3xl md:text-5xl text-white tracking-wide text-center md:text-left">Explore the Marketplace</h1>
          <p className="text-white/50 text-xs md:text-sm text-center md:text-left max-w-2xl">
            Browse and book certified traditional brass bands, floral carriages, expert turban stylists, custom dhol,
            and pyrotechnics across 6 target regions in India.
          </p>

          <div className="flex justify-center md:justify-start gap-2 pt-4">
            {[
              { id: "vendors", label: "Explore Directory" },
              { id: "register", label: "Register Business" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-205 border ${
                  activeTab === item.id
                    ? "text-[#C9A24B] border-[#C9A24B]/40"
                    : "text-white/50 hover:text-white border-transparent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </section>

        {activeTab === "vendors" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 animate-fade-up">

            <div className="lg:hidden flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] text-white/40 block uppercase font-bold tracking-wider">Catalog search</span>
                <h2 className="font-serif font-black text-lg text-white">{filteredVendors.length} listings found</h2>
              </div>
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-[#0F0F0F] border border-white/15 text-xs font-bold uppercase text-white/80"
              >
                <SlidersHorizontal className="h-4 w-4 text-[#C9A24B]" />
                <span>Filters</span>
              </button>
            </div>

            <aside className={`shrink-0 w-72 space-y-6 lg:block ${isMobileFilterOpen ? "fixed inset-0 z-50 bg-black p-6 overflow-y-auto block animate-fade-up" : "hidden"}`}>
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <h3 className="font-serif font-bold text-sm text-white uppercase tracking-widest flex items-center gap-2">
                    <SlidersHorizontal className="h-4.5 w-4.5 text-[#C9A24B]" /> Filters
                  </h3>
                  <div className="flex items-center gap-3">
                    <button onClick={handleResetFilters} className="text-[10px] uppercase font-bold text-white/40 hover:text-[#C9A24B] transition-colors">Clear All</button>
                    {isMobileFilterOpen && (
                      <button onClick={() => setIsMobileFilterOpen(false)} className="p-1 text-white/40 hover:text-white bg-white/5">
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-white/50 font-bold tracking-widest">Search Name/Details</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      placeholder="e.g. Vintage, Royal..."
                      className="w-full bg-white/5 border border-white/15 pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-[#C9A24B] text-white placeholder:text-white/30"
                    />
                    <Search className="absolute left-3 top-3 h-3.5 w-3.5 text-white/30" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-white/50 font-bold tracking-widest">Category specialty</label>
                  <select
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 px-3 py-2.5 text-xs focus:outline-none focus:border-[#C9A24B] text-white cursor-pointer font-medium"
                  >
                    <option value="All">All Categories</option>
                    {CATEGORIES.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-white/50 font-bold tracking-widest">City Location</label>
                  <select
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 px-3 py-2.5 text-xs focus:outline-none focus:border-[#C9A24B] text-white cursor-pointer font-medium"
                  >
                    <option value="All">All Cities</option>
                    <option value="Delhi-NCR">Delhi-NCR</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Surat">Surat</option>
                    <option value="Vadodara">Vadodara</option>
                    <option value="Bengaluru">Bengaluru (Bangalore)</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px] uppercase text-white/50 font-bold tracking-widest">
                    <span>Max Price Limit</span>
                    <span className="text-[#C9A24B] font-extrabold">{formatPrice(maxPrice)}</span>
                  </div>
                  <input
                    type="range"
                    min={20000}
                    max={2000000}
                    step={15000}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded appearance-none cursor-pointer accent-[#C9A24B]"
                  />
                  <div className="flex justify-between text-[9px] text-white/30">
                    <span>₹20k</span>
                    <span>₹20 Lakhs</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-white/50 font-bold tracking-widest">Ratings threshold</label>
                  <select
                    value={minRating}
                    onChange={(e) => setMinRating(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/15 px-3 py-2.5 text-xs focus:outline-none focus:border-[#C9A24B] text-white cursor-pointer font-medium"
                  >
                    <option value={0}>Any rating</option>
                    <option value={4.5}>4.5+ Stars</option>
                    <option value={4.8}>4.8+ Stars</option>
                  </select>
                </div>
              </div>
            </aside>

            <section className="flex-1 space-y-6">
              <div className="hidden lg:flex justify-between items-center pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs text-white/40 block uppercase font-bold tracking-widest">Verified Network</span>
                  <h2 className="font-serif font-black text-2xl text-white">{filteredVendors.length} listings found</h2>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-white/50 font-bold">Sort</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white/5 border border-white/15 px-3.5 py-2 text-xs focus:outline-none focus:border-[#C9A24B] text-white cursor-pointer font-extrabold"
                  >
                    <option value="featured">Featured / Highest Rating</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="rating">Top Rated Only</option>
                  </select>
                </div>
              </div>

              {filteredVendors.length === 0 ? (
                <div className="text-center py-24 bg-[#0F0F0F] border border-white/10 space-y-3">
                  <SlidersHorizontal className="h-10 w-10 text-white/20 mx-auto" />
                  <h3 className="font-serif font-bold text-white/60 text-base">No match found</h3>
                  <p className="text-xs text-white/40 max-w-sm mx-auto">Adjust filters or change cities to locate listings.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredVendors.map(vendor => (
                    <VendorCard
                      key={vendor.id}
                      vendor={vendor}
                      isWishlisted={wishlist.includes(vendor.id)}
                      onToggleWishlist={handleToggleWishlist}
                      onClick={() => setSelectedVendor(vendor)}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        )}

        {activeTab === "register" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <AddVendorForm onAddVendor={handleAddVendor} />
          </div>
        )}
      </div>

      <SiteFooter />

      {selectedVendor && (
        <VendorDetailModal
          vendor={selectedVendor}
          onClose={() => setSelectedVendor(null)}
          onAddReview={handleAddReview}
          onAddInquiry={handleOnAddInquiry}
        />
      )}

      {isWishlistOpen && (
        <WishlistDrawer
          wishlistIds={wishlist}
          vendors={vendors}
          onRemoveFromWishlist={handleRemoveFromWishlist}
          onSelectVendor={(v) => {
            setSelectedVendor(v);
            setIsWishlistOpen(false);
          }}
          onClose={() => setIsWishlistOpen(false)}
        />
      )}
    </div>
  );
}
