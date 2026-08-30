import { Link } from "@tanstack/react-router";

/**
 * Marca provisória em tipografia. Substituir pelo arquivo oficial
 * (SVG/PNG) trocando apenas o conteúdo deste componente.
 */
export function Brand({ className = "text-xl" }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Kapptar — página inicial"
      className={`font-display font-bold tracking-tight ${className}`}
    >
      kapptar<span className="text-teal">.</span>
    </Link>
  );
}
