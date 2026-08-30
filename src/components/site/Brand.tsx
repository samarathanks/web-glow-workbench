import { Link } from "@tanstack/react-router";
import logoFull from "@/assets/kapptar-logo.svg";
import symbol from "@/assets/kapptar-symbol.svg";
import wordmark from "@/assets/kapptar-wordmark.svg";

/**
 * Logomarca oficial Kapptar (vetores extraídos do arquivo vetorizado da marca).
 * variant="lockup" — símbolo + wordmark (uso principal em header/footer)
 * variant="full"   — marca horizontal completa, com assinatura
 * variant="symbol" — apenas o símbolo K
 */
export function Brand({
  className = "h-8",
  variant = "lockup",
}: {
  className?: string;
  variant?: "lockup" | "full" | "symbol";
}) {
  const content =
    variant === "lockup" ? (
      <span className="inline-flex items-center gap-2.5">
        <img src={symbol} alt="" aria-hidden className={`w-auto ${className}`} />
        <img src={wordmark} alt="Kapptar" className={`w-auto ${className} scale-[0.82] origin-left`} />
      </span>
    ) : (
      <img
        src={variant === "full" ? logoFull : symbol}
        alt="Kapptar"
        className={`w-auto ${className}`}
        loading="eager"
        decoding="async"
      />
    );

  return (
    <Link to="/" aria-label="Kapptar — página inicial" className="inline-flex items-center">
      {content}
    </Link>
  );
}
