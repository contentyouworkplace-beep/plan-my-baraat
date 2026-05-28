export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  city: string;
  rating: number;
  reviewsCount: number;
  reviews: Review[];
  price: number; // starting price in INR
  priceUnit: string; // e.g. "per day", "per plate", "per event"
  imageUrl: string;
  galleryUrls?: string[];
  address: string;
  contact: string;
  capacity?: number; // only for Venues
  vegOnly?: boolean; // only for Caterers/Venues
  services: string[];
  description: string;
  featured: boolean;
}

export interface City {
  name: string;
  state: string;
  tagline: string;
  imageUrl: string;
  description: string;
}

export const CITIES: City[] = [
  {
    name: "Udaipur",
    state: "Rajasthan",
    tagline: "The City of Lakes & Royal Palaces",
    imageUrl: "/images/venue_luxury.png",
    description: "Breathtaking destination weddings in heritage palaces surrounded by serene lakes."
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    tagline: "The Pink City of Forts & Heritage",
    imageUrl: "/images/hero_bg.png",
    description: "Famous for grand fortresses, havelis, and majestic royal hospitality."
  },
  {
    name: "Goa",
    state: "Goa",
    tagline: "Tropical Beachfront Vows",
    imageUrl: "/images/photo_candid.png",
    description: "Perfect for sunset views, sandy shores, and vibrant beach parties."
  },
  {
    name: "Delhi-NCR",
    state: "Delhi",
    tagline: "Luxury Farmhouses & Extravagant Decor",
    imageUrl: "/images/decor_mandap.png",
    description: "Colossal farmhouse retreats, premium luxury banquets, and world-class designers."
  },
  {
    name: "Mumbai",
    state: "Maharashtra",
    tagline: "Coastal Sophistication & Bollywood Glamour",
    imageUrl: "/images/makeup_bride.png",
    description: "Offers luxurious seaside hotels, celebrity stylists, and contemporary elegance."
  },
  {
    name: "Bengaluru",
    state: "Karnataka",
    tagline: "Lush Gardens & Modern Chic Venues",
    imageUrl: "/images/venue_luxury.png",
    description: "Blends beautiful year-round climate, expansive lawns, and contemporary themes."
  },
  {
    name: "Agra",
    state: "Uttar Pradesh",
    tagline: "City of Taj Mahal & Eternal Love",
    imageUrl: "/images/hero_bg.png",
    description: "Tie the knot near the world's ultimate monument of love, the Taj Mahal."
  },
  {
    name: "Jodhpur",
    state: "Rajasthan",
    tagline: "The Golden Blue City",
    imageUrl: "/images/decor_mandap.png",
    description: "Grand fortresses, red sandstone palaces, and stunning desert dune settings."
  },
  {
    name: "Kerala",
    state: "Kerala",
    tagline: "God's Own Backwater Vows",
    imageUrl: "/images/photo_candid.png",
    description: "Lush coconut groves, houseboats, and serene beachside resorts."
  },
  {
    name: "Shimla",
    state: "Himachal Pradesh",
    tagline: "Mystic Hills & Colonial Romance",
    imageUrl: "/images/venue_luxury.png",
    description: "Gorgeous mountain ridges, cedar forests, and vintage colonial banquets."
  },
  {
    name: "Mussoorie",
    state: "Uttarakhand",
    tagline: "Queen of the Hills",
    imageUrl: "/images/hero_bg.png",
    description: "Stunning valley backdrops, cool breezes, and premium hillside resorts."
  },
  {
    name: "Hyderabad",
    state: "Telangana",
    tagline: "City of Nizami Royalty",
    imageUrl: "/images/decor_mandap.png",
    description: "Bespoke palaces, Nizam-style catering, and rich heritage celebrations."
  },
  {
    name: "Pune",
    state: "Maharashtra",
    tagline: "Lush Hills & Historic Havelis",
    imageUrl: "/images/makeup_bride.png",
    description: "Surrounded by Western Ghats valleys, luxury resorts, and Maratha culture."
  },
  {
    name: "Chennai",
    state: "Tamil Nadu",
    tagline: "Coastal Temples & Carnatic Heritage",
    imageUrl: "/images/photo_candid.png",
    description: "Beautiful shoreline celebrations, traditional temple architectures, and grand feasts."
  },
  {
    name: "Kolkata",
    state: "West Bengal",
    tagline: "City of Joy & Vintage Glamour",
    imageUrl: "/images/venue_luxury.png",
    description: "Grand colonial mansions, rich cultural themes, and famous Bengali delicacies."
  },
  {
    name: "Amritsar",
    state: "Punjab",
    tagline: "Vibrant Bhangra & Pompous Weddings",
    imageUrl: "/images/decor_mandap.png",
    description: "High-energy celebrations, rich heritage dhol, and traditional Amritsari hospitality."
  },
  {
    name: "Rishikesh",
    state: "Uttarakhand",
    tagline: "Sacred Ganges Shorelines",
    imageUrl: "/images/hero_bg.png",
    description: "Tie the knot near the holy Ganges backdrop in spiritual mountain valleys."
  },
  {
    name: "Varanasi",
    state: "Uttar Pradesh",
    tagline: "Spiritual Ghats & Eternal Heritage",
    imageUrl: "/images/decor_mandap.png",
    description: "Traditional Ganga Aarti vibes, Banarasi sarees, and pure heritage atmosphere."
  },
  {
    name: "Lucknow",
    state: "Uttar Pradesh",
    tagline: "Nawabi Tehzeeb & Awadhi Flavors",
    imageUrl: "/images/makeup_bride.png",
    description: "Famous for Awadhi wedding cuisine, Chikankari decor, and courteous hospitality."
  },
  {
    name: "Mahabalipuram",
    state: "Tamil Nadu",
    tagline: "Historic Shore Temples",
    imageUrl: "/images/photo_candid.png",
    description: "Monolithic heritage ruins overlooking spectacular waves and coastal resorts."
  }
];

