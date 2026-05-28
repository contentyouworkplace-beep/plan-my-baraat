import type { Metadata } from "next";
import { Cinzel, Outfit } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Plan My Baraat | Premium Wedding Procession Planner",
  description: "Organize the ultimate wedding procession with real-time budget tracking, interactive timeline designer, custom guest safa selectors, song voting, route simulations, and luxury digital invitations.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
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
        className={`${cinzel.variable} ${outfit.variable} font-sans antialiased bg-[#fcfbf9] text-[#1c1917]`}
      >
        {children}
      </body>
    </html>
  );
}

