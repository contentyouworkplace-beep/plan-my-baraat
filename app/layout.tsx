import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import MetaPixel from "@/components/MetaPixel";
import { generateJsonLdOrganization, generateJsonLdWebSite } from "@/lib/seoHelpers";
import "./globals.css";

const manropeHeading = Manrope({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["500", "600", "700", "800"],
});

const manropeBody = Manrope({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://planmybaraat.com"),
  title: {
    default: "PlanMyBaraat | Wedding Vendors & Baraat Services Across India",
    template: "%s | PlanMyBaraat",
  },
  description:
    "Discover verified wedding vendors, venues, and baraat services across India's most popular wedding cities. Browse by specialty, compare options, and enquire instantly on WhatsApp.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "hbBQfovzIXc0-N1ZQAI1rgLmP3l-YWXf4nepmks8kjg",
  },
  icons: {
    icon: "/pmbsite.png",
    apple: "/icon-mark-180.png",
    shortcut: "/pmbsite.png",
  },
  openGraph: {
    title: "PlanMyBaraat | Wedding Vendors & Baraat Services Across India",
    description:
      "Discover verified wedding vendors, venues, and baraat services across India's most popular wedding cities.",
    images: [
      {
        url: "/pmbsite.png",
        width: 500,
        height: 500,
        alt: "PlanMyBaraat",
      },
    ],
    url: "/",
    siteName: "PlanMyBaraat",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlanMyBaraat | Wedding Vendors & Baraat Services Across India",
    description:
      "Discover verified wedding vendors, venues, and baraat services across India's most popular wedding cities.",
    images: ["/pmbsite.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateJsonLdOrganization();
  const websiteSchema = generateJsonLdWebSite();

  return (
    <html lang="en">
      <body
        className={`${manropeHeading.variable} ${manropeBody.variable} font-sans antialiased bg-[#fcfbf9] text-[#1c1917]`}
      >
        <MetaPixel />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationSchema }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: websiteSchema }}
        />
        {children}
      </body>
    </html>
  );
}
