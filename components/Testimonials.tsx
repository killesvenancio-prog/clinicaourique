const TESTIMONIALS = [
  {
    name: "Reginaldo Caetano",
    quote:
      "Sofri desde criança com minha dentadura, já que jamais conseguia me alimentar com liberdade. Não tinha mais esperança em poder um dia comer um churrasco mastigando de ambos os lados. Então procurei o Rafael Ourique onde fui um dos seus primeiros pacientes, senão o primeiro, a fazer um implante. Foi uma revolução na minha vida. Hoje, aos meus 77 anos, sou muito grato a ele e feliz por ter tomado aquela decisão.",
  },
  {
    name: "Raquel Ferreira Costa",
    quote:
      "Gostaria de registrar minha profunda satisfação com o atendimento desta clínica. Desde a recepção até a pós conclusão do tratamento, fui atendida com profissionalismo, atenção e respeito, com excelente competência técnica. Meus sinceros agradecimentos ao Dr. Rafael pelo cuidado e excelência. Recomendo sem hesitação, e olha que tenho pânico a dentistas.",
  },
  {
    name: "Maria de Fátima Aguiar Goulart",
    quote:
      "Há anos frequento a Clínica Ourique, porque o atendimento prestado foca na qualidade clínica, na empatia e no bem estar do paciente, oferecendo orientações de cuidado pós-procedimento e acompanhando a recuperação. Super recomendo o Dr. Rafael Ourique.",
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
          Avaliações reais de pacientes no Google.
        </p>
      </div>
    </section>
  );
}
