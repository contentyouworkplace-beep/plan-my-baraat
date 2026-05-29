import { CITIES, FEATURED_CITIES } from "./data/cities";
import { CATEGORIES } from "./data/categories";

export { CITIES, FEATURED_CITIES, CATEGORIES };

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
  isInternational: boolean;
  featured?: boolean;
}

// Dynamic helper to generate mock vendors for a specific city on-demand
export function generateVendorsForCity(cityName: string, citySeedOffset?: number): Vendor[] {
  const cityIdx = citySeedOffset !== undefined ? citySeedOffset : 
    cityName.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);

  const generatedList: Vendor[] = [];

  CATEGORIES.forEach((catObj, catIdx) => {
    // Create exactly 3 vendors for this category in this city
    for (let vendorIdx = 0; vendorIdx < 3; vendorIdx++) {
      const uniqueSeed = cityIdx * 100 + catIdx * 10 + vendorIdx;
      
      const baseNames = [
        `Elite ${catObj.name}`,
        `Royal ${catObj.name} Services`,
        `Signature ${catObj.name} Co.`
      ];
      const baseName = baseNames[vendorIdx];
      const fullName = `${cityName} ${baseName}`;

      // Deterministic image pool based on category group
      let imagePool = ["/images/venue_luxury.png", "/images/hero_bg.png", "/images/decor_mandap.png"];
      if (catObj.group === "Music & Entertainment") {
        imagePool = ["/images/photo_candid.png", "/images/hero_bg.png", "/images/venue_luxury.png"];
      } else if (catObj.group === "Groom Royal Styling") {
        imagePool = ["/images/makeup_bride.png", "/images/photo_candid.png", "/images/decor_mandap.png"];
      } else if (catObj.group === "Decoration & Experience") {
        imagePool = ["/images/decor_mandap.png", "/images/hero_bg.png", "/images/venue_luxury.png"];
      } else if (catObj.group === "Wedding Production") {
        imagePool = ["/images/photo_candid.png", "/images/hero_bg.png", "/images/venue_luxury.png"];
      }
      
      const mainImage = imagePool[vendorIdx % imagePool.length];
      
      // Setup galleries
      const gallery = [
        imagePool[(vendorIdx + 1) % imagePool.length],
        imagePool[(vendorIdx + 2) % imagePool.length]
      ];

      // Base price calculation bounds
      let basePrice = 20000;
      let priceUnit = "per event";

      if (catObj.group === "Entry & Procession") {
        basePrice = 15000 + (uniqueSeed % 8) * 5000;
        priceUnit = "per event";
      } else if (catObj.group === "Music & Entertainment") {
        basePrice = 20000 + (uniqueSeed % 10) * 4000;
        priceUnit = "per day";
      } else if (catObj.group === "Groom Royal Styling") {
        basePrice = 10000 + (uniqueSeed % 6) * 3000;
        priceUnit = "per package";
      } else if (catObj.group === "Decoration & Experience") {
        basePrice = 25000 + (uniqueSeed % 8) * 8000;
        priceUnit = "per event";
      } else if (catObj.group === "Guest Experience") {
        basePrice = 12000 + (uniqueSeed % 8) * 2000;
        priceUnit = "per event";
      } else if (catObj.group === "Wedding Production") {
        basePrice = 30000 + (uniqueSeed % 10) * 10000;
        priceUnit = "per day";
      } else if (catObj.group === "Luxury Add-ons") {
        basePrice = 50000 + (uniqueSeed % 12) * 15000;
        priceUnit = "per day";
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
          comment: `We booked them for our Baraat in ${cityName} and the service was absolutely top notch. Extremely professional behavior and gorgeous execution!`
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
      if (catObj.group === "Entry & Procession") {
        servicesList = ["Uniformed operators", "Floral embellishments", "Backup safety guards", "Ceremonial flags"];
      } else if (catObj.group === "Music & Entertainment") {
        servicesList = ["Professional audio systems", "Traditional percussionists", "Custom song lists", "Backup power source"];
      } else if (catObj.group === "Groom Royal Styling") {
        servicesList = ["Stylist assistance", "Premium fabric choices", "Ceremonial accessories", "Matching safa draping"];
      } else if (catObj.group === "Decoration & Experience") {
        servicesList = ["Cold pyrotechnics", "Ambient pathway light towers", "Safety clearance certificates", "Live effects operator"];
      } else if (catObj.group === "Guest Experience") {
        servicesList = ["Hospitality desks", "Uniformed valet service", "Processional hydration stations", "High profile guest escort"];
      } else if (catObj.group === "Wedding Production") {
        servicesList = ["Multi-angle cinematic footage", "Licensed drone coverage", "Live screen streaming", "Premium line array sound"];
      } else if (catObj.group === "Luxury Add-ons") {
        servicesList = ["Palace thematic design backdrop", "VIP transport escort", "Specialized animal handlers", "Groom aerial entry flight"];
      }

      generatedList.push({
        id: `gen-${cityName.toLowerCase().replace(/[^a-z0-9]/g, "")}-${catObj.id.replace(/[^a-z0-9]/g, "")}-${vendorIdx}`,
        name: fullName,
        category: catObj.name,
        city: cityName,
        rating,
        reviewsCount,
        reviews,
        price: basePrice,
        priceUnit,
        imageUrl: mainImage,
        galleryUrls: gallery,
        address: `Palace Road, Near Heritage Center, ${cityName}`,
        contact: `+91 98765 ${String(10000 + uniqueSeed).substring(1)}`,
        capacity: undefined,
        vegOnly: undefined,
        services: servicesList,
        description: `The premier provider of ${catObj.name} in ${cityName}. Famous for outstanding execution, premium themes, and localized packages designed to fit your unique Indian celebration budget.`,
        featured: vendorIdx === 0 && (catObj.group === "Wedding Production" || catObj.group === "Luxury Add-ons")
      });
    }
  });

  return generatedList;
}

