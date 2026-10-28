import { ImageResponse } from "next/og";

export const alt =
  "Guru Kirpa Refilling Centre — printer cartridge refilling in New Ranjeet Nagar, New Delhi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const cyan = "#00B7EB";
const magenta = "#E6007E";
const yellow = "#FFD500";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          background: "#0b1b3a",
          color: "#f6f8fc",
          padding: "62px 72px",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-100px",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,183,235,0.32), rgba(0,183,235,0))",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-220px",
            left: "-120px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(230,0,126,0.22), rgba(230,0,126,0))",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "36px",
            left: "36px",
            right: "36px",
            bottom: "36px",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "26px",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "74px",
              height: "74px",
              borderRadius: "22px",
              background: "#f6f8fc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                background: "#0b1b3a",
                transform: "rotate(45deg)",
                borderRadius: "0 50% 50% 50%",
                display: "flex",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "31px", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Guru Kirpa
            </span>
            <span
              style={{
                fontSize: "16px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(246,248,252,0.55)",
                marginTop: "5px",
              }}
            >
              Refilling Centre
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: "19px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: cyan,
              fontWeight: 600,
            }}
          >
            <div style={{ display: "flex", gap: "6px" }}>
              <div style={{ width: "9px", height: "9px", borderRadius: "99px", background: cyan, display: "flex" }} />
              <div style={{ width: "9px", height: "9px", borderRadius: "99px", background: magenta, display: "flex" }} />
              <div style={{ width: "9px", height: "9px", borderRadius: "99px", background: yellow, display: "flex" }} />
            </div>
            New Ranjeet Nagar · New Delhi
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "24px",
              fontSize: "60px",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
            }}
          >
            <span style={{ display: "flex" }}>Printer cartridge refilling</span>
            <span style={{ display: "flex" }}>
              in New Ranjeet Nagar,{" "}
              <span style={{ color: yellow, display: "flex" }}>&nbsp;New Delhi</span>
            </span>
          </div>

          <span
            style={{
              marginTop: "22px",
              fontSize: "24px",
              color: "rgba(246,248,252,0.65)",
              display: "flex",
            }}
          >
            New cartridges · Expert refills · Pickup &amp; delivery
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "22px", fontSize: "23px", fontWeight: 600 }}>
            <span style={{ display: "flex" }}>+91 93124 54646</span>
            <span style={{ color: "rgba(246,248,252,0.35)", display: "flex" }}>·</span>
            <span style={{ display: "flex" }}>+91 99530 29604</span>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ width: "56px", height: "8px", borderRadius: "99px", background: cyan, display: "flex" }} />
            <div style={{ width: "56px", height: "8px", borderRadius: "99px", background: magenta, display: "flex" }} />
            <div style={{ width: "56px", height: "8px", borderRadius: "99px", background: yellow, display: "flex" }} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
