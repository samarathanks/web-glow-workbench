type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" /> {eyebrow}
          </div>
        )}
        <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05] text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
