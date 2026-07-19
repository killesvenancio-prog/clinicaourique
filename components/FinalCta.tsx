import { WHATSAPP_LINK } from "@/lib/constants";

export default function FinalCta() {
  return (
    <section className="bg-cream-50 px-5 py-10 sm:px-8 sm:py-14">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-petrol-950 px-6 py-14 text-center text-cream-50 sm:px-12 sm:py-20">
        <div aria-hidden className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-gold-500/15 blur-3xl" />
        <div className="scroll-reveal relative mx-auto max-w-3xl">
          <h2 className="text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Conte para a gente o que você gostaria de mudar no seu sorriso.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-petrol-100 sm:text-lg">
            A equipe responde pelo WhatsApp, entende sua necessidade e ajuda a
            organizar a primeira avaliação — sem compromisso.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-gold-500 px-8 py-3.5 text-base font-semibold text-petrol-950 shadow-lg shadow-black/15 transition-[background-color,transform] duration-200 ease-snappy hover:-translate-y-0.5 hover:bg-gold-400 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-50 focus-visible:ring-offset-2 focus-visible:ring-offset-petrol-950 motion-reduce:transform-none"
          >
            Conversar com a Clínica Ourique
          </a>
        </div>
      </div>
    </section>
  );
}
