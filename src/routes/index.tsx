import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { ScenarioSelector } from "@/components/site/ScenarioSelector";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { JourneyLine } from "@/components/site/JourneyLine";
import { Reveal } from "@/components/site/Reveal";
import { Faq } from "@/components/site/Faq";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PrimaryCTA, SecondaryCTA } from "@/components/site/CTAButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kapptar — Sales Tech: processo, prospecção e IA comercial" },
      {
        name: "description",
        content:
          "Estruturação comercial, outbound B2B e agente comercial de IA para operações que precisam organizar o processo, gerar oportunidades ou delegar a qualificação.",
      },
      { property: "og:title", content: "Kapptar — Sales Tech de inteligência comercial aplicada" },
      {
        property: "og:description",
        content:
          "Processo, prospecção e IA para operações comerciais que precisam avançar. Solicite um diagnóstico gratuito.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const etapas = [
  {
    title: "Diagnóstico",
    desc: "Entendemos o cenário, o objetivo e o estágio da operação.",
  },
  {
    title: "Escopo",
    desc: "Definimos solução, responsabilidades, limites e entregas.",
  },
  {
    title: "Implantação",
    desc: "Configuramos o processo e colocamos a operação para funcionar.",
  },
  {
    title: "Acompanhamento",
    desc: "Analisamos a execução e direcionamos os ajustes necessários.",
  },
];

const diferenciais = [
  {
    title: "Diagnóstico antes da solução",
    desc: "Não indicamos o mesmo produto para todas as empresas. Primeiro entendemos onde a operação perde capacidade.",
  },
  {
    title: "Execução aplicada",
    desc: "Não entregamos apenas recomendações. Estruturamos, prospectamos ou implantamos conforme o escopo contratado.",
  },
  {
    title: "Tecnologia sem perder o humano",
    desc: "A tecnologia assume processos e rotinas. Pessoas permanecem responsáveis por relacionamento, negociação e decisão.",
  },
];

const faq = [
  {
    q: "Qual solução é indicada para minha empresa?",
    a: "Depende do estágio da operação. O diagnóstico identifica se o primeiro passo é organizar o processo, gerar oportunidades ou delegar a qualificação.",
  },
  {
    q: "Preciso contratar as três soluções?",
    a: "Não. Cada solução pode ser contratada separadamente e, quando fizer sentido, elas se complementam ao longo da evolução da operação.",
  },
  {
    q: "A Kapptar substitui minha equipe comercial?",
    a: "Não. Estruturamos, prospectamos ou qualificamos conforme o escopo. Apresentação, negociação e fechamento permanecem com a sua equipe.",
  },
  {
    q: "Como começamos?",
    a: "Com um diagnóstico gratuito para entender o cenário, o objetivo e qual solução é mais aderente ao momento da empresa.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* 1. HERO */}
      <section className="relative overflow-hidden pt-14 pb-14 md:pt-20 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-6 max-w-4xl text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[11px] uppercase tracking-[0.24em] text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-teal" /> Kapptar | Sales Tech
          </div>

          <h1 className="font-display text-3xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] tracking-tight text-balance">
            Processo, prospecção e IA para operações comerciais que{" "}
            <span className="text-gradient">precisam avançar</span>.
          </h1>

          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A Kapptar estrutura operações comerciais, gera oportunidades B2B e implanta agentes de IA
            para qualificação, follow-up e organização do CRM.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA />
            <SecondaryCTA to="/" hash="solucoes">
              Encontre a solução ideal
            </SecondaryCTA>
          </div>
        </div>
      </section>

      {/* 2. SELETOR DE CENÁRIO E SOLUÇÃO */}
      <Section
        id="solucoes"
        eyebrow="Organizar → Gerar → Delegar"
        align="center"
        title="O que impede sua operação comercial de avançar?"
        description="Selecione o cenário que mais se aproxima da sua empresa."
        className="bg-surface/40"
      >
        <Reveal>
          <ScenarioSelector />
        </Reveal>
      </Section>

      {/* 3. AUTORIDADE */}
      <Section
        id="autoridade"
        eyebrow="Autoridade"
        align="center"
        title="Autoridade construída na prática."
        description="A experiência da Kapptar foi construída em diferentes operações, mercados e desafios comerciais B2B."
      >
        <Reveal>
          <h3 className="text-center text-xs uppercase tracking-[0.22em] text-teal font-semibold mb-8">
            Marcas que fazem parte da nossa trajetória.
          </h3>
          <BrandMarquee />
        </Reveal>
      </Section>

      {/* 4. DA NECESSIDADE À OPERAÇÃO */}
      <Section
        id="como-funciona"
        eyebrow="Contratação"
        align="center"
        title="Da necessidade à operação."
        description="Cada projeto começa com um diagnóstico e avança com escopo, responsabilidades e entregas claramente definidos."
        className="bg-surface/40"
      >
        <Reveal>
          <JourneyLine steps={etapas} />
        </Reveal>
      </Section>

      {/* 5. DIFERENCIAIS */}
      <Section
        id="diferenciais"
        eyebrow="Diferenciais"
        align="center"
        title="Inteligência comercial com função e responsabilidade."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {diferenciais.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <div className="h-full rounded-3xl glass p-7 transition duration-300 hover:border-teal/40 hover:-translate-y-1">
                <h3 className="font-display text-lg font-bold leading-snug">{d.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6. FAQ */}
      <Section
        id="faq"
        eyebrow="Perguntas frequentes"
        align="center"
        title="Dúvidas comuns"
        narrow
        className="bg-surface/40"
      >
        <Faq items={faq} />
      </Section>

      {/* 7. CTA FINAL */}
      <FinalCTA description="Conte onde sua empresa está hoje. A Kapptar identifica a solução mais adequada para organizar, gerar ou delegar." />
    </SiteLayout>
  );
}
