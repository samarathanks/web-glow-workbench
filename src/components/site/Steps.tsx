export type Step = { label: string; title?: string; desc: string };

export function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-5 md:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.label} className="relative rounded-2xl glass p-7">
          <div className="font-display text-sm text-muted-foreground">
            {String(i + 1).padStart(2, "0")}
          </div>
          <div className="mt-4 text-xs uppercase tracking-[0.2em] text-teal font-semibold">
            {s.label}
          </div>
          {s.title && <h3 className="font-display text-lg font-bold mt-2">{s.title}</h3>}
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-surface/60 p-8 md:p-12 text-center">
      <p className="font-display text-xl md:text-3xl font-semibold leading-snug text-balance">
        {children}
      </p>
    </div>
  );
}

export function BulletGrid({
  items,
  columns = 3,
}: {
  items: { title: string; desc?: string }[];
  columns?: 2 | 3;
}) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}>
      {items.map((it) => (
        <div key={it.title} className="rounded-2xl glass p-6">
          <h3 className="font-display text-base font-bold">{it.title}</h3>
          {it.desc && (
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          )}
        </div>
      ))}
    </div>
  );
}
