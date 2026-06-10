import { ImageResponse } from "next/og";

// Procedurally generated share image in the design system: warm-paper ground,
// ink name, secondary metadata. (Satori cannot render the SVG feTurbulence
// parchment texture, so it is omitted here; the palette matches the site.)
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
          background: "#efebe1",
          color: "#1a1812",
          padding: "84px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 27,
            letterSpacing: "0.01em",
            color: "#5a554a",
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
            color: "#5a554a",
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
