import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Blue Ocean Materials — Precision Engineering Plastics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const polymer = await readFile(
    join(process.cwd(), "public/polymer-image.jpeg")
  );
  const polymerSrc = `data:image/jpeg;base64,${polymer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FAFAF7",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px",
            width: "58%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 20,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill="none"
              width={44}
              height={44}
            >
              <circle cx="50" cy="50" r="38" stroke="#0A0F1A" strokeWidth="4" />
              <path
                d="M14 62 C 28 54, 38 70, 50 62 S 72 54, 86 62"
                stroke="#0A0F1A"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#2CB5A5",
              }}
            >
              Blue Ocean Materials
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#111111",
              marginBottom: 24,
            }}
          >
            <span>Engineering Plastics,</span>
            <span>Delivered Smarter.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.4,
              color: "rgba(17,17,17,0.65)",
            }}
          >
            Precision-cut PEEK, PEI, POM & certified polymers. Quoting
            built for under-30-minute turnaround.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "42%",
            background: "#111111",
          }}
        >
          <img
            src={polymerSrc}
            width={360}
            height={288}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
