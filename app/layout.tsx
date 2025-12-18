import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Makhana Wholesale Supplier | Premium Fox Nuts from Bihar | FoxNut Farms",
  description: "Direct wholesale supplier of premium Phool Makhana (Fox Nuts) from Mithila, Bihar. Export-grade 5S, 6S, 7S. MOQ 50kg. GI Tagged. Farm-to-business pricing.",
  keywords: [
    "makhana wholesale",
    "fox nuts bulk supplier",
    "phool makhana export",
    "Bihar makhana supplier",
    "5 suta makhana",
    "6 suta premium",
    "GI tagged makhana",
    "makhana direct from farmers",
    "wholesale fox nuts India",
    "Darbhanga makhana"
  ],
  authors: [{ name: "FoxNut Farms" }],
  openGraph: {
    title: "FoxNut Farms - Premium Makhana Wholesale from Bihar",
    description: "Direct wholesale supplier of export-grade Phool Makhana. GI Tagged. Farm-to-business. MOQ 50kg.",
    url: "https://foxnutfarms.com",
    siteName: "FoxNut Farms",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero_pond.png",
        width: 1200,
        height: 630,
        alt: "FoxNut Farms - Premium Makhana from Mithila"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "FoxNut Farms - Premium Makhana Wholesale",
    description: "Direct wholesale supplier of export-grade Phool Makhana from Bihar. GI Tagged.",
    images: ["/images/hero_pond.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-cream font-sans`}
      >
        <StructuredData />
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
