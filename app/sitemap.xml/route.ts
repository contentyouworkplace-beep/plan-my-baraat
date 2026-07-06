import { DIRECTORY_CITIES } from "@/lib/data/seoDirectory";
import { cityToSlug } from "@/lib/seoHelpers";

const BASE_URL = "https://planmybaraat.com";
export const dynamic = "force-dynamic";

const baseSections = ["core", "specialties", "keywords"];

const citySections = DIRECTORY_CITIES.map((city) => `city-${cityToSlug(city)}`);

function buildSitemapIndexXml() {
  const sections = [...baseSections, ...citySections];
  const entries = sections
    .map(
      (section) =>
        `<sitemap><loc>${BASE_URL}/sitemaps/${section}.xml</loc><lastmod>${new Date().toISOString()}</lastmod></sitemap>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;
}

export function GET() {
  return new Response(buildSitemapIndexXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
