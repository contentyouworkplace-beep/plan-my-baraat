# Baraat location page — content & build brief

Use this to build every remaining location page (17 cities, 243 areas, 56 towns — 316 total, 2 done so far). One page at a time, in this order: **cities first, then that city's areas, then standalone towns.** Mumbai, Delhi NCR, and Bengaluru were removed from scope — Gujarat only.

## Where things live

- Page template: `app/[location]/page.tsx` (already built — do not change per-page, it reads from the data below)
- Content data: `lib/data/baraatCityContent.ts` — add one new entry per location to `BARAAT_CITY_CONTENT`, keyed by slug
- Location list/slugs: `lib/data/baraatLocations.ts` (`ALL_BARAAT_LOCATIONS`, `getLocationBySlug`)
- Sitemap: auto-includes any slug added to `BARAAT_CITY_CONTENT` — no manual step needed

## Writing rules (from direct feedback this session)

1. **Plain, human language.** Short sentences. Simple words. Write like a person explaining something to a friend, not marketing copy. No "unlock," "elevate," "seamless," em-dash-heavy sentences, or flowery metaphors.
2. **~1,000 words minimum per page**, across the 7 fields below (body sections + FAQs together).
3. **Real specificity, not templating.** Use actual neighborhood/area names (already listed per city in `baraatLocations.ts`), real seasonal/logistics details if known (wedding season timing, local venue quirks, noise rules), not generic filler that could apply to any city.
4. **No hash-picked variants, no `pick()` function, no template with blanks filled in.** Every page's prose is hand-written for that specific place.
5. Every page needs 6-8 FAQs, each with a direct-answer-first sentence (AEO pattern — the first sentence should stand alone as the answer).

## Required fields per location (`CityContent` interface)

```ts
{
  slug: string;           // matches the location's slug in baraatLocations.ts
  intro: string;           // 2 paragraphs (\n\n separated), ~150-200 words. What baraats are like there, why the entry matters, what PlanMyBaraat brings together.
  localArea: string;       // 2 paragraphs, ~150 words. Real neighborhood names, what's different about each pocket (road width, venue size, noise rules), list of areas covered.
  whatsIncluded: string;   // 2 paragraphs, ~150 words. Package tiers explained (Raj Tilak -> Signature), what's standard vs. what scales up.
  whyUs: string;           // 2 paragraphs, ~120 words. Local logistics knowledge specific to this place, why an in-house team (not subcontracted) matters.
  pricingGuidance: string; // 2 paragraphs, ~120 words. What drives price (package tier, dhol count, effects), why no flat number, how to get a real quote.
  planningNotes: string;   // 2 paragraphs, ~120 words. When to book (season timing), what info helps (guest count, venue area, curfews).
  closing: string;         // 1-2 sentences. CTA to message on WhatsApp with date/area/guest count.
  faqs: [{ q, a }];        // 6-8 pairs, ~50-70 words per answer, direct-answer-first.
}
```

## What the page template already handles (don't rebuild)

- Hero: eyebrow, H1, subhead, embedded `LeadCaptureForm`, hero image (`SITE_IMAGES.heroFloral`)
- Packages grid: all 4 packages, full feature lists, "Enquire Now" (popup, pre-filled) + "View" (links to homepage `#packages` in a new tab) on every card
- Body sections rendered automatically from the 7 content fields, alternating background bands
- FAQ accordion with `FAQPage` schema
- Closing WhatsApp CTA band
- "Areas we serve in {city}" internal-linking block (auto-populated from child areas/towns in `baraatLocations.ts` — this is why cities should be built before their areas, so the links resolve instead of 404ing)
- `BreadcrumbList` + `Service` + `FAQPage` JSON-LD, canonical, OG/Twitter meta

## Per-page checklist

1. Pick the next location (city first, in the order listed in `BARAAT_CITIES`)
2. Look up its real area names in `baraatLocations.ts` for grounding
3. Write all 7 content fields + 6-8 FAQs following the rules above
4. Add the entry to `BARAAT_CITY_CONTENT` in `lib/data/baraatCityContent.ts`
5. Run `npx tsc --noEmit` — must be clean
6. Spot-check word count: aim 1,000+ across body + FAQs combined
7. Move to the next one

## Progress

- [x] Vadodara (city) — live
- [x] Surat (city) — live
- [ ] Ahmedabad (city) — next
- [ ] Gandhinagar (city)
- [ ] Rajkot (city)
- [ ] Bhavnagar (city)
- [ ] Jamnagar (city)
- [ ] Junagadh (city)
- [ ] Anand (city)
- [ ] Mehsana (city)
- [ ] Bharuch (city)
- [ ] Navsari (city)
- [ ] Valsad (city)
- [ ] Vapi (city)
- [ ] Rajpipla (city)
- [ ] Kevadia (city)
- [ ] Chhota Udepur (city)
- [ ] 243 areas (after their parent cities are done)
- [ ] 56 towns
