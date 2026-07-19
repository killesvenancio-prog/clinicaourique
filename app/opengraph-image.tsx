import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Clínica Ourique — Odontologia familiar em Santo Antônio da Patrulha, RS. 3 gerações de tradição desde 1973.";

export default async function OpengraphImage() {
  const logoBuffer = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

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
          backgroundColor: "#2f2513",
          backgroundImage:
            "radial-gradient(circle at 78% 12%, rgba(184,146,58,0.35), transparent 45%), radial-gradient(circle at 8% 92%, rgba(134,104,50,0.3), transparent 45%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#fbfaf6",
            borderRadius: 20,
            padding: "20px 32px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
          }}
        >
          <img src={logoSrc} width={380} height={81} alt="" style={{ objectFit: "contain" }} />
        </div>

        <div
          style={{
            marginTop: 44,
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 22px",
            borderRadius: 999,
            border: "1px solid rgba(204,169,77,0.4)",
            backgroundColor: "rgba(204,169,77,0.1)",
            color: "#dbbd72",
            fontSize: 24,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          3 gerações de tradição · desde 1973
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 56,
            fontWeight: 700,
            color: "#fbfaf6",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Recupere seu sorriso com confiança
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#d5c8b1",
            textAlign: "center",
          }}
        >
          Implantes · Prótese · Laminado Cerâmico · Santo Antônio da Patrulha, RS
        </div>
      </div>
    ),
    { ...size }
  );
}
