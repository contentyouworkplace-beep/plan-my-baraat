// Deterministic content variation so 500+ generated pages don't read as one
// duplicated template with a name swapped in. Each page picks a combination
// of variants based on a hash of its own slug, so neighboring pages differ.

export function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

export function pick<T>(arr: T[], slug: string, salt: string): T {
  const h = hashSlug(slug + "::" + salt);
  return arr[h % arr.length];
}

interface LocationCopyInput {
  name: string;
  region: string; // "in Vadodara" or "in Alkapuri, Vadodara" style phrase
  tier: "city" | "area" | "town";
}

export function locationIntro(slug: string, input: LocationCopyInput): string {
  const { name, region } = input;
  const variants = [
    `Planning a baraat ${region}? PlanMyBaraat brings the double-decker DJ truck, dhol team, vintage car, and safa styling together as one royal package — so your family isn't chasing five separate vendors in the days before the wedding.`,
    `${name} weddings deserve an entry people remember. Our baraat packages combine the DJ truck, Punjabi dhol, vintage car or baggi, and a professional safa team into a single booking for families ${region}.`,
    `If you're organizing a baraat ${region}, here's what a well-run entry actually needs: a strong sound system, a dhol team that keeps the energy up, a car worth photographing, and a safa team that gets every turban right. We handle all four as one package.`,
    `Families ${region} book us for one reason — a single point of contact for the entire baraat, from the first WhatsApp message to the last dhol beat. No juggling separate vendors for the truck, the dhol, the car, and the safa team.`,
    `${name} has hosted some of our most memorable baraats — DJ truck lit up, dhol team leading the way, groom arriving in a vintage car, safa team keeping every guest sharply turned out. Here's how we put it together for your entry.`,
    `Booking a baraat ${region} usually means coordinating a DJ, a dhol group, a car rental, and a safa vendor separately — and hoping they all show up on time. Our packages remove that risk by making it one booking, one team, one confirmation.`,
  ];
  return pick(variants, slug, "intro");
}

export function locationWhyUs(slug: string, input: LocationCopyInput): string {
  const { name, region } = input;
  const variants = [
    `We've delivered 500+ baraats across Gujarat, and every booking ${region} gets the same in-house fleet — no subcontracted trucks or last-minute vendor swaps.`,
    `Working ${region} means we already know the venues, the entry routes, and the timing that makes a baraat land well — that local familiarity is part of what you're booking.`,
    `Our safa team, dhol artists, and pyro crew travel as one unit to every booking ${region}, so the coordination between elements happens before the day, not during it.`,
    `Every package can be tailored for a baraat ${name} — truck branding, dhol count, and lighting all adjust to the size of your procession and the venue.`,
    `Families ${region} book us because there's one WhatsApp thread from enquiry to event day — not four different vendors to keep updated on timing changes.`,
  ];
  return pick(variants, slug, "whyus");
}

export function locationClosing(slug: string, input: LocationCopyInput): string {
  const { region } = input;
  const variants = [
    `Ready to plan your baraat ${region}? Send us your name, event date, and number on WhatsApp for a personalized package recommendation.`,
    `Get in touch on WhatsApp with your event details and we'll suggest the right package for a baraat ${region}.`,
    `Share your wedding date and guest count with us on WhatsApp — we'll walk you through which package fits your baraat ${region} best.`,
  ];
  return pick(variants, slug, "closing");
}

interface KeywordCopyInput {
  phrase: string;
  category: string;
}

export function keywordIntro(slug: string, input: KeywordCopyInput): string {
  const { phrase, category } = input;
  const byCategory: Record<string, string[]> = {
    "Core Product": [
      `Looking for ${phrase}? PlanMyBaraat's packages include a fully branded double-decker DJ truck with a professional sound system and a live DJ artist — no separate rental needed.`,
      `${phrase.charAt(0).toUpperCase() + phrase.slice(1)} is one piece of a bigger entry. Our packages bundle the truck, sound, and lighting together so it all arrives as one coordinated unit.`,
    ],
    "Entry Effects": [
      `Searching for ${phrase}? Every PlanMyBaraat package above our entry tier includes pyro, confetti, or LED effects as standard — not a paid add-on you have to negotiate separately.`,
      `${phrase.charAt(0).toUpperCase() + phrase.slice(1)} works best when it's timed with the music and the truck's arrival — which is exactly why we run it as part of one package instead of a standalone booking.`,
    ],
    "Dhol & Band": [
      `If you're comparing ${phrase} options, know that our dhol and band teams are salaried, in-house artists — not a freelance group assembled the week of your wedding.`,
      `${phrase.charAt(0).toUpperCase() + phrase.slice(1)} is included from our very first package (Raj Tilak) upward, with the dhol count scaling as you move to bigger packages.`,
    ],
    "Vintage Car & Transport": [
      `Every package includes ${phrase.includes("car") || phrase.includes("baggi") ? "a vintage car or baggi" : "transport"} as standard — the Signature package upgrades this to an American vintage import.`,
      `${phrase.charAt(0).toUpperCase() + phrase.slice(1)} shouldn't be booked separately from the rest of your entry — timing the car's arrival with the truck and dhol is half the effect.`,
    ],
    "Safa & Turban": [
      `${phrase.charAt(0).toUpperCase() + phrase.slice(1)} is handled by our in-house safa team (by My Safa) on every package — for the groom and the full baraati group.`,
      `Looking for ${phrase}? Our safa artists travel with the rest of the baraat team, so turban styling happens on schedule with everything else.`,
    ],
    Security: [
      `${phrase.charAt(0).toUpperCase() + phrase.slice(1)} is built into our Maharaja and Signature packages — trained bouncers who manage crowd safety around the truck and entry point.`,
    ],
    "Cost & Pricing": [
      `On ${phrase}: rather than publish flat numbers that don't account for guest count, city, or customization, we quote based on your actual event — message us on WhatsApp with your date and city for a real number, usually within the hour.`,
      `${phrase.charAt(0).toUpperCase() + phrase.slice(1)} depends heavily on package tier, city, and any customization (extra dhol, upgraded car, more effects) — here's how our four packages compare.`,
    ],
    "Booking & Logistics": [
      `On ${phrase}: our process is a WhatsApp enquiry, a callback to confirm your date and package, then a booking confirmation — no lengthy paperwork before you're locked in.`,
    ],
    Informational: [
      `A common question: ${phrase}. Here's a straight answer, based on the 500+ baraats we've run.`,
    ],
    Comparison: [
      `Comparing options for ${phrase}? Here's how our four packages differ so you can match one to your guest count and budget.`,
    ],
    Brand: [
      `Searching for PlanMyBaraat? We're Gujarat's baraat specialists — three generations in the wedding industry, now run by Ronak (also CEO & Director of Safawala.com).`,
    ],
    "Long-tail Questions": [
      `On "${phrase}" — here's how we'd answer it, based on 500+ baraats delivered across Gujarat.`,
    ],
    "City-Specific": [
      `${phrase.charAt(0).toUpperCase() + phrase.slice(1)} — we run baraat packages across Vadodara, Surat, Ahmedabad, Gandhinagar, Rajkot and more. Here's what's included.`,
    ],
  };
  const list = byCategory[category] ?? [`Here's what you need to know about ${phrase}.`];
  return pick(list, slug, "kwintro");
}
