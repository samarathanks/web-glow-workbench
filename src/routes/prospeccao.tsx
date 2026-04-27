import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, Linkedin, Target } from "lucide-react";

export const Route = createFileRoute("/prospeccao")({
  head: () => ({
    meta: [
      { title: "Prospecção Corporativa — Kapptar" },
      { name: "description", content: "Prospecção corporativa B2B com Cold Calling 2.0, Cold Mail, LinkedIn e SPIN Selling. Reuniões com decisores qualificados." },
      { property: "og:title", content: "Prospecção Corporativa — Kapptar" },
      { property: "og:description", content: "Funil de vendas previsível com squad dedicada de prospecção." },
    ],
  }),
  component: ProspeccaoPage,
});

const channels = [
  { icon: Phone, title: "Cold Calling 2.0", desc: "Abordagens consultivas com técnica e talento — nada de scripts mecânicos ou roteiros engessados." },
  { icon: Mail, title: "Cold Mail", desc: "E-mails objetivos, personalizados e construídos para gerar resposta de quem decide." },
  { icon: Linkedin, title: "LinkedIn Outreach", desc: "Captura de perfil, conexões estratégicas e cadências sociais com tomadores de decisão." },
  { icon: Target, title: "SPIN Selling", desc: "Discurso poderoso ao chegar no decisor, alinhando uma visita com sua equipe comercial." },
];

function ProspeccaoPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Prospecção Corporativa"
        title="Vá atrás do seu próximo negócio."
        description="Não fique passivo esperando indicações ou visitas no site. Construímos um motor ativo de oportunidades para o seu time comercial."
      />

      <section className="pb-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-5">
          {channels.map((c) => (
            <div key={c.title} className="p-8 rounded-2xl glass">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 shadow-glow">
                <c.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-surface/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-4xl font-bold mb-6 text-balance">
            Prospectar é <span className="text-gradient">imprescindível</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Prospectar é uma tarefa imprescindível para manter o funil de oportunidades ativo.
            Imagine quantos negócios deixou de ganhar por não abordar decisores potenciais —
            por depender apenas de negócios já fechados ou indicações.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Com a Kapptar, você ganha previsibilidade, escala e uma metodologia testada em
            mais de 80 empresas e 8 segmentos diferentes.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
