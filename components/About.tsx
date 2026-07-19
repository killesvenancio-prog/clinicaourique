const TIMELINE = [
  {
    year: "1973",
    title: "A fundação de uma tradição",
    description:
      "A família Ourique inicia sua trajetória na odontologia em Santo Antônio da Patrulha, com o compromisso de tratar cada paciente como parte da família.",
  },
  {
    year: "1996",
    title: "Uma nova geração dá continuidade",
    description:
      "A clínica se consolida na Cidade Alta, ampliando o atendimento e mantendo viva a mesma dedicação que marcou seus primeiros anos de história.",
  },
  {
    year: "2002",
    title: "Especialização em implantes",
    description:
      "Dr. Rafael Goulart Ourique, da terceira geração da família, aprofunda-se em reabilitações complexas com implantes dentários, elevando o padrão técnico da clínica.",
  },
  {
    year: "2018",
    title: "O cuidado se completa",
    description:
      "Dra. Bibiana Terra se une à equipe, trazendo a ortodontia para cuidar do sorriso de toda a família, das crianças aos avós.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">
            Nossa história
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-petrol-900 sm:text-4xl">
            Uma família dedicada a cuidar do seu sorriso
          </h2>
          <p className="mt-4 text-base leading-relaxed text-petrol-700 sm:text-lg">
            São mais de cinco décadas de história em Santo Antônio da
            Patrulha. Três gerações da família Ourique escolheram a
            odontologia como forma de cuidar das pessoas &mdash; e essa
            tradição segue viva em cada atendimento.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div
            aria-hidden
            className="absolute left-[15px] top-2 bottom-2 w-px bg-petrol-200 sm:left-1/2 sm:-translate-x-1/2"
          />

          <ol className="space-y-10 sm:space-y-14">
            {TIMELINE.map((item, index) => {
              const isEven = index % 2 === 1;
              const isLatest = index === TIMELINE.length - 1;
              return (
                <li
                  key={item.year}
                  className="relative pl-10 sm:grid sm:grid-cols-2 sm:gap-10 sm:pl-0"
                >
                  <div
                    aria-hidden
                    className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gold-500 sm:left-1/2 sm:-translate-x-1/2 ${
                      isLatest ? "bg-gold-500" : "bg-cream-50"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        isLatest ? "bg-cream-50" : "bg-gold-500"
                      }`}
                    />
                  </div>

                  <div
                    className={
                      isEven
                        ? "sm:col-start-2 sm:pl-10"
                        : "sm:col-start-1 sm:row-start-1 sm:pr-10 sm:text-right"
                    }
                  >
                    <span className="font-heading text-xl font-semibold text-petrol-800 sm:text-2xl">
                      {item.year}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-petrol-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-petrol-600 sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
