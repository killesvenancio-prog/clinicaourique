import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Clínica Ourique | Odontologia Familiar em Santo Antônio da Patrulha",
  description:
    "Há 3 gerações cuidando de sorrisos em Santo Antônio da Patrulha, RS. Especialistas em implantes dentários, prótese e laminado cerâmico. Agende sua avaliação.",
  keywords: [
    "dentista Santo Antônio da Patrulha",
    "implante dentário",
    "prótese dentária",
    "laminado cerâmico",
    "ortodontia",
    "Clínica Ourique",
  ],
  openGraph: {
    title: "Clínica Ourique | Odontologia Familiar desde 1973",
    description:
      "3 gerações de tradição em odontologia. Especialistas em implantes, prótese e laminado cerâmico em Santo Antônio da Patrulha, RS.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2f2513",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream-50 text-petrol-900">{children}</body>
    </html>
  );
}
