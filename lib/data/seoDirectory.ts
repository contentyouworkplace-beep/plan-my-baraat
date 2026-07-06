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

export interface SeoKeywordPage {
  slug: string;
  label: string;
  href: string;
  cityName: string;
  specialtyName: string;
  specialtySlug: string;
  citySlug: string;
  areaNames: string[];
}

const KEYWORD_CATEGORY_IDS = [
  "banquet_hall",
  "resorts_hotels",
  "wedding_caterers",
  "floral_decorators",
  "candid_photographer",
  "bridal_makeup",
  "wedding_dj",
  "brass_band",
  "dhol_tasha",
  "vintage_baggi",
];

export const SEO_KEYWORD_PAGES: SeoKeywordPage[] = PRIORITY_CITIES.flatMap((city) =>
  KEYWORD_CATEGORY_IDS.map((categoryId) => {
    const category = CATEGORIES.find((item) => item.id === categoryId);

    if (!category) {
      return null;
    }

    const specialtySlug = slugify(category.name);
    const citySlug = slugify(city.name);

    return {
      slug: `${specialtySlug}-${citySlug}`,
      label: `${category.name} in ${city.name}`,
      href: `/baraat-services/${specialtySlug}-${citySlug}`,
      cityName: city.name,
      specialtyName: category.name,
      specialtySlug,
      citySlug,
      areaNames: getAreasForCity(city.name).slice(0, 6),
    };
  }).filter((item): item is SeoKeywordPage => Boolean(item))
).slice(0, 50);

export const FOOTER_KEYWORD_LINKS: FooterKeywordLink[] = SEO_KEYWORD_PAGES.map((page) => ({
  label: page.label,
  href: page.href,
}));

export function getSeoKeywordPageBySlug(slug: string): SeoKeywordPage | undefined {
  return SEO_KEYWORD_PAGES.find((page) => page.slug === slug);
}

export const DIRECTORY_CITIES = CITIES.filter((city) => !city.isInternational).slice(0, 300);
