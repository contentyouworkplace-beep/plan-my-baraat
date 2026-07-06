import { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/data/categories";
import { CITIES } from "@/lib/data/cities";
import { specialtyToSlug, cityToSlug } from "@/lib/seoHelpers";

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

  return [...staticRoutes, ...dynamicRoutes];
}
