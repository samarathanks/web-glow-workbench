import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — Kapptar" },
      { name: "description", content: "Empresas e segmentos que confiam na prospecção B2B da Kapptar." },
      { property: "og:title", content: "Portfólio — Kapptar" },
      { property: "og:description", content: "Mais de 80 empresas atendidas em 8 segmentos de mercado." },
    ],
  }),
  component: PortfolioPage,
});

const segments = [
  "Tecnologia & SaaS", "Serviços Financeiros", "Logística", "Indústria",
  "Saúde", "Educação", "Consultoria", "Energia",
];

const clients = ["Correios", "Cliente 02", "Cliente 03", "Cliente 04", "Cliente 05", "Cliente 06", "Cliente 07", "Cliente 08", "Cliente 09", "Cliente 10", "Cliente 11", "Cliente 12"];

function PortfolioPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfólio"
        title="80+ empresas. 8 segmentos. 1.000+ reuniões."
        description="Operações ativas em diferentes mercados — sempre com a mesma metodologia testada e refinada."
      />

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-6 text-center">
            Segmentos atendidos
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {segments.map((s) => (
              <span
                key={s}
                className="px-5 py-2 rounded-full glass text-sm hover:border-teal/40 transition"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8 text-center">
            Confiam no nosso método
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {clients.map((c) => (
              <div
                key={c}
                className="aspect-[3/2] rounded-2xl glass flex items-center justify-center text-muted-foreground font-display font-semibold hover:text-foreground transition"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface/40">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 max-w-5xl">
          <div className="text-center">
            <div className="font-display text-6xl font-bold text-gradient">1.000+</div>
            <div className="text-sm text-muted-foreground mt-3">Reuniões agendadas</div>
          </div>
          <div className="text-center">
            <div className="font-display text-6xl font-bold text-gradient">80+</div>
            <div className="text-sm text-muted-foreground mt-3">Empresas atendidas</div>
          </div>
          <div className="text-center">
            <div className="font-display text-6xl font-bold text-gradient">8</div>
            <div className="text-sm text-muted-foreground mt-3">Segmentos de mercado</div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
