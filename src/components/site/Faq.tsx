export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.q} className="group rounded-2xl glass px-6 py-5 transition">
          <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
            <h3 className="font-display text-base md:text-lg font-semibold">{item.q}</h3>
            <span className="shrink-0 text-teal transition-transform group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
