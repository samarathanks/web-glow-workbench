import { PrimaryCTA } from "./CTAButton";

export function FinalCTA({
  title = "Qual é o próximo avanço da sua operação comercial?",
  description = "Conte-nos como seu comercial funciona hoje. A Kapptar identifica o principal ponto de evolução e orienta a solução mais adequada para a sua realidade.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 md:p-16 text-center">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-blue via-teal to-green"
          />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-balance">
              {title}
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
            <div className="mt-9">
              <PrimaryCTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
