import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Plan My Baraat",
    short_name: "PlanMyBaraat",
    description:
      "Discover wedding vendors, venues, and baraat services across India's most popular celebration cities.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcfbf9",
    theme_color: "#1c1917",
    icons: [
      {
        src: "/icon-mark-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-mark-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
