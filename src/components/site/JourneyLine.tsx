export type JourneyStep = { title: string; desc: string };

export function JourneyLine({ steps }: { steps: JourneyStep[] }) {
  return (
    <ol className="relative grid gap-5 md:grid-cols-4">
      <span
        aria-hidden
        className="pointer-events-none absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-teal/60 via-blue/50 to-violet/40 md:left-0 md:right-0 md:top-6 md:bottom-auto md:h-px md:w-full md:bg-gradient-to-r"
      />
      {steps.map((s, i) => (
        <li key={s.title} className="relative pl-16 md:pl-0">
          <div className="absolute left-0 top-0 md:static">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-teal/40 bg-background font-display text-sm font-bold text-teal transition-colors duration-300 hover:border-teal hover:bg-teal/10">
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>
          <h3 className="font-display text-lg font-bold md:mt-6">{s.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}
