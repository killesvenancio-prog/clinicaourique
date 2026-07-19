import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import {
  ADDRESS,
  CLINIC_NAME,
  DENTIST,
  EMAIL,
  PHONE_DISPLAY,
  SOCIAL,
} from "@/lib/constants";
import "./globals.css";

const SITE_URL = "https://saas-two-smoky-13.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: CLINIC_NAME,
  url: SITE_URL,
  telephone: "+55" + PHONE_DISPLAY.replace(/\D/g, "").replace(/^0/, ""),
  email: EMAIL,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.state,
    postalCode: ADDRESS.zip,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: ADDRESS.lat,
    longitude: ADDRESS.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [SOCIAL.facebook, SOCIAL.instagram],
  employee: {
    "@type": "Person",
    name: DENTIST.name,
    jobTitle: "Cirurgião-dentista responsável técnico",
  },
};

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
  metadataBase: new URL(SITE_URL),
  title: "Clínica Ourique | Odontologia Familiar em Santo Antônio da Patrulha",
  description:
    "Há 3 gerações cuidando de sorrisos em Santo Antônio da Patrulha, RS. Especialistas em implantes dentários, prótese e laminado cerâmico. Agende sua avaliação.",
  keywords: [
    "dentista Santo Antônio da Patrulha",
    "implante dentário",
    "prótese dentária",
    "laminado cerâmico",
    "ortodontia",
    "endodontia",
    "periodontia",
    "Clínica Ourique",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Clínica Ourique | Odontologia Familiar desde 1973",
    description:
      "3 gerações de tradição em odontologia. Especialistas em implantes, prótese e laminado cerâmico em Santo Antônio da Patrulha, RS.",
    url: SITE_URL,
    siteName: CLINIC_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Ourique | Odontologia Familiar desde 1973",
    description:
      "3 gerações de tradição em odontologia em Santo Antônio da Patrulha, RS.",
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
      <body className="min-h-full flex flex-col bg-cream-50 text-petrol-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
