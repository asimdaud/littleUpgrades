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
  // 1. CRITICAL: This fixes the 'localhost' issue in your tags
  metadataBase: new URL('https://littleupgrades.co.uk'),

  // 2. Standard SEO
  title: {
    default: "Little Upgrades | Everyday Essentials",
    template: "%s | Little Upgrades" // Allows sub-pages to have unique titles
  },
  description: "High-quality, useful products vetted for your daily routine. Simplified upgrades for modern living.",
  keywords: ["curated essentials", "minimalist tech", "home upgrades", "vetted products"],
  authors: [{ name: "Little Upgrades Team" }],
  creator: "Little Upgrades",

  // 3. OpenGraph - Text only (Images are handled by the file in src/app)
  openGraph: {
    title: "Little Upgrades | Everyday Essentials",
    description: "High-quality, useful products vetted for your daily routine.",
    url: "https://littleupgrades.co.uk",
    siteName: "Little Upgrades",
    locale: "en_GB",
    type: "website",
  },

  // 4. Twitter - Text only (Images are handled by the file in src/app)
  twitter: {
    card: "summary_large_image",
    title: "Little Upgrades | Everyday Essentials",
    description: "Simplified upgrades for modern living. Curated and vetted.",
  },

  // 5. Robot instructions for Google
  robots: {
    index: true,
    follow: true,
  },
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