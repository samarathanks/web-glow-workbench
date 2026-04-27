import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/dna")({
  head: () => ({
    meta: [
      { title: "Nosso DNA — Kapptar" },
      { name: "description", content: "Vendas exige muitas ações. Nossa missão é conectar empreendedores e executivos a novas oportunidades." },
      { property: "og:title", content: "Nosso DNA — Kapptar" },
      { property: "og:description", content: "A missão e a filosofia que guiam o time Kapptar." },
    ],
  }),
  component: DnaPage,
});

function DnaPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Nosso DNA" title="A nossa missão é conectar." />

      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-3xl space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p className="text-2xl text-foreground font-display font-medium">
            "Vendas exige muitas ações.
          </p>
          <p>
            Entendê-la como o resultado de um processo, com métricas, cadências, passos,
            estágios e fases, é definitivamente compreender <strong className="text-foreground">sobre vendas</strong>.
          </p>
          <p>A prospecção abre a jornada, o caminho, o ciclo.</p>
          <p className="text-2xl text-foreground font-display font-medium">
            A nossa missão é <span className="text-gradient">conectar</span>.
          </p>
          <p>
            Não se trata apenas de negócios fechados. Tem a ver com sonhos de
            empreendedores e executivos que só esperam por uma única oportunidade de
            mostrarem o quanto são capazes.
          </p>
          <p className="text-foreground font-medium">
            E nós faremos de tudo para isso acontecer."
          </p>
          <p className="text-sm">— Time Kapptar</p>
        </div>
      </section>
    </SiteLayout>
  );
}
