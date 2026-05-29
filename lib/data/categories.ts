export interface Category {
  id: string;
  name: string;
  icon: string;
  group: "Entry & Procession" | "Music & Entertainment" | "Groom Royal Styling" | "Decoration & Experience" | "Guest Experience" | "Wedding Production" | "Luxury Add-ons";
}

export const CATEGORIES: Category[] = [
  // 1. Entry & Procession
  { id: "royal_bus", name: "Royal Double Decker Bus", icon: "Bus", group: "Entry & Procession" },
  { id: "vintage_cars", name: "Vintage Cars", icon: "Car", group: "Entry & Procession" },
  { id: "ghodi", name: "Horse (Ghodi)", icon: "Sparkles", group: "Entry & Procession" },
  { id: "elephant_entry", name: "Elephant Entry", icon: "Sparkles", group: "Entry & Procession" },
  { id: "camel_entry", name: "Camel Entry", icon: "Sparkles", group: "Entry & Procession" },
  { id: "luxury_baggi", name: "Luxury Chariot (Baggi)", icon: "Sparkles", group: "Entry & Procession" },
  { id: "royal_bike", name: "Royal Bike Entry", icon: "Bike", group: "Entry & Procession" },
  { id: "atv_jeep", name: "ATV / Jeep Entry", icon: "Car", group: "Entry & Procession" },

  // 2. Music & Entertainment
  { id: "band_party", name: "Band Party", icon: "Music", group: "Music & Entertainment" },
  { id: "dhol_team", name: "Dhol Team", icon: "Music", group: "Music & Entertainment" },
  { id: "nashik_dhol", name: "Nashik Dhol", icon: "Music", group: "Music & Entertainment" },
  { id: "punjabi_dhol", name: "Punjabi Dhol", icon: "Music", group: "Music & Entertainment" },
  { id: "tasha_group", name: "Tasha Group", icon: "Music", group: "Music & Entertainment" },
  { id: "live_singers", name: "Live Singers", icon: "Mic", group: "Music & Entertainment" },
  { id: "dj_truck", name: "DJ Truck", icon: "Truck", group: "Music & Entertainment" },
  { id: "shehnai_artists", name: "Shehnai Artists", icon: "Music", group: "Music & Entertainment" },
  { id: "folk_artists", name: "Folk Artists", icon: "Users", group: "Music & Entertainment" },
  { id: "dance_troupe", name: "Dance Troupe", icon: "Activity", group: "Music & Entertainment" },

  // 3. Groom Royal Styling
  { id: "safa_pagdi", name: "Safa / Pagdi", icon: "Shirt", group: "Groom Royal Styling" },
  { id: "groom_sherwani", name: "Groom Sherwani", icon: "Shirt", group: "Groom Royal Styling" },
  { id: "mojdi", name: "Mojdi", icon: "Shirt", group: "Groom Royal Styling" },
  { id: "talwar", name: "Sword (Talwar)", icon: "Shield", group: "Groom Royal Styling" },
  { id: "royal_brooch", name: "Royal Brooch", icon: "Gem", group: "Groom Royal Styling" },
  { id: "floral_jewellery", name: "Floral Jewellery", icon: "Flower2", group: "Groom Royal Styling" },
  { id: "varmala", name: "Mala / Varmala", icon: "Sparkles", group: "Groom Royal Styling" },

  // 4. Decoration & Experience
  { id: "floral_decor", name: "Floral Decor", icon: "Flower2", group: "Decoration & Experience" },
  { id: "baraat_lighting", name: "Baraat Lighting", icon: "Lightbulb", group: "Decoration & Experience" },
  { id: "led_dancers", name: "LED Dancers", icon: "Activity", group: "Decoration & Experience" },
  { id: "cold_pyro", name: "Cold Pyro Team", icon: "Flame", group: "Decoration & Experience" },
  { id: "fireworks", name: "Fireworks", icon: "Sparkles", group: "Decoration & Experience" },
  { id: "smoke_gun", name: "Smoke Gun Effects", icon: "Wind", group: "Decoration & Experience" },
  { id: "entry_props", name: "Entry Props", icon: "Package", group: "Decoration & Experience" },
  { id: "umbrella_team", name: "Umbrella / Chatri Team", icon: "Umbrella", group: "Decoration & Experience" },

  // 5. Guest Experience
  { id: "welcome_girls", name: "Welcome Girls Team", icon: "Heart", group: "Guest Experience" },
  { id: "hospitality_staff", name: "Hospitality Staff", icon: "Users", group: "Guest Experience" },
  { id: "water_refreshments", name: "Water & Refreshments", icon: "GlassWater", group: "Guest Experience" },
  { id: "security_team", name: "Security Team", icon: "ShieldAlert", group: "Guest Experience" },
  { id: "valet_parking", name: "Valet Parking", icon: "Car", group: "Guest Experience" },
  { id: "vip_management", name: "VIP Management", icon: "UserCheck", group: "Guest Experience" },

  // 6. Wedding Production
  { id: "photographer", name: "Photographer", icon: "Camera", group: "Wedding Production" },
  { id: "cinematographer", name: "Cinematographer", icon: "Video", group: "Wedding Production" },
  { id: "drone_team", name: "Drone Team", icon: "Plane", group: "Wedding Production" },
  { id: "led_wall", name: "LED Wall", icon: "Tv", group: "Wedding Production" },
  { id: "sound_system", name: "Sound System", icon: "Volume2", group: "Wedding Production" },
  { id: "stage_setup", name: "Stage Setup", icon: "Layers", group: "Wedding Production" },
  { id: "generator_vendor", name: "Generator Vendor", icon: "Zap", group: "Wedding Production" },

  // 7. Luxury Add-ons
  { id: "luxury_cars", name: "Luxury Cars", icon: "Car", group: "Luxury Add-ons" },
  { id: "vintage_collection", name: "Vintage Car Collection", icon: "Car", group: "Luxury Add-ons" },
  { id: "royal_palki", name: "Royal Palki", icon: "Home", group: "Luxury Add-ons" },
  { id: "helicopter_entry", name: "Helicopter Entry", icon: "Plane", group: "Luxury Add-ons" },
  { id: "royal_guards", name: "Royal Guards", icon: "Shield", group: "Luxury Add-ons" },
  { id: "live_animals", name: "Live Animals", icon: "Sparkles", group: "Luxury Add-ons" },
  { id: "palace_setup", name: "Palace Theme Setup", icon: "Building", group: "Luxury Add-ons" }
];
