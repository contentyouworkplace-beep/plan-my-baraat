import type { Metadata } from "next";
import { Manrope } from "next/font/google";

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
    default: "PlanMyBaraat CRM",
    template: "%s | PlanMyBaraat CRM",
  },
  description: "Internal CRM for PlanMyBaraat operations.",
  icons: {
    icon: "/pmbsite.png",
    apple: "/icon-mark-180.png",
    shortcut: "/pmbsite.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manropeHeading.variable} ${manropeBody.variable} font-sans antialiased bg-white text-[#1c1917]`}
      >
        {children}
      </body>
    </html>
  );
}
