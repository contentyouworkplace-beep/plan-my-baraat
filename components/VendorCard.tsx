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
      className="bg-[#0F0F0F] border border-white/10 hover:border-[#C9A24B]/30 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full group"
    >
      {/* Vendor Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
        <img
          src={vendor.imageUrl}
          alt={vendor.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-[#C9A24B] text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
          {vendor.category}
        </span>

        {/* Wishlist Button */}
        <button
          onClick={(e) => onToggleWishlist(e, vendor.id)}
          className="absolute top-3 right-3 h-8 w-8 bg-black/70 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-red-500 transition-all duration-300 border border-white/10"
          aria-label="Toggle Wishlist"
        >
          <Heart
            className={`h-4.5 w-4.5 transition-colors ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-white/70"
            }`}
          />
        </button>

        {vendor.featured && (
          <span className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-[#C9A24B] text-[9px] font-semibold uppercase tracking-widest px-2.5 py-0.5 border border-[#C9A24B]/30">
            Royal Choice
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Rating and Location */}
          <div className="flex items-center justify-between text-xs text-white/50">
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-[#C9A24B]" />
              <span className="font-semibold text-white/70">{vendor.city}</span>
            </div>
            <div className="flex items-center gap-1 bg-[#C9A24B]/10 border border-[#C9A24B]/20 px-2 py-0.5 text-[#C9A24B] font-bold text-[11px]">
              <Star className="h-3 w-3 fill-current" />
              <span>{vendor.rating.toFixed(1)}</span>
              <span className="text-white/40 font-normal">({vendor.reviewsCount})</span>
            </div>
          </div>

          <h3 className="font-serif font-bold text-base text-white tracking-wide line-clamp-1 group-hover:text-[#C9A24B] transition-colors">
            {vendor.name}
          </h3>

          <p className="text-white/50 text-xs font-sans line-clamp-2 leading-relaxed">
            {vendor.description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase text-white/40 font-semibold tracking-wider block">Starting Price</span>
            <span className="text-base font-bold text-[#C9A24B]">
              {formatPrice(vendor.price)}
              <span className="text-xs text-white/40 font-normal font-sans ml-1">/{vendor.priceUnit}</span>
            </span>
          </div>

          <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 group-hover:text-[#C9A24B] transition-colors">
            View Details &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}
