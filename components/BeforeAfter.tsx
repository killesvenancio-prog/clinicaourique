import Image from "next/image";
import caseImplantodontia from "@/public/case-implantodontia.jpg";
import caseLaminado from "@/public/case-laminado.jpg";

const CASES = [
  {
    image: caseImplantodontia,
    title: "Reabilitação com implantes dentários",
    description:
      "Reconstrução total da arcada com implantes e prótese fixa, devolvendo função e estética.",
  },
  {
    image: caseLaminado,
    title: "Harmonização do sorriso com laminado cerâmico",
    description:
      "Facetas de porcelana para uniformizar cor e forma dos dentes anteriores.",
  },
];

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
            Casos reais de pacientes atendidos na Clínica Ourique.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CASES.map((item) => (
            <figure
              key={item.title}
              className="overflow-hidden rounded-2xl border border-petrol-100 bg-white shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="h-auto w-full"
                sizes="(min-width: 640px) 50vw, 100vw"
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
