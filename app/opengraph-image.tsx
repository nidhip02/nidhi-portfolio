import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = "Portfolio: software and AI engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fbfaf7",
          color: "#16181d",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          borderLeft: "24px solid #1f3f9e",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700 }}>{site.name}</div>
        <div style={{ fontSize: 38, marginTop: 24, color: "#555b66" }}>Software engineer, expanding into AI engineering</div>
      </div>
    ),
    size,
  );
}