export const CATEGORIES = [
  { id: "venues", name: "Venues", icon: "Home" },
  { id: "photographers", name: "Photographers", icon: "Camera" },
  { id: "makeup", name: "Makeup Artists", icon: "Sparkles" },
  { id: "decorators", name: "Decorators", icon: "Flower2" },
  { id: "music", name: "DJ & Band", icon: "Music" },
  { id: "caterers", name: "Caterers", icon: "Utensils" },
  { id: "mehndi", name: "Mehndi Artists", icon: "Paintbrush" }
];

// Verified high-quality local image assets to avoid broken links
const CATEGORY_IMAGES: Record<string, string[]> = {
  "venues": [
    "/images/venue_luxury.png",
    "/images/hero_bg.png",
    "/images/decor_mandap.png"
  ],
  "photographers": [
    "/images/photo_candid.png",
    "/images/hero_bg.png",
    "/images/venue_luxury.png"
  ],
  "makeup artists": [
    "/images/makeup_bride.png",
    "/images/photo_candid.png",
    "/images/decor_mandap.png"
  ],
  "decorators": [
    "/images/decor_mandap.png",
    "/images/hero_bg.png",
    "/images/venue_luxury.png"
  ],
  "dj & band": [
    "/images/decor_mandap.png",
    "/images/photo_candid.png",
    "/images/hero_bg.png"
  ],
  "caterers": [
    "/images/venue_luxury.png",
    "/images/decor_mandap.png",
    "/images/photo_candid.png"
  ],
  "mehndi artists": [
    "/images/makeup_bride.png",
    "/images/photo_candid.png",
    "/images/decor_mandap.png"
  ]
};

// Programmatic names generators for realism
const VENDOR_NAMES: Record<string, string[]> = {
  "venues": ["Heritage Palace Resort", "Orchid Convention Center", "Whispering Palms Lawn"],
  "photographers": ["Royal Frame Wedding Cinematics", "Golden Hour Candid Studios", "Signature Portraits & Films"],
  "makeup artists": ["Aura Luxury Bridal Lounge", "Styling Studio & Makeovers", "Bridal Glitz Celebrity Makeup"],
  "decorators": ["Traditional Marigold Flower Setups", "Glittering Chandeliers Theme Decor", "Red Carpet Mandap Designers"],
  "dj & band": ["Royal Punjabi Dhol Ensemble", "Signature Symphony DJ Beats", "Baraat Brass & Trumpet Crew"],
  "caterers": ["Grand Royal Feasts", "Culinary Masters Spice Buffet", "Gourmet Live Fusion Catering"],
  "mehndi artists": ["Radhika Bridal Henna Art", "Shagun Traditional Mehndi Crew", "Classic Floral Henna Designers"]
};

