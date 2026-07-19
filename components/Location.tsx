import {
  ADDRESS,
  GOOGLE_MAPS_EMBED_SRC,
  GOOGLE_MAPS_LINK,
  PHONE_DISPLAY,
  WHATSAPP_LINK,
} from "@/lib/constants";

export default function Location() {
  return (
    <section id="localizacao" className="scroll-mt-20 bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">
            Localização
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-petrol-900 sm:text-4xl">
            Venha nos visitar em Santo Antônio da Patrulha
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 overflow-hidden rounded-2xl border border-petrol-100 bg-petrol-800 lg:grid-cols-2">
          <div className="order-2 aspect-video w-full lg:order-1 lg:aspect-auto lg:min-h-[380px]">
            <iframe
              title="Localização da Clínica Ourique no Google Maps"
              src={GOOGLE_MAPS_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>

          <div className="order-1 flex flex-col justify-center gap-6 p-8 text-cream-50 sm:p-10 lg:order-2">
            <div>
              <h3 className="font-heading text-xl font-semibold">Endereço</h3>
              <p className="mt-2 text-sm leading-relaxed text-petrol-100">
                {ADDRESS.street}
                <br />
                {ADDRESS.neighborhood}, {ADDRESS.city} - {ADDRESS.state}
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold">Contato</h3>
              <p className="mt-2 text-sm leading-relaxed text-petrol-100">
                WhatsApp: {PHONE_DISPLAY}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cream-50 px-6 py-3 text-sm font-semibold text-petrol-900 transition-[background-color,transform] duration-150 ease-out hover:bg-gold-100 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-petrol-800 motion-reduce:active:scale-100"
              >
                Ver no Google Maps
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-cream-50/40 px-6 py-3 text-sm font-semibold text-cream-50 transition-[background-color,transform] duration-150 ease-out hover:bg-petrol-700 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-50 focus-visible:ring-offset-2 focus-visible:ring-offset-petrol-800 motion-reduce:active:scale-100"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
