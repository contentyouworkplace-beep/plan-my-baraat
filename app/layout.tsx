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
  title: "Plan My Baraat | Premium Wedding Procession Planner",
  description: "Organize the ultimate wedding procession with real-time budget tracking, interactive timeline designer, custom guest safa selectors, song voting, route simulations, and luxury digital invitations.",
  icons: {
    icon: "/icon-mark-32.png",
    apple: "/icon-mark-180.png",
    shortcut: "/icon-mark-32.png",
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
        className={`${manropeHeading.variable} ${manropeBody.variable} font-sans antialiased bg-[#fcfbf9] text-[#1c1917]`}
      >
        {children}
      </body>
    </html>
  );
}

