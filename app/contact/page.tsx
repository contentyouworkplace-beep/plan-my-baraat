import PublicContentPage, {
  buildSimpleMetadata,
} from "@/components/PublicContentPage";

export const metadata = buildSimpleMetadata(
  "Contact Plan My Baraat",
  "Contact Plan My Baraat for wedding vendor discovery, baraat planning help, and quick WhatsApp support.",
  "/contact"
);

export default function ContactPage() {
  return (
    <PublicContentPage
      eyebrow="Contact"
      title="Talk to the team behind Plan My Baraat"
      description="If you need help finding wedding vendors, understanding service categories, or shortlisting options in the right city, reach out directly."
      ctaLabel="Chat on WhatsApp"
      sections={[
        {
          heading: "Fastest way to reach us",
          body: [
            "The quickest route is WhatsApp. Share your city, event date, approximate guest count, and the services you are looking for, and we can help point you to the right next pages or enquiry flow.",
            "For most planning conversations, WhatsApp is better than email because vendor discovery usually depends on timing, location, and budget details.",
          ],
        },
        {
          heading: "What to send",
          body: [
            "Include your wedding city, target venue area, expected date, and the service types you need first. For example: baraat procession, venue, decor, photographers, or makeup.",
            "That context helps us narrow down the most relevant pages and vendor categories much faster.",
          ],
        },
      ]}
    />
  );
}
