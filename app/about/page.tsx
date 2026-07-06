import PublicContentPage, {
  buildSimpleMetadata,
} from "@/components/PublicContentPage";

export const metadata = buildSimpleMetadata(
  "About Plan My Baraat",
  "Learn how Plan My Baraat helps families discover wedding vendors, baraat services, and city-specific planning support across India.",
  "/about"
);

export default function AboutPage() {
  return (
    <PublicContentPage
      eyebrow="About Us"
      title="A simpler way to discover wedding vendors and baraat services"
      description="Plan My Baraat is building a cleaner search-and-discovery layer for couples and families who want trusted wedding options without scattered vendor hunting."
      sections={[
        {
          heading: "What we do",
          body: [
            "We organize wedding planning discovery around the way families actually search: by service, by city, and by local area. That means easier browsing for baraat processions, venues, decor, photography, entertainment, and styling.",
            "Instead of forcing couples through long forms first, the platform is designed to let people understand options quickly and then continue the conversation directly on WhatsApp.",
          ],
        },
        {
          heading: "Why this matters",
          body: [
            "Wedding planning is high-intent and location-sensitive. A good vendor in Jaipur is different from a good fit in Mumbai or Udaipur, and local areas can change logistics, pricing, and timing significantly.",
            "That is why Plan My Baraat focuses on city-specific and area-aware discovery pages instead of a one-size-fits-all directory.",
          ],
        },
      ]}
    />
  );
}
