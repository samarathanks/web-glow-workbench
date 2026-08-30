import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Comparison } from "@/components/site/Comparison";
import { Faq } from "@/components/site/Faq";
import { Steps, Highlight, BulletGrid } from "@/components/site/Steps";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PrimaryCTA } from "@/components/site/CTAButton";

export const Route = createFileRoute("/solucoes/estruturacao-comercial")({
  head: () => ({
    meta: [
      { title: "Estruturação Comercial — Kapptar" },
      {
        name: "description",
        content:
          "Processo, funil, papéis, critérios, CRM e indicadores definidos para sua operação comercial sair da improvisação.",
      },
      { property: "og:title", content: "Estruturação Comercial — Kapptar" },
      {
        property: "og:description",
        content: "Organize o processo comercial com etapas, critérios e rotina de gestão claros.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: EstruturacaoPage,
});

const paraQuem = [
  { title: "Operação sem processo padronizado", desc: "Cada vendedor conduz a venda de um jeito diferente." },
  { title: "Gestão sem indicadores", desc: "Decisões tomadas por percepção, sem dados confiáveis." },
  { title: "CRM subutilizado", desc: "Registros incompletos e histórico sem contexto." },
  { title: "Equipe crescendo", desc: "Novas pessoas sem uma rotina clara para seguir." },
];

const porque = [
  { title: "Previsibilidade", desc: "Etapas e critérios permitem enxergar o funil e o próximo passo." },
  { title: "Consistência", desc: "A boa prática deixa de ser individual e passa a ser da operação." },
  { title: "Escala", desc: "Novos vendedores entram em uma estrutura já definida." },
];

const comparativo = [
  {
    area: "Processo",
    today: "Conhecimento disperso e execução sem padrão.",
    kapptar: "Etapas, papéis, critérios e rotina definidos.",
  },
  {
    area: "Gestão",
    today: "Acompanhamento por percepção e conversas soltas.",
    kapptar: "Rotina de gestão com indicadores e pontos de controle.",
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

const frentes = [
  { title: "Mercado e ICP", desc: "Definição de mercado-alvo, perfil de cliente ideal e critérios de aderência." },
  { title: "Proposta e abordagem", desc: "Argumentação, diferenciais e mensagem alinhada ao contexto do cliente." },
  { title: "Processo e funil", desc: "Etapas, gatilhos de avanço e critérios de qualificação." },
  { title: "Papéis e rotina", desc: "Responsabilidades, cadências e ritos de gestão." },
  { title: "CRM e dados", desc: "Campos, funis, registros e organização das informações." },
  { title: "Indicadores", desc: "O que medir em cada etapa e como interpretar os números." },
];

const etapas = [
  { label: "Diagnóstico", desc: "Leitura da operação atual: cenário, processo, equipe, dados e pontos de perda." },
  { label: "Desenho", desc: "Definição de processo, funil, papéis, critérios, CRM e indicadores." },
  { label: "Implantação", desc: "Aplicação acompanhada, ajustes na rotina e evolução com base nos dados." },
];

const entregas = [
  { title: "ICP e critérios de aderência" },
  { title: "Processo comercial e funil documentados" },
  { title: "Papéis, responsabilidades e rotina de gestão" },
  { title: "Estrutura de CRM alinhada ao processo" },
  { title: "Painel de indicadores da operação" },
  { title: "Materiais de abordagem e argumentação" },
];

const faq = [
  {
    q: "Quanto tempo dura a estruturação?",
    a: "O escopo e o cronograma são definidos após o diagnóstico, conforme o tamanho da operação e o grau de organização atual.",
  },
  {
    q: "Vocês implantam CRM?",
    a: "Avaliamos no diagnóstico se a necessidade é implantar, ajustar ou apenas reorganizar o que já existe.",
  },
  {
    q: "A estruturação inclui prospecção?",
    a: "Não. A geração de oportunidades é escopo do Outbound B2B, que pode ser contratado separadamente.",
  },
  {
    q: "Minha equipe precisa participar?",
    a: "Sim. A operação é lida junto com quem executa, e a implantação é acompanhada com a equipe.",
  },
];

function EstruturacaoPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Organizar · Estruturação Comercial"
        title="Clareza para sua operação comercial sair da improvisação."
        description="Organizamos processo, funil, papéis, critérios, CRM e gestão para sua equipe saber o que fazer, como medir e quando avançar."
      >
        <PrimaryCTA />
      </PageHero>

      <Section eyebrow="Para quem é" title="Quando a estruturação é o próximo passo">
        <BulletGrid items={paraQuem} columns={2} />
      </Section>

      <Section
        eyebrow="Por que estruturar"
        title="Processo é o que sustenta o crescimento."
        className="bg-surface/40"
      >
        <BulletGrid items={porque} />
      </Section>

      <Section eyebrow="Comparativo" title="Hoje e com a Kapptar">
        <Comparison rows={comparativo} />
      </Section>

      <Section eyebrow="O que organizamos" title="Frentes da solução" className="bg-surface/40">
        <BulletGrid items={frentes} />
      </Section>

      <Section eyebrow="Como entregamos" title="Três etapas de trabalho">
        <Steps steps={etapas} />
        <div className="mt-10">
          <Highlight>Processo não engessa. Processo libera a equipe para executar melhor.</Highlight>
        </div>
      </Section>

      <Section eyebrow="Entregas" title="O que fica com a sua empresa" className="bg-surface/40">
        <BulletGrid items={entregas} />
      </Section>

      <Section eyebrow="Perguntas frequentes" title="Dúvidas sobre a Estruturação Comercial" narrow>
        <Faq items={faq} />
      </Section>

      <FinalCTA
        title="Sua operação está pronta para ter processo?"
        description="Solicite um diagnóstico gratuito e entenda o que precisa ser organizado primeiro."
      />
    </SiteLayout>
  );
}
