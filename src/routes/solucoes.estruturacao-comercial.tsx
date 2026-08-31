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

export const Route = createFileRoute("/solucoes/estruturacao-comercial")({
  head: () => ({
    meta: [
      { title: "Estruturação Comercial — Kapptar" },
      {
        name: "description",
        content:
          "ICP, processo, funil, papéis, CRM, indicadores e rotina de gestão definidos para a sua operação comercial funcionar com padrão.",
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

const quando = [
  { title: "Cada vendedor vende de um jeito", desc: "Não há etapas, critérios ou padrão de condução." },
  { title: "CRM subutilizado", desc: "Registros incompletos e histórico sem contexto." },
  { title: "Gestão por percepção", desc: "Faltam indicadores para orientar as decisões." },
  { title: "Equipe crescendo", desc: "Novas pessoas entram sem uma rotina clara para seguir." },
];

const entregas = [
  { title: "Definição de ICP", desc: "Perfil de cliente ideal, critérios de aderência e priorização." },
  { title: "Processo e funil", desc: "Etapas, gatilhos de avanço e critérios de saída." },
  { title: "Papéis e responsabilidades", desc: "Quem faz o quê em cada etapa da venda." },
  { title: "CRM e qualidade dos dados", desc: "Campos, obrigatoriedades e padrão de registro." },
  { title: "Indicadores", desc: "O que acompanhar para enxergar o funil e a produtividade." },
  { title: "Rotina de gestão", desc: "Cadência de acompanhamento, pauta e pontos de controle." },
];

const etapas = [
  { title: "Diagnóstico", desc: "Leitura da operação, do funil atual e dos pontos de perda." },
  { title: "Desenho", desc: "Definição de ICP, etapas, critérios, papéis e indicadores." },
  { title: "Implantação", desc: "Configuração do CRM e adoção do processo com a equipe." },
  { title: "Acompanhamento", desc: "Análise da execução e ajustes ao longo do uso." },
];

const faq = [
  {
    q: "Preciso ter CRM antes de começar?",
    a: "Não. O diagnóstico avalia se o CRM atual atende ou se será necessário implantar ou ajustar a ferramenta.",
  },
  {
    q: "Vocês vendem para o meu cliente?",
    a: "Não nesta solução. Aqui organizamos o processo. A condução da venda permanece com a sua equipe.",
  },
  {
    q: "Serve para equipes pequenas?",
    a: "Sim. O escopo é ajustado ao tamanho da operação e ao estágio de maturidade da equipe comercial.",
  },
];

function EstruturacaoPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Organizar"
        title="Transforme conhecimento disperso em um processo comercial claro e replicável."
        description="Organizamos ICP, funil, papéis, CRM, indicadores e rotina de gestão para que a operação deixe de depender de improviso."
      >
        <PrimaryCTA>Organizar minha operação</PrimaryCTA>
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
        title="Sua operação está pronta para um processo claro?"
        description="Comece pelo diagnóstico e entenda o que precisa ser organizado primeiro."
      />
    </SiteLayout>
  );
}
