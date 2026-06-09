import { ImageResponse } from "next/og";

// Procedurally generated share image in the design system: concrete ground,
// ink name, mono kicker. (Satori cannot render the SVG feTurbulence grain, so
// the grain is omitted here; everything else matches the site palette.)
export const alt = "Alanson Stumler, data and AI for operationally complex firms";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#a9aaa8",
          color: "#0e0e0d",
          padding: "84px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 27,
            letterSpacing: "0.06em",
            color: "#3f403e",
            textTransform: "uppercase",
          }}
        >
          Data & AI for operationally complex firms
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 132,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.05em",
          }}
        >
          <span>Alanson</span>
          <span>Stumler</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#3f403e",
          }}
        >
          <span>portfolio-alanson.vercel.app</span>
          <span>Louisville, KY</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
