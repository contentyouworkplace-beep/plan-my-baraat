import React from "react";
import { Star, MapPin, Heart } from "lucide-react";
import { Vendor } from "@/lib/vendorData";

interface VendorCardProps {
  vendor: Vendor;
  isWishlisted: boolean;
  onToggleWishlist: (e: React.MouseEvent, id: string) => void;
  onClick: () => void;
}

export default function VendorCard({
  vendor,
  isWishlisted,
  onToggleWishlist,
  onClick
}: VendorCardProps) {
  // Format price in Indian Rupee format (e.g. ₹1,50,000)
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div
      onClick={onClick}
      className="glass-panel glass-panel-hover rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full group"
    >
      {/* Vendor Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <img
          src={vendor.imageUrl}
          alt={vendor.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-amber-500 text-stone-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
          {vendor.category}
        </span>

        {/* Wishlist Button */}
        <button
          onClick={(e) => onToggleWishlist(e, vendor.id)}
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-600 hover:text-red-600 hover:bg-white transition-all duration-300 shadow-md border border-stone-100"
          aria-label="Toggle Wishlist"
        >
          <Heart
            className={`h-4.5 w-4.5 transition-colors ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-stone-600"
            }`}
          />
        </button>

        {vendor.featured && (
          <span className="absolute bottom-3 left-3 bg-rose-900/90 backdrop-blur-sm text-stone-100 text-[9px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded border border-rose-800/10">
            Royal Choice
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Rating and Location */}
          <div className="flex items-center justify-between text-xs text-stone-500">
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-amber-600" />
              <span className="font-semibold text-stone-600">{vendor.city}</span>
            </div>
            <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded text-amber-700 font-bold text-[11px]">
              <Star className="h-3 w-3 fill-current" />
              <span>{vendor.rating.toFixed(1)}</span>
              <span className="text-stone-500 font-normal">({vendor.reviewsCount})</span>
            </div>
          </div>

          <h3 className="font-serif font-bold text-base text-stone-900 tracking-wide line-clamp-1 group-hover:text-amber-600 transition-colors">
            {vendor.name}
          </h3>

          <p className="text-stone-600 text-xs font-sans line-clamp-2 leading-relaxed">
            {vendor.description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase text-stone-500 font-semibold tracking-wider block">Starting Price</span>
            <span className="text-base font-bold text-amber-600">
              {formatPrice(vendor.price)}
              <span className="text-xs text-stone-500 font-normal font-sans ml-1">/{vendor.priceUnit}</span>
            </span>
          </div>
          
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 group-hover:text-amber-600 transition-colors">
            View Details &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}
