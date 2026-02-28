import type { Metadata } from "next";
import { inter, spaceGrotesk } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daddy's Cloud Kitchen Ltd — Building the Digital Backbone",
  description:
    "A tech-enabled multi-brand, multi-country food platform. Scalable multi-tenant architecture designed for 1 kitchen today, 50 tomorrow.",
  keywords: [
    "cloud kitchen",
    "food-tech",
    "multi-brand",
    "multi-tenant",
    "SaaS",
    "food platform",
  ],
  openGraph: {
    title: "Daddy's Cloud Kitchen Ltd — Building the Digital Backbone",
    description:
      "A tech-enabled multi-brand, multi-country food platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daddy's Cloud Kitchen Ltd",
    description:
      "Building the Digital Backbone — Multi-brand, multi-country food platform.",
  },
  other: {
    "theme-color": "#0A0A0A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background text-text-primary">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
