export const CLINIC_NAME = "Clínica Ourique";

export const PHONE_DISPLAY = "(51) 99954-5239";
export const WHATSAPP_NUMBER = "5551999545239";

export const ADDRESS = {
  street: "R. Mal. Floriano Peixoto, 215",
  neighborhood: "Cidade Alta",
  city: "Santo Antônio da Patrulha",
  state: "RS",
  full: "R. Mal. Floriano Peixoto, 215, Cidade Alta, Santo Antônio da Patrulha - RS",
};

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

export const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS.full
)}`;
