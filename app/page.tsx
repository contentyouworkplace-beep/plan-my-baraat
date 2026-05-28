"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  Sparkles, 
  Search, 
  Heart, 
  Star, 
  SlidersHorizontal,
  ChevronRight,
  Camera,
  Utensils,
  Music,
  Paintbrush,
  Home as HomeIcon,
  X,
  Building,
  Calculator
} from "lucide-react";

// Mock Database & Helpers
import { 
  CITIES, 
  CATEGORIES, 
  INITIAL_VENDORS, 
  Vendor, 
  Review 
} from "@/lib/vendorData";

// Components
import VendorCard from "@/components/VendorCard";
import VendorDetailModal from "@/components/VendorDetailModal";
import Matchmaker from "@/components/Matchmaker";
import AddVendorForm from "@/components/AddVendorForm";
import WishlistDrawer from "@/components/WishlistDrawer";

export default function Home() {
  // Navigation Tabs (App Navigation Shell)
  const [activeTab, setActiveTab] = useState<"home" | "vendors" | "matchmaker" | "register">("home");

  // Core States
  const [vendors, setVendors] = useState<Vendor[]>(INITIAL_VENDORS);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  
  // Mobile specific UI states
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Search & Filter state values
  const [searchCity, setSearchCity] = useState("All");
  const [searchCategory, setSearchCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [maxPrice, setMaxPrice] = useState<number>(2000000); // 20 Lakhs max default
  const [minRating, setMinRating] = useState<number>(0);
  const [venueCapacity, setVenueCapacity] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>("featured");

  // LocalStorage Hydration
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedVendors = localStorage.getItem("pmv_vendors");
      const savedWishlist = localStorage.getItem("pmv_wishlist");

      if (savedVendors) {
        try {
          setVendors(JSON.parse(savedVendors));
        } catch (e) {
          console.error("Failed to parse saved vendors", e);
        }
      }
      if (savedWishlist) {
        try {
          setWishlist(JSON.parse(savedWishlist));
        } catch (e) {
          console.error("Failed to parse saved wishlist", e);
        }
      }
    }
  }, []);

  // Save State to LocalStorage
  const saveVendorsToStorage = (updatedVendors: Vendor[]) => {
    localStorage.setItem("pmv_vendors", JSON.stringify(updatedVendors));
  };

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

  // Remove from Wishlist (drawer callback)
  const handleRemoveFromWishlist = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const updated = wishlist.filter((item) => item !== id);
    setWishlist(updated);
    saveWishlistToStorage(updated);
  };

  // Add Review handler
  const handleAddReview = (vendorId: string, newReview: Omit<Review, "id" | "date">) => {
    const updatedVendors = vendors.map((v) => {
      if (v.id === vendorId) {
        const fullReview: Review = {
          ...newReview,
          id: `rev-${Date.now()}`,
          date: new Date().toISOString().split("T")[0]
        };
        const updatedReviews = [fullReview, ...v.reviews];
        const newRating = 
          updatedReviews.reduce((sum, r) => sum + r.rating, 0) / updatedReviews.length;
        
        return {
          ...v,
          reviews: updatedReviews,
          reviewsCount: updatedReviews.length,
          rating: Number(newRating.toFixed(2))
        };
      }
      return v;
    });

    setVendors(updatedVendors);
    saveVendorsToStorage(updatedVendors);

    // If modal is active, update selected vendor state too
    if (selectedVendor && selectedVendor.id === vendorId) {
      const updatedSel = updatedVendors.find((v) => v.id === vendorId);
      if (updatedSel) setSelectedVendor(updatedSel);
    }
  };

  // Add Supplier Listing handler
  const handleAddVendor = (
    newVendorData: Omit<Vendor, "id" | "rating" | "reviewsCount" | "reviews" | "featured">
  ) => {
    const newVendor: Vendor = {
      ...newVendorData,
      id: `ven-${Date.now()}`,
      rating: 5.0,
      reviewsCount: 0,
      reviews: [],
      featured: false
    };

    const updated = [newVendor, ...vendors];
    setVendors(updated);
    saveVendorsToStorage(updated);
  };

  // Clear filters
  const handleResetFilters = () => {
    setSearchCity("All");
    setSearchCategory("All");
    setSearchText("");
    setMaxPrice(2000000);
    setMinRating(0);
    setVenueCapacity(0);
    setSortBy("featured");
  };

  // Get matching category icon for Category card rendering
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case "venues":
        return HomeIcon;
      case "photographers":
        return Camera;
      case "makeup artists":
        return Sparkles;
      case "decorators":
        return SlidersHorizontal;
      case "dj & band":
      case "music":
        return Music;
      case "caterers":
        return Utensils;
      case "mehndi artists":
        return Paintbrush;
      default:
        return Sparkles;
    }
  };

  // Featured lists for Homepage
  const featuredVendorsList = useMemo(() => {
    return vendors.filter((v) => v.featured).slice(0, 3);
  }, [vendors]);

  // Main filtered vendors pipeline
  const filteredVendors = useMemo(() => {
    return vendors
      .filter((v) => {
        const matchesCity = searchCity === "All" || v.city.toLowerCase() === searchCity.toLowerCase();
        const matchesCategory = searchCategory === "All" || v.category.toLowerCase() === searchCategory.toLowerCase();
        
        const matchesText = 
          v.name.toLowerCase().includes(searchText.toLowerCase()) || 
          v.description.toLowerCase().includes(searchText.toLowerCase()) ||
          v.address.toLowerCase().includes(searchText.toLowerCase());

        let vendorCost = v.price;
        // if caterer, multiply price per plate by average guest count (300) to estimate total cost boundary
        if (v.category === "Caterers") {
          vendorCost = v.price * 300;
        }
        const matchesPrice = vendorCost <= maxPrice;
        
        const matchesRating = v.rating >= minRating;
        
        let matchesCapacity = true;
        if (v.category === "Venues" && venueCapacity > 0) {
          matchesCapacity = (v.capacity || 0) >= venueCapacity;
        }

        return matchesCity && matchesCategory && matchesText && matchesPrice && matchesRating && matchesCapacity;
      })
      .sort((a, b) => {
        if (sortBy === "priceAsc") {
          return a.price - b.price;
        }
        if (sortBy === "priceDesc") {
          return b.price - a.price;
        }
        if (sortBy === "rating") {
          return b.rating - a.rating;
        }
        // Default: Featured first, then rating
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.rating - a.rating;
      });
  }, [vendors, searchCity, searchCategory, searchText, maxPrice, minRating, venueCapacity, sortBy]);

  // Helpers to count elements by category for rendering count text
  const getCategoryCount = (categoryName: string) => {
    return vendors.filter((v) => v.category.toLowerCase() === categoryName.toLowerCase()).length;
  };

  // Quick helper to format prices
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <main className="min-h-screen bg-stone-50/50 text-stone-900 flex flex-col font-sans relative pb-20 md:pb-0">
      
      {/* 1. Header (Dynamic Mobile/Desktop) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-150 shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo Title */}
          <div 
            onClick={() => {
              setActiveTab("home");
              setIsMobileFilterOpen(false);
            }} 
            className="flex items-center gap-2.5 cursor-pointer select-none"
          >
            <div className="h-9 w-9 rounded-full bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-700">
              <Sparkles className="h-4.5 w-4.5 fill-current" />
            </div>
            <div>
              <span className="font-serif font-black text-base tracking-wide text-stone-900 block leading-tight">PlanMyBaraat</span>
              <span className="text-[9px] uppercase tracking-wider text-amber-600/90 font-bold block leading-none">Premium Vendor Network</span>
            </div>
          </div>

          {/* Desktop Navigation Items */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { id: "home", label: "Home" },
              { id: "vendors", label: "Explore Vendors" },
              { id: "matchmaker", label: "Budget Estimator" },
              { id: "register", label: "Register Business" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as "home" | "vendors" | "matchmaker" | "register")}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeTab === item.id 
                    ? "text-amber-700 bg-amber-500/10" 
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions: Wishlist */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2.5 rounded-full bg-stone-50 border border-stone-200 text-stone-700 hover:text-red-600 hover:border-red-500/20 transition-all shadow-sm"
              title="View Shortlist"
              aria-label="Toggle Wishlist Drawer"
            >
              <Heart className={`h-4.5 w-4.5 ${wishlist.length > 0 ? "fill-red-500 text-red-500" : ""}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 h-5 w-5 bg-red-600 text-stone-100 text-[10px] font-black rounded-full flex items-center justify-center border border-white">
                  {wishlist.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 2. Main Page views orchestrator */}
      <div className="flex-1">

        {/* View A: Homepage */}
        {activeTab === "home" && (
          <div className="space-y-12 md:space-y-16 pb-16 animate-fade-up">
            
            {/* Hero Search Banner */}
            <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center px-4 py-12 md:py-16 overflow-hidden border-b border-stone-200 bg-[#fcfbf9]">
              {/* Subtle background image overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22] mix-blend-multiply"
                style={{ backgroundImage: `url('/images/hero_bg.png')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fcfbf9]/50 to-[#fcfbf9] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none" />
              
              <div className="max-w-4xl space-y-6 md:space-y-8 relative z-10">
                
                {/* Micro announcement badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-white px-4 py-1 text-[10px] md:text-[11px] font-bold text-amber-800 tracking-wide uppercase shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
                  <span>Discover Elite Wedding Vendors in India</span>
                </div>

                {/* Hero Title */}
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-black tracking-wide leading-tight text-stone-900">
                  Design Your Dream <br />
                  <span className="gold-text-shimmer">Indian Celebration</span>
                </h1>

                {/* Subtitle */}
                <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                  Discover and book award-winning venues, photographers, and luxury services across India&apos;s top destination wedding hubs.
                </p>

                {/* Search Bar Selector Grid */}
                <div className="bg-white border border-stone-200 rounded-2xl md:rounded-3xl p-4 shadow-luxury max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-center">
                  
                  {/* Category select input */}
                  <div className="space-y-1 text-left px-3 py-1">
                    <label className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">I am looking for</label>
                    <select
                      value={searchCategory}
                      onChange={(e) => setSearchCategory(e.target.value)}
                      className="w-full bg-transparent text-xs md:text-sm font-semibold text-stone-800 border-none p-0 focus:ring-0 focus:outline-none cursor-pointer"
                    >
                      <option value="All">All Categories</option>
                      {CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* City select input */}
                  <div className="space-y-1 text-left px-3 py-1 border-t md:border-t-0 md:border-l border-stone-100 pt-2.5 md:pt-0">
                    <label className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">Located in</label>
                    <select
                      value={searchCity}
                      onChange={(e) => setSearchCity(e.target.value)}
                      className="w-full bg-transparent text-xs md:text-sm font-semibold text-stone-800 border-none p-0 focus:ring-0 focus:outline-none cursor-pointer"
                    >
                      <option value="All">All Cities</option>
                      {CITIES.map((c) => (
                        <option key={c.name} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Search CTA button */}
                  <button
                    onClick={() => setActiveTab("vendors")}
                    className="w-full h-11 md:h-12 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold uppercase tracking-wider text-xs rounded-xl md:rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 group"
                  >
                    <Search className="h-4 w-4" />
                    <span>Search Vendors</span>
                    <ChevronRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                  </button>

                </div>

              </div>
            </section>

            {/* Popular categories section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="text-center md:text-left space-y-1">
                <span className="text-[9px] uppercase text-amber-700 font-bold tracking-widest block">Core Specialties</span>
                <h2 className="font-serif font-black text-2xl md:text-3xl text-stone-900 tracking-wide">Browse by Category</h2>
              </div>

              {/* Scrollable on mobile, grid on desktop */}
              <div className="flex overflow-x-auto pb-3 gap-3 md:grid md:grid-cols-7 scrollbar-none">
                {CATEGORIES.map((cat) => {
                  const Icon = getCategoryIcon(cat.name);
                  const count = getCategoryCount(cat.name);

                  return (
                    <div
                      key={cat.id}
                      onClick={() => {
                        setSearchCategory(cat.name);
                        setActiveTab("vendors");
                      }}
                      className="min-w-[120px] md:min-w-0 bg-white border border-stone-200 hover:border-amber-500/30 p-4 rounded-2xl cursor-pointer text-center group transition-all shadow-sm"
                    >
                      <div className="h-9 w-9 bg-amber-500/5 group-hover:bg-amber-500/10 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-2.5 transition-colors border border-amber-500/10">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-serif font-bold text-[11px] text-stone-800 group-hover:text-amber-700 transition-colors truncate">
                        {cat.name}
                      </h3>
                      <span className="text-[9px] text-stone-400 block mt-0.5">{count} options</span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Featured destinations section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="text-center md:text-left space-y-1">
                <span className="text-[9px] uppercase text-amber-700 font-bold tracking-widest block">Signature Locations</span>
                <h2 className="font-serif font-black text-2xl md:text-3xl text-stone-900 tracking-wide">Top Destination Cities</h2>
              </div>

              {/* Scrollable list on mobile, grid on desktop */}
              <div className="flex overflow-x-auto pb-3 gap-4 lg:grid lg:grid-cols-3 scrollbar-none">
                {CITIES.slice(0, 6).map((c) => (
                  <div
                    key={c.name}
                    onClick={() => {
                      setSearchCity(c.name);
                      setActiveTab("vendors");
                    }}
                    className="min-w-[260px] sm:min-w-[320px] lg:min-w-0 relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-card border border-stone-200"
                  >
                    <img
                      src={c.imageUrl}
                      alt={c.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 space-y-0.5">
                      <span className="text-[8px] uppercase font-bold text-amber-300 tracking-widest block">
                        {c.state}
                      </span>
                      <h3 className="font-serif font-black text-lg text-white tracking-wide">
                        {c.name}
                      </h3>
                      <p className="text-stone-200 text-[10px] line-clamp-1 leading-normal opacity-90">
                        {c.tagline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured vendors grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="text-center md:text-left space-y-1">
                <span className="text-[9px] uppercase text-amber-700 font-bold tracking-widest block">Handpicked Selections</span>
                <h2 className="font-serif font-black text-2xl md:text-3xl text-stone-900 tracking-wide">Royal Choice Listings</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            </section>

            {/* Testimonials */}
            <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 rounded-2xl bg-white border border-stone-200 text-center relative overflow-hidden shadow-card">
              <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl" />
              
              <div className="max-w-2xl mx-auto space-y-4 relative z-10">
                <div className="flex items-center justify-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                
                <p className="font-serif italic text-sm md:text-base text-stone-850 leading-relaxed">
                  &ldquo;Jagmandir Palace in Udaipur was our dream destination and using this list to match with local coordinators made our planning completely stress-free. True luxury service!&rdquo;
                </p>

                <div className="text-[10px] uppercase tracking-wider font-bold text-amber-700">
                  Divya & Rohit • Married in Udaipur
                </div>
              </div>
            </section>

          </div>
        )}

        {/* View B: Explore Vendors */}
        {activeTab === "vendors" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6 md:gap-8 animate-fade-up relative">
            
            {/* Filter sidebar toggler (Only on Mobile) */}
            <div className="lg:hidden flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <span className="text-[10px] text-stone-400 block uppercase font-bold">Discovery Engine</span>
                <h2 className="font-serif font-black text-lg text-stone-900">
                  {filteredVendors.length} Listings Matching
                </h2>
              </div>
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 bg-white border border-stone-200 text-xs font-bold uppercase rounded-lg text-stone-700 shadow-sm"
              >
                <SlidersHorizontal className="h-3.5 w-3.5 text-amber-600" />
                <span>Filters</span>
              </button>
            </div>

            {/* Side Filters Panel (Desktop & Mobile Overlay Drawer) */}
            <aside 
              className={`
                shrink-0 w-72 space-y-6 
                lg:block 
                ${isMobileFilterOpen 
                  ? "fixed inset-0 z-50 bg-white p-6 overflow-y-auto block animate-fade-up" 
                  : "hidden"
                }
              `}
            >
              
              <div className="space-y-6">
                
                {/* Sidebar Headline & Reset */}
                <div className="flex justify-between items-center pb-3 border-b border-stone-150">
                  <h3 className="font-serif font-bold text-sm text-stone-900 uppercase tracking-wide flex items-center gap-1.5">
                    <SlidersHorizontal className="h-4 w-4 text-amber-600" /> Filters
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleResetFilters}
                      className="text-[10px] uppercase font-bold text-stone-400 hover:text-amber-600 transition-colors"
                    >
                      Clear All
                    </button>
                    {isMobileFilterOpen && (
                      <button
                        onClick={() => setIsMobileFilterOpen(false)}
                        className="p-1 text-stone-400 hover:text-stone-700 bg-stone-50 rounded"
                        aria-label="Close filters"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Text search input */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase text-stone-550 font-bold tracking-wider">Search Keyword</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      placeholder="e.g. Palace, Studio..."
                      className="w-full bg-white border border-stone-200 rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-stone-800"
                    />
                    <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-stone-400" />
                  </div>
                </div>

                {/* Category select input */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase text-stone-550 font-bold tracking-wider">Vendor Category</label>
                  <select
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-stone-850 cursor-pointer"
                  >
                    <option value="All">All Categories</option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                {/* City select input */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase text-stone-550 font-bold tracking-wider">City Location</label>
                  <select
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-stone-850 cursor-pointer"
                  >
                    <option value="All">All Cities</option>
                    {CITIES.map((c) => (
                      <option key={c.name} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>

                {/* Maximum Cost Price Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] uppercase text-stone-505 font-bold tracking-wider">
                    <span>Max Package Cost</span>
                    <span className="text-amber-700 font-extrabold">{formatPrice(maxPrice)}</span>
                  </div>
                  <input
                    type="range"
                    min={20000}
                    max={2000000}
                    step={10000}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full h-1.5 bg-stone-100 rounded appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[9px] text-stone-400">
                    <span>₹20k</span>
                    <span>₹20 Lakhs</span>
                  </div>
                </div>

                {/* Minimum Rating */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase text-stone-555 font-bold tracking-wider">Minimum Rating</label>
                  <select
                    value={minRating}
                    onChange={(e) => setMinRating(Number(e.target.value))}
                    className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-stone-850 cursor-pointer"
                  >
                    <option value={0}>Any Rating</option>
                    <option value={4.5}>4.5+ Stars</option>
                    <option value={4.8}>4.8+ Stars</option>
                  </select>
                </div>

                {/* Venue Capacity input (conditionally visible) */}
                {searchCategory.toLowerCase() === "venues" && (
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase text-stone-555 font-bold tracking-wider">Min Guest Capacity</label>
                    <select
                      value={venueCapacity}
                      onChange={(e) => setVenueCapacity(Number(e.target.value))}
                      className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-stone-855 cursor-pointer"
                    >
                      <option value={0}>Any Capacity</option>
                      <option value={200}>200+ Guests</option>
                      <option value={500}>500+ Guests</option>
                      <option value={800}>800+ Guests</option>
                    </select>
                  </div>
                )}

                {/* Mobile Apply Button */}
                {isMobileFilterOpen && (
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="w-full py-3 bg-amber-500 text-stone-950 font-bold uppercase rounded-xl tracking-wider text-xs shadow-md"
                  >
                    Apply Filters ({filteredVendors.length} Matches)
                  </button>
                )}

              </div>
            </aside>

            {/* Main Vendors grid output */}
            <section className="flex-1 space-y-6">
              
              {/* Grid header: matches count & sort */}
              <div className="hidden lg:flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs text-stone-400 block uppercase font-semibold">Discovery Engine</span>
                  <h2 className="font-serif font-black text-xl text-stone-900">
                    {filteredVendors.length} {filteredVendors.length === 1 ? "Listing Match" : "Listing Matches"}
                  </h2>
                </div>

                {/* Sort selector */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-stone-500">Sort By</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-amber-500 text-stone-700 cursor-pointer font-bold"
                  >
                    <option value="featured">Featured / Rating</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>

              {/* Vendors Cards Grid */}
              {filteredVendors.length === 0 ? (
                <div className="text-center py-20 bg-white border border-stone-200 rounded-2xl shadow-card space-y-3">
                  <SlidersHorizontal className="h-10 w-10 text-stone-300 mx-auto" />
                  <h3 className="font-serif font-bold text-stone-500">No Match Found</h3>
                  <p className="text-xs text-stone-400 max-w-sm mx-auto">
                    Try adjusting your filters, resetting the pricing limit, or search for other services.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                  {filteredVendors.map((vendor) => (
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

        {/* View C: Matchmaker */}
        {activeTab === "matchmaker" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Matchmaker
              vendors={vendors}
              onSelectVendor={(v) => setSelectedVendor(v)}
            />
          </div>
        )}

        {/* View D: Supplier listing portal */}
        {activeTab === "register" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <AddVendorForm onAddVendor={handleAddVendor} />
          </div>
        )}

      </div>

      {/* 3. Global Footer (desktop only) */}
      <footer className="hidden md:block bg-white border-t border-stone-200 py-12 text-center text-xs text-stone-500 uppercase tracking-widest font-semibold mt-auto space-y-2">
        <div>
          © 2026 Plan My Baraat Corp • Designed for premium celebrations
        </div>
        <div className="text-[10px] text-stone-450 lowercase font-normal font-sans">
          Light theme application. Powered by Next.js, Tailwind CSS.
        </div>
      </footer>

      {/* 4. Sticky Bottom Mobile App Navigation Shell (Visible only on mobile devices) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-stone-200 flex justify-around items-center h-16 mobile-bottom-nav">
        {[
          { id: "home", label: "Home", icon: HomeIcon },
          { id: "vendors", label: "Explore", icon: Search },
          { id: "matchmaker", label: "Budget", icon: Calculator },
          { id: "register", label: "Supplier", icon: Building }
        ].map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id as "home" | "vendors" | "matchmaker" | "register");
                setIsMobileFilterOpen(false);
              }}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-all ${
                isActive 
                  ? "text-amber-700 font-extrabold" 
                  : "text-stone-450 hover:text-stone-850"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "stroke-[2.5]" : "stroke-[1.8]"}`} />
              <span className="text-[9px] uppercase tracking-wider font-semibold">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* 5. Interactive Details Modal */}
      {selectedVendor && (
        <VendorDetailModal
          vendor={selectedVendor}
          onClose={() => setSelectedVendor(null)}
          onAddReview={handleAddReview}
        />
      )}

      {/* 6. Wishlist side drawer */}
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

    </main>
  );
}
