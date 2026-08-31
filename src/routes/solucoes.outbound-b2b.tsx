import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Faq } from "@/components/site/Faq";
import { BulletGrid } from "@/components/site/Steps";
import { JourneyLine } from "@/components/site/JourneyLine";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PrimaryCTA } from "@/components/site/CTAButton";

export const Route = createFileRoute("/solucoes/outbound-b2b")({
  head: () => ({
    meta: [
      { title: "Outbound B2B — Kapptar" },
      {
        name: "description",
        content:
          "Pesquisa de empresas e decisores, abordagem conduzida por equipe humana, qualificação, agendamento e entrega da oportunidade com contexto.",
      },
      { property: "og:title", content: "Outbound B2B — Kapptar" },
      {
        property: "og:description",
        content: "Prospecção orientada por ICP para gerar oportunidades qualificadas no seu pipeline.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: OutboundPage,
});

const quando = [
  { title: "Pipeline dependente de indicação", desc: "As oportunidades chegam sem previsibilidade." },
  { title: "Equipe sem tempo para prospectar", desc: "O time está ocupado com atendimento e negociação." },
  { title: "Ticket e ciclo B2B definidos", desc: "A venda exige contato com decisores específicos." },
  { title: "Processo comercial já existente", desc: "Há quem receba e conduza a oportunidade gerada." },
];

const entregas = [
  { title: "Pesquisa de empresas e decisores", desc: "Contas aderentes ao ICP e mapeamento de quem decide." },
  { title: "Abordagem por equipe humana", desc: "Contato conduzido por pessoas, com contexto e critério." },
  { title: "Qualificação", desc: "Verificação de aderência, momento e interesse real." },
  { title: "Agendamento", desc: "Reunião marcada na agenda do responsável pela venda." },
  { title: "Oportunidade com contexto", desc: "Histórico, dores e informações registradas na entrega." },
  { title: "Venda conduzida pelo cliente", desc: "Proposta, negociação e fechamento seguem com a sua equipe." },
];

const etapas = [
  { title: "Definição do mercado e ICP", desc: "Segmentos, portes, cargos e critérios de aderência." },
  { title: "Construção da abordagem", desc: "Mensagens, canais, sequência de contatos e objeções." },
  { title: "Pesquisa, prospecção e qualificação", desc: "Execução da cadência e validação do interesse." },
  { title: "Entrega da oportunidade", desc: "Reunião agendada e contexto repassado ao vendedor." },
];

const faq = [
  {
    q: "Vocês garantem número de reuniões?",
    a: "Não trabalhamos com promessa de volume. O desempenho depende do mercado, da oferta e do ciclo de decisão de cada operação.",
  },
  {
    q: "A abordagem é automatizada?",
    a: "A pesquisa usa apoio de tecnologia, mas a abordagem e a qualificação são conduzidas por equipe humana.",
  },
  {
    q: "Quem conduz a venda?",
    a: "Sua equipe. A Kapptar entrega a oportunidade qualificada com contexto; apresentação e fechamento permanecem com você.",
  },
];

function OutboundPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gerar"
        title="Leve sua empresa até as contas que ainda não chegam até você."
        description="Pesquisamos contas, abordamos decisores e entregamos oportunidades qualificadas para a sua equipe conduzir a venda."
      >
        <PrimaryCTA>Gerar novas oportunidades</PrimaryCTA>
      </PageHero>

      <Section eyebrow="Quando faz sentido" title="Quando esta solução faz sentido">
        <Reveal>
          <BulletGrid items={quando} columns={2} />
        </Reveal>
      </Section>

      <Section eyebrow="Entregas" title="O que a Kapptar entrega" className="bg-surface/40">
        <Reveal>
          <BulletGrid items={entregas} />
        </Reveal>
      </Section>

      <Section eyebrow="Como funciona" title="Como funciona">
        <Reveal>
          <JourneyLine steps={etapas} />
        </Reveal>
      </Section>

      <Section eyebrow="Perguntas frequentes" title="Dúvidas comuns" narrow className="bg-surface/40">
        <Faq items={faq} />
      </Section>

      <FinalCTA
        title="Faltam oportunidades no seu pipeline?"
        description="No diagnóstico avaliamos mercado, ICP e viabilidade da prospecção para a sua operação."
      />
    </SiteLayout>
  );
}
