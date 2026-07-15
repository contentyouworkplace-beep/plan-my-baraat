export const WHATSAPP_NUMBER = "918830612287"; // PlanMyBaraat WhatsApp Business

export function buildPackageWhatsAppLink(
  name: string,
  phone: string,
  eventDate: string,
  packageName: string,
  venueName: string,
  budget: string
): string {
  const msg = encodeURIComponent(
    `Hi PlanMyBaraat! 🎊\n\nI'm interested in the *${packageName}*.\n\nName: ${name}\nPhone: ${phone}\nEvent Date: ${eventDate}\nVenue Name: ${venueName}\nBudget: ${budget}\n\nPlease share more details and availability!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
