import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Comparison } from "@/components/site/Comparison";
import { Faq } from "@/components/site/Faq";
import { Steps, Highlight, BulletGrid } from "@/components/site/Steps";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PrimaryCTA } from "@/components/site/CTAButton";

export const Route = createFileRoute("/solucoes/agente-comercial-ia")({
  head: () => ({
    meta: [
      { title: "Agente Comercial de IA — Kapptar" },
      {
        name: "description",
        content:
          "Um agente de IA com persona, processo e critérios próprios para qualificar leads no WhatsApp, atualizar o CRM, fazer follow-up e acionar sua equipe.",
      },
      { property: "og:title", content: "Agente Comercial de IA — Kapptar" },
      { property: "og:description", content: "O agente qualifica. Pessoas vendem." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AgentePage,
});

const pode = [
  "Receber o lead pelo WhatsApp",
  "Identificar se a origem foi orgânica, Google ou Facebook",
  "Aplicar perguntas e critérios de qualificação",
  "Registrar e atualizar os dados no CRM",
  "Fazer follow-up conforme as regras definidas no kickoff",
  "Notificar o vendedor",
  "Notificar o grupo definido com CEO ou gestor",
  "Verificar disponibilidade",
  "Agendar uma reunião quando aplicável",
  "Alimentar o dashboard",
];

const naoFaz = [
  "Pesquisar empresas",
  "Construir listas",
  "Executar Outbound B2B",
  "Apresentar propostas",
  "Negociar",
  "Fechar vendas",
  "Substituir o vendedor",
  "Criar sozinho um processo comercial inexistente",
];

const aplicacoes = [
  { title: "Qualificação de novos leads", desc: "Primeiro atendimento com critérios definidos." },
  { title: "Follow-up", desc: "Retomada de conversas conforme as regras acordadas." },
  { title: "Agendamento e passagem", desc: "Verificação de disponibilidade e acionamento da equipe." },
  { title: "Reativação de bases", desc: "Contato com contatos antigos dentro do processo definido." },
  { title: "Apoio a Customer Success", desc: "Organização de interações e registro de informações." },
];

const comparativo = [
  {
    area: "Primeiro atendimento",
    today: "Lead aguarda resposta e esfria antes do contato.",
    kapptar: "Atendimento imediato no WhatsApp com critérios definidos.",
  },
  {
    area: "Qualificação",
    today: "Tempo da equipe consumido por contatos sem aderência.",
    kapptar: "Leads qualificados antes da atuação do vendedor.",
  },
  {
    area: "Follow-up",
    today: "Retomadas dependem da memória de cada vendedor.",
    kapptar: "Follow-up executado conforme as regras acordadas.",
  },
  {
    area: "Dados",
    today: "CRM incompleto e decisões por percepção.",
    kapptar: "Registro atualizado e dashboard alimentado.",
  },
  {
    area: "Equipe",
    today: "Pessoas presas à rotina e ao retrabalho.",
    kapptar: "Mais foco em relacionamento, proposta e fechamento.",
  },
];

const etapas = [
  { label: "Diagnóstico", desc: "Leitura do processo, dos critérios e das responsabilidades já existentes." },
  { label: "Configuração", desc: "Persona, fluxos, perguntas, regras de follow-up, integrações com WhatsApp e CRM." },
  { label: "Operação", desc: "Acompanhamento das conversas, análise dos dados e ajustes contínuos." },
];

const faq = [
  {
    q: "O agente substitui meu vendedor?",
    a: "Não. O agente qualifica, registra e aciona. Apresentação, negociação e fechamento permanecem com a equipe responsável pela venda.",
  },
  {
    q: "Preciso ter processo comercial definido?",
    a: "Sim. O agente opera sobre etapas, critérios e responsabilidades existentes. Quando isso ainda não existe, o primeiro produto indicado é a Estruturação Comercial.",
  },
  {
    q: "Com quais ferramentas o agente trabalha?",
    a: "WhatsApp e CRM. Outras necessidades são avaliadas no diagnóstico antes de qualquer definição.",
  },
  {
    q: "O agente faz prospecção?",
    a: "Não. Pesquisa de contas e abordagem ativa são escopo do Outbound B2B.",
  },
];

function AgentePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Delegar · Agente Comercial de IA"
        title="Um agente comercial de IA criado para a sua operação."
        description="Com identidade, processo e critérios próprios para qualificar leads no WhatsApp, atualizar o CRM, fazer follow-up e acionar sua equipe."
      >
        <PrimaryCTA />
      </PageHero>

      <Section align="center">
        <Highlight>Não é um agente genérico. É o agente da sua operação.</Highlight>
      </Section>

      <Section eyebrow="Pré-requisito" title="O agente opera sobre um processo definido." className="bg-surface/40">
        <div className="rounded-3xl glass p-8 md:p-10">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            O agente precisa de um processo comercial definido. Quando etapas, critérios e
            responsabilidades ainda não existem, o primeiro produto indicado é a{" "}
            <Link to="/solucoes/estruturacao-comercial" className="text-teal font-semibold hover:underline">
              Estruturação Comercial
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section eyebrow="O que o agente faz" title="Capacidades e limites">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl glass p-8">
            <h3 className="font-display text-lg font-bold">O agente pode</h3>
            <ul className="mt-5 space-y-3">
              {pode.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <Check size={17} className="mt-0.5 shrink-0 text-teal" aria-hidden /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl glass p-8">
            <h3 className="font-display text-lg font-bold">O agente não</h3>
            <ul className="mt-5 space-y-3">
              {naoFaz.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <X size={17} className="mt-0.5 shrink-0 text-violet" aria-hidden /> {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-foreground font-semibold">O agente qualifica. Pessoas vendem.</p>
          </div>
        </div>
        <div className="mt-5 rounded-2xl glass p-6">
          <h3 className="font-display text-base font-bold">Integrações</h3>
          <p className="mt-2 text-sm text-muted-foreground">WhatsApp e CRM.</p>
        </div>
      </Section>

      <Section eyebrow="Aplicações" title="Onde o agente atua" className="bg-surface/40">
        <BulletGrid items={aplicacoes} />
      </Section>

      <Section eyebrow="Comparativo" title="Hoje e com a Kapptar">
        <Comparison rows={comparativo} />
      </Section>

      <Section eyebrow="Como entregamos" title="Diagnóstico, configuração e operação" className="bg-surface/40">
        <Steps steps={etapas} />
      </Section>

      <Section eyebrow="Perguntas frequentes" title="Dúvidas sobre o Agente Comercial de IA" narrow>
        <Faq items={faq} />
      </Section>

      <FinalCTA
        title="Pronto para delegar a qualificação?"
        description="Solicite um diagnóstico gratuito e avalie se o agente é o próximo passo da sua operação."
      />
    </SiteLayout>
  );
}
