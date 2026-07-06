import { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/data/categories";
import { CITIES } from "@/lib/data/cities";
import { specialtyToSlug, cityToSlug } from "@/lib/seoHelpers";
import { ALL_BARAAT_LOCATIONS } from "@/lib/data/baraatLocations";
import { BARAAT_KEYWORDS } from "@/lib/data/baraatKeywords";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://planmybaraat.com";

  // Home page
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Top 300 Indian cities × all 53 specialties
  const topCities = CITIES.filter((c) => !c.isInternational).slice(0, 300);
  const dynamicRoutes: MetadataRoute.Sitemap = [];

  for (const category of CATEGORIES) {
    for (const city of topCities) {
      dynamicRoutes.push({
        url: `${baseUrl}/${specialtyToSlug(category)}/${cityToSlug(city)}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  // Baraat location pages (city / area / town)
  const locationRoutes: MetadataRoute.Sitemap = ALL_BARAAT_LOCATIONS.map((loc) => ({
    url: `${baseUrl}/baraat/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: loc.type === "city" ? 0.7 : 0.6,
  }));

  // Baraat service/keyword pages
  const keywordRoutes: MetadataRoute.Sitemap = BARAAT_KEYWORDS.map((k) => ({
    url: `${baseUrl}/baraat-services/${k.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...dynamicRoutes,
    { url: `${baseUrl}/baraat`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/baraat-services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    ...locationRoutes,
    ...keywordRoutes,
  ];
}
