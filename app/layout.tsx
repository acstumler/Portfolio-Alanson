import type { Metadata } from "next";
import { Inter_Tight, Source_Serif_4 } from "next/font/google";
import { SITE } from "@/lib/site";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

// Structural voice. Variable font: full weight axis available via CSS font-weight.
const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

// Reading voice. Roman + italic at 400; the only two faces on the site.
const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
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
    <html lang="en" className={`${interTight.variable} ${sourceSerif.variable}`}>
      <body>
        <SmoothScroll />
        {/* Parchment texture: low-frequency mottle beneath, fine grain above. */}
        <div className="mottle" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
