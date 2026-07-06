export interface PackageDetail {
  id: string;
  idealFor: string;
  positioning: string;
  faqs: { q: string; a: string }[];
}

export const PACKAGE_DETAILS: PackageDetail[] = [
  {
    id: "raj-tilak",
    idealFor:
      "Families who want a proper royal entry without an oversized production — a smaller guest list, a single-venue wedding, or a first baraat package for a budget-conscious celebration that still needs to feel special.",
    positioning:
      "This is our entry point, not a stripped-down option. You still get the double-decker DJ truck, a professional DJ artist, a vintage car, and a full safa team — the core of every great baraat. What you don't get yet is the LED screens, pyro effects, and larger dhol/bouncer team of the higher tiers.",
    faqs: [
      { q: "Is Raj Tilak enough for a mid-sized baraat?", a: "Yes — it's built for processions of roughly 50-150 guests. For larger guest counts, we usually recommend Rajwada or above so the dhol team and lighting can cover more ground." },
      { q: "Can I add extra dhol players to Raj Tilak?", a: "Yes, every package can be customized. Message us your guest count and venue on WhatsApp and we'll quote the add-on." },
    ],
  },
  {
    id: "rajwada",
    idealFor:
      "Families who want their baraat to feel like a genuine celebration — more dhol, more lighting, a teddy/gorilla artist for the kids and guests — without going all-in on pyro and LED effects.",
    positioning:
      "Rajwada is the step up from Raj Tilak for families who know they want 'more' but aren't chasing a full production. Custom flex branding on the truck, double the dhol count, and a dedicated entertainer make this our most balanced package.",
    faqs: [
      { q: "What's the real difference between Raj Tilak and Rajwada?", a: "Rajwada doubles the dhol team (4 vs 2), adds full custom truck branding, more chhatri lights, and a teddy/gorilla artist for crowd entertainment — Raj Tilak stays leaner on all of these." },
      { q: "Does Rajwada include pyro or LED effects?", a: "No — those start from Maharaja upward. Rajwada focuses on music, lighting density, and entertainment rather than pyrotechnics." },
    ],
  },
  {
    id: "maharaja",
    idealFor:
      "Families planning a large, photograph-heavy baraat — big guest count, a venue that can handle pyro and CO₂ effects, and a wedding where the entry itself is meant to be a moment guests talk about afterward.",
    positioning:
      "This is our most-booked package. Moving LED panels, a custom groom-name LED display, confetti and hand pyro, a dedicated bouncer team, and a DJ jockey on top of the DJ artist — Maharaja is built for baraats that need to command a bigger space.",
    faqs: [
      { q: "Why is Maharaja your most popular package?", a: "It's the first tier with visual effects (LED panels, custom name display, confetti and pyro) alongside a bigger dhol team and security — most families find it's the sweet spot between spectacle and cost." },
      { q: "Do we need a permit for the pyro effects?", a: "Cold pyro and hand pyro used in our packages don't typically require special permits, but venue rules vary — tell us your venue and we'll confirm what's allowed there." },
    ],
  },
  {
    id: "signature",
    idealFor:
      "Destination weddings, large-scale celebrations, or families who want the complete production — an American vintage car, an entertainer plus a DJ jockey, fake money guns, and every effect we offer, with nothing held back.",
    positioning:
      "Signature is the full expression of what a PlanMyBaraat entry can be. Every element from every other package is included and upgraded — the vintage car becomes an American import, the bouncer team doubles, and entertainment runs on two fronts (DJ jockey plus a live entertainer).",
    faqs: [
      { q: "Is Signature only for very large weddings?", a: "It's most popular for large or destination weddings, but some families choose it for a smaller guest list specifically because they want every effect included without add-on negotiations." },
      { q: "Can we customize which effects are included in Signature?", a: "Yes — while Signature includes everything by default, we can adjust the mix (for example, more dhol vs. more pyro) based on your venue and preference." },
    ],
  },
];

export function getPackageDetail(id: string): PackageDetail | undefined {
  return PACKAGE_DETAILS.find((p) => p.id === id);
}
