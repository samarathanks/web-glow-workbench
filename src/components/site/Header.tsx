import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/prospeccao", label: "Prospecção" },
  { to: "/entregamos", label: "O que Entregamos" },
  { to: "/planos", label: "Planos" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/faq", label: "FAQ" },
  { to: "/dna", label: "Nosso DNA" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          kapptar<span className="text-teal">.</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeProps={{ className: "text-foreground" }}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contato"
            className="px-5 py-2 rounded-full text-sm font-semibold text-primary-foreground bg-gradient-brand shadow-glow hover:opacity-90 transition"
          >
            Contratar →
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-foreground"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <ul className="container mx-auto px-6 py-6 space-y-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contato"
                onClick={() => setOpen(false)}
                className="inline-block px-5 py-2 rounded-full text-sm font-semibold text-primary-foreground bg-gradient-brand"
              >
                Contratar →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
