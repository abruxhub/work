import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#13100e", color: "#ece4d6", padding: 72, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, color: "#bdb2a2" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#f2a7bd" }} />
          {site.handle}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>{site.name}</div>
          <div style={{ fontSize: 36, color: "#bdb2a2" }}>{`${site.role} · ES · EN · PT`}</div>
        </div>
      </div>
    ),
    size,
  );
}
