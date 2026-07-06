import PublicContentPage, {
  buildSimpleMetadata,
} from "@/components/PublicContentPage";

export const metadata = buildSimpleMetadata(
  "Plan My Baraat Testimonials",
  "Read how families use Plan My Baraat to discover wedding vendors, city pages, and location-specific baraat planning support.",
  "/testimonials"
);

export default function TestimonialsPage() {
  return (
    <PublicContentPage
      eyebrow="Testimonials"
      title="Why families prefer a guided wedding discovery flow"
      description="These stories represent the kind of planning help families usually want: fewer dead ends, faster discovery, and more location-aware vendor shortlisting."
      sections={[
        {
          heading: "Shorter path to the right options",
          body: [
            "Families often do not struggle because there are too few vendors. They struggle because there are too many disconnected options and no clear way to move from broad search intent into city-specific and area-specific planning pages.",
            "The goal of Plan My Baraat is to remove that friction so the shortlist gets clearer much earlier in the journey.",
          ],
        },
        {
          heading: "Better fit through location-aware planning",
          body: [
            "A strong baraat or wedding vendor match depends on more than category names. City context, venue zone, guest movement, and logistics around specific neighborhoods all shape the best final options.",
            "That is why our newer public pages are being structured around service plus city plus area, not just generic keyword lists.",
          ],
        },
      ]}
    />
  );
}
