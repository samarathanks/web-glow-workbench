type BrandLogo = { name: string; src: string; scale?: number };

const brands: BrandLogo[] = [
  { name: "TOTVS", src: "/brands/totvs.svg", scale: 0.78 },
  { name: "Onfly", src: "/brands/onfly.svg" },
  { name: "Pluxee", src: "/brands/pluxee.png" },
  { name: "Accesstage", src: "/brands/accesstage.png" },
  { name: "SPX Bank", src: "/brands/spxbank.png" },
  { name: "Swile", src: "/brands/swile.svg", scale: 0.88 },
  { name: "Systêxtil", src: "/brands/systextil.png" },
  { name: "Bullla", src: "/brands/bullla.svg" },
  { name: "Evol Soluções", src: "/brands/evol.webp", scale: 1.05 },
  { name: "Creditas", src: "/brands/creditas.svg", scale: 0.9 },
  { name: "Neon", src: "/brands/neon.svg", scale: 0.85 },
];

function Row({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
    >
      {brands.map((b) => (
        <li
          key={b.name}
          className="flex h-7 shrink-0 items-center justify-center sm:h-9"
        >
          <img
            src={b.src}
            alt={ariaHidden ? "" : b.name}
            loading="lazy"
            decoding="async"
            draggable={false}
            style={{ maxHeight: `${(b.scale ?? 1) * 100}%` }}
            className="h-full w-auto max-w-[130px] object-contain opacity-60 transition-opacity duration-300 [filter:brightness(0)_invert(1)] hover:opacity-100 sm:max-w-[165px]"
          />
        </li>
      ))}
    </ul>
  );
}

export function BrandMarquee() {
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max items-center py-4 marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
