export const CLINIC_NAME = "Clínica Ourique";
export const CLINIC_TAGLINE = "A Ciência do Sorriso";

export const PHONE_DISPLAY = "(51) 99954-5239";
export const WHATSAPP_NUMBER = "5551999545239";
export const EMAIL = "clinicaourique@gmail.com";

export const SOCIAL = {
  instagram: "https://www.instagram.com/clinicaourique/",
  facebook: "https://www.facebook.com/clinicaourique",
};

export const DENTIST = {
  name: "Dr. Rafael Goulart Ourique",
  cro: "CRO-RS 10523",
};

export const ADDRESS = {
  street: "R. Mal. Floriano Peixoto, 215",
  neighborhood: "Cidade Alta",
  city: "Santo Antônio da Patrulha",
  state: "RS",
  zip: "95500-000",
  full: "R. Mal. Floriano Peixoto, 215, Cidade Alta, Santo Antônio da Patrulha - RS, 95500-000",
  lat: -29.8196164,
  lng: -50.5181422,
};

export const BUSINESS_HOURS = [
  { day: "Segunda a sexta", hours: "8h às 18h" },
  { day: "Sábado e domingo", hours: "Fechado" },
];

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Gostaria de agendar uma avaliação na Clínica Ourique.";

export const WHATSAPP_LINK = buildWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE);

export const GOOGLE_MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS.full
)}&output=embed`;

export const GOOGLE_MAPS_LINK =
  "https://maps.app.goo.gl/MaXZ5HF2JS7US3aQ7";
