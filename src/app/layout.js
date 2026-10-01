import "./globals.css";
import { Fraunces, Instrument_Sans } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper";

const sans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const serif = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
  verification: {
    google: "uuQ7pqSCrq3k840V0YnHScsJFDYm5b_F9xGRAgUw2hc",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
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