// Generates exactly 3 vendors for each category in all 20 cities = 420 vendors
export function generateVendors(): Vendor[] {
  const generatedList: Vendor[] = [];
  const cityNames = CITIES.map(c => c.name);
  const categoriesList = CATEGORIES.map(c => c.name);

  cityNames.forEach((cityName, cityIdx) => {
    categoriesList.forEach((categoryName, catIdx) => {
      // Create exactly 3 vendors for this category in this city
      for (let vendorIdx = 0; vendorIdx < 3; vendorIdx++) {
        const uniqueSeed = cityIdx * 100 + catIdx * 10 + vendorIdx;
        
        // Pick names and image deterministically based on vendorIdx
        const catKey = categoryName.toLowerCase() === "dj & band" ? "dj & band" : categoryName.toLowerCase();
        const baseName = VENDOR_NAMES[catKey]?.[vendorIdx] || "Elite Wedding Pros";
        const fullName = `${cityName} ${baseName}`;

        const imagePool = CATEGORY_IMAGES[catKey] || CATEGORY_IMAGES["venues"];
        const mainImage = imagePool[vendorIdx % imagePool.length];
        
        // Setup galleries
        const gallery = [
          imagePool[(vendorIdx + 1) % imagePool.length],
          imagePool[(vendorIdx + 2) % imagePool.length]
        ];

        // Base price calculation bounds
        let basePrice = 50000;
        let priceUnit = "per event";
        if (categoryName === "Venues") {
          basePrice = 300000 + (uniqueSeed % 12) * 80000;
          priceUnit = "per day";
        } else if (categoryName === "Photographers") {
          basePrice = 80000 + (uniqueSeed % 10) * 15000;
          priceUnit = "per day";
        } else if (categoryName === "Makeup Artists") {
          basePrice = 30000 + (uniqueSeed % 6) * 10000;
          priceUnit = "per event";
        } else if (categoryName === "Decorators") {
          basePrice = 120000 + (uniqueSeed % 8) * 35000;
          priceUnit = "per day";
        } else if (categoryName === "DJ & Band") {
          basePrice = 25000 + (uniqueSeed % 10) * 8000;
          priceUnit = "per day";
        } else if (categoryName === "Caterers") {
          basePrice = 1100 + (uniqueSeed % 15) * 100;
          priceUnit = "per plate";
        } else if (categoryName === "Mehndi Artists") {
          basePrice = 12000 + (uniqueSeed % 8) * 3000;
          priceUnit = "per hand";
        }

        // Ratings between 4.4 and 5.0
        const rating = Number((4.4 + ((uniqueSeed % 7) * 0.1)).toFixed(1));
        const reviewsCount = 15 + (uniqueSeed % 135);

        // Pre-filled reviews
        const reviews: Review[] = [
          {
            id: `rev-${uniqueSeed}-1`,
            author: "Aman Preet",
            rating: Math.ceil(rating),
            date: "2026-03-12",
            comment: `We booked them for our destination wedding in ${cityName} and the service was absolutely top notch. Extremely professional behavior and gorgeous execution!`
          },
          {
            id: `rev-${uniqueSeed}-2`,
            author: "Neha Sharma",
            rating: Math.floor(rating),
            date: "2025-11-28",
            comment: `Highly recommended! Everything went exactly as planned. The starting price of ${basePrice} in ${cityName} is very reasonable for this quality of service.`
          }
        ];

        // Services mapping
        let servicesList = ["Bespoke Arrangements", "Premium Customer Service", "Dedicated Account Manager"];
        if (categoryName === "Venues") {
          servicesList = ["Seating for 500+ guests", "Valet Parking Services", "Royal Lighting Backdrop", "Bridal Dressing Suites"];
        } else if (categoryName === "Photographers") {
          servicesList = ["Candid Fine-Art Clicks", "Drone 4K Shoots", "Cinematic Teaser Trailer", "Hardcover Photo Albums"];
        } else if (categoryName === "Makeup Artists") {
          servicesList = ["Premium International Cosmetics", "Bridal Hairstyle Options", "Airbrush & HD Finish", "Dupatta Draping Care"];
        } else if (categoryName === "Decorators") {
          servicesList = ["Exotic Floral Canopy Mandap", "Stage Pathway LED Lights", "Royal Canopy Entrances", "Selfie Booth Backdrop"];
        } else if (categoryName === "DJ & Band") {
          servicesList = ["High-Energy Sound Systems", "Traditional Punjabi Dhols", "Cold Pyro Procession Stops", "Retro & Bolly Music DJ"];
        } else if (categoryName === "Caterers") {
          servicesList = ["Multi-cuisine Luxury Buffets", "Live Dessert & Chaat Stalls", "Silver Crockery Service", "Global Fusion Options"];
        } else if (categoryName === "Mehndi Artists") {
          servicesList = ["Custom Groom Figures Henna", "Organic Dark Stain Paste", "Arabic & Bridal Designs", "Speedy Guest Mehndi Crew"];
        }

        generatedList.push({
          id: `gen-${cityName.toLowerCase().replace(/[^a-z0-9]/g, "")}-${catKey.replace(/[^a-z0-9]/g, "")}-${vendorIdx}`,
          name: fullName,
          category: categoryName,
          city: cityName,
          rating,
          reviewsCount,
          reviews,
          price: basePrice,
          priceUnit,
          imageUrl: mainImage,
          galleryUrls: gallery,
          address: `Palace Road, Near Heritage Center, ${cityName}, India`,
          contact: `+91 98765 ${String(10000 + uniqueSeed).substring(1)}`,
          capacity: categoryName === "Venues" ? 300 + (uniqueSeed % 8) * 100 : undefined,
          vegOnly: categoryName === "Venues" || categoryName === "Caterers" ? (uniqueSeed % 2 === 0) : undefined,
          services: servicesList,
          description: `The premier provider of wedding ${categoryName.toLowerCase()} in ${cityName}. Famous for outstanding execution, premium themes, and localized packages designed to fit your unique Indian celebration budget.`,
          featured: vendorIdx === 0 && (categoryName === "Venues" || categoryName === "Photographers")
        });
      }
    });
  });

  return generatedList;
}

