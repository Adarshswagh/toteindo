import type { Metadata, Viewport } from "next";
import "./globals.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SiteChrome from "./components/SiteChrome";
import PageMotion from "./components/PageMotion";

export const metadata: Metadata = {
  metadataBase: new URL('https://toteindo.com'),
  title: "Toteindo — Premium Canvas Bags for Conscious Living",
  description:
    "Discover Toteindo — premium canvas totes, sling bags and reusable lifestyle essentials designed with Indian creativity, timeless style and conscious living in mind.",
  keywords: [
    "canvas bags India",
    "premium tote bags",
    "sustainable bags India",
    "Indian lifestyle brand",
    "canvas tote India",
    "eco-friendly bags",
    "designer tote bags India",
    "Toteindo",
  ],
  authors: [{ name: "Toteindo" }],
  creator: "Toteindo",
  publisher: "Toteindo",
  robots: "index, follow",
  openGraph: {
    title: "Toteindo — Premium Canvas Bags for Conscious Living",
    description:
      "Premium canvas totes, sling bags and reusable lifestyle essentials. Crafted with Indian creativity, designed for modern living.",
    url: "https://toteindo.com",
    siteName: "Toteindo",
    images: [
      {
        url: "/images/lifestyle/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Toteindo Premium Canvas Bags",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toteindo — Premium Canvas Bags",
    description:
      "Premium canvas totes and lifestyle essentials. Made in India, crafted to perfection.",
    images: ["/images/lifestyle/hero.jpg"],
    creator: "@toteindo",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7E1323",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FDFAF6] text-charcoal antialiased">
        <SiteChrome>
          <header className="sticky top-0 z-50 bg-[#FDFAF6]">
            <AnnouncementBar />
            <Navbar />
          </header>
          <PageMotion>
            <main>{children}</main>
          </PageMotion>
          <Footer />
        </SiteChrome>
      </body>
    </html>
  );
}
