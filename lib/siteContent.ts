import { SITE_IMAGES } from "@/lib/siteImages";

export const ABOUT_POINTS = [
  "500+ baraats delivered across 6 major Gujarat & India cities",
  "In-house double-decker DJ trucks and vintage car fleet — no third-party delays",
  "Dedicated safa team, dhol artists, and pyro crew on every booking",
  "One point of contact from enquiry to the day of the event",
];

export const TESTIMONIALS = [
  {
    quote: "The Maharaja package made our baraat entry unforgettable — the DJ truck, lights, and pyro effects had every guest recording the moment.",
    name: "Aditi & Kunal",
    place: "Vadodara Baraat",
  },
  {
    quote: "Booked the Rajwada package for my brother's wedding. The dhol team and chhatri lights were exactly as promised — zero last-minute surprises.",
    name: "Priya Shah",
    place: "Ahmedabad Baraat",
  },
  {
    quote: "Professional from the first WhatsApp message to the last dance. The vintage car and safa team were the highlight of our whole event.",
    name: "Rohan Mehta",
    place: "Surat Baraat",
  },
  {
    quote: "The safa team tied over 150 turbans in under an hour and every single one looked royal. Incredible coordination on the big day.",
    name: "Neha & Jayesh",
    place: "Ahmedabad Baraat",
  },
  {
    quote: "We booked the Signature package for a destination wedding — the vintage car and pyro entry left the whole venue speechless.",
    name: "Kabir Malhotra",
    place: "Surat Baraat",
  },
  {
    quote: "From the first WhatsApp enquiry to the final dhol beat, everything ran exactly on time. Highly recommended for a stress-free baraat.",
    name: "Sanya & Arjun",
    place: "Vadodara Baraat",
  },
];

export const CONTACT_DETAILS = [
  { iconName: "PhoneCall", label: "Call / WhatsApp", value: "+91 88306 12287", href: "tel:+918830612287" },
  { iconName: "Mail", label: "Website", value: "www.planmybaraat.com", href: "https://www.planmybaraat.com" },
  { iconName: "MapPin", label: "Studio", value: "Studio 501–502, Broadway Signature, 5th Floor, Near Red Petal Party Plot, Opp. Sevasi–Bhayli Canal Ring Road, Vadodara, Gujarat – 391110" },
  { iconName: "Clock", label: "Hours", value: "Mon – Sun, 10:00 AM – 8:00 PM" },
] as const;

export const GALLERY_IMAGES = [
  { src: SITE_IMAGES.coupleGolden, label: "Golden Hour Vows" },
  { src: SITE_IMAGES.traditionalCouple, label: "Traditional Attire" },
  { src: SITE_IMAGES.confettiCelebration, label: "Confetti Celebration" },
  { src: SITE_IMAGES.floralCanopy, label: "Floral Canopy Entry" },
  { src: SITE_IMAGES.outdoorTentEvent, label: "Grand Outdoor Setup" },
  { src: SITE_IMAGES.floralUmbrella, label: "Chhatri Procession" },
  { src: SITE_IMAGES.heroMain, label: "Night Baraat Lights" },
  { src: SITE_IMAGES.heroFloral, label: "Gold Floral Decor" },
  { src: SITE_IMAGES.goldCrownMoment, label: "Groom's Royal Moment" },
];

export interface VideoPlaceholder {
  label: string;
  duration: string;
  thumb: string;
}

export const GALLERY_VIDEOS: VideoPlaceholder[] = [
  { label: "Maharaja Package Highlights", duration: "01:24", thumb: SITE_IMAGES.heroMain },
  { label: "Double Decker DJ Truck Entry", duration: "00:58", thumb: SITE_IMAGES.confettiCelebration },
  { label: "Safa Team in Action", duration: "01:10", thumb: SITE_IMAGES.goldCrownMoment },
  { label: "Full Baraat Walkthrough", duration: "02:45", thumb: SITE_IMAGES.outdoorTentEvent },
];
