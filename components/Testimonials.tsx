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
    <section id="depoimentos" className="scroll-mt-20 bg-petrol-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">
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

        <p className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-1.5 text-center text-xs text-petrol-500">
          <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.85A11 11 0 0 0 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09A6.6 6.6 0 0 1 5.5 12c0-.73.12-1.43.34-2.09V7.06H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.94z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 0 0-9.82 6.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Avaliações reais de pacientes no Google.
        </p>
      </div>
    </section>
  );
}
