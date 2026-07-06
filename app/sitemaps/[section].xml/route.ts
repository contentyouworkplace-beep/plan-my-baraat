import { CATEGORIES } from "@/lib/data/categories";
import {
  DIRECTORY_CITIES,
  SEO_KEYWORD_PAGES,
  getAreasForCity,
} from "@/lib/data/seoDirectory";
import { areaToSlug, cityToSlug, specialtyToSlug } from "@/lib/seoHelpers";

const BASE_URL = "https://planmybaraat.com";
export const dynamic = "force-dynamic";
const now = new Date().toISOString();

function toXml(urls: string[]) {
  const entries = urls
    .map(
      (url) => `<url><loc>${url}</loc><lastmod>${now}</lastmod></url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

function getUrlsForSection(section: string) {
  if (section === "core") {
    return [
      BASE_URL,
      `${BASE_URL}/about`,
      `${BASE_URL}/contact`,
      `${BASE_URL}/gallery`,
      `${BASE_URL}/testimonials`,
      `${BASE_URL}/services`,
      `${BASE_URL}/baraat-services`,
      `${BASE_URL}/city`,
    ];
  }

  if (section === "specialties") {
    return CATEGORIES.map((category) => `${BASE_URL}/${specialtyToSlug(category)}`);
  }

  if (section === "keywords") {
    return SEO_KEYWORD_PAGES.map((page) => `${BASE_URL}${page.href}`);
  }

  if (section.startsWith("city-")) {
    const citySlug = section.replace("city-", "");
    const city = DIRECTORY_CITIES.find((item) => cityToSlug(item) === citySlug);

    if (!city) {
      return [];
    }

    const specialtyCityUrls = CATEGORIES.map(
      (category) => `${BASE_URL}/${specialtyToSlug(category)}/${cityToSlug(city)}`
    );
    const areaUrls = CATEGORIES.flatMap((category) =>
      getAreasForCity(city.name).map(
        (area) =>
          `${BASE_URL}/${specialtyToSlug(category)}/${cityToSlug(city)}/${areaToSlug(area)}`
      )
    );

    return [...specialtyCityUrls, ...areaUrls];
  }

  return [];
}

export function GET(
  _request: Request,
  { params }: { params: { section: string } }
) {
  const urls = getUrlsForSection(params.section);

  if (urls.length === 0) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(toXml(urls), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