// Generates initial vendors only for the top 5 featured cities to keep memory footprint light (5 cities * 53 categories * 3 vendors = 795 vendors)
export function generateVendors(): Vendor[] {
  const generatedList: Vendor[] = [];
  const cityNames = FEATURED_CITIES.slice(0, 5).map(c => c.name);

  cityNames.forEach((cityName, cityIdx) => {
    generatedList.push(...generateVendorsForCity(cityName, cityIdx));
  });

  return generatedList;
}

export const INITIAL_VENDORS: Vendor[] = generateVendors();

// Helper estimation allocations for all 53 categories based on style
export function calculateBudgetAllocation(totalBudget: number, style: string): { category: string; amount: number; percentage: number; group: string }[] {
  let groupWeights: Record<string, number> = {};

  if (style === "Royal Palace") {
    groupWeights = {
      "Entry & Procession": 0.15,
      "Music & Entertainment": 0.15,
      "Groom Royal Styling": 0.10,
      "Decoration & Experience": 0.15,
      "Guest Experience": 0.10,
      "Wedding Production": 0.20,
      "Luxury Add-ons": 0.15
    };
  } else if (style === "Elegant Beach") {
    groupWeights = {
      "Entry & Procession": 0.12,
      "Music & Entertainment": 0.18,
      "Groom Royal Styling": 0.08,
      "Decoration & Experience": 0.12,
      "Guest Experience": 0.12,
      "Wedding Production": 0.23,
      "Luxury Add-ons": 0.15
    };
  } else if (style === "Intimate Traditional") {
    groupWeights = {
      "Entry & Procession": 0.10,
      "Music & Entertainment": 0.12,
      "Groom Royal Styling": 0.15,
      "Decoration & Experience": 0.15,
      "Guest Experience": 0.15,
      "Wedding Production": 0.23,
      "Luxury Add-ons": 0.10
    };
  } else {
    // Default Modern Chic
    groupWeights = {
      "Entry & Procession": 0.13,
      "Music & Entertainment": 0.15,
      "Groom Royal Styling": 0.10,
      "Decoration & Experience": 0.14,
      "Guest Experience": 0.12,
      "Wedding Production": 0.21,
      "Luxury Add-ons": 0.15
    };
  }

  // Count categories per group to distribute weights evenly inside the group
  const groupCounts: Record<string, number> = {};
  CATEGORIES.forEach(c => {
    groupCounts[c.group] = (groupCounts[c.group] || 0) + 1;
  });

  // Calculate allocation for all 53 categories
  return CATEGORIES.map(cat => {
    const groupWeight = groupWeights[cat.group] || 0.10;
    const catCount = groupCounts[cat.group] || 1;
    const percentage = groupWeight / catCount;

    return {
      category: cat.name,
      amount: Math.round(totalBudget * percentage),
      percentage: Math.round(percentage * 1000) / 10,
      group: cat.group
    };
  });
}
