import { WHATSAPP_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="top" className="relative scroll-mt-20 overflow-hidden bg-petrol-900">
      {/* decorative background shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-petrol-600/40 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-28 lg:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">
          3 gerações de tradição &middot; desde 1973
        </span>

        <h1 className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-tight text-cream-50 sm:text-5xl lg:text-6xl">
          Recupere seu sorriso com a confiança de quem cuida de famílias há
          três gerações
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-petrol-100 sm:text-lg">
          Clínica odontológica familiar em Santo Antônio da Patrulha, RS,
          especializada em implantes dentários, prótese e laminado
          cerâmico &mdash; com a experiência que só a tradição pode oferecer.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-base font-semibold text-petrol-950 shadow-lg shadow-gold-500/20 transition-transform hover:scale-[1.02] hover:bg-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-50 focus-visible:ring-offset-2 focus-visible:ring-offset-petrol-900 motion-reduce:transition-none motion-reduce:hover:scale-100"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2m0 1.8a8.08 8.08 0 0 1 5.75 2.38 8.06 8.06 0 0 1 2.38 5.73c0 4.47-3.64 8.11-8.13 8.11a8.13 8.13 0 0 1-4.14-1.13l-.3-.17-3.11.82.83-3.03-.19-.31a8.07 8.07 0 0 1-1.25-4.32c0-4.48 3.65-8.08 8.16-8.08m-4.5 4.14c-.16 0-.43.06-.65.31s-.86.84-.86 2.04.88 2.37 1 2.53 1.74 2.76 4.32 3.76c2.14.83 2.58.67 3.04.63.47-.05 1.5-.61 1.72-1.2s.21-1.1.15-1.2c-.07-.11-.24-.17-.5-.3s-1.5-.74-1.74-.82c-.23-.09-.4-.13-.57.13s-.66.82-.8.99c-.15.16-.3.18-.55.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.51-1.43-1.77-.15-.25-.02-.39.11-.51.11-.11.26-.3.38-.44.13-.15.17-.25.26-.42.08-.16.04-.31-.02-.44-.06-.13-.57-1.4-.79-1.91-.2-.5-.42-.43-.57-.44Z" />
            </svg>
            Agende sua avaliação
          </a>
          <span className="text-sm font-medium text-petrol-200">
            Atendimento humano e sem compromisso pelo WhatsApp
          </span>
        </div>

        <dl className="mt-14 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-petrol-700 pt-8">
          <div>
            <dt className="sr-only">Anos de tradição</dt>
            <dd className="font-heading text-2xl font-semibold text-gold-300 sm:text-3xl">
              50+
            </dd>
            <p className="mt-1 text-xs text-petrol-200 sm:text-sm">
              anos de tradição
            </p>
          </div>
          <div>
            <dt className="sr-only">Gerações de dentistas</dt>
            <dd className="font-heading text-2xl font-semibold text-gold-300 sm:text-3xl">
              3
            </dd>
            <p className="mt-1 text-xs text-petrol-200 sm:text-sm">
              gerações da família
            </p>
          </div>
          <div>
            <dt className="sr-only">Especialização em implantes desde</dt>
            <dd className="font-heading text-2xl font-semibold text-gold-300 sm:text-3xl">
              2002
            </dd>
            <p className="mt-1 text-xs text-petrol-200 sm:text-sm">
              em implantes complexos
            </p>
          </div>
        </dl>
      </div>
    </section>
  );
}
