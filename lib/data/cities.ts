import { CITIES_INDIA } from "./citiesIndia";
import { CITIES_INTERNATIONAL } from "./citiesInternational";

export interface City {
  name: string;
  state: string;
  tagline: string;
  imageUrl: string;
  description: string;
  isInternational: boolean;
  featured?: boolean;
}

// Top featured cities that have bespoke designs/images
export const FEATURED_CITIES: City[] = [
  {
    name: "Udaipur",
    state: "Rajasthan",
    tagline: "The City of Lakes & Royal Palaces",
    imageUrl: "/images/venue_luxury.png",
    description: "Breathtaking destination weddings in heritage palaces surrounded by serene lakes.",
    isInternational: false,
    featured: true
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    tagline: "The Pink City of Forts & Heritage",
    imageUrl: "/images/hero_bg.png",
    description: "Famous for grand fortresses, havelis, and majestic royal hospitality.",
    isInternational: false,
    featured: true
  },
  {
    name: "Goa",
    state: "Goa",
    tagline: "Tropical Beachfront Vows",
    imageUrl: "/images/photo_candid.png",
    description: "Perfect for sunset views, sandy shores, and vibrant beach parties.",
    isInternational: false,
    featured: true
  },
  {
    name: "Delhi-NCR",
    state: "Delhi",
    tagline: "Luxury Farmhouses & Extravagant Decor",
    imageUrl: "/images/decor_mandap.png",
    description: "Colossal farmhouse retreats, premium luxury banquets, and world-class designers.",
    isInternational: false,
    featured: true
  },
  {
    name: "Mumbai",
    state: "Maharashtra",
    tagline: "Coastal Sophistication & Bollywood Glamour",
    imageUrl: "/images/makeup_bride.png",
    description: "Offers luxurious seaside hotels, celebrity stylists, and contemporary elegance.",
    isInternational: false,
    featured: true
  },
  {
    name: "Bengaluru",
    state: "Karnataka",
    tagline: "Lush Gardens & Modern Chic Venues",
    imageUrl: "/images/venue_luxury.png",
    description: "Blends beautiful year-round climate, expansive lawns, and contemporary themes.",
    isInternational: false,
    featured: true
  },
  {
    name: "Agra",
    state: "Uttar Pradesh",
    tagline: "City of Taj Mahal & Eternal Love",
    imageUrl: "/images/hero_bg.png",
    description: "Tie the knot near the world's ultimate monument of love, the Taj Mahal.",
    isInternational: false,
    featured: true
  },
  {
    name: "Jodhpur",
    state: "Rajasthan",
    tagline: "The Golden Blue City",
    imageUrl: "/images/decor_mandap.png",
    description: "Grand fortresses, red sandstone palaces, and stunning desert dune settings.",
    isInternational: false,
    featured: true
  },
  {
    name: "Kerala",
    state: "Kerala",
    tagline: "God's Own Backwater Vows",
    imageUrl: "/images/photo_candid.png",
    description: "Lush coconut groves, houseboats, and serene beachside resorts.",
    isInternational: false,
    featured: true
  },
  {
    name: "Shimla",
    state: "Himachal Pradesh",
    tagline: "Mystic Hills & Colonial Romance",
    imageUrl: "/images/venue_luxury.png",
    description: "Gorgeous mountain ridges, cedar forests, and vintage colonial banquets.",
    isInternational: false,
    featured: true
  },
  {
    name: "Mussoorie",
    state: "Uttarakhand",
    tagline: "Queen of the Hills",
    imageUrl: "/images/hero_bg.png",
    description: "Stunning valley backdrops, cool breezes, and premium hillside resorts.",
    isInternational: false,
    featured: true
  },
  {
    name: "Hyderabad",
    state: "Telangana",
    tagline: "City of Nizami Royalty",
    imageUrl: "/images/decor_mandap.png",
    description: "Bespoke palaces, Nizam-style catering, and rich heritage celebrations.",
    isInternational: false,
    featured: true
  },
  {
    name: "Pune",
    state: "Maharashtra",
    tagline: "Lush Hills & Historic Havelis",
    imageUrl: "/images/makeup_bride.png",
    description: "Surrounded by Western Ghats valleys, luxury resorts, and Maratha culture.",
    isInternational: false,
    featured: true
  },
  {
    name: "Chennai",
    state: "Tamil Nadu",
    tagline: "Coastal Temples & Carnatic Heritage",
    imageUrl: "/images/photo_candid.png",
    description: "Beautiful shoreline celebrations, traditional temple architectures, and grand feasts.",
    isInternational: false,
    featured: true
  },
  {
    name: "Kolkata",
    state: "West Bengal",
    tagline: "City of Joy & Vintage Glamour",
    imageUrl: "/images/venue_luxury.png",
    description: "Grand colonial mansions, rich cultural themes, and famous Bengali delicacies.",
    isInternational: false,
    featured: true
  },
  {
    name: "Amritsar",
    state: "Punjab",
    tagline: "Vibrant Bhangra & Pompous Weddings",
    imageUrl: "/images/decor_mandap.png",
    description: "High-energy celebrations, rich heritage dhol, and traditional Amritsari hospitality.",
    isInternational: false,
    featured: true
  },
  {
    name: "Rishikesh",
    state: "Uttarakhand",
    tagline: "Sacred Ganges Shorelines",
    imageUrl: "/images/hero_bg.png",
    description: "Tie the knot near the holy Ganges backdrop in spiritual mountain valleys.",
    isInternational: false,
    featured: true
  },
  {
    name: "Varanasi",
    state: "Uttar Pradesh",
    tagline: "Spiritual Ghats & Eternal Heritage",
    imageUrl: "/images/decor_mandap.png",
    description: "Traditional Ganga Aarti vibes, Banarasi sarees, and pure heritage atmosphere.",
    isInternational: false,
    featured: true
  },
  {
    name: "Lucknow",
    state: "Uttar Pradesh",
    tagline: "Nawabi Tehzeeb & Awadhi Flavors",
    imageUrl: "/images/makeup_bride.png",
    description: "Famous for Awadhi wedding cuisine, Chikankari decor, and courteous hospitality.",
    isInternational: false,
    featured: true
  },
  {
    name: "Mahabalipuram",
    state: "Tamil Nadu",
    tagline: "Historic Shore Temples",
    imageUrl: "/images/photo_candid.png",
    description: "Monolithic heritage ruins overlooking spectacular waves and coastal resorts.",
    isInternational: false,
    featured: true
  }
];

