import { PrimaryCTA } from "./CTAButton";

export function FinalCTA({
  title = "Qual é o próximo passo da sua operação comercial?",
  description = "Conte onde sua empresa está. A Kapptar identifica o que precisa ser organizado, gerado ou delegado.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-mesh opacity-70" aria-hidden />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-balance">
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
