import { Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Radar, Bot } from "lucide-react";

export const solutions = [
  {
    stage: "Organizar",
    name: "Estruturação Comercial",
    title: "ESTRUTURAÇÃO COMERCIAL",
    transformation: "Do improviso a um processo comercial claro, organizado e mensurável.",
    desc: "Organizamos etapas, critérios, responsabilidades, CRM e indicadores para que sua equipe saiba como operar e avançar oportunidades.",
    problem: "Cada vendedor opera do seu jeito e o processo não é registrado.",
    delivery: "Funil, critérios de passagem, CRM configurado e indicadores de operação.",
    cta: "Organizar minha operação",
    to: "/solucoes/estruturacao-comercial",
    icon: Boxes,
    accent: "text-blue",
    border: "hover:border-blue/50",
    chip: "bg-blue/12 text-blue",
  },
  {
    stage: "Gerar",
    name: "Outbound B2B",
    title: "OUTBOUND B2B",
    transformation:
      "Da dependência de indicações a um pipeline com novas conversas comerciais.",
    desc: "Definimos o mercado, encontramos empresas e decisores e executamos uma prospecção humana, estruturada e contextualizada.",
    problem: "O pipeline só se move quando alguém indica ou o cliente chega sozinho.",
    delivery: "Listas de contas e decisores, abordagens contextualizadas e reuniões agendadas.",
    cta: "Gerar novas oportunidades",
    to: "/solucoes/outbound-b2b",
    icon: Radar,
    accent: "text-teal",
    border: "hover:border-teal/50",
    chip: "bg-teal/12 text-teal",
  },
  {
    stage: "Qualificar",
    name: "Agente Comercial de IA",
    title: "AGENTE COMERCIAL DE IA",
    transformation: "Do lead parado à qualificação, follow-up e passagem para o vendedor.",
    desc: "Criamos um agente baseado na sua operação para atender pelo WhatsApp, qualificar, atualizar o CRM, acompanhar e direcionar cada oportunidade.",
    problem: "Leads esperam atendimento e o follow-up depende da agenda do vendedor.",
    delivery: "Agente no WhatsApp, qualificação por critérios, CRM atualizado e passagem com contexto.",
    cta: "Conhecer o Agente de IA",
    to: "/solucoes/agente-comercial-ia",
    icon: Bot,
    accent: "text-green",
    border: "hover:border-green/50",
    chip: "bg-green/12 text-green",
  },
] as const;

export function SolutionCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {solutions.map((s) => (
        <Link
          key={s.name}
          to={s.to}
          className={`group flex flex-col rounded-2xl border border-border bg-surface/70 p-7 transition-all duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 ${s.border}`}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-elevated">
              <s.icon size={19} className={s.accent} />
            </span>
            <span
              className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${s.chip}`}
            >
              {s.stage}
            </span>
          </div>

          <h3 className={`mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] ${s.accent}`}>
            {s.title}
          </h3>
          <p className="mt-2 font-display text-lg font-bold leading-snug">{s.transformation}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

          <dl className="mt-5 grid max-h-0 gap-3 overflow-hidden text-xs opacity-0 transition-all duration-300 group-hover:max-h-56 group-hover:opacity-100 group-focus-visible:max-h-56 group-focus-visible:opacity-100 motion-reduce:transition-none">
            <div>
              <dt className="uppercase tracking-[0.18em] text-muted-foreground">Problema</dt>
              <dd className="mt-1 leading-relaxed">{s.problem}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.18em] text-muted-foreground">
                Principal entrega
              </dt>
              <dd className="mt-1 leading-relaxed">{s.delivery}</dd>
            </div>
          </dl>

          <span
            className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 ${s.accent}`}
          >
            {s.cta} <ArrowRight size={16} />
          </span>
        </Link>
      ))}
    </div>
  );
}