// Map SimpleCity lists to standard City interface with default values
const mapSimpleToCity = (simpleList: typeof CITIES_INDIA, isInt: boolean): City[] => {
  return simpleList.map(item => {
    // Check if it's already a featured city
    const feat = FEATURED_CITIES.find(fc => fc.name.toLowerCase() === item.name.toLowerCase());
    if (feat) return feat;

    const baseTagline = isInt 
      ? `Exotic destination wedding in ${item.name}` 
      : `Beautiful celebration in ${item.name}, ${item.state}`;
      
    const baseDesc = isInt 
      ? `Plan an unforgettable international wedding experience in ${item.name}. Choose from a premium collection of global vendor packages.` 
      : `Connect with verified wedding suppliers and venues in ${item.name}. Plan your local custom wedding celebrations with ease.`;

    // Pick a default beautiful image from our public assets
    const images = [
      "/images/venue_luxury.png",
      "/images/hero_bg.png",
      "/images/decor_mandap.png",
      "/images/photo_candid.png",
      "/images/makeup_bride.png"
    ];
    // Deterministic image index based on city name characters
    const charSum = item.name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const imageUrl = images[charSum % images.length];

    return {
      name: item.name,
      state: item.state,
      tagline: baseTagline,
      imageUrl: imageUrl,
      description: baseDesc,
      isInternational: isInt
    };
  });
};

export const CITIES: City[] = [
  ...FEATURED_CITIES,
  ...mapSimpleToCity(CITIES_INDIA.filter(c => !FEATURED_CITIES.some(fc => fc.name.toLowerCase() === c.name.toLowerCase())), false),
  ...mapSimpleToCity(CITIES_INTERNATIONAL, true)
];
