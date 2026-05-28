import React from "react";
import { X, Trash2, Heart, Calculator } from "lucide-react";
import { Vendor } from "@/lib/vendorData";

interface WishlistDrawerProps {
  wishlistIds: string[];
  vendors: Vendor[];
  onRemoveFromWishlist: (e: React.MouseEvent, id: string) => void;
  onSelectVendor: (vendor: Vendor) => void;
  onClose: () => void;
}

export default function WishlistDrawer({
  wishlistIds,
  vendors,
  onRemoveFromWishlist,
  onSelectVendor,
  onClose
}: WishlistDrawerProps) {
  // Get full vendor objects that are shortlisted
  const savedVendors = vendors.filter((v) => wishlistIds.includes(v.id));

  // Compute total starting cost of the bundle
  const totalCost = savedVendors.reduce((acc, v) => acc + v.price, 0);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/40 backdrop-blur-sm flex justify-end">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md h-full bg-white border-l border-stone-200 shadow-luxury flex flex-col justify-between animate-fade-up">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-100 bg-stone-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500 fill-current animate-pulse" />
            <h3 className="font-serif font-black text-xl text-stone-900 tracking-wide">
              Shortlisted ({savedVendors.length})
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-all"
            aria-label="Close panel"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {savedVendors.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Heart className="h-10 w-10 text-stone-300 mx-auto" />
              <p className="text-stone-600 text-sm">Your shortlist is currently empty.</p>
              <p className="text-[11px] text-stone-400 max-w-[200px] mx-auto">
                Explore the marketplace and click the heart icon on any vendor to save it here.
              </p>
            </div>
          ) : (
            savedVendors.map((vendor) => (
              <div
                key={vendor.id}
                onClick={() => onSelectVendor(vendor)}
                className="bg-stone-50 border border-stone-100 p-4 rounded-xl flex gap-3 hover:border-amber-500/20 cursor-pointer transition-all relative group"
              >
                {/* Image */}
                <div className="h-16 w-16 rounded-lg overflow-hidden shrink-0 bg-stone-200 border border-stone-100">
                  <img src={vendor.imageUrl} alt={vendor.name} className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 space-y-1 pr-6">
                  <span className="text-[9px] bg-amber-500/10 text-amber-850 border border-amber-500/20 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                    {vendor.category}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-stone-850 truncate group-hover:text-amber-600 transition-colors">
                    {vendor.name}
                  </h4>
                  <p className="text-xs font-bold text-amber-600">
                    {formatPrice(vendor.price)}
                    <span className="text-[10px] text-stone-500 font-normal">/{vendor.priceUnit}</span>
                  </p>
                </div>

                {/* Delete button */}
                <button
                  onClick={(e) => onRemoveFromWishlist(e, vendor.id)}
                  className="absolute top-4 right-4 text-stone-400 hover:text-red-500 transition-colors p-1"
                  title="Remove from Shortlist"
                  aria-label="Remove from Wishlist"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer info: aggregate totals */}
        {savedVendors.length > 0 && (
          <div className="p-6 border-t border-stone-200 bg-stone-50 space-y-4">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-stone-500 flex items-center gap-1">
                <Calculator className="h-4 w-4 text-amber-600" /> Bundle Cost
              </span>
              <span className="text-base font-black text-amber-700">
                {formatPrice(totalCost)}
              </span>
            </div>
            
            <p className="text-[10px] text-stone-500 leading-normal">
              *Sum of starting price packages. Actual total may differ depending on your guest count, dates, and customized setup requests.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
