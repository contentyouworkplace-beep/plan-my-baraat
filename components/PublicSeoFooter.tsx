import { CATEGORIES } from "@/lib/data/categories";
import { FOOTER_KEYWORD_LINKS, PRIORITY_CITIES, getAreasForCity } from "@/lib/data/seoDirectory";
import { areaToSlug, cityToSlug, specialtyToSlug, toSlug } from "@/lib/seoHelpers";

import SeoLinkBlock from "./SeoLinkBlock";

interface PublicSeoFooterProps {
  currentCityName?: string;
  currentSpecialtySlug?: string;
}

export default function PublicSeoFooter({
  currentCityName,
  currentSpecialtySlug,
}: PublicSeoFooterProps) {
  const defaultSpecialtySlug = specialtyToSlug(CATEGORIES[0]);
  const services = CATEGORIES.map((category) => ({
    label: category.name,
    href: `/${specialtyToSlug(category)}`,
  }));

  const cities = PRIORITY_CITIES.map((city) => ({
    label: city.name,
    href: `/${defaultSpecialtySlug}/${cityToSlug(city)}`,
  }));

  const areas =
    currentCityName && currentSpecialtySlug
      ? getAreasForCity(currentCityName).map((area) => ({
          label: area,
          href: `/${currentSpecialtySlug}/${toSlug(currentCityName)}/${areaToSlug(area)}`,
        }))
      : [];

  return (
    <section className="border-t border-stone-200 bg-[#f7f1ea]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            SEO discovery blocks
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-950">
            Services we serve, cities we cover, and high-intent keyword paths
          </h2>
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          <SeoLinkBlock
            title="Services we serve"
            summary="Category hubs that should stay crawlable from every public page."
            items={services}
          />
          <SeoLinkBlock
            title="Cities we serve"
            summary="Priority city hubs for faster discovery of commercial intent pages."
            items={cities}
          />
          <SeoLinkBlock
            title="Top search keywords"
            summary="A controlled 50-link keyword cluster mapped to real hub or landing pages."
            items={FOOTER_KEYWORD_LINKS}
          />
        </div>
        {areas.length > 0 ? (
          <div className="mt-4">
            <SeoLinkBlock
              title={`Areas we serve in ${currentCityName}`}
              summary="Location-specific pages for stronger local discovery without cluttering the main layout."
              items={areas}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
