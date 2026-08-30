const brands = [
  "TOTVS",
  "Onfly",
  "Pluxee",
  "Ibyte",
  "Accesstage",
  "SPX Bank",
  "Swile",
  "Systêxtil",
  "Gooroo Crédito",
  "Bullla",
  "Evol Soluções",
  "Certacon",
  "AG Capital",
  "Creditas",
  "Neon",
  "ITAG",
];

function Row({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-3 pr-3"
    >
      {brands.map((b) => (
        <li
          key={b}
          className="whitespace-nowrap rounded-2xl glass px-6 py-4 font-display text-sm md:text-base font-semibold text-muted-foreground"
        >
          {b}
        </li>
      ))}
    </ul>
  );
}

export function BrandMarquee() {
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
