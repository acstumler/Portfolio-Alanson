import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { SITE } from "@/lib/site";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

// Display / structural voice (headings, labels, UI). Ported from the Lovable
// build's --font-display token.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Sans / reading voice (body copy). Ported from the Lovable build's --font-sans.
const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
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
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body>
        <SmoothScroll />
        {/* Plexus background (constellation + washes) is painted by body::before /
            body::after in globals.css — framework-neutral CSS, no DOM nodes. */}
        {children}
      </body>
    </html>
  );
}
