import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Little Upgrades | Everyday Essentials",
  description:
    "High-quality, useful products vetted for your daily routine. Simplified upgrades for modern living.",
  openGraph: {
    title: "Little Upgrades",
    description: "Curated essentials for your home and tech setup.",
    // images: [{ url: '/og-image.jpg' }], // Add a nice preview image in your public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-offWhite selection:bg-amber selection:text-charcoal overflow-x-hidden antialiased`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
