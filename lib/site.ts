// Single source of truth for the production base URL and core metadata.
// Centralized here so a future domain move is a one-line change.
export const SITE = {
  baseUrl: "https://portfolio-alanson.vercel.app",
  title: "Alanson Stumler | Data and AI for operationally complex firms",
  description:
    "Alanson Stumler helps operationally complex firms turn scattered data and undocumented judgment into a foundation they can decide and compete on.",
  // Primary contact address (shown as text and linked via mailto).
  email: "acstumler@outlook.com",
  // External links carried over from the live site.
  links: {
    contact: "https://dot.cards/astumler",
    calendly: "https://calendly.com/alanson-stumler",
    linkedin: "https://www.linkedin.com/in/alanson-stumler/",
    lumiledgerBrochure: "https://lumiledger-brochure.vercel.app/#wins",
  },
} as const;

// Inquiry form endpoint. The contact form POSTs here with the built-in fetch()
// (no email/Formspree client dependency); the response status drives the form's
// success/error state.
export const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/mvznwoyb";
