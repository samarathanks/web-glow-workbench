import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { SolutionCards } from "@/components/site/SolutionCards";
import { Comparison } from "@/components/site/Comparison";
import { Faq } from "@/components/site/Faq";
import { Steps, Highlight } from "@/components/site/Steps";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PrimaryCTA, SecondaryCTA } from "@/components/site/CTAButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kapptar — Sales Tech de inteligência comercial aplicada" },
      {
        name: "description",
        content:
          "Organizar o processo, gerar oportunidades e delegar a qualificação: estruturação comercial, outbound B2B e agente comercial de IA.",
      },
      { property: "og:title", content: "Kapptar — Inteligência comercial aplicada" },
      {
        property: "og:description",
        content:
          "O próximo passo da sua operação comercial começa aqui. Solicite um diagnóstico gratuito.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const provocacoes = [
  { title: "Seu faturamento depende de indicação.", desc: "E quando a indicação seca, o mês seca junto." },
  { title: "Você investiu mais em publicidade.", desc: "E o lead entrou, esfriou e morreu no CRM." },
  { title: "Você contratou mais vendedor.", desc: "E o faturamento não subiu junto." },
  { title: "Você trocou de CRM.", desc: "E o time continua vendendo do jeito que dá." },
];

const comparativo = [
  {
    area: "Processo",
    today: "Conhecimento disperso e execução sem padrão.",
    kapptar: "Etapas, papéis, critérios e rotina definidos.",
  },
  {
    area: "Geração de oportunidades",
    today: "Dependência de indicação, demanda espontânea ou ações isoladas.",
    kapptar: "Prospecção orientada por ICP e contexto.",
  },
  {
    area: "Qualificação",
    today: "Tempo da equipe consumido por contatos sem aderência.",
    kapptar: "Leads qualificados antes da atuação do vendedor.",
  },
  {
    area: "Dados",
    today: "CRM incompleto e decisões por percepção.",
    kapptar: "Informações registradas e operação analisável.",
  },
  {
    area: "Equipe",
    today: "Pessoas presas à rotina e ao retrabalho.",
    kapptar: "Mais foco em relacionamento, proposta e fechamento.",
  },
];

const metodo = [
  {
    label: "Entender",
    title: "Ler a operação",
    desc: "Cenário, processo, equipe, dados e pontos de perda.",
  },
  {
    label: "Desenhar",
    title: "Definir o próximo passo",
    desc: "Função, fluxos, critérios, responsabilidades e entregas.",
  },
  {
    label: "Executar e evoluir",
    title: "Colocar para funcionar",
    desc: "Implantação acompanhada, dados analisados e ajustes contínuos.",
  },
];

const marcas = [
  "TOTVS", "Onfly", "Pluxee", "Ibyte", "Accesstage", "SPX Bank", "Swile", "Systêxtil",
  "Gooroo Crédito", "Bullla", "Evol Soluções", "Certacon", "AG Capital", "Creditas", "Neon", "ITAG",
];

const faq = [
  {
    q: "Qual solução é indicada para a minha empresa?",
    a: "Depende do estágio da operação. O diagnóstico identifica se o primeiro desafio é organizar o processo, gerar oportunidades ou delegar a qualificação.",
  },
  {
    q: "Preciso contratar as três soluções?",
    a: "Não. Cada produto pode ser contratado separadamente. Quando fizer sentido, eles podem formar uma jornada evolutiva.",
  },
  {
    q: "As soluções substituem minha equipe comercial?",
    a: "Não. A Kapptar organiza, prospecta ou qualifica conforme o escopo. Apresentação, negociação e fechamento permanecem com a equipe responsável pela venda.",
  },
  {
    q: "Minha empresa precisa ter CRM?",
    a: "O CRM é importante para dar continuidade, contexto e qualidade aos dados. A necessidade de implantação ou ajuste será avaliada no diagnóstico.",
  },
  {
    q: "Como começamos?",
    a: "Com um diagnóstico gratuito para entender o cenário, o objetivo e o produto mais aderente ao momento da empresa.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
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

          <h1 className="font-display text-3xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight text-balance">
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

      {/* DIAGNÓSTICO + SOLUÇÕES */}
      <Section
        id="solucoes"
        eyebrow="Diagnóstico"
        align="center"
        title="O que impede sua operação comercial de avançar?"
        description="Selecione o cenário que mais se aproxima da sua empresa."
        className="bg-surface/40"
      >
        <ScenarioSelector />
      </Section>


      {/* TRAJETÓRIA */}
      <Section
        id="trajetoria"
        eyebrow="Trajetória"
        align="center"
        title="Marcas que fazem parte da nossa trajetória."
        description="Experiências construídas em diferentes projetos, soluções e momentos da história da Kapptar."
      >
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px overflow-hidden rounded-3xl border border-border bg-border">
          {marcas.map((m) => (
            <li
              key={m}
              className="flex items-center justify-center bg-background px-4 py-8 text-center text-sm md:text-base font-display font-semibold text-muted-foreground"
            >
              {m}
            </li>
          ))}
        </ul>
      </Section>

      {/* CASES */}
      <Section
        id="cases"
        eyebrow="Cases"
        align="center"
        title="Quem trocou o improviso por previsibilidade."
        description="Operações comerciais reais, estruturadas com o método Kapptar."
      >
        <p className="text-center text-sm text-muted-foreground">
          Processo, prospecção e inteligência aplicados a operações B2B.
        </p>
      </Section>

      {/* COMPARATIVO */}
      <Section
        id="comparativo"
        eyebrow="Comparativo"
        align="center"
        title="Da improvisação a uma operação que sabe como avançar."
        className="bg-surface/40"
      >
        <Comparison rows={comparativo} />
      </Section>

      {/* MÉTODO */}
      <Section
        id="metodo"
        eyebrow="Método"
        align="center"
        title="Método e DNA Kapptar"
        description="A solução começa pelo contexto da empresa — não pela ferramenta."
      >
        <Steps steps={metodo} />
        <div className="mt-10">
          <Highlight>
            Método para organizar. Experiência para executar. Inteligência para evoluir.
          </Highlight>
          <p className="mt-6 text-center text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Entendemos antes de propor, simplificamos para executar, usamos dados para direcionar e
            aplicamos tecnologia com função e responsabilidade.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="Perguntas frequentes" align="center" title="Dúvidas comuns" narrow>
        <Faq items={faq} />
      </Section>

      <FinalCTA />
    </SiteLayout>
  );
}
