import "./globals.css";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper";

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://littleupgrades.co.uk"),
  title: {
    default: "Little Upgrades | Curated upgrades for daily life",
    template: "%s | Little Upgrades",
  },
  description:
    "UK-based curated storefront sourcing useful products across kitchen, toys, pets, skincare, travel, workspace, and everyday home life.",
  keywords: [
    "curated products",
    "home upgrades",
    "kitchen tools",
    "pet essentials",
    "travel accessories",
    "workspace accessories",
    "skincare tools",
    "UK storefront",
  ],
  authors: [{ name: "Little Upgrades Team" }],
  creator: "Little Upgrades",
  openGraph: {
    title: "Little Upgrades | Curated upgrades for daily life",
    description:
      "Useful products for kitchen, toys, pets, skincare, travel, workspace, and everyday home life.",
    url: "https://littleupgrades.co.uk",
    siteName: "Little Upgrades",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Upgrades | Curated upgrades for daily life",
    description:
      "A UK-based curated storefront focused on useful products across daily life.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} min-h-screen bg-background text-ink antialiased`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
