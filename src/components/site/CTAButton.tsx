import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export const DIAGNOSTIC_LABEL = "Solicitar diagnóstico gratuito";

export function PrimaryCTA({
  to = "/contato",
  children = DIAGNOSTIC_LABEL,
  className = "",
}: {
  to?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm md:text-base font-semibold text-primary-foreground shadow-glow transition hover:opacity-90 ${className}`}
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
      to={to}
      hash={hash}
      className={`inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3.5 text-sm md:text-base font-semibold transition hover:bg-white/10 ${className}`}
    >
      {children}
    </Link>
  );
}
