import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos — Kapptar" },
      { name: "description", content: "Planos de prospecção B2B sob medida para empresas que querem escalar vendas com previsibilidade." },
      { property: "og:title", content: "Planos — Kapptar" },
      { property: "og:description", content: "Escolha o plano ideal de prospecção corporativa para o seu time comercial." },
    ],
  }),
  component: PlanosPage,
});

const plans = [
  {
    name: "Essencial",
    desc: "Ideal para validar o motor de prospecção.",
    items: ["80 empresas trabalhadas / mês", "1 segmento de mercado (ICP)", "Cold Mail + LinkedIn", "Relatório mensal", "Mínimo de 6 agendamentos"],
    highlight: false,
  },
  {
    name: "Performance",
    desc: "Squad completa para acelerar o pipeline.",
    items: ["160 empresas trabalhadas / mês", "Até 2 segmentos (ICP)", "Cold Call 2.0 + Mail + LinkedIn", "Cadências e follow-up automatizados", "Relatório quinzenal", "10–15 agendamentos médios"],
    highlight: true,
  },
  {
    name: "Enterprise",
    desc: "Operação dedicada para grandes contas.",
    items: ["Volume customizado", "Múltiplos ICPs e regiões", "Time dedicado e SLA", "Integração com seu CRM", "Reuniões executivas", "Relatórios sob demanda"],
    highlight: false,
  },
];

function PlanosPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Planos"
        title="Escolha o ritmo do seu crescimento."
        description="Todos os planos incluem definição de ICP, construção de speech consultivo e qualificação completa dos leads."
      />

      <section className="pb-32">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6 max-w-6xl">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-8 rounded-3xl flex flex-col ${
                p.highlight
                  ? "bg-surface border-2 border-teal/40 shadow-glow"
                  : "glass"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground bg-gradient-brand">
                  Mais escolhido
                </div>
              )}
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className="text-muted-foreground mt-2 mb-6">{p.desc}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="text-teal shrink-0 mt-0.5" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contato"
                className={`w-full text-center px-6 py-3 rounded-full font-semibold transition inline-flex items-center justify-center gap-2 ${
                  p.highlight
                    ? "bg-gradient-brand text-primary-foreground shadow-glow hover:opacity-90"
                    : "border border-border hover:bg-white/5"
                }`}
              >
                Falar com vendas <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto px-6">
          Resultados dependem de competitividade, atrativo da oferta, tamanho do mercado
          e construção do pitch — fatores que trabalhamos junto com você sem custo adicional.
        </p>
      </section>
    </SiteLayout>
  );
}
