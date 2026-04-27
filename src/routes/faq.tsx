import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Perguntas Frequentes — Kapptar" },
      { name: "description", content: "Tire suas dúvidas sobre prospecção corporativa, leads qualificados e o método Kapptar." },
      { property: "og:title", content: "FAQ — Kapptar" },
      { property: "og:description", content: "Perguntas frequentes sobre prospecção B2B e geração de leads qualificados." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    q: "Minha empresa realmente precisa prospectar?",
    a: "Prospectar é imprescindível para manter o funil de oportunidades ativo. Quantos negócios você já deixou de ganhar por não abordar decisores potenciais — por depender apenas de negócios fechados ou indicações?",
  },
  {
    q: "Como vocês prospectam para qualquer segmento?",
    a: "Prospectar significa encontrar empresas interessadas em conhecer sua solução. Para dar resultado, as abordagens precisam ser simples e diretas. Quando uma empresa demonstra interesse, passamos a oportunidade para um especialista conduzir.",
  },
  {
    q: "Qual é o resultado entregue pelos serviços?",
    a: "Conectamos sua empresa com players de interesse para construção de relacionamento e follow-up. Os contatos são qualificados em 4 perfis: Tranquilo, Pesquisador, Incomodado e Potencial Comprador.",
  },
  {
    q: "Quantas reuniões serão agendadas?",
    a: "A média é de 10 a 15 agendamentos para cada lote de 80 empresas trabalhadas em um período de 30 dias, com mínimo garantido de 6 agendamentos por lote. Os números dependem de competitividade, oferta, mercado e construção do pitch.",
  },
  {
    q: "Vocês usam scripts mecânicos?",
    a: "Não. Trabalhamos com técnica e talento, entendendo a sua solução em profundidade para levar aos decisores um speech consultivo, aplicando metodologia SPIN Selling com alto nível de senioridade.",
  },
  {
    q: "Como é o processo de definição do ICP?",
    a: "Sua empresa define o CNAE e os tipos de empresas-alvo. Juntos refinamos o ICP (Ideal Customer Profile) e construímos a melhor abordagem para cada perfil. Quanto mais preciso o ICP, melhores os resultados.",
  },
];

function FaqPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Perguntas e Respostas"
        title="Tudo o que você precisa saber."
        description="Reunimos as dúvidas mais comuns sobre prospecção corporativa e o método Kapptar."
      />

      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="glass rounded-2xl px-6 border-0"
              >
                <AccordionTrigger className="font-display text-lg font-semibold hover:no-underline text-left">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </SiteLayout>
  );
}
