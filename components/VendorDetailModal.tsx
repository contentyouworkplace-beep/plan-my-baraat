import React, { useState } from "react";
import { X, Star, MapPin, Phone, Award, Check, Send, Sparkles } from "lucide-react";
import { Vendor, Review } from "@/lib/vendorData";
import confetti from "canvas-confetti";

interface VendorDetailModalProps {
  vendor: Vendor;
  onClose: () => void;
  onAddReview: (vendorId: string, review: Omit<Review, "id" | "date">) => void;
  onAddInquiry?: (inquiry: { name: string; phone: string; date: string; msg: string }) => void;
}

export default function VendorDetailModal({
  vendor,
  onClose,
  onAddReview,
  onAddInquiry
}: VendorDetailModalProps) {
  // Image selection state
  const [activeImage, setActiveImage] = useState(vendor.imageUrl);
  
  // Inquiry form states
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryDate, setInquiryDate] = useState("");
  const [inquiryMsg, setInquiryMsg] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Review form states
  const [reviewAuthor, setReviewAuthor] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");
  const [reviewSuccess, setReviewSuccess] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone || !inquiryDate) return;

    if (onAddInquiry) {
      onAddInquiry({
        name: inquiryName,
        phone: inquiryPhone,
        date: inquiryDate,
        msg: inquiryMsg
      });
    }

    setInquirySubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#b8860b", "#e5cc93", "#8c6200"]
    });
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewAuthor || !reviewComment) return;

    onAddReview(vendor.id, {
      author: reviewAuthor,
      rating: reviewRating,
      comment: reviewComment
    });

    setReviewAuthor("");
    setReviewRating(5);
    setReviewComment("");
    setReviewSuccess(true);
    setTimeout(() => setReviewSuccess(false), 3000);
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(value);
  };

  // Image list including main and gallery
  const images = [vendor.imageUrl, ...(vendor.galleryUrls || [])];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      {/* Modal Container */}
      <div className="bg-white border border-amber-500/20 w-full max-w-5xl rounded-2xl overflow-hidden shadow-luxury max-h-[95vh] md:max-h-[90vh] flex flex-col relative animate-fade-up">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-stone-50 border border-stone-200 text-stone-600 hover:text-stone-900 p-2.5 rounded-full transition-all shadow-md"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Content Scrollable Area */}
        <div className="overflow-y-auto flex-1 p-5 md:p-8 space-y-8">
          
          {/* Header & Gallery Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            
            {/* Gallery Column */}
            <div className="lg:col-span-7 space-y-3">
              <div className="aspect-[16/10] bg-stone-100 rounded-xl overflow-hidden border border-stone-100 relative">
                <img
                  src={activeImage}
                  alt={vendor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail List */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`h-12 w-16 sm:h-14 sm:w-20 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === img ? "border-amber-500" : "border-stone-200 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info Summary Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-500/10 text-amber-800 border border-amber-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {vendor.category}
                  </span>
                  {vendor.featured && (
                    <span className="bg-rose-50 text-rose-800 border border-rose-200 text-[10px] font-semibold px-2.5 py-0.5 rounded flex items-center gap-1">
                      <Award className="h-3 w-3" /> Royal Choice
                    </span>
                  )}
                </div>

                <h2 className="font-serif font-black text-2xl md:text-3xl text-stone-900 leading-snug">
                  {vendor.name}
                </h2>

                <div className="flex items-center gap-4 text-sm text-stone-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <span>{vendor.city}</span>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-amber-700">
                    <Star className="h-4 w-4 fill-current" />
                    <span>{vendor.rating.toFixed(1)}</span>
                    <span className="text-stone-500 font-normal">({vendor.reviewsCount} reviews)</span>
                  </div>
                </div>

                <p className="text-stone-700 text-sm leading-relaxed pt-2">
                  {vendor.description}
                </p>
              </div>

              {/* Price Details Card */}
              <div className="bg-stone-50 border border-stone-100 p-4 rounded-xl space-y-2">
                <span className="text-xs uppercase text-stone-500 font-bold tracking-wider">Starting Price Package</span>
                <div className="text-2xl font-black text-amber-700 flex items-baseline gap-1">
                  {formatPrice(vendor.price)}
                  <span className="text-xs text-stone-500 font-normal font-sans">/{vendor.priceUnit}</span>
                </div>
                <div className="text-[11px] text-stone-600 leading-normal flex flex-wrap gap-x-4 gap-y-1">
                  {vendor.capacity && <span>Capacity: {vendor.capacity} guests</span>}
                  {vendor.vegOnly !== undefined && (
                    <span>Food: {vendor.vegOnly ? "Pure Veg Only" : "Veg & Non-Veg"}</span>
                  )}
                </div>
              </div>
            </div>

          </div>

          <div className="border-t border-stone-100 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Side: Services, Contact, and Reviews */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Key Services Offered */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-amber-700 tracking-wide">Services & Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {vendor.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-stone-700 text-xs">
                      <div className="h-4 w-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 bg-stone-50 border border-stone-100 p-4 rounded-xl">
                <h3 className="font-serif font-bold text-sm text-stone-700 tracking-wide uppercase">Operational Address & Contact</h3>
                <div className="space-y-2 text-xs text-stone-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0" />
                    <span>{vendor.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-amber-600 shrink-0" />
                    <span>{vendor.contact}</span>
                  </p>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-lg text-amber-700 tracking-wide">
                  Guest Reviews ({vendor.reviews.length})
                </h3>

                <div className="space-y-3">
                  {vendor.reviews.length === 0 ? (
                    <p className="text-xs text-stone-500 italic">No reviews yet. Be the first to share your experience!</p>
                  ) : (
                    vendor.reviews.map((rev) => (
                      <div key={rev.id} className="bg-stone-50 border border-stone-100 p-4 rounded-xl space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-stone-800">{rev.author}</span>
                          <span className="text-stone-500">{rev.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-amber-600">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < rev.rating ? "fill-current" : "opacity-30"}`}
                            />
                          ))}
                        </div>
                        <p className="text-stone-600 text-xs leading-relaxed">{rev.comment}</p>
                      </div>
                    ))
                  )}
                </div>

                {/* Review Form */}
                <form onSubmit={handleReviewSubmit} className="bg-stone-50 border border-stone-100 p-5 rounded-xl space-y-3">
                  <h4 className="font-serif font-bold text-sm text-stone-800 uppercase tracking-wide">Write a Review</h4>
                  
                  {reviewSuccess && (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs px-3 py-2 rounded">
                      Review submitted successfully! Thank you.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] text-stone-500 uppercase tracking-wider mb-1 font-bold">Your Name</label>
                      <input
                        type="text"
                        value={reviewAuthor}
                        onChange={(e) => setReviewAuthor(e.target.value)}
                        placeholder="e.g. Priyesh Shah"
                        className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-stone-800"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-stone-500 uppercase tracking-wider mb-1 font-bold">Rating</label>
                      <select
                        value={reviewRating}
                        onChange={(e) => setReviewRating(Number(e.target.value))}
                        className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-stone-800 cursor-pointer"
                      >
                        <option value={5}>5 Stars - Excellent</option>
                        <option value={4}>4 Stars - Very Good</option>
                        <option value={3}>3 Stars - Average</option>
                        <option value={2}>2 Stars - Poor</option>
                        <option value={1}>1 Star - Terrible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-stone-500 uppercase tracking-wider mb-1 font-bold">Comment</label>
                    <textarea
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      placeholder="Share your wedding planning or attendance experience with this vendor..."
                      className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-stone-800 h-20 resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-5 py-2.5 bg-amber-500 text-stone-950 text-xs font-bold rounded-lg hover:bg-amber-400 transition-colors uppercase tracking-wider"
                  >
                    Submit Review
                  </button>
                </form>

              </div>

            </div>

            {/* Right Side: Booking Inquiry Panel */}
            <div className="lg:col-span-5">
              <div className="sticky top-4 bg-stone-50 border border-amber-500/10 p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4.5 w-4.5 text-amber-600" />
                  <h3 className="font-serif font-bold text-base text-stone-850 tracking-wide uppercase">Request A Quote</h3>
                </div>
                
                <p className="text-xs text-stone-600 leading-relaxed">
                  Send details of your upcoming wedding celebration to receive pricing and availability direct from {vendor.name}.
                </p>

                {inquirySubmitted ? (
                  <div className="bg-amber-500/10 border border-amber-500/20 p-5 rounded-xl text-center space-y-3">
                    <Award className="h-10 w-10 text-amber-600 mx-auto animate-bounce" />
                    <h4 className="font-serif font-bold text-stone-900">Inquiry Sent!</h4>
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      Your request has been forwarded to the booking office. You will receive a call within 24 hours.
                    </p>
                    <button
                      onClick={() => setInquirySubmitted(false)}
                      className="text-[10px] text-amber-600 underline hover:text-amber-700 font-bold uppercase tracking-wider block mx-auto pt-2"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <div>
                      <label className="block text-[10px] text-stone-500 uppercase tracking-wider mb-1 font-bold">Your Name</label>
                      <input
                        type="text"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Kunal Mehra"
                        className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-stone-850"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-stone-500 uppercase tracking-wider mb-1 font-bold">Contact Number</label>
                      <input
                        type="tel"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-stone-850"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-stone-500 uppercase tracking-wider mb-1 font-bold">Wedding Date</label>
                      <input
                        type="date"
                        value={inquiryDate}
                        onChange={(e) => setInquiryDate(e.target.value)}
                        className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-stone-850 cursor-pointer"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-stone-500 uppercase tracking-wider mb-1 font-bold">Additional Notes (Optional)</label>
                      <textarea
                        value={inquiryMsg}
                        onChange={(e) => setInquiryMsg(e.target.value)}
                        placeholder="Number of guests, style request, or special questions..."
                        className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-stone-850 h-16 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-500 text-stone-950 font-bold py-3 hover:bg-amber-400 transition-colors uppercase tracking-wider text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Request Free Quote</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
