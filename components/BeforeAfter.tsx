const CASES = [
  { label: "Implante dentário" },
  { label: "Prótese dentária" },
  { label: "Laminado cerâmico" },
];

function ImagePlaceholder({ tag }: { tag: string }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-petrol-100 bg-cream-50">
      <div className="grid grid-cols-2 divide-x divide-dashed divide-petrol-200">
        {["Antes", "Depois"].map((phase) => (
          <div
            key={phase}
            className="flex aspect-square flex-col items-center justify-center gap-2 bg-petrol-50/70 p-4"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-8 w-8 text-petrol-300"
              fill="none"
              strokeWidth={1.5}
            >
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" />
              <circle cx="8.5" cy="9" r="1.5" stroke="currentColor" />
              <path d="M4 17l5-5 4 4 3-3 4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-medium uppercase tracking-wide text-petrol-400">
              {phase}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-petrol-100 px-4 py-3 text-center">
        <span className="text-sm font-semibold text-petrol-800">{tag}</span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
            Resultados
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-petrol-900 sm:text-4xl">
            Transformações reais, tratadas com cuidado
          </h2>
          <p className="mt-4 text-base leading-relaxed text-petrol-700">
            Em breve, esta seção trará fotos reais de casos tratados na
            clínica, sempre com a autorização dos pacientes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {CASES.map((item) => (
            <ImagePlaceholder key={item.label} tag={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
