import type { SVGProps } from "react";

function IconImplant(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} {...props}>
      <path
        d="M12 3c-2.2 0-4 1.4-4 3.4 0 1.3.7 2 .7 3.3 0 .9-.5 1.2-.5 2.3 0 .8.6 1.3.6 2.2 0 1-.6 1.4-.6 2.6C8.2 18.6 9 20 10 20c.8 0 .9-1.1 1-2 .1-.9.3-1.4 1-1.4s.9.5 1 1.4c.1.9.2 2 1 2 1 0 1.8-1.4 1.8-3.2 0-1.2-.6-1.6-.6-2.6 0-.9.6-1.4.6-2.2 0-1.1-.5-1.4-.5-2.3 0-1.3.7-2 .7-3.3C16 4.4 14.2 3 12 3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconProsthesis(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} {...props}>
      <path
        d="M4 8.5C4 6 7.5 4 12 4s8 2 8 4.5c0 1.8-1 2.7-1 4.3 0 1.3.6 1.8.6 3.2 0 1.7-1.2 3-2.6 3-1.6 0-1.7-1.8-2.4-1.8-.8 0-.8 1.8-2.6 1.8s-1.8-1.8-2.6-1.8c-.7 0-.8 1.8-2.4 1.8-1.4 0-2.6-1.3-2.6-3 0-1.4.6-1.9.6-3.2 0-1.6-1-2.5-1-4.3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconVeneer(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} {...props}>
      <path
        d="M12 4c3 0 5.5 1.8 5.5 4.6 0 3.7-2.2 6-2.7 9-.2 1.4-.7 2.4-1.6 2.4-1 0-1-1.4-1.2-2.6-.1-.7-.3-1-1-1s-.9.3-1 1c-.2 1.2-.2 2.6-1.2 2.6-.9 0-1.4-1-1.6-2.4-.5-3-2.7-5.3-2.7-9C4.5 5.8 9 4 12 4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 7.2c.9-.5 1.9-.7 3-.7s2.1.2 3 .7" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function IconOrtho(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} {...props}>
      <path
        d="M4 9c1.5 3 3.5 4.5 8 4.5S18.5 12 20 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="7.6" r="1.3" stroke="currentColor" />
      <circle cx="10" cy="9.8" r="1.3" stroke="currentColor" />
      <circle cx="14" cy="9.8" r="1.3" stroke="currentColor" />
      <circle cx="18" cy="7.6" r="1.3" stroke="currentColor" />
      <path
        d="M8 15.5c1.2 2 2.4 3 4 3s2.8-1 4-3"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconGeneral(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} {...props}>
      <path
        d="M9 3v3.2c0 1-.8 1.3-.8 2.6C8.2 11 10 12 12 12s3.8-1 3.8-3.2c0-1.3-.8-1.6-.8-2.6V3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12c-.6 1.4-1.2 2.6-1.2 4.5 0 2.5 1.8 4.5 4 4.5s4-2 4-4.5c0-1.9-.6-3.1-1.2-4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const FEATURED = {
  icon: IconImplant,
  title: "Implantodontia",
  description:
    "Nossa maior especialidade: reabilitações complexas com implantes dentários, com a experiência de mais de 20 anos do Dr. Rafael Goulart Ourique desde 2002.",
};

const SPECIALTIES = [
  {
    icon: IconProsthesis,
    title: "Prótese Dentária",
    description:
      "Próteses fixas e removíveis planejadas para devolver função e naturalidade ao seu sorriso.",
  },
  {
    icon: IconVeneer,
    title: "Laminado Cerâmico",
    description:
      "Facetas de porcelana de alta estética para harmonizar cor, forma e alinhamento dos dentes.",
  },
  {
    icon: IconOrtho,
    title: "Ortodontia",
    description:
      "Tratamentos ortodônticos para todas as idades conduzidos pela Dra. Bibiana Terra.",
  },
  {
    icon: IconGeneral,
    title: "Odontologia Geral",
    description:
      "Prevenção, restaurações e cuidado contínuo para manter a saúde bucal de toda a família.",
  },
];

export default function Specialties() {
  return (
    <section id="especialidades" className="scroll-mt-20 bg-petrol-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">
            Especialidades
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-petrol-900 sm:text-4xl">
            Cuidado completo, do primeiro dente ao sorriso reabilitado
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-2xl border-2 border-gold-400 bg-gradient-to-br from-petrol-900 to-petrol-800 p-7 shadow-md sm:p-8 lg:col-span-5">
            <span className="inline-flex items-center rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-300">
              Especialidade principal
            </span>
            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500 text-petrol-950">
              <FEATURED.icon className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-heading text-2xl font-semibold text-cream-50">
              {FEATURED.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-petrol-100">
              {FEATURED.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {SPECIALTIES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-petrol-100 bg-cream-50 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-petrol-800 text-cream-50">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-petrol-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-petrol-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
