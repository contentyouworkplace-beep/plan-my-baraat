import { redirect } from "next/navigation";
import { ALL_BARAAT_LOCATIONS } from "@/lib/data/baraatLocations";

export function generateStaticParams() {
  return ALL_BARAAT_LOCATIONS.map((loc) => ({ location: loc.slug }));
}

export default function LocationRedirectPage({
  params,
}: {
  params: { location: string };
}) {
  redirect(`/baraat-management/${params.location}`);
}
