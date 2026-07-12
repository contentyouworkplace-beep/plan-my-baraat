import { FOOTER_KEYWORD_LINKS } from "@/lib/data/seoDirectory";

import SeoLinkBlock from "./SeoLinkBlock";

export default function PublicSeoFooter() {
  return (
    <section className="border-t border-stone-200 bg-[#f7f1ea]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            SEO discovery blocks
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-950">
            High-intent keyword paths
          </h2>
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          <SeoLinkBlock
            title="Top search keywords"
            summary="A controlled 50-link keyword cluster mapped to real hub or landing pages."
            items={FOOTER_KEYWORD_LINKS}
          />
        </div>
      </div>
    </section>
  );
}
