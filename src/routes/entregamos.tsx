import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/entregamos")({
  head: () => ({
    meta: [
      { title: "O que Entregamos — Kapptar" },
      { name: "description", content: "Mapeamento de leads qualificados, agendamento de reuniões B2B e qualificação completa de decisores engajados." },
      { property: "og:title", content: "O que Entregamos — Kapptar" },
      { property: "og:description", content: "Leads qualificados, reuniões agendadas e relatórios completos a cada ciclo." },
    ],
  }),
  component: EntregamosPage,
});

const deliverables = [
  "Mapeamento completo do ICP (Ideal Customer Profile)",
  "Construção de speech consultivo e personalizado",
  "Cold Calling 2.0, Cold Mail e LinkedIn integrados",
  "Reuniões agendadas com decisores qualificados",
  "Relatório com todos os contatos e qualificações",
  "Cadência de follow-up e nutrição de oportunidades",
];

const profiles = [
  { letter: "a", title: "Tranquilo", desc: "Sem interesse de avançar para uma visita no momento." },
  { letter: "b", title: "Pesquisador", desc: "Tem fornecedor atual e aceita conversar para comparar." },
  { letter: "c", title: "Incomodado", desc: "Relata uma dor e aceita conversar para ver como podemos ajudar." },
  { letter: "d", title: "Potencial Comprador", desc: "Está no momento ideal de compra e aceita negociar agora." },
];

function EntregamosPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Entregas"
        title="Leads qualificados. Reuniões reais. Resultado mensurável."
        description="Cada ciclo entrega muito mais que agendamentos — você recebe inteligência completa sobre o seu mercado."
      />

      <section className="pb-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {deliverables.map((d) => (
              <div key={d} className="flex items-start gap-4 p-5 rounded-2xl glass">
                <CheckCircle2 className="text-teal shrink-0 mt-0.5" size={22} />
                <span className="text-foreground">{d}</span>
              </div>
            ))}
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-surface border border-border">
            <h3 className="font-display text-2xl font-bold mb-3">Média por ciclo</h3>
            <p className="text-muted-foreground mb-8">
              Considerando um lote de 80 empresas trabalhadas em 30 dias:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-background border border-border">
                <div className="font-display text-4xl font-bold text-teal">10–15</div>
                <div className="text-sm text-muted-foreground mt-1">agendamentos médios</div>
              </div>
              <div className="p-5 rounded-xl bg-background border border-border">
                <div className="font-display text-4xl font-bold text-teal">6+</div>
                <div className="text-sm text-muted-foreground mt-1">mínimo garantido</div>
              </div>
            </div>
            <Link
              to="/planos"
              className="mt-8 inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all"
            >
              Ver planos disponíveis <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface/40">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-4">
              Qualificação
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-balance">
              Cada lead qualificado em <span className="text-gradient">4 perfis</span> claros.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {profiles.map((p) => (
              <div key={p.letter} className="p-6 rounded-2xl glass">
                <div className="font-display text-5xl font-bold text-gradient mb-3">[{p.letter}]</div>
                <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
