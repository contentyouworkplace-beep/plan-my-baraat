import React, { useState, useMemo } from "react";
import { Sparkles, MapPin, Calculator, Users, Star } from "lucide-react";
import { Vendor, calculateBudgetAllocation } from "@/lib/vendorData";

interface MatchmakerProps {
  vendors: Vendor[];
  onSelectVendor: (vendor: Vendor) => void;
}

export default function Matchmaker({ vendors, onSelectVendor }: MatchmakerProps) {
  const [budget, setBudget] = useState(3000000); // 30 Lakhs
  const [city, setCity] = useState("Udaipur");
  const [guests, setGuests] = useState(300);
  const [style, setStyle] = useState("Royal Palace");

  // Get budget allocation breakdown based on total budget and style
  const allocations = useMemo(() => {
    return calculateBudgetAllocation(budget, style);
  }, [budget, style]);

  // Find matching vendors in the selected city.
  const recommendedVendors = useMemo(() => {
    const localVendors = vendors.filter(
      (v) => v.city.toLowerCase() === city.toLowerCase()
    );

    return localVendors.map((vendor) => {
      const categoryAlloc = allocations.find(
        (a) => a.category.toLowerCase() === vendor.category.toLowerCase()
      );
      
      let isUnderBudget = false;
      let diffPercent = 0;
      
      if (categoryAlloc) {
        let vendorCost = vendor.price;
        if (vendor.category === "Caterers") {
          vendorCost = vendor.price * guests;
        }
        
        isUnderBudget = vendorCost <= categoryAlloc.amount;
        diffPercent = Math.round(((vendorCost - categoryAlloc.amount) / categoryAlloc.amount) * 100);
      }

      return {
        ...vendor,
        isUnderBudget,
        diffPercent
      };
    }).sort((a, b) => {
      if (a.isUnderBudget && !b.isUnderBudget) return -1;
      if (!a.isUnderBudget && b.isUnderBudget) return 1;
      return b.rating - a.rating;
    });
  }, [vendors, city, guests, allocations]);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Introduction Card */}
      <div className="relative overflow-hidden rounded-2xl glass-panel p-6 md:p-8">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs text-amber-700 font-semibold">
            <Calculator className="h-3.5 w-3.5" />
            <span>AI Budget Allocation & Smart Recommendations</span>
          </div>
          <h2 className="font-serif font-black text-3xl text-stone-900 tracking-wide">
            Wedding <span className="gold-text-shimmer">Matchmaker</span>
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Estimate your wedding costs in seconds. Enter your parameters and we will allocate your budget across categories and match you with premium local vendors fitting your criteria.
          </p>
        </div>
      </div>

      {/* Input Wizards & Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Setup parameters */}
        <div className="lg:col-span-5 bg-white border border-stone-200 p-6 rounded-2xl space-y-6 shadow-card">
          <h3 className="font-serif font-bold text-base text-stone-900 uppercase tracking-wider pb-3 border-b border-stone-100">
            Configure Celebration
          </h3>

          {/* Budget Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs uppercase text-stone-500 font-bold tracking-wider">Total Wedding Budget</label>
              <span className="text-sm font-bold text-amber-600">{formatPrice(budget)}</span>
            </div>
            <input
              type="range"
              min={500000}
              max={15000000}
              step={100000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-1.5 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[10px] text-stone-400 font-semibold uppercase tracking-wider">
              <span>₹5 Lakhs</span>
              <span>₹1.5 Crores</span>
            </div>
          </div>

          {/* Destination Selector */}
          <div className="space-y-2">
            <label className="text-xs uppercase text-stone-500 font-bold tracking-wider flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-amber-600" /> Destination City
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-stone-800 font-medium cursor-pointer"
            >
              {["Udaipur", "Jaipur", "Goa", "Delhi-NCR", "Mumbai", "Bengaluru", "Agra", "Jodhpur", "Kerala", "Shimla", "Mussoorie", "Hyderabad", "Pune", "Chennai", "Kolkata", "Amritsar", "Rishikesh", "Varanasi", "Lucknow", "Mahabalipuram"].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Guest Count Input */}
          <div className="space-y-2">
            <label className="text-xs uppercase text-stone-500 font-bold tracking-wider flex items-center gap-1">
              <Users className="h-3.5 w-3.5 text-amber-600" /> Guest Count
            </label>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(Math.max(10, Number(e.target.value)))}
              className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-stone-800 font-medium"
              min={10}
            />
          </div>

          {/* Wedding Style/Theme */}
          <div className="space-y-2">
            <label className="text-xs uppercase text-stone-500 font-bold tracking-wider flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" /> Wedding Style / Vibe
            </label>
            <div className="grid grid-cols-2 gap-2">
              {["Royal Palace", "Modern Chic", "Elegant Beach", "Intimate Traditional"].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStyle(s)}
                  className={`py-3 px-2 rounded-xl border text-center transition-all duration-200 ${
                    style === s
                      ? "bg-amber-500/10 border-amber-500 text-amber-700 font-bold text-xs"
                      : "bg-white border-stone-200 text-stone-500 text-xs hover:border-stone-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Estimated Allocations display */}
        <div className="lg:col-span-7 bg-white border border-stone-200 p-6 rounded-2xl space-y-6 shadow-card">
          <h3 className="font-serif font-bold text-base text-stone-900 uppercase tracking-wider pb-3 border-b border-stone-100">
            Suggested Budget Breakdown
          </h3>

          <div className="space-y-4">
            {allocations.map((alloc) => (
              <div key={alloc.category} className="space-y-1.5">
                <div className="flex justify-between items-baseline text-xs font-semibold">
                  <span className="text-stone-700">{alloc.category} ({alloc.percentage}%)</span>
                  <span className="text-amber-700 font-bold">{formatPrice(alloc.amount)}</span>
                </div>
                
                {/* Visual Progress Bar */}
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden border border-stone-200">
                  <div
                    className="bg-gold-gradient h-full rounded-full transition-all duration-500"
                    style={{ width: `${alloc.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-stone-50 border border-stone-100 p-4 rounded-xl text-center">
            <span className="text-[10px] uppercase text-stone-500 font-bold tracking-wider block">Estimated Cost per Guest</span>
            <span className="text-lg font-black text-amber-700 mt-1 block">
              {formatPrice(Math.round(budget / guests))}
              <span className="text-xs text-stone-500 font-normal font-sans ml-1">including all categories</span>
            </span>
          </div>
        </div>

      </div>

      {/* Recommended Vendors Section */}
      <div className="space-y-4">
        <h3 className="font-serif font-black text-2xl text-stone-900 tracking-wide">
          Top Matching Vendors in {city}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendedVendors.length === 0 ? (
            <div className="col-span-2 text-center p-8 bg-white border border-stone-200 rounded-2xl shadow-card">
              <p className="text-stone-600 text-sm">We don&apos;t have registered vendors in {city} yet.</p>
              <p className="text-xs text-amber-600 mt-1">Use the &quot;List Your Business&quot; tab to list one in {city}!</p>
            </div>
          ) : (
            recommendedVendors.map((vendor) => {
              // Calculate estimated total package cost
              let estimatedCost = vendor.price;
              if (vendor.category === "Caterers") {
                estimatedCost = vendor.price * guests;
              }

              return (
                <div
                  key={vendor.id}
                  onClick={() => onSelectVendor(vendor)}
                  className="bg-white border border-stone-200 p-5 rounded-2xl cursor-pointer hover:border-amber-500/40 transition-all flex flex-col justify-between h-full group shadow-card"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="text-[10px] bg-amber-500/10 text-amber-800 border border-amber-500/20 px-2 py-0.5 rounded uppercase font-semibold">
                          {vendor.category}
                        </span>
                        <h4 className="font-serif font-bold text-base text-stone-900 mt-2 group-hover:text-amber-600 transition-colors">
                          {vendor.name}
                        </h4>
                      </div>
                      
                      {/* Budget compatibility badge */}
                      {vendor.isUnderBudget ? (
                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded shrink-0">
                          Within Budget
                        </span>
                      ) : (
                        <span className="bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-bold px-2 py-0.5 rounded shrink-0">
                          +{vendor.diffPercent}% over alloc
                        </span>
                      )}
                    </div>

                    <p className="text-stone-600 text-xs line-clamp-2 leading-relaxed">
                      {vendor.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase text-stone-500 block">Est. Cost for {guests} Guests</span>
                      <span className="text-sm font-bold text-amber-600">
                        {formatPrice(estimatedCost)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-amber-500/5 px-2.5 py-1 rounded text-amber-700 text-xs font-bold border border-amber-500/10">
                      <Star className="h-3 w-3 fill-current" />
                      <span>{vendor.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
