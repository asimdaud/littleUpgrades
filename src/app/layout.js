import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper";

// Configure the fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://littleupgrades.co.uk'),
  title: {
    default: "Little Upgrades | Everyday Essentials",
    template: "%s | Little Upgrades"
  },
  description: "High-quality, useful products vetted for your daily routine. Simplified upgrades for modern living.",
  keywords: ["curated essentials", "minimalist tech", "home upgrades", "vetted products"],
  authors: [{ name: "Little Upgrades Team" }],
  creator: "Little Upgrades",
  
  // OpenGraph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://littleupgrades.co.uk",
    title: "Little Upgrades | Everyday Essentials",
    description: "High-quality, useful products vetted for your daily routine.",
    siteName: "Little Upgrades",
    // NOTE: Images are now handled automatically by opengraph-image.png in src/app
  },

  // Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "Little Upgrades | Everyday Essentials",
    description: "Simplified upgrades for modern living. Curated and vetted.",
    // NOTE: Images are now handled automatically by opengraph-image.png in src/app
  },

  // NOTE: Icons are now handled automatically by favicon.ico and apple-icon.png in src/app
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-offWhite antialiased overflow-x-hidden`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}