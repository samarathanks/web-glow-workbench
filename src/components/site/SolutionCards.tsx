import { Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Radar, Bot } from "lucide-react";

export const solutions = [
  {
    stage: "Organizar",
    name: "Estruturação Comercial",
    desc: "Definimos ICP, processo, funil, papéis, critérios, CRM, indicadores e rotina de gestão.",
    cta: "Conhecer a Estruturação Comercial",
    to: "/solucoes/estruturacao-comercial",
    icon: Boxes,
  },
  {
    stage: "Gerar",
    name: "Outbound B2B",
    desc: "Pesquisamos contas, desenvolvemos abordagens, qualificamos decisores e abrimos oportunidades para sua equipe.",
    cta: "Conhecer o Outbound B2B",
    to: "/solucoes/outbound-b2b",
    icon: Radar,
  },
  {
    stage: "Delegar",
    name: "Agente Comercial de IA",
    desc: "Criamos um agente com persona, processo e critérios próprios para qualificar leads, atualizar o CRM, fazer follow-up e acionar sua equipe.",
    cta: "Conhecer o Agente Comercial de IA",
    to: "/solucoes/agente-comercial-ia",
    icon: Bot,
  },
] as const;

export function SolutionCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {solutions.map((s) => (
        <div
          key={s.name}
          className="group flex flex-col rounded-3xl glass p-8 transition-all hover:border-teal/40"
        >
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
              <s.icon size={22} className="text-primary-foreground" />
            </div>
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">
              {s.stage}
            </span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold mt-7">{s.name}</h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
          <Link
            to={s.to}
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-all hover:gap-3"
          >
            {s.cta} <ArrowRight size={16} />
          </Link>
        </div>
      ))}
    </div>
  );
}
