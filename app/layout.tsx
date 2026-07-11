import type { Metadata } from "next";
import { Manrope } from "next/font/google";

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
  icons: {
    icon: "/icon-mark-32.png",
    apple: "/icon-mark-180.png",
    shortcut: "/icon-mark-32.png",
  },
  openGraph: {
    title: "PlanMyBaraat | Wedding Vendors & Baraat Services Across India",
    description:
      "Discover verified wedding vendors, venues, and baraat services across India's most popular wedding cities.",
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
