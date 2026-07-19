import { WHATSAPP_LINK } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <svg aria-hidden viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2m0 1.8a8.08 8.08 0 0 1 5.75 2.38 8.06 8.06 0 0 1 2.38 5.73c0 4.47-3.64 8.11-8.13 8.11a8.13 8.13 0 0 1-4.14-1.13l-.3-.17-3.11.82.83-3.03-.19-.31a8.07 8.07 0 0 1-1.25-4.32c0-4.48 3.65-8.08 8.16-8.08m-4.5 4.14c-.16 0-.43.06-.65.31s-.86.84-.86 2.04.88 2.37 1 2.53 1.74 2.76 4.32 3.76c2.14.83 2.58.67 3.04.63.47-.05 1.5-.61 1.72-1.2s.21-1.1.15-1.2c-.07-.11-.24-.17-.5-.3s-1.5-.74-1.74-.82c-.23-.09-.4-.13-.57.13s-.66.82-.8.99c-.15.16-.3.18-.55.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.51-1.43-1.77-.15-.25-.02-.39.11-.51.11-.11.26-.3.38-.44.13-.15.17-.25.26-.42.08-.16.04-.31-.02-.44-.06-.13-.57-1.4-.79-1.91-.2-.5-.42-.43-.57-.44Z" />
      </svg>
    </a>
  );
}