export const INITIAL_VENDORS: Vendor[] = generateVendors();

// Helper estimation allocations based on styles
export function calculateBudgetAllocation(totalBudget: number, style: string): { category: string; amount: number; percentage: number }[] {
  let allocations: Record<string, number> = {};

  if (style === "Royal Palace") {
    allocations = {
      "Venues": 0.45,
      "Decorators": 0.20,
      "Caterers": 0.15,
      "Photographers": 0.08,
      "DJ & Band": 0.05,
      "Makeup Artists": 0.04,
      "Mehndi Artists": 0.03
    };
  } else if (style === "Elegant Beach") {
    allocations = {
      "Venues": 0.35,
      "Caterers": 0.20,
      "Decorators": 0.18,
      "DJ & Band": 0.12,
      "Photographers": 0.07,
      "Makeup Artists": 0.05,
      "Mehndi Artists": 0.03
    };
  } else if (style === "Intimate Traditional") {
    allocations = {
      "Caterers": 0.30,
      "Venues": 0.25,
      "Decorators": 0.15,
      "Photographers": 0.12,
      "Mehndi Artists": 0.07,
      "Makeup Artists": 0.06,
      "DJ & Band": 0.05
    };
  } else {
    // Default Modern Chic
    allocations = {
      "Venues": 0.35,
      "Caterers": 0.20,
      "Decorators": 0.15,
      "Photographers": 0.10,
      "DJ & Band": 0.10,
      "Makeup Artists": 0.06,
      "Mehndi Artists": 0.04
    };
  }

  return Object.entries(allocations).map(([category, percentage]) => ({
    category,
    amount: Math.round(totalBudget * percentage),
    percentage: Math.round(percentage * 100)
  }));
}
