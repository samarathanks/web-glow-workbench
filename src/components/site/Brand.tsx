import { Link } from "@tanstack/react-router";
import logo from "@/assets/kapptar-logo.svg";
import symbol from "@/assets/kapptar-symbol.svg";

/**
 * Logomarca oficial Kapptar (vetor extraído do arquivo vetorizado da marca).
 * variant="full" = símbolo + wordmark (marca secundária horizontal)
 * variant="symbol" = apenas o símbolo K
 */
export function Brand({
  className = "h-8",
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "symbol";
}) {
  return (
    <Link to="/" aria-label="Kapptar — página inicial" className="inline-flex items-center">
      <img
        src={variant === "full" ? logo : symbol}
        alt="Kapptar"
        className={`w-auto ${className}`}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}
