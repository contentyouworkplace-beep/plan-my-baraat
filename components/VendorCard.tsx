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
      className="bg-white border border-black/10 hover:border-[#E70D1D]/30 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full group"
    >
      {/* Vendor Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
        <img
          src={vendor.imageUrl}
          alt={vendor.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-[#E70D1D] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
          {vendor.category}
        </span>

        {/* Wishlist Button */}
        <button
          onClick={(e) => onToggleWishlist(e, vendor.id)}
          className="absolute top-3 right-3 h-8 w-8 bg-white/80 backdrop-blur-md flex items-center justify-center text-black/70 hover:text-red-600 transition-all duration-300 border border-black/10"
          aria-label="Toggle Wishlist"
        >
          <Heart
            className={`h-4.5 w-4.5 transition-colors ${
              isWishlisted ? "fill-red-600 text-red-600" : "text-black/70"
            }`}
          />
        </button>

        {vendor.featured && (
          <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-[#E70D1D] text-[9px] font-semibold uppercase tracking-widest px-2.5 py-0.5 border border-[#E70D1D]/30">
            Royal Choice
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Rating and Location */}
          <div className="flex items-center justify-between text-xs text-black/50">
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-[#E70D1D]" />
              <span className="font-semibold text-black/70">{vendor.city}</span>
            </div>
            <div className="flex items-center gap-1 bg-[#E70D1D]/10 border border-[#E70D1D]/20 px-2 py-0.5 text-[#E70D1D] font-bold text-[11px]">
              <Star className="h-3 w-3 fill-current" />
              <span>{vendor.rating.toFixed(1)}</span>
              <span className="text-black/40 font-normal">({vendor.reviewsCount})</span>
            </div>
          </div>

          <h3 className="font-serif font-bold text-base text-black tracking-wide line-clamp-1 group-hover:text-[#E70D1D] transition-colors">
            {vendor.name}
          </h3>

          <p className="text-black/50 text-xs font-sans line-clamp-2 leading-relaxed">
            {vendor.description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-black/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase text-black/40 font-semibold tracking-wider block">Starting Price</span>
            <span className="text-base font-bold text-[#E70D1D]">
              {formatPrice(vendor.price)}
              <span className="text-xs text-black/40 font-normal font-sans ml-1">/{vendor.priceUnit}</span>
            </span>
          </div>

          <span className="text-[11px] font-bold uppercase tracking-wider text-black/40 group-hover:text-[#E70D1D] transition-colors">
            View Details &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}
