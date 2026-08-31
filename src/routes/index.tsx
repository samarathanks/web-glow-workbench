import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { SolutionCards } from "@/components/site/SolutionCards";
import { HeroPipeline } from "@/components/site/HeroPipeline";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { JourneyLine } from "@/components/site/JourneyLine";
import { Reveal } from "@/components/site/Reveal";
import { Faq } from "@/components/site/Faq";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SecondaryCTA } from "@/components/site/CTAButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kapptar — Sales Tech: processo, prospecção e IA comercial" },
      {
        name: "description",
        content:
          "Estruturação comercial, outbound B2B e agente comercial de IA para operações que precisam organizar o processo, gerar oportunidades e qualificar leads.",
      },
      { property: "og:title", content: "Kapptar — Sales Tech de inteligência comercial aplicada" },
      {
        property: "og:description",
        content:
          "Transformamos operações comerciais em processos que geram e avançam oportunidades.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const transformacoes = [
  {
    from: "Improviso e conhecimento disperso",
    to: "Processo claro, registrado e replicável",
    accent: "text-blue",
    bar: "from-blue/70 to-blue/10",
  },
  {
    from: "Pipeline dependente de indicação",
    to: "Prospecção ativa e novas conversas B2B",
    accent: "text-teal",
    bar: "from-teal/70 to-teal/10",
  },
  {
    from: "Leads esperando atendimento",
    to: "Qualificação, follow-up e passagem com contexto",
    accent: "text-green",
    bar: "from-green/70 to-green/10",
  },
];

const etapas = [
  {
    title: "Diagnóstico",
    desc: "Identificamos o que impede a operação de avançar.",
  },
  {
    title: "Desenho",
    desc: "Definimos processo, escopo, responsabilidades e critérios.",
  },
  {
    title: "Implantação",
    desc: "Colocamos a solução em funcionamento dentro da realidade da empresa.",
  },
  {
    title: "Acompanhamento",
    desc: "Analisamos a operação e realizamos os ajustes previstos no escopo.",
  },
];

const diferenciais = [
  {
    title: "Tecnologia com contexto",
    desc: "A tecnologia é configurada a partir da realidade comercial da empresa, não aplicada como uma solução genérica.",
  },
  {
    title: "Processo antes da automação",
    desc: "Automatizamos o que já possui lógica, critérios e responsabilidade definidos.",
  },
  {
    title: "Especialização comercial",
    desc: "Cada entrega está conectada ao processo de geração, qualificação e avanço de oportunidades.",
  },
];

const faq = [
  {
    q: "Qual solução é indicada para minha empresa?",
    a: "Depende do estágio da operação. O diagnóstico identifica se o primeiro passo é organizar o processo, gerar novas conversas comerciais ou qualificar e acompanhar os leads que já chegam.",
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
    a: "Com um diagnóstico para entender o cenário comercial, o objetivo e qual solução é mais aderente ao momento da empresa.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* 1. HERO */}
      <section className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-50" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.10]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse at 30% 0%, black, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-6 max-w-6xl relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-green" /> Kapptar | Sales Tech
              </div>

              <h1 className="mt-6 font-display text-3xl md:text-5xl font-bold leading-[1.08] tracking-tight text-balance">
                Transformamos operações comerciais em processos que{" "}
                <span className="text-gradient">geram e avançam oportunidades</span>.
              </h1>

              <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
                Estruturamos seu comercial, abrimos novas conversas B2B e implantamos IA para
                qualificar, acompanhar e preparar cada lead para a venda.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <SecondaryCTA
                  to="/"
                  hash="solucoes"
                  className="!bg-gradient-cta !border-transparent !text-primary-foreground shadow-glow-green"
                >
                  Encontrar a solução ideal <ArrowRight size={17} />
                </SecondaryCTA>
                <SecondaryCTA to="/" hash="solucoes">
                  Conhecer as soluções
                </SecondaryCTA>
              </div>
            </div>

            <Reveal delay={120}>
              <HeroPipeline />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. PORTFÓLIO — única aparição das três soluções */}
      <Section
        id="solucoes"
        eyebrow="Soluções"
        title="Sua operação precisa avançar em qual ponto?"
        description="Identifique o que limita seu comercial hoje e conheça a solução mais adequada para o próximo estágio."
        className="bg-surface/35"
      >
        <Reveal>
          <SolutionCards />
        </Reveal>
      </Section>

      {/* 3. TRANSFORMAÇÃO */}
      <Section id="transformacao" eyebrow="Transformação" title="O que muda na prática">
        <div className="grid gap-5 lg:grid-cols-3">
          {transformacoes.map((t, i) => (
            <Reveal key={t.from} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-surface/70 p-7 transition-colors duration-300 hover:border-teal/40">
                <span
                  aria-hidden
                  className={`block h-px w-full bg-gradient-to-r ${t.bar}`}
                />
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground line-through decoration-muted-foreground/40">
                  {t.from}
                </p>
                <div className={`mt-4 flex items-start gap-2 ${t.accent}`}>
                  <ArrowRight size={16} className="mt-1 shrink-0" />
                  <p className="font-display text-base font-bold leading-snug text-foreground">
                    {t.to}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. COMO A KAPPTAR ENTREGA */}
      <Section
        id="como-funciona"
        eyebrow="Como entregamos"
        title="Da necessidade à operação"
        description="Entendemos o cenário, desenhamos a solução e acompanhamos sua aplicação no dia a dia comercial."
        className="bg-surface/35"
      >
        <Reveal>
          <JourneyLine steps={etapas} />
        </Reveal>
      </Section>

      {/* 5. AUTORIDADE */}
      <Section
        id="autoridade"
        eyebrow="Autoridade"
        align="center"
        title="Experiência construída dentro de operações comerciais reais."
        description="Empresas de diferentes mercados já confiaram na Kapptar para estruturar processos, gerar oportunidades e fortalecer suas operações comerciais."
      >
        <Reveal>
          <BrandMarquee />
        </Reveal>
      </Section>

      {/* 6. DIFERENCIAIS */}
      <Section
        id="diferenciais"
        eyebrow="Diferenciais"
        title="Inteligência comercial aplicada, não genérica."
        className="bg-surface/35"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {diferenciais.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-surface/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-green/40">
                <h3 className="font-display text-lg font-bold leading-snug">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. FAQ */}
      <Section id="faq" eyebrow="Perguntas frequentes" title="Dúvidas comuns" narrow>
        <Faq items={faq} />
      </Section>

      {/* 8. CHAMADA FINAL */}
      <FinalCTA />
    </SiteLayout>
  );
}
