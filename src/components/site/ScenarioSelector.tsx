import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Radar, Bot } from "lucide-react";

const scenarios = [
  {
    stage: "Organizar",
    scenario: "Não temos um processo comercial claro.",
    product: "Estruturação Comercial",
    desc: "Organizamos ICP, funil, papéis, CRM, indicadores e rotina de gestão.",
    cta: "Conhecer a Estruturação Comercial",
    to: "/solucoes/estruturacao-comercial",
    icon: Boxes,
  },
  {
    stage: "Gerar",
    scenario: "Temos processo, mas faltam oportunidades no pipeline.",
    product: "Outbound B2B",
    desc: "Pesquisamos contas, abordamos decisores e entregamos oportunidades qualificadas para sua equipe.",
    cta: "Conhecer o Outbound B2B",
    to: "/solucoes/outbound-b2b",
    icon: Radar,
  },
  {
    stage: "Delegar",
    scenario: "Recebemos leads, mas perdemos tempo na qualificação e no follow-up.",
    product: "Agente Comercial de IA",
    desc: "Implantamos um agente personalizado para qualificar, atualizar o CRM, acompanhar o lead e acionar o vendedor.",
    cta: "Conhecer o Agente Comercial de IA",
    to: "/solucoes/agente-comercial-ia",
    icon: Bot,
  },
] as const;

export function ScenarioSelector() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* trilha de evolução */}
      <div className="hidden lg:flex items-center justify-between mb-6 px-10">
        {scenarios.map((s, i) => (
          <div key={s.stage} className="flex items-center gap-4 flex-1 last:flex-none">
            <button
              type="button"
              onClick={() => setActive(i)}
              className={`text-xs uppercase tracking-[0.22em] font-semibold transition-colors ${
                i === active ? "text-teal" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.stage}
            </button>
            {i < scenarios.length - 1 && (
              <span
                className={`h-px flex-1 transition-colors ${
                  i < active ? "bg-teal/60" : "bg-border"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* seletor horizontal no mobile */}
      <div className="lg:hidden -mx-6 mb-6 overflow-x-auto px-6">
        <div className="flex gap-2 min-w-max" role="tablist" aria-label="Cenários">
          {scenarios.map((s, i) => (
            <button
              key={s.stage}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] font-semibold transition ${
                i === active
                  ? "bg-gradient-brand text-primary-foreground"
                  : "glass text-muted-foreground"
              }`}
            >
              {s.stage}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {scenarios.map((s, i) => {
          const isActive = i === active;
          return (
            <div
              key={s.product}
              role="button"
              tabIndex={0}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(i);
                }
              }}
              aria-pressed={isActive}
              className={`flex cursor-pointer flex-col text-left rounded-3xl p-7 transition-all duration-300 ${
                isActive
                  ? "glass border-teal/50 shadow-elevated lg:-translate-y-1"
                  : "glass hover:border-teal/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all ${
                    isActive ? "bg-gradient-brand shadow-glow" : "bg-surface-elevated"
                  }`}
                >
                  <s.icon
                    size={20}
                    className={isActive ? "text-primary-foreground" : "text-muted-foreground"}
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-teal font-semibold">
                  {s.stage}
                </span>
              </div>

              <p className="mt-6 font-display text-lg font-bold leading-snug">{s.scenario}</p>

              <div className="mt-5 pt-5 border-t border-border">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Produto indicado
                </div>
                <div
                  className={`font-display text-base font-semibold mt-1 ${
                    isActive ? "text-gradient" : "text-foreground"
                  }`}
                >
                  {s.product}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>

              <Link
                to={s.to}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-all hover:gap-3"
              >
                {s.cta} <ArrowRight size={16} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
