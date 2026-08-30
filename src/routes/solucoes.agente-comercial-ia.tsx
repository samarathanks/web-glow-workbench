import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Faq } from "@/components/site/Faq";
import { BulletGrid, Highlight } from "@/components/site/Steps";
import { JourneyLine } from "@/components/site/JourneyLine";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PrimaryCTA } from "@/components/site/CTAButton";
import { MessageSquare, Compass, Filter, Database, RefreshCw, BellRing, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/solucoes/agente-comercial-ia")({
  head: () => ({
    meta: [
      { title: "Agente Comercial de IA — Kapptar" },
      {
        name: "description",
        content:
          "Um agente com a persona, o processo e os critérios da sua operação para qualificar leads, atualizar o CRM, fazer follow-up e acionar o vendedor.",
      },
      { property: "og:title", content: "Agente Comercial de IA — Kapptar" },
      {
        property: "og:description",
        content: "Não é um agente genérico. É o agente da sua operação. O agente qualifica. Pessoas vendem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AgentePage,
});

const quando = [
  { title: "Leads chegando sem triagem", desc: "O time gasta tempo com contatos sem aderência." },
  { title: "Follow-up inconsistente", desc: "O lead esfria antes do segundo contato." },
  { title: "CRM desatualizado", desc: "As informações não são registradas durante o atendimento." },
  { title: "Processo comercial definido", desc: "Existem critérios claros para o agente aplicar." },
];

const funcoes = [
  { icon: MessageSquare, label: "Recebe o lead pelo WhatsApp" },
  { icon: Compass, label: "Identifica a origem" },
  { icon: Filter, label: "Qualifica" },
  { icon: Database, label: "Atualiza o CRM" },
  { icon: RefreshCw, label: "Faz follow-up" },
  { icon: BellRing, label: "Notifica ou agenda" },
  { icon: BarChart3, label: "Alimenta o dashboard" },
];

const pode = [
  { title: "Atender e qualificar", desc: "Conduz a conversa aplicando os critérios da sua operação." },
  { title: "Registrar e organizar", desc: "Atualiza o CRM e mantém o histórico com contexto." },
  { title: "Retomar contatos", desc: "Executa follow-up conforme a cadência definida." },
  { title: "Acionar a equipe", desc: "Notifica o vendedor ou agenda a reunião quando há aderência." },
];

const naoPode = [
  { title: "Negociar condições", desc: "Preço, desconto e contrato permanecem com pessoas." },
  { title: "Fechar a venda", desc: "A decisão comercial não é delegada ao agente." },
  { title: "Substituir o processo", desc: "Sem critérios definidos, não há o que o agente aplique." },
  { title: "Assumir a relação", desc: "O relacionamento com o cliente continua sendo humano." },
];

const etapas = [
  { title: "Diagnóstico", desc: "Entendimento do fluxo de leads, critérios e ferramentas." },
  { title: "Desenho do agente", desc: "Persona, roteiro, critérios de qualificação e limites." },
  { title: "Implantação", desc: "Integração com WhatsApp, CRM e acionamento da equipe." },
  { title: "Acompanhamento", desc: "Análise das conversas e ajustes de critério e abordagem." },
];

const faq = [
  {
    q: "É um chatbot com respostas prontas?",
    a: "Não. O agente é configurado com a persona, o processo e os critérios da sua operação, e atua dentro dos limites definidos no escopo.",
  },
  {
    q: "Preciso ter processo comercial definido?",
    a: "Sim. O agente aplica critérios existentes. Se ainda não houver processo, começamos pela Estruturação Comercial.",
  },
  {
    q: "O agente conversa com o cliente sem supervisão?",
    a: "O agente conduz a triagem e o follow-up. As conversas ficam registradas e a equipe assume quando há aderência.",
  },
];

function AgentePage() {
  const [tab, setTab] = useState<"pode" | "naoPode">("pode");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Delegar"
        title="Agente Comercial de IA"
        description="Não é um agente genérico. É o agente da sua operação: qualifica, atualiza o CRM, acompanha o lead e aciona o vendedor."
      >
        <PrimaryCTA />
      </PageHero>

      <Section eyebrow="Quando faz sentido" title="Quando esta solução faz sentido">
        <Reveal>
          <BulletGrid items={quando} columns={2} />
        </Reveal>
      </Section>

      <Section eyebrow="Entregas" title="O que a Kapptar entrega" className="bg-surface/40">
        <Reveal>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {funcoes.map((f, i) => (
              <li
                key={f.label}
                className="flex items-center gap-3 rounded-2xl glass p-5 transition duration-300 hover:border-teal/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                  <f.icon size={18} className="text-primary-foreground" />
                </span>
                <span className="text-sm">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-teal font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {f.label}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-10">
          <div className="flex gap-2" role="tablist" aria-label="Limites do agente">
            <button
              type="button"
              role="tab"
              aria-selected={tab === "pode"}
              onClick={() => setTab("pode")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition duration-300 ${
                tab === "pode" ? "bg-gradient-brand text-primary-foreground" : "glass text-muted-foreground"
              }`}
            >
              O agente pode
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "naoPode"}
              onClick={() => setTab("naoPode")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition duration-300 ${
                tab === "naoPode" ? "bg-gradient-brand text-primary-foreground" : "glass text-muted-foreground"
              }`}
            >
              O agente não pode
            </button>
          </div>
          <div className="mt-5">
            <BulletGrid items={tab === "pode" ? pode : naoPode} columns={2} />
          </div>
        </div>

        <div className="mt-10">
          <Highlight>O agente qualifica. Pessoas vendem.</Highlight>
        </div>
      </Section>

      <Section eyebrow="Como funciona" title="Como funciona">
        <Reveal>
          <JourneyLine steps={etapas} />
        </Reveal>
        <p className="mt-8 text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
          O agente precisa de um processo comercial definido para funcionar: ele aplica os critérios,
          as etapas e os limites da sua operação.
        </p>
      </Section>

      <Section eyebrow="Perguntas frequentes" title="Dúvidas comuns" narrow className="bg-surface/40">
        <Faq items={faq} />
      </Section>

      <FinalCTA
        title="Sua equipe perde tempo na qualificação?"
        description="No diagnóstico gratuito avaliamos o fluxo de leads e o que pode ser delegado ao agente."
      />
    </SiteLayout>
  );
}
