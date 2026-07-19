import { WHATSAPP_LINK } from "@/lib/constants";

function WhatsAppIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2m0 1.8a8.08 8.08 0 0 1 5.75 2.38 8.06 8.06 0 0 1 2.38 5.73c0 4.47-3.64 8.11-8.13 8.11a8.13 8.13 0 0 1-4.14-1.13l-.3-.17-3.11.82.83-3.03-.19-.31a8.07 8.07 0 0 1-1.25-4.32c0-4.48 3.65-8.08 8.16-8.08m-4.5 4.14c-.16 0-.43.06-.65.31s-.86.84-.86 2.04.88 2.37 1 2.53 1.74 2.76 4.32 3.76c2.14.83 2.58.67 3.04.63.47-.05 1.5-.61 1.72-1.2s.21-1.1.15-1.2c-.07-.11-.24-.17-.5-.3s-1.5-.74-1.74-.82c-.23-.09-.4-.13-.57.13s-.66.82-.8.99c-.15.16-.3.18-.55.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.51-1.43-1.77-.15-.25-.02-.39.11-.51.11-.11.26-.3.38-.44.13-.15.17-.25.26-.42.08-.16.04-.31-.02-.44-.06-.13-.57-1.4-.79-1.91-.2-.5-.42-.43-.57-.44Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative scroll-mt-20 overflow-hidden bg-petrol-950">
      <div aria-hidden className="absolute -right-28 -top-32 h-96 w-96 rounded-full bg-gold-500/14 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="flex items-center gap-2.5 text-sm font-medium text-gold-200">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          Desde 1973 em Santo Antônio da Patrulha
        </div>

        <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.18fr_.82fr] lg:gap-20">
          <h1 className="max-w-4xl text-balance font-heading text-[2.75rem] font-semibold leading-[1.04] text-cream-50 sm:text-6xl lg:text-[4.8rem]">
            Tradição para cuidar. Experiência para transformar sorrisos.
          </h1>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-relaxed text-petrol-100 sm:text-lg">
              Odontologia familiar com três gerações de história e mais de duas
              décadas de experiência em implantes e reabilitação oral.
              Planejamento cuidadoso, escuta e acompanhamento em cada etapa.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gold-500 px-7 py-3.5 text-base font-semibold text-petrol-950 shadow-lg shadow-gold-500/20 transition-[transform,background-color] duration-200 ease-snappy hover:-translate-y-0.5 hover:bg-gold-400 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-50 focus-visible:ring-offset-2 focus-visible:ring-offset-petrol-950 motion-reduce:transform-none"
              >
                <WhatsAppIcon />
                Agendar uma avaliação
              </a>
              <a
                href="#resultados"
                className="inline-flex min-h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-cream-50/25 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-[background-color,border-color,transform] duration-200 ease-snappy hover:border-cream-50/50 hover:bg-white/5 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 motion-reduce:active:scale-100"
              >
                Ver resultados reais
              </a>
            </div>

            <p className="mt-4 flex items-center gap-2 text-sm text-petrol-200">
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-current" strokeWidth="1.8">
                <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Primeiro contato direto com a equipe pelo WhatsApp
            </p>
          </div>
        </div>

        <p className="mt-14 max-w-4xl border-t border-white/12 pt-6 text-sm leading-relaxed text-petrol-200 lg:mt-20">
          <span className="font-semibold text-cream-50">Uma clínica de família.</span>{" "}
          Três gerações dedicadas à odontologia, com experiência em implantodontia
          desde 2002 e acompanhamento próximo em cada fase do tratamento.
        </p>
      </div>
    </section>
  );
}
