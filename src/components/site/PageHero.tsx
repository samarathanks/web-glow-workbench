import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-40" aria-hidden />
      <div className="container mx-auto px-6 max-w-4xl text-center relative">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.2em] text-muted-foreground mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" /> {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.06] text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
        {children && <div className="mt-9 flex flex-wrap justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}
