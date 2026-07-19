const TESTIMONIALS = [
  {
    name: "Marta S.",
    quote:
      "Fiz meus implantes com o Dr. Rafael depois de anos evitando o dentista por medo. Fui tratada com muita calma e hoje sorrio sem vergonha.",
  },
  {
    name: "João P.",
    quote:
      "Já são três gerações da minha família atendidas na Clínica Ourique. É a confiança de sempre ser bem cuidado, do meu avô aos meus filhos.",
  },
  {
    name: "Carla R.",
    quote:
      "A ortodontia com a Dra. Bibiana mudou o sorriso da minha filha. Atendimento atencioso do começo ao fim do tratamento.",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5 text-gold-500" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.6 7.6l5.8-.8Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-petrol-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
            Depoimentos
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-petrol-900 sm:text-4xl">
            Quem confia na Clínica Ourique
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-petrol-100 bg-cream-50 p-6 shadow-sm"
            >
              <StarRow />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-petrol-700">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-petrol-900">
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-xs text-petrol-400">
          Depoimentos ilustrativos &mdash; substitua pelas avaliações reais
          dos pacientes (Google, Instagram) antes de publicar.
        </p>
      </div>
    </section>
  );
}
