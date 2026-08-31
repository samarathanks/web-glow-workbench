import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export const DIAGNOSTIC_LABEL = "Solicitar diagnóstico";

export function PrimaryCTA({
  children = DIAGNOSTIC_LABEL,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to="/contato"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-6 py-3.5 text-sm md:text-base font-semibold text-primary-foreground shadow-glow-green transition duration-300 hover:-translate-y-0.5 hover:opacity-95 ${className}`}
    >
      {children} <ArrowRight size={17} />
    </Link>
  );
}

export function SecondaryCTA({
  to,
  hash,
  children,
  className = "",
}: {
  to: string;
  hash?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to as never}
      hash={hash}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/70 px-6 py-3.5 text-sm md:text-base font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-teal/50 ${className}`}
    >
      {children}
    </Link>
  );
}
