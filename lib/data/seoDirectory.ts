import { CATEGORIES } from "./categories";
import { CITIES, FEATURED_CITIES } from "./cities";

const PRIORITY_CITY_NAMES = [
  "Jaipur",
  "Udaipur",
  "Goa",
  "Delhi-NCR",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Kolkata",
  "Lucknow",
  "Amritsar",
];

export const PRIORITY_CITIES = FEATURED_CITIES.filter((city) =>
  PRIORITY_CITY_NAMES.includes(city.name)
);

export const CITY_AREA_MAP: Record<string, string[]> = {
  Jaipur: [
    "Malviya Nagar",
    "Vaishali Nagar",
    "C-Scheme",
    "Mansarovar",
    "Vidyadhar Nagar",
    "Jagatpura",
    "Bani Park",
    "Tonk Road",
  ],
  Udaipur: [
    "Fateh Sagar",
    "Lake Pichola",
    "Shobhagpura",
    "Hiran Magri",
    "Sukher",
    "Bhuwana",
    "Ambamata",
    "Goverdhan Vilas",
  ],
  Goa: [
    "Candolim",
    "Calangute",
    "Baga",
    "Panaji",
    "Dona Paula",
    "Colva",
    "Vagator",
    "Morjim",
  ],
  "Delhi-NCR": [
    "South Delhi",
    "Dwarka",
    "Aerocity",
    "Noida",
    "Greater Noida",
    "Gurugram",
    "Faridabad",
    "Ghaziabad",
  ],
  Mumbai: [
    "South Mumbai",
    "Bandra",
    "Andheri",
    "Juhu",
    "Powai",
    "Thane",
    "Navi Mumbai",
    "Borivali",
  ],
  Bengaluru: [
    "Indiranagar",
    "Whitefield",
    "Koramangala",
    "Jayanagar",
    "Electronic City",
    "HSR Layout",
    "Yelahanka",
    "Hebbal",
  ],
  Hyderabad: [
    "Banjara Hills",
    "Jubilee Hills",
    "Gachibowli",
    "Kondapur",
    "Madhapur",
    "Begumpet",
    "Secunderabad",
    "Kompally",
  ],
  Pune: [
    "Koregaon Park",
    "Baner",
    "Kharadi",
    "Viman Nagar",
    "Hinjawadi",
    "Wakad",
    "Magarpatta",
    "Pimpri-Chinchwad",
  ],
  Chennai: [
    "Nungambakkam",
    "T Nagar",
    "OMR",
    "ECR",
    "Anna Nagar",
    "Velachery",
    "Adyar",
    "Porur",
  ],
  Kolkata: [
    "Salt Lake",
    "New Town",
    "Ballygunge",
    "Park Street",
    "Alipore",
    "Howrah",
    "Rajarhat",
    "Behala",
  ],
  Lucknow: [
    "Gomti Nagar",
    "Hazratganj",
    "Alambagh",
    "Indira Nagar",
    "Mahanagar",
    "Jankipuram",
    "Charbagh",
    "Faizabad Road",
  ],
  Amritsar: [
    "Ranjit Avenue",
    "Lawrence Road",
    "White Avenue",
    "Majitha Road",
    "Airport Road",
    "GT Road",
    "Hall Gate",
    "Batala Road",
  ],
};

export function getAreasForCity(cityName: string): string[] {
  return CITY_AREA_MAP[cityName] ?? [];
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export interface FooterKeywordLink {
  label: string;
  href: string;
}

const footerKeywordCandidates: FooterKeywordLink[] = [
  ...CATEGORIES.map((category) => ({
    label: category.name,
    href: `/${slugify(category.name)}`,
  })),
  ...PRIORITY_CITIES.map((city) => ({
    label: `Wedding services in ${city.name}`,
    href: `/${slugify(CATEGORIES[0].name)}/${slugify(city.name)}`,
  })),
  ...PRIORITY_CITIES.slice(0, 7).flatMap((city, index) =>
    CATEGORIES.slice(index % 2, index % 2 + 4).map((category) => ({
      label: `${category.name} in ${city.name}`,
      href: `/${slugify(category.name)}/${slugify(city.name)}`,
    }))
  ),
];

export const FOOTER_KEYWORD_LINKS = footerKeywordCandidates.slice(0, 50);

export const DIRECTORY_CITIES = CITIES.filter((city) => !city.isInternational).slice(0, 300);
