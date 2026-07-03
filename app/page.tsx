/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  Sparkles, 
  Search, 
  Heart, 
  Star, 
  SlidersHorizontal,
  ChevronRight,
  X,
  Building,
  Calendar,
  RefreshCw,
  Plus
} from "lucide-react";

import confetti from "canvas-confetti";

// Mock Database & Helpers
import { 
  CITIES, 
  CATEGORIES, 
  INITIAL_VENDORS, 
  Vendor, 
  Review,
  generateVendorsForCity
} from "@/lib/vendorData";

// Supabase Client
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

// Components
import VendorCard from "@/components/VendorCard";
import VendorDetailModal from "@/components/VendorDetailModal";
import AddVendorForm from "@/components/AddVendorForm";
import WishlistDrawer from "@/components/WishlistDrawer";

// Model Mappers to translate between Supabase snake_case and React camelCase
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

export default function Home() {
  // Navigation Tabs for Public Website
  const [activeTab, setActiveTab] = useState<"home" | "vendors" | "register">("home");

  // Core States
  const [vendors, setVendors] = useState<Vendor[]>(INITIAL_VENDORS);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Search & Filter state values
  const [searchCity, setSearchCity] = useState("All");
  const [searchCategory, setSearchCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [maxPrice, setMaxPrice] = useState<number>(2000000); // 20 Lakhs max default
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>("featured");

  // ==========================================
  // SUPABASE DATA SYNCHRONIZATION
  // ==========================================

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

  // Setup live subscriptions
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

  // Save State to LocalStorage (Fallback Helper)
  const saveWishlistToStorage = (updatedWishlist: string[]) => {
    localStorage.setItem("pmv_wishlist", JSON.stringify(updatedWishlist));
  };

  // Toggle Wishlist handler
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

  // Remove from Wishlist
  const handleRemoveFromWishlist = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const updated = wishlist.filter((item) => item !== id);
    setWishlist(updated);
    saveWishlistToStorage(updated);
  };

  // Add Review handler
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

  // Submit Booking Inquiry
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
      // Local fallback
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

  // Add Supplier Listing
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

  // Reset Filters
  const handleResetFilters = () => {
    setSearchCity("All");
    setSearchCategory("All");
    setSearchText("");
    setMaxPrice(2000000);
    setMinRating(0);
    setSortBy("featured");
  };

  // Featured list
  const featuredVendorsList = useMemo(() => {
    return vendors.filter((v) => v.featured && v.verified !== false).slice(0, 3);
  }, [vendors]);

  // Main filtered vendors pipeline
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

  const getCategoryCount = (categoryName: string) => {
    return vendors.filter((v) => v.category.toLowerCase() === categoryName.toLowerCase() && v.verified !== false).length;
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#1c1917] flex flex-col font-sans relative">
      
      {/* Header Banner for Config status */}
      <div className="bg-stone-950 text-[#F5EBE0] py-2 px-6 flex justify-between items-center text-[10px] uppercase font-bold tracking-wider">
        <span>PlanMyBaraat Premium Processions Marketplace</span>
        <div className="flex items-center gap-3">
          <span className={isSupabaseConfigured ? "text-emerald-400" : "text-amber-400"}>
            {isSupabaseConfigured ? "● Live Database Active" : "● Offline Local Storage Fallback"}
          </span>
          <a href="/admin" className="text-[#B8860B] hover:text-[#dfc282] transition-colors">Admin CRM &rarr;</a>
          <a href="/vendor" className="text-[#B8860B] hover:text-[#dfc282] transition-colors">Vendor Portal &rarr;</a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-150 shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div 
            onClick={() => {
              setActiveTab("home");
              setIsMobileFilterOpen(false);
            }} 
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="h-10 w-10 rounded-full bg-[#7C1C2B]/5 border border-[#7C1C2B]/10 flex items-center justify-center text-[#7C1C2B] shadow-sm">
              <Sparkles className="h-5 w-5 fill-current" />
            </div>
            <div>
              <span className="font-serif font-black text-lg tracking-wide text-[#7C1C2B] block leading-tight">PlanMyBaraat</span>
              <span className="text-[10px] uppercase tracking-widest text-[#B8860B] font-bold block leading-none mt-0.5">Premium Procession Network</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {[
              { id: "home", label: "Home Showcase" },
              { id: "vendors", label: "Explore Directory" },
              { id: "register", label: "Register Business" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-205 ${
                  activeTab === item.id 
                    ? "text-[#7C1C2B] bg-[#7C1C2B]/5 border border-[#7C1C2B]/10" 
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-50 border border-transparent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-3 rounded-full bg-stone-50 border border-stone-200 text-stone-700 hover:text-[#7C1C2B] hover:border-[#7C1C2B]/20 hover:bg-[#7C1C2B]/5 transition-all shadow-sm"
              title="View Shortlist"
            >
              <Heart className={`h-4.5 w-4.5 ${wishlist.length > 0 ? "fill-[#7C1C2B] text-[#7C1C2B]" : ""}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 h-5.5 w-5.5 bg-[#7C1C2B] text-stone-100 text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-bounce">
                  {wishlist.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Pages */}
      <div className="flex-grow">
        
        {/* View A: Home */}
        {activeTab === "home" && (
          <div className="space-y-16 pb-16">
            
            {/* Hero section */}
            <section className="relative min-h-[65vh] md:min-h-[75vh] flex items-center justify-center text-center px-4 py-16 overflow-hidden border-b border-stone-150 bg-gradient-to-b from-[#FAF6F0] to-[#FCFBF9]">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(184,134,11,0.08)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B8860B]/[0.05] rounded-full blur-3xl pointer-events-none" />
              
              <div className="max-w-4xl space-y-8 relative z-10">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-[#B8860B]/20 bg-white px-5 py-1.5 text-[10px] md:text-[11px] font-bold text-[#B8860B] tracking-widest uppercase shadow-sm">
                  <Sparkles className="h-4 w-4 text-[#B8860B] animate-pulse" />
                  <span>Discover Royal Wedding Processions in India</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-black tracking-wide leading-tight text-stone-900">
                  Design Your Dream <br />
                  <span className="text-[#7C1C2B] drop-shadow-sm">Baraat Procession</span>
                </h1>

                <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
                  Browse and book certified traditional brass bands, floral carriages, expert turban stylists, custom dhol, and pyrotechnics across 6 target regions in India.
                </p>

                {/* Quick Search Card */}
                <div className="bg-white/85 backdrop-blur-md border border-stone-200 rounded-2xl md:rounded-3xl p-5 shadow-luxury max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  
                  <div className="space-y-1.5 text-left px-3">
                    <label className="text-[9px] uppercase font-bold text-stone-400 tracking-widest">Specialty Service</label>
                    <select
                      value={searchCategory}
                      onChange={(e) => setSearchCategory(e.target.value)}
                      className="w-full bg-transparent text-xs md:text-sm font-semibold text-stone-900 border-none p-0 focus:ring-0 focus:outline-none cursor-pointer"
                    >
                      <option value="All">All Specialties</option>
                      {CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5 text-left px-3 border-t md:border-t-0 md:border-l border-stone-155 pt-3 md:pt-0">
                    <label className="text-[9px] uppercase font-bold text-stone-400 tracking-widest">Wedding City</label>
                    <select
                      value={searchCity}
                      onChange={(e) => setSearchCity(e.target.value)}
                      className="w-full bg-transparent text-xs md:text-sm font-semibold text-stone-900 border-none p-0 focus:ring-0 focus:outline-none cursor-pointer"
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

                  <button
                    onClick={() => setActiveTab("vendors")}
                    className="w-full h-12 bg-[#7C1C2B] hover:bg-rose-900 text-white font-extrabold uppercase tracking-widest text-xs rounded-xl md:rounded-2xl transition-all duration-350 shadow-md flex items-center justify-center gap-2.5 group"
                  >
                    <Search className="h-4 w-4" />
                    <span>Search Marketplace</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </section>

            {/* Browse Categories */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="text-center md:text-left space-y-1">
                <span className="text-[9px] uppercase text-[#B8860B] font-bold tracking-widest block">Procession Catalog</span>
                <h2 className="font-serif font-black text-2xl md:text-4xl text-[#7C1C2B] tracking-wide">Browse Specialties</h2>
              </div>
              <div className="flex overflow-x-auto pb-4 gap-4 md:grid md:grid-cols-7 scrollbar-none">
                {CATEGORIES.slice(0, 14).map((cat) => {
                  const count = getCategoryCount(cat.name);
                  return (
                    <div
                      key={cat.id}
                      onClick={() => {
                        setSearchCategory(cat.name);
                        setActiveTab("vendors");
                      }}
                      className="min-w-[130px] md:min-w-0 bg-white border border-stone-200 hover:border-[#B8860B]/40 p-5 rounded-2xl cursor-pointer text-center group transition-all duration-305 shadow-sm hover:shadow-md"
                    >
                      <div className="h-10 w-10 bg-[#B8860B]/5 group-hover:bg-[#B8860B]/10 rounded-full flex items-center justify-center text-[#B8860B] mx-auto mb-3 transition-colors border border-[#B8860B]/10">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <h3 className="font-serif font-bold text-[11px] text-stone-800 group-hover:text-[#B8860B] transition-colors truncate">
                        {cat.name}
                      </h3>
                      <span className="text-[9px] text-stone-400 block mt-1">{count} options</span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Launch Cities */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="text-center md:text-left space-y-1">
                <span className="text-[9px] uppercase text-[#B8860B] font-bold tracking-widest block">Destination Hubs</span>
                <h2 className="font-serif font-black text-2xl md:text-4xl text-[#7C1C2B] tracking-wide">Strategic Launch Hubs</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CITIES.filter(c => ["Delhi-NCR", "Mumbai", "Udaipur", "Goa", "Jaipur", "Bengaluru"].includes(c.name)).slice(0, 6).map((c) => (
                  <div
                    key={c.name}
                    onClick={() => {
                      setSearchCity(c.name);
                      setActiveTab("vendors");
                    }}
                    className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer group shadow-card border border-stone-200/80"
                  >
                    <img
                      src={c.imageUrl}
                      alt={c.name}
                      className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 space-y-1">
                      <span className="text-[8px] uppercase font-bold text-[#B8860B] tracking-widest block">{c.state}</span>
                      <h3 className="font-serif font-black text-xl text-white tracking-wide">{c.name === "Bengaluru" ? "Bengaluru (Bangalore)" : c.name}</h3>
                      <p className="text-stone-200 text-[10px] line-clamp-1 leading-normal opacity-90">{c.tagline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Showcase */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="text-center md:text-left space-y-1">
                <span className="text-[9px] uppercase text-[#B8860B] font-bold tracking-widest block">Handpicked listings</span>
                <h2 className="font-serif font-black text-2xl md:text-4xl text-[#7C1C2B] tracking-wide">Royal Choice Selections</h2>
              </div>
              {vendors.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-stone-200 rounded-3xl">
                  <RefreshCw className="h-8 w-8 text-stone-300 animate-spin mx-auto mb-3" />
                  <p className="text-stone-400 text-xs font-semibold">Loading directories...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {featuredVendorsList.map((vendor) => (
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

            {/* Testimonial */}
            <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 rounded-3xl bg-white border border-stone-200 text-center relative overflow-hidden shadow-card">
              <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 bg-[#B8860B]/5 rounded-full blur-2xl" />
              <div className="max-w-2xl mx-auto space-y-4 relative z-10">
                <div className="flex items-center justify-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4.5 w-4.5 fill-current" />)}
                </div>
                <p className="font-serif italic text-sm md:text-base text-stone-850 leading-relaxed">
                  &ldquo;Booking our Delhi-NCR dhol and pyrotechnics team was a breeze. Seeing the inquiries coordinate directly with the vendor portal saved us days of follow-ups!&rdquo;
                </p>
                <div className="text-[10px] uppercase tracking-widest font-bold text-amber-700">Aditi & Kunal • Married in New Delhi</div>
              </div>
            </section>
          </div>
        )}

        {/* View B: Explore Directory */}
        {activeTab === "vendors" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 animate-fade-up">
            
            {/* Mobile Filter toggle */}
            <div className="lg:hidden flex items-center justify-between pb-4 border-b border-stone-200">
              <div>
                <span className="text-[10px] text-stone-400 block uppercase font-bold tracking-wider">Catalog search</span>
                <h2 className="font-serif font-black text-lg text-stone-900">{filteredVendors.length} listings found</h2>
              </div>
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 text-xs font-bold uppercase rounded-xl text-stone-700 shadow-sm"
              >
                <SlidersHorizontal className="h-4 w-4 text-[#B8860B]" />
                <span>Filters</span>
              </button>
            </div>

            {/* Filters panel */}
            <aside className={`shrink-0 w-72 space-y-6 lg:block ${isMobileFilterOpen ? "fixed inset-0 z-50 bg-white p-6 overflow-y-auto block animate-fade-up" : "hidden"}`}>
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-stone-150">
                  <h3 className="font-serif font-bold text-sm text-stone-950 uppercase tracking-widest flex items-center gap-2">
                    <SlidersHorizontal className="h-4.5 w-4.5 text-[#B8860B]" /> Filters
                  </h3>
                  <div className="flex items-center gap-3">
                    <button onClick={handleResetFilters} className="text-[10px] uppercase font-bold text-stone-400 hover:text-[#7C1C2B] transition-colors">Clear All</button>
                    {isMobileFilterOpen && (
                      <button onClick={() => setIsMobileFilterOpen(false)} className="p-1 text-stone-400 hover:text-stone-700 bg-stone-50 rounded">
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-stone-500 font-bold tracking-widest">Search Name/Details</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      placeholder="e.g. Vintage, Royal..."
                      className="w-full bg-white border border-stone-200 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-[#B8860B] text-stone-850"
                    />
                    <Search className="absolute left-3 top-3 h-3.5 w-3.5 text-stone-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-stone-500 font-bold tracking-widest">Category specialty</label>
                  <select
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#B8860B] text-stone-850 cursor-pointer font-medium"
                  >
                    <option value="All">All Categories</option>
                    {CATEGORIES.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-stone-500 font-bold tracking-widest">City Location</label>
                  <select
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#B8860B] text-stone-850 cursor-pointer font-medium"
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
                  <div className="flex justify-between items-center text-[10px] uppercase text-stone-500 font-bold tracking-widest">
                    <span>Max Price Limit</span>
                    <span className="text-[#B8860B] font-extrabold">{formatPrice(maxPrice)}</span>
                  </div>
                  <input
                    type="range"
                    min={20000}
                    max={2000000}
                    step={15000}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full h-1.5 bg-stone-100 rounded appearance-none cursor-pointer accent-[#B8860B]"
                  />
                  <div className="flex justify-between text-[9px] text-stone-400">
                    <span>₹20k</span>
                    <span>₹20 Lakhs</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-stone-500 font-bold tracking-widest">Ratings threshold</label>
                  <select
                    value={minRating}
                    onChange={(e) => setMinRating(Number(e.target.value))}
                    className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#B8860B] text-[#1c1917] cursor-pointer font-medium"
                  >
                    <option value={0}>Any rating</option>
                    <option value={4.5}>4.5+ Stars</option>
                    <option value={4.8}>4.8+ Stars</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* Search Output grid */}
            <section className="flex-1 space-y-6">
              <div className="hidden lg:flex justify-between items-center pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs text-stone-450 block uppercase font-bold tracking-widest">Verified Network</span>
                  <h2 className="font-serif font-black text-2xl text-stone-900">{filteredVendors.length} listings found</h2>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-stone-550 font-bold">Sort</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-stone-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#B8860B] text-stone-850 cursor-pointer font-extrabold shadow-sm"
                  >
                    <option value="featured">Featured / Highest Rating</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="rating">Top Rated Only</option>
                  </select>
                </div>
              </div>

              {filteredVendors.length === 0 ? (
                <div className="text-center py-24 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3">
                  <SlidersHorizontal className="h-10 w-10 text-stone-300 mx-auto" />
                  <h3 className="font-serif font-bold text-stone-550 text-base">No match found</h3>
                  <p className="text-xs text-stone-450 max-w-sm mx-auto">Adjust filters or change cities to locate listings.</p>
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

        {/* View D: Register Vendor Form */}
        {activeTab === "register" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <AddVendorForm onAddVendor={handleAddVendor} />
          </div>
        )}
      </div>

      <footer className="hidden md:block bg-stone-90 bg-stone-900 text-stone-300 border-t border-[#B8860B]/10 py-10 text-center text-[10px] uppercase tracking-widest font-semibold">
        © 2026 PlanMyBaraat Corp • Delhi • Mumbai • Ahmedabad • Surat • Vadodara • Bangalore
      </footer>

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
