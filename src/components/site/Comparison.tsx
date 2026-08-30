type Row = { area: string; today: string; kapptar: string };

export function Comparison({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-hidden rounded-3xl glass">
      <div className="hidden md:grid grid-cols-[1fr_1.4fr_1.4fr] gap-6 px-8 py-5 border-b border-border text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <div>Frente</div>
        <div>Hoje</div>
        <div className="text-teal">Com a Kapptar</div>
      </div>
      <ul className="divide-y divide-border">
        {rows.map((r) => (
          <li
            key={r.area}
            className="grid gap-4 px-6 py-6 md:grid-cols-[1fr_1.4fr_1.4fr] md:gap-6 md:px-8"
          >
            <h3 className="font-display text-base font-bold">{r.area}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="md:hidden block text-xs uppercase tracking-widest mb-1">Hoje</span>
              {r.today}
            </p>
            <p className="text-sm leading-relaxed text-foreground">
              <span className="md:hidden block text-xs uppercase tracking-widest text-teal mb-1">
                Com a Kapptar
              </span>
              {r.kapptar}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
