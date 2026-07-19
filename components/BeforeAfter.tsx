import CompareSlider from "@/components/CompareSlider";
import beforeImplantodontia from "@/public/before-implantodontia.jpg";
import afterImplantodontia from "@/public/after-implantodontia.jpg";
import beforeLaminado from "@/public/before-laminado.jpg";
import afterLaminado from "@/public/after-laminado.jpg";

const CASES = [
  {
    before: beforeImplantodontia,
    after: afterImplantodontia,
    title: "Reabilitação com implantes dentários",
    description:
      "Reconstrução total da arcada com implantes e prótese fixa, devolvendo função e estética.",
  },
  {
    before: beforeLaminado,
    after: afterLaminado,
    title: "Harmonização do sorriso com laminado cerâmico",
    description:
      "Facetas de porcelana para uniformizar cor e forma dos dentes anteriores.",
  },
];

export default function BeforeAfter() {
  return (
    <section id="resultados" className="scroll-mt-20 bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-gold-700">Resultados reais</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-petrol-900 sm:text-4xl">
            Transformações reais, tratadas com cuidado
          </h2>
          <p className="mt-4 text-base leading-relaxed text-petrol-700">
            Casos reais de pacientes atendidos na Clínica Ourique. Arraste o
            controle para comparar o antes e o depois.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CASES.map((item) => (
            <figure
              key={item.title}
              className="overflow-hidden rounded-2xl border border-petrol-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <CompareSlider
                before={item.before}
                after={item.after}
                beforeAlt={`${item.title} — antes do tratamento`}
                afterAlt={`${item.title} — depois do tratamento`}
              />
              <figcaption className="border-t border-petrol-100 px-5 py-4">
                <span className="text-sm font-semibold text-petrol-900">
                  {item.title}
                </span>
                <p className="mt-1 text-xs leading-relaxed text-petrol-500">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
