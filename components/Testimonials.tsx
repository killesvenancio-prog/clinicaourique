const TESTIMONIALS = [
  {
    name: "Reginaldo Caetano",
    quote:
      "Sofri desde criança com minha dentadura e jamais conseguia me alimentar com liberdade. Procurei o Rafael Ourique e fui um de seus primeiros pacientes de implante. Foi uma revolução na minha vida. Hoje, aos 77 anos, sou muito grato e feliz por ter tomado aquela decisão.",
    highlight: "Foi uma revolução na minha vida.",
  },
  {
    name: "Raquel Ferreira Costa",
    quote:
      "Desde a recepção até a conclusão do tratamento, fui atendida com profissionalismo, atenção e respeito. Meus sinceros agradecimentos ao Dr. Rafael pelo cuidado e excelência. Recomendo sem hesitação — e olha que tenho pânico de dentista.",
    highlight: "Cuidado até para quem tem medo de dentista.",
  },
  {
    name: "Maria de Fátima Aguiar Goulart",
    quote:
      "Há anos frequento a Clínica Ourique porque o atendimento foca na qualidade clínica, na empatia e no bem-estar do paciente, com orientações pós-procedimento e acompanhamento da recuperação.",
    highlight: "Qualidade clínica com empatia.",
  },
];

function QuoteMark() {
  return (
    <svg aria-hidden viewBox="0 0 32 32" className="h-8 w-8 fill-current text-gold-500">
      <path d="M13.2 6.4C7.8 9 5 13.1 5 18.8c0 4.2 2.2 6.8 5.5 6.8 2.8 0 4.8-2.1 4.8-4.8 0-2.6-1.8-4.5-4.4-4.5-.6 0-1.1.1-1.6.3.5-3 2.3-5.3 5.4-7L13.2 6.4Zm13 0c-5.4 2.6-8.2 6.7-8.2 12.4 0 4.2 2.2 6.8 5.5 6.8 2.8 0 4.8-2.1 4.8-4.8 0-2.6-1.8-4.5-4.4-4.5-.6 0-1.1.1-1.6.3.5-3 2.3-5.3 5.4-7l-1.5-3.2Z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-20 bg-petrol-950 py-20 text-cream-50 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="scroll-reveal grid items-end gap-6 sm:grid-cols-[1fr_auto]">
          <div>
            <span className="text-sm font-semibold text-gold-300">Histórias de pacientes</span>
            <h2 className="mt-4 max-w-3xl text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Confiança construída no consultório, uma história de cada vez.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-petrol-200 sm:text-right">
            Relatos compartilhados por pacientes atendidos pela Clínica Ourique.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_.85fr] lg:grid-rows-2">
          {TESTIMONIALS.map((item, index) => (
            <figure
              key={item.name}
              className={`scroll-reveal flex flex-col rounded-2xl border p-6 sm:p-8 ${
                index === 0
                  ? "border-gold-400/45 bg-gold-500/10 lg:row-span-2 lg:p-10"
                  : "border-white/10 bg-white/[0.045]"
              }`}
            >
              <QuoteMark />
              <p className={`mt-6 font-heading font-semibold leading-snug text-cream-50 ${index === 0 ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                {item.highlight}
              </p>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-petrol-100 sm:text-[15px]">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-7 border-t border-white/10 pt-5 text-sm font-semibold text-gold-300">
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
