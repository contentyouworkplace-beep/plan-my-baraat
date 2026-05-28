import React, { useState } from "react";
import { Plus, Sparkles, Building, CheckCircle } from "lucide-react";
import { Vendor } from "@/lib/vendorData";
import confetti from "canvas-confetti";

interface AddVendorFormProps {
  onAddVendor: (vendor: Omit<Vendor, "id" | "rating" | "reviewsCount" | "reviews" | "featured">) => void;
}

const DEFAULT_UNSPLASH_IMAGE = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800";

export default function AddVendorForm({ onAddVendor }: AddVendorFormProps) {
  // Input fields state
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Venues");
  const [city, setCity] = useState("Udaipur");
  const [price, setPrice] = useState("");
  const [priceUnit, setPriceUnit] = useState("per day");
  const [imageUrl, setImageUrl] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [capacity, setCapacity] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [services, setServices] = useState("");
  const [description, setDescription] = useState("");
  
  // Submit state
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !contact || !address || !description) return;

    // Split services list by commas
    const serviceList = services
      ? services.split(",").map((s) => s.trim()).filter(Boolean)
      : ["Premium Wedding Service", "Professional Staff", "Custom Arrangements"];

    onAddVendor({
      name,
      category,
      city,
      price: Number(price),
      priceUnit,
      imageUrl: imageUrl.trim() || DEFAULT_UNSPLASH_IMAGE,
      address,
      contact,
      capacity: capacity ? Number(capacity) : undefined,
      vegOnly: category === "Caterers" || category === "Venues" ? vegOnly : undefined,
      services: serviceList,
      description
    });

    // Clear form
    setName("");
    setPrice("");
    setImageUrl("");
    setAddress("");
    setContact("");
    setCapacity("");
    setServices("");
    setDescription("");
    setVegOnly(false);

    setSuccess(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#b8860b", "#e5cc93", "#8c6200"]
    });
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-up">
      {success ? (
        <div className="bg-white border border-amber-500/20 p-8 rounded-2xl text-center space-y-6 shadow-luxury">
          <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
            <CheckCircle className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <h2 className="font-serif font-black text-2xl text-stone-900">Listing Registered!</h2>
            <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
              Your vendor business has been successfully registered and listed on Plan My Baraat. It is now live in search results and filter queries.
            </p>
          </div>

          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => setSuccess(false)}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
            >
              List Another Business
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-card">
          {/* Header */}
          <div className="bg-gradient-to-r from-stone-50 via-white to-stone-50 p-6 md:p-8 border-b border-stone-200 flex items-center justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 text-[10px] text-amber-700 font-bold uppercase tracking-wider">
                <Sparkles className="h-3 w-3 animate-pulse" />
                <span>Supplier Portal</span>
              </div>
              <h2 className="font-serif font-black text-2xl text-stone-900 tracking-wide">
                Register Your Business
              </h2>
            </div>
            <Building className="h-8 w-8 text-amber-600/30" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            
            {/* Row 1: Name and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase text-stone-500 font-bold tracking-wider">Business Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maharaja Photo Studio"
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-stone-850"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase text-stone-500 font-bold tracking-wider">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-stone-800 cursor-pointer"
                >
                  {["Venues", "Photographers", "Makeup Artists", "Decorators", "DJ & Band", "Caterers", "Mehndi Artists"].map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 2: City and Base Price */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase text-stone-500 font-bold tracking-wider">City Location</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-stone-800 cursor-pointer"
                >
                  {["Udaipur", "Jaipur", "Goa", "Delhi-NCR", "Mumbai", "Bengaluru", "Agra", "Jodhpur", "Kerala", "Shimla", "Mussoorie", "Hyderabad", "Pune", "Chennai", "Kolkata", "Amritsar", "Rishikesh", "Varanasi", "Lucknow", "Mahabalipuram"].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase text-stone-500 font-bold tracking-wider">Starting Price (INR)</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g. 75000"
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-stone-850"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase text-stone-500 font-bold tracking-wider">Pricing Unit</label>
                <select
                  value={priceUnit}
                  onChange={(e) => setPriceUnit(e.target.value)}
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-stone-800 cursor-pointer"
                >
                  <option value="per day">per day</option>
                  <option value="per event">per event</option>
                  <option value="per plate">per plate</option>
                  <option value="per hand">per hand</option>
                </select>
              </div>
            </div>

            {/* Row 3: Contact & Capacity/Veg options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase text-stone-500 font-bold tracking-wider">Contact Number</label>
                <input
                  type="tel"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="e.g. +91 99988 88777"
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-stone-850"
                  required
                />
              </div>

              {category === "Venues" ? (
                <div className="space-y-2">
                  <label className="text-xs uppercase text-stone-500 font-bold tracking-wider">Guest Capacity</label>
                  <input
                    type="number"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    placeholder="e.g. 500"
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-stone-850"
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="text-xs uppercase text-stone-500 font-bold tracking-wider">Image Showcase URL (Optional)</label>
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-stone-800 text-xs"
                  />
                </div>
              )}
            </div>

            {/* Conditional Venue/Catering Options */}
            {(category === "Venues" || category === "Caterers") && (
              <div className="flex items-center gap-6 p-4 bg-stone-50 rounded-xl border border-stone-200">
                <label className="text-xs uppercase text-stone-505 font-bold tracking-wider flex-1">
                  Food Preferences
                </label>
                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    id="vegOnly"
                    checked={vegOnly}
                    onChange={(e) => setVegOnly(e.target.checked)}
                    className="h-4 w-4 bg-white border border-stone-300 rounded focus:outline-none accent-amber-500 cursor-pointer"
                  />
                  <label htmlFor="vegOnly" className="text-xs text-stone-700 font-medium cursor-pointer">
                    Pure Vegetarian Only
                  </label>
                </div>
              </div>
            )}

            {/* Row 4: Address */}
            <div className="space-y-2">
              <label className="text-xs uppercase text-stone-500 font-bold tracking-wider">Physical Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="e.g. 45, Palace Road, opposite City Fort, Udaipur"
                className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-stone-850"
                required
              />
            </div>

            {/* Row 5: Services */}
            <div className="space-y-2">
              <label className="text-xs uppercase text-stone-500 font-bold tracking-wider">
                Services Offered (Comma Separated)
              </label>
              <input
                type="text"
                value={services}
                onChange={(e) => setServices(e.target.value)}
                placeholder="e.g. Pre-wedding shoot, Drone coverage, Fine art prints, Hardcover album"
                className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-stone-800 text-xs"
              />
            </div>

            {/* Row 6: Description */}
            <div className="space-y-2">
              <label className="text-xs uppercase text-stone-500 font-bold tracking-wider">Business Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your history, design style, custom features, and what makes you special..."
                className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-stone-850 h-28 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 text-stone-950 font-bold py-4 hover:bg-amber-400 transition-colors uppercase tracking-wider text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <Plus className="h-4.5 w-4.5" />
              <span>Submit Listing</span>
            </button>

          </form>
        </div>
      )}
    </div>
  );
}
