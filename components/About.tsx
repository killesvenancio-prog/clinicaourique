const MILESTONES = [
  { year: "1973", label: "A família Ourique inicia sua história na odontologia em Santo Antônio da Patrulha." },
  { year: "1996", label: "Dr. Rafael passa a atuar na Clínica Ourique, dando continuidade à tradição familiar." },
  { year: "2002", label: "A implantodontia e as reabilitações complexas se tornam parte central da prática clínica." },
];

const CREDENTIALS = [
  {
    eyebrow: "Formação",
    title: "UFRGS",
    description: "Formação em Odontologia pela Universidade Federal do Rio Grande do Sul.",
  },
  {
    eyebrow: "Registro profissional",
    title: "CRO-RS 10523",
    description: "Cirurgião-dentista regularmente identificado em fontes públicas do conselho regional.",
  },
  {
    eyebrow: "Reconhecimento",
    title: "Representação municipal",
    description: "Nomeado representante municipal do CRO-RS em Santo Antônio da Patrulha na gestão 2024–2025.",
  },
];

function SealIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.6">
      <path d="M12 3.5 14.2 5l2.7-.1.8 2.6 2.2 1.6-.9 2.6.9 2.6-2.2 1.6-.8 2.6-2.7-.1L12 20l-2.2-1.6-2.7.1-.8-2.6-2.2-1.6.9-2.6-.9-2.6 2.2-1.6.8-2.6 2.7.1L12 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-20">
          <div className="scroll-reveal">
            <h2 className="max-w-xl text-balance font-heading text-4xl font-semibold leading-tight text-petrol-950 sm:text-5xl">
              Ciência, experiência e um cuidado que atravessa gerações.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-petrol-700 sm:text-lg">
              A Clínica Ourique cresceu junto com Santo Antônio da Patrulha.
              Há mais de cinco décadas, a mesma família escolhe a odontologia
              como forma de devolver saúde, confiança e qualidade de vida.
            </p>

            <div className="mt-9 rounded-2xl bg-petrol-900 p-6 text-cream-50 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500 text-petrol-950">
                  <SealIcon />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gold-300">
                    Responsável técnico
                  </span>
                  <h3 className="mt-2 font-heading text-2xl font-semibold">Dr. Rafael Goulart Ourique</h3>
                  <p className="mt-2 text-sm leading-relaxed text-petrol-100">
                    Cirurgião-dentista, CRO-RS 10523. Atua na Clínica Ourique
                    desde 1996, com dedicação especial à implantodontia,
                    prótese e reabilitação oral.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10">
            <ol className="divide-y divide-petrol-200 border-y border-petrol-200">
              {MILESTONES.map((item) => (
                <li key={item.year} className="scroll-reveal grid gap-3 py-5 sm:grid-cols-[6rem_1fr] sm:items-baseline sm:gap-6">
                  <span className="font-heading text-3xl font-semibold text-gold-700">{item.year}</span>
                  <p className="text-sm leading-relaxed text-petrol-700">{item.label}</p>
                </li>
              ))}
            </ol>

            <div className="scroll-reveal">
              <p className="text-sm font-semibold text-petrol-900">Credenciais e reconhecimento</p>
              <div className="mt-4 divide-y divide-petrol-100 rounded-2xl border border-petrol-100 bg-white">
                {CREDENTIALS.map((item) => (
                  <div key={item.title} className="grid gap-2 p-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                    <div>
                      <span className="text-xs font-semibold text-gold-700">{item.eyebrow}</span>
                      <h3 className="mt-1 font-semibold text-petrol-950">{item.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-petrol-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
