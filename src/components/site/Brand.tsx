import { Link } from "@tanstack/react-router";

/**
 * Marca em tipografia (modelo anterior à aplicação da logomarca em SVG).
 * Mantém a mesma API dos outros componentes: className/variant são aceitos
 * para compatibilidade, mas a renderização é sempre tipográfica.
 */
export function Brand({
  className,
  variant,
}: {
  className?: string;
  variant?: "lockup" | "full" | "symbol";
}) {
  const size = variant === "symbol" ? "text-lg" : "text-xl";

  return (
    <Link
      to="/"
      aria-label="Kapptar — página inicial"
      className={`font-display font-bold tracking-tight ${size} ${className?.startsWith("h-") ? "" : (className ?? "")}`}
    >
      kapptar<span className="text-teal">.</span>
    </Link>
  );
}
