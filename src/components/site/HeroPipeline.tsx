import { Link } from "@tanstack/react-router";
import { Boxes, Radar, Bot } from "lucide-react";

const moves = [
  {
    move: "Organizar",
    product: "Estruturação Comercial",
    hint: "Processo, critérios e CRM",
    to: "/solucoes/estruturacao-comercial",
    icon: Boxes,
    dot: "bg-blue",
    ring: "border-blue/45 hover:border-blue",
    text: "text-blue",
  },
  {
    move: "Gerar",
    product: "Outbound B2B",
    hint: "Novas conversas B2B",
    to: "/solucoes/outbound-b2b",
    icon: Radar,
    dot: "bg-teal",
    ring: "border-teal/45 hover:border-teal",
    text: "text-teal",
  },
  {
    move: "Qualificar",
    product: "Agente Comercial de IA",
    hint: "Qualificação e follow-up",
    to: "/solucoes/agente-comercial-ia",
    icon: Bot,
    dot: "bg-green",
    ring: "border-green/45 hover:border-green",
    text: "text-green",
  },
] as const;

/**
 * Composição visual do hero: os três movimentos da operação comercial
 * conectados por uma linha azul → teal → verde.
 */
export function HeroPipeline() {
  return (
    <div className="relative rounded-3xl border border-border bg-surface/60 p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
        <span>Operação comercial</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green" /> pipeline em avanço
        </span>
      </div>

      <ol className="relative space-y-3">
        <span
          aria-hidden
          className="pointer-events-none absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-blue/70 via-teal/60 to-green/70"
        />
        {moves.map((m, i) => (
          <li key={m.move}>
            <Link
              to={m.to}
              className={`group relative flex items-center gap-4 rounded-2xl border bg-background/70 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 ${m.ring}`}
            >
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-elevated">
                <m.icon size={19} className={m.text} />
              </span>
              <span className="min-w-0">
                <span
                  className={`block text-[10px] font-semibold uppercase tracking-[0.24em] ${m.text}`}
                >
                  {m.move}
                </span>
                <span className="block truncate font-display text-sm font-bold">{m.product}</span>
                <span className="block truncate text-xs text-muted-foreground">{m.hint}</span>
              </span>
              <span
                aria-hidden
                className={`ml-auto h-2 w-2 shrink-0 rounded-full ${m.dot} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                style={{ animation: `pipeline-pulse 2.8s ease-in-out ${i * 0.7}s infinite` }}
              />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
