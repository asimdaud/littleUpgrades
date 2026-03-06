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
  title: "Little Upgrades | Everyday Essentials",
  description: "High-quality, useful products vetted for your daily routine.",
  openGraph: {
    title: "Little Upgrades",
    description: "Curated essentials for your home and tech setup.",
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