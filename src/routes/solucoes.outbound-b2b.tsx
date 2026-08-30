import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Comparison } from "@/components/site/Comparison";
import { Faq } from "@/components/site/Faq";
import { Highlight, BulletGrid } from "@/components/site/Steps";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PrimaryCTA } from "@/components/site/CTAButton";

export const Route = createFileRoute("/solucoes/outbound-b2b")({
  head: () => ({
    meta: [
      { title: "Outbound B2B — Kapptar" },
      {
        name: "description",
        content:
          "Pesquisa de contas, abordagem humana e qualificação de decisores para abrir oportunidades aderentes ao seu mercado.",
      },
      { property: "og:title", content: "Outbound B2B — Kapptar" },
      {
        property: "og:description",
        content: "A Kapptar abre a oportunidade. Sua equipe conduz a venda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: OutboundPage,
});

const paraQuem = [
  { title: "Vendas dependentes de indicação", desc: "Sem previsibilidade quando a demanda espontânea diminui." },
  { title: "Ticket e ciclo B2B", desc: "Vendas consultivas com decisores definidos e processo de compra." },
  { title: "Equipe sem tempo para prospectar", desc: "Vendedores absorvidos por atendimento e propostas." },
  { title: "Novos mercados", desc: "Necessidade de testar segmentos e regiões com direção." },
];

const comparativo = [
  {
    area: "Geração de oportunidades",
    today: "Dependência de indicação, demanda espontânea ou ações isoladas.",
    kapptar: "Prospecção orientada por ICP e contexto.",
  },
  {
    area: "Abordagem",
    today: "Mensagens genéricas enviadas sem pesquisa.",
    kapptar: "Abordagem construída a partir da conta e do interlocutor.",
  },
  {
    area: "Qualificação",
    today: "Tempo da equipe consumido por contatos sem aderência.",
    kapptar: "Leads qualificados antes da atuação do vendedor.",
  },
  {
    area: "Dados",
    today: "Histórico de prospecção sem registro.",
    kapptar: "Contas, contatos e interações registrados e analisáveis.",
  },
];

const etapas = [
  { title: "Definimos empresas e segmentos", desc: "Mercados, portes e regiões aderentes ao seu ICP." },
  { title: "Entendemos a solução", desc: "O que sua empresa resolve, para quem e com qual diferencial." },
  { title: "Construímos a abordagem", desc: "Mensagem, canais e sequência de contato." },
  { title: "Pesquisamos e abordamos", desc: "Identificação de contas e contatos, com abordagem conduzida por pessoas." },
  { title: "Qualificamos", desc: "Aderência, contexto e interesse verificados antes da passagem." },
  { title: "Entregamos a oportunidade", desc: "Reunião e contexto entregues à sua equipe de vendas." },
];

const entregas = [
  { title: "Reuniões com decisores aderentes ao ICP" },
  { title: "Contexto e histórico de cada oportunidade" },
  { title: "Registro das contas e contatos trabalhados" },
  { title: "Leitura de mercado e aprendizados da operação" },
];

const escopo = [
  { title: "Operação conduzida por equipe humana", desc: "Pesquisa, abordagem e qualificação feitas por pessoas." },
  { title: "A Kapptar pesquisa, aborda e qualifica", desc: "Nosso escopo termina na entrega da oportunidade." },
  {
    title: "A venda permanece com o cliente",
    desc: "Apresentação, proposta, negociação e fechamento são conduzidos pela sua equipe.",
  },
  {
    title: "Metas definidas após o diagnóstico",
    desc: "Volumes e objetivos são acordados conforme mercado, ICP e capacidade da operação.",
  },
];

const faq = [
  {
    q: "Quantas reuniões vocês entregam por mês?",
    a: "Volumes e metas são definidos somente após o diagnóstico, considerando mercado, ICP, ciclo de venda e capacidade de atendimento da sua equipe.",
  },
  {
    q: "Quem faz a abordagem?",
    a: "A operação é conduzida por equipe humana. A tecnologia apoia pesquisa e organização, mas o contato é feito por pessoas.",
  },
  {
    q: "Vocês fecham a venda?",
    a: "Não. A Kapptar abre a oportunidade e entrega o contexto. Apresentação, proposta, negociação e fechamento permanecem com o cliente.",
  },
  {
    q: "Preciso ter processo comercial antes?",
    a: "Ajuda muito. Se o processo ainda não existe, o diagnóstico pode indicar a Estruturação Comercial como primeiro passo.",
  },
];

function OutboundPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gerar · Outbound B2B"
        title="Sua empresa diante das contas certas."
        description="Pesquisa, abordagem humana e qualificação para abrir oportunidades aderentes ao seu mercado e entregar contexto à sua equipe de vendas."
      >
        <PrimaryCTA />
      </PageHero>

      <Section eyebrow="Para quem é" title="Quando gerar oportunidades é o próximo passo">
        <BulletGrid items={paraQuem} columns={2} />
      </Section>

      <Section
        eyebrow="Prospecção com direção"
        title="Antes de abordar, entender."
        description="A prospecção parte do seu ICP e do contexto de cada conta. Pesquisamos quem decide, o que motiva a conversa e qual mensagem faz sentido — em vez de disparar volume sem critério."
        className="bg-surface/40"
      >
        <Highlight>A Kapptar abre a oportunidade. Sua equipe conduz a venda.</Highlight>
      </Section>

      <Section eyebrow="Comparativo" title="Hoje e com a Kapptar">
        <Comparison rows={comparativo} />
      </Section>

      <Section eyebrow="Como entregamos" title="Da definição do alvo à oportunidade" className="bg-surface/40">
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {etapas.map((e, i) => (
            <li key={e.title} className="rounded-2xl glass p-7">
              <div className="font-display text-sm text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-lg font-bold mt-3">{e.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="O que entregamos" title="Entregas e limites do escopo">
        <BulletGrid items={entregas} columns={2} />
        <div className="mt-5">
          <BulletGrid items={escopo} columns={2} />
        </div>
      </Section>

      <Section eyebrow="Perguntas frequentes" title="Dúvidas sobre o Outbound B2B" narrow>
        <Faq items={faq} />
      </Section>

      <FinalCTA
        title="Quer chegar às contas certas?"
        description="Solicite um diagnóstico gratuito e avalie se a prospecção é o próximo passo da sua operação."
      />
    </SiteLayout>
  );
}
