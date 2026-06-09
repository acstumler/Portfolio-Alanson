// Single source of truth for the production base URL and core metadata.
// Centralized here so a future domain move is a one-line change.
export const SITE = {
  baseUrl: "https://portfolio-alanson.vercel.app",
  title: "Alanson Stumler | Data and AI for operationally complex firms",
  description:
    "Alanson Stumler helps operationally complex firms turn scattered data and undocumented judgment into a foundation they can decide and compete on.",
  // Primary contact address (shown as text and linked via mailto).
  email: "acstumler@outlook.com",
  // External links carried over from the live site (unchanged).
  links: {
    linkedin: "https://www.linkedin.com/in/alanson-stumler",
    calendly: "https://calendly.com/alanson-stumler-lumiledger",
    lumiledgerBrochure: "https://lumiledger-brochure.vercel.app/#wins",
  },
} as const;
