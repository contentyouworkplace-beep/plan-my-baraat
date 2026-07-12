import { SEO_KEYWORD_PAGES, BARAAT_KEYWORD_PAGES } from "@/lib/data/seoDirectory";
import { ALL_BARAAT_LOCATIONS } from "@/lib/data/baraatLocations";

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
    ];
  }

  if (section === "keywords") {
    const seoKeywordUrls = SEO_KEYWORD_PAGES.map((page) => `${BASE_URL}${page.href}`);
    const cleanKeywordUrls = BARAAT_KEYWORD_PAGES.map((page) => `${BASE_URL}${page.href}`);
    return [...seoKeywordUrls, ...cleanKeywordUrls];
  }

  if (section === "locations") {
    return ALL_BARAAT_LOCATIONS.map((loc) => `${BASE_URL}/baraat-management/${loc.slug}`);
  }

  return [];
}

export function GET(
  _request: Request,
  { params }: { params: { section: string } }
) {
  const section = params.section.replace(/\.xml$/, "");
  const urls = getUrlsForSection(section);

  if (urls.length === 0) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(toXml(urls), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
