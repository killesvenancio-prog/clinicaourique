import { WHATSAPP_LINK } from "@/lib/constants";

const FAQS = [
  {
    question: "Como funciona a primeira avaliação?",
    answer:
      "A primeira conversa serve para entender o que está incomodando, conhecer seu histórico e avaliar as possibilidades de tratamento. Depois do exame clínico, a equipe explica os próximos passos de forma individualizada.",
  },
  {
    question: "Tenho medo de dentista. A clínica está acostumada com isso?",
    answer:
      "Sim. Ansiedade e medo são mais comuns do que parecem. O atendimento é conduzido com escuta, explicações claras e respeito ao tempo de cada paciente. Conte isso à equipe já no primeiro contato.",
  },
  {
    question: "Implante dentário é indicado para qualquer pessoa?",
    answer:
      "A indicação depende da saúde geral, das condições da boca, da quantidade de osso e dos objetivos do paciente. Somente uma avaliação clínica e os exames adequados permitem definir a melhor alternativa.",
  },
  {
    question: "Quanto tempo leva um tratamento com implantes?",
    answer:
      "O prazo varia conforme a complexidade, a necessidade de enxerto, a cicatrização e o tipo de prótese. Após a avaliação, o profissional apresenta uma estimativa e explica as etapas do planejamento.",
  },
  {
    question: "A clínica atende outras necessidades além de implantes?",
    answer:
      "Sim. A Clínica Ourique também atua com prótese dentária, laminado cerâmico, ortodontia, endodontia, periodontia, cirurgia e odontologia geral para diferentes fases da vida.",
  },
  {
    question: "Como posso agendar ou tirar uma dúvida?",
    answer:
      "O contato mais direto é pelo WhatsApp. Você pode contar brevemente o que precisa e a equipe orientará sobre horários e sobre o que levar na primeira consulta.",
  },
];

export default function FAQ() {
  return (
    <section id="duvidas" className="scroll-mt-20 bg-petrol-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div className="scroll-reveal">
          <h2 className="text-balance font-heading text-4xl font-semibold leading-tight text-petrol-950 sm:text-5xl">
            Informação clara também faz parte do cuidado.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-petrol-700">
            Cada caso é único, mas estas respostas ajudam você a chegar mais
            tranquilo à primeira conversa.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full border border-petrol-300 px-6 py-3 text-sm font-semibold text-petrol-900 transition-[background-color,border-color,transform] duration-150 ease-out hover:border-gold-600 hover:bg-cream-50 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 motion-reduce:active:scale-100"
          >
            Fazer outra pergunta
          </a>
        </div>

        <div className="scroll-reveal divide-y divide-petrol-100 overflow-hidden rounded-2xl border border-petrol-100 bg-cream-50">
          {FAQS.map((item) => (
            <details key={item.question} className="group px-5 py-1 sm:px-7">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-4 text-left font-semibold text-petrol-950 marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold-500">
                {item.question}
                <span aria-hidden className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-petrol-100 text-xl font-normal text-petrol-900 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-5 pr-10 text-sm leading-relaxed text-petrol-600 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
