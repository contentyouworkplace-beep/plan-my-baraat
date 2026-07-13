import type { BaraatKeyword } from "./baraatKeywords";
import type { BaraatLocation } from "./baraatLocations";
import type { BaraatPackage } from "./packagesData";

function titleCase(input: string) {
  return input.replace(/\b\w/g, (char) => char.toUpperCase());
}

function hasGeoTerm(text: string) {
  return /(vadodara|surat|ahmedabad|gandhinagar|rajkot|gujarat|mumbai|delhi|bengaluru)/i.test(text);
}

function locationLabel(loc: BaraatLocation, parent?: BaraatLocation) {
  return parent ? `${loc.name}, ${parent.name}` : loc.name;
}

function locationRegion(loc: BaraatLocation, parent?: BaraatLocation) {
  if (parent) return `${loc.name}, ${parent.name}, Gujarat`;
  return `${loc.name}, ${loc.state}`;
}

export function getHomeMeta() {
  return {
    title: "Baraat Packages in Vadodara, Ahmedabad, Surat & Gujarat | PlanMyBaraat",
    description:
      "Book baraat packages in Vadodara, Ahmedabad, Surat and across Gujarat with DJ truck, dhol team, vintage car, safa team, pyro effects and WhatsApp booking.",
  };
}

export function getAboutMeta() {
  return {
    title: "About PlanMyBaraat | Gujarat Baraat Planning Company",
    description:
      "Learn about PlanMyBaraat, Gujarat's baraat planning company for DJ truck, dhol, vintage car, safa team and complete wedding entry management across major cities.",
  };
}

export function getContactMeta() {
  return {
    title: "Contact PlanMyBaraat | Baraat Booking in Vadodara & Gujarat",
    description:
      "Contact PlanMyBaraat for baraat booking in Vadodara, Ahmedabad, Surat and across Gujarat. Get package pricing, date availability and WhatsApp support quickly.",
  };
}

export function getGalleryMeta() {
  return {
    title: "Baraat Gallery | DJ Truck, Dhol & Wedding Entry Photos in Gujarat",
    description:
      "See real baraat photos and videos from Vadodara, Ahmedabad, Surat and Gujarat weddings featuring DJ trucks, dhol teams, vintage cars and royal groom entries.",
  };
}

export function getTestimonialsMeta() {
  return {
    title: "Baraat Reviews & Testimonials in Vadodara, Ahmedabad & Surat | PlanMyBaraat",
    description:
      "Read baraat reviews from families in Vadodara, Ahmedabad, Surat and Gujarat who booked PlanMyBaraat for DJ truck, dhol, vintage car and wedding entry services.",
  };
}

export function getPackageIndexMeta() {
  return {
    title: "Baraat Package Price in Vadodara, Ahmedabad, Surat & Gujarat | PlanMyBaraat",
    description:
      "Compare baraat package price in Vadodara, Ahmedabad, Surat and Gujarat. View Raj Tilak, Rajwada, Maharaja and Signature package inclusions before booking.",
  };
}

export function getPackageMeta(pkg: BaraatPackage) {
  return {
    title: `${pkg.name} Price in Vadodara, Ahmedabad & Surat | PlanMyBaraat`,
    description: `${pkg.name} by PlanMyBaraat includes DJ truck, dhol, vintage car, safa team and wedding entry effects for bookings in Vadodara, Ahmedabad, Surat and Gujarat.`,
  };
}

export function getLocationMeta(loc: BaraatLocation, parent?: BaraatLocation) {
  const label = locationLabel(loc, parent);
  const region = locationRegion(loc, parent);

  return {
    title: `Baraat Packages in ${label} | DJ Truck, Dhol & Vintage Car`,
    description: `Book baraat packages in ${region} with DJ truck, dhol team, vintage car, safa styling and complete wedding entry planning by PlanMyBaraat.`,
  };
}

export function getKeywordIndexMeta() {
  return {
    title: "Baraat Management Services in Vadodara, Ahmedabad, Surat & Gujarat",
    description:
      "Browse baraat management services and wedding entry keywords for Vadodara, Ahmedabad, Surat and Gujarat including DJ truck, dhol, safa team, pricing and booking topics.",
  };
}

export function getKeywordMeta(keyword: BaraatKeyword) {
  const phrase = titleCase(keyword.phrase);
  const suffix = hasGeoTerm(keyword.phrase)
    ? " | PlanMyBaraat"
    : " in Vadodara, Ahmedabad, Surat & Gujarat | PlanMyBaraat";

  const description = hasGeoTerm(keyword.phrase)
    ? `Book ${keyword.phrase} with PlanMyBaraat for DJ truck, dhol team, vintage car, safa styling and complete wedding entry planning in Gujarat.`
    : `Looking for ${keyword.phrase}? Book wedding entry packages with DJ truck, dhol team, vintage car and safa styling in Vadodara, Ahmedabad, Surat and across Gujarat.`;

  return {
    title: `${phrase}${suffix}`,
    description,
  };
}
