import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1b3a",
          gap: "34px",
        }}
      >
        <div
          style={{
            width: "62px",
            height: "62px",
            background: "#f6f8fc",
            transform: "rotate(45deg)",
            borderRadius: "0 50% 50% 50%",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", gap: "14px" }}>
          <div style={{ width: "17px", height: "17px", borderRadius: "99px", background: "#00B7EB", display: "flex" }} />
          <div style={{ width: "17px", height: "17px", borderRadius: "99px", background: "#E6007E", display: "flex" }} />
          <div style={{ width: "17px", height: "17px", borderRadius: "99px", background: "#FFD500", display: "flex" }} />
        </div>
      </div>
    ),
    size,
  );
}
