import type { Metadata } from "next";
import { Inter_Tight, Geist_Mono } from "next/font/google";
import { SITE } from "@/lib/site";
import { TerrainBackground } from "@/components/TerrainBackground";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

// Display + body face. Variable font: full weight axis available via CSS font-weight.
const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

// Labels / metadata face.
const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.baseUrl,
    siteName: "Alanson Stumler",
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${geistMono.variable}`}>
      <body>
        <SmoothScroll />
        <TerrainBackground />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
