import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Brand } from "./Brand";
import { solutions } from "./SolutionCards";

const anchors = [
  { to: "/", hash: "como-funciona", label: "Como funciona" },
  { to: "/", hash: "autoridade", label: "Autoridade" },
  { to: "/", hash: "faq", label: "FAQ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Brand className="h-8 md:h-9" />

        <ul className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          <li>
            <Link to="/" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">
              Início
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setSolOpen(true)}
            onMouseLeave={() => setSolOpen(false)}
          >
            <button
              type="button"
              aria-expanded={solOpen}
              onClick={() => setSolOpen((v) => !v)}
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              Soluções <ChevronDown size={14} />
            </button>
            {solOpen && (
              <div className="absolute left-0 top-full pt-3">
                <ul className="w-72 rounded-2xl glass p-2 shadow-elevated">
                  {solutions.map((s) => (
                    <li key={s.to}>
                      <Link
                        to={s.to}
                        onClick={() => setSolOpen(false)}
                        className="block rounded-xl px-4 py-3 hover:bg-white/5 transition"
                      >
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-teal font-semibold">
                          {s.stage}
                        </span>
                        <span className="block text-foreground text-sm mt-0.5">{s.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          {anchors.map((a) => (
            <li key={a.label}>
              <Link to={a.to} hash={a.hash} className="hover:text-foreground transition-colors">
                {a.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contato"
            className="px-5 py-2 rounded-full text-sm font-semibold text-primary-foreground bg-gradient-brand shadow-glow hover:opacity-90 transition"
          >
            Falar com a Kapptar
          </Link>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-foreground"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <ul className="container mx-auto px-6 py-6 space-y-4 text-sm">
            <li>
              <Link to="/" onClick={() => setOpen(false)} className="block text-foreground">
                Início
              </Link>
            </li>
            <li>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Soluções</div>
              <ul className="mt-3 space-y-3 pl-3 border-l border-border">
                {solutions.map((s) => (
                  <li key={s.to}>
                    <Link to={s.to} onClick={() => setOpen(false)} className="block text-foreground">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {anchors.map((a) => (
              <li key={a.label}>
                <Link
                  to={a.to}
                  hash={a.hash}
                  onClick={() => setOpen(false)}
                  className="block text-foreground"
                >
                  {a.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contato"
                onClick={() => setOpen(false)}
                className="inline-block px-5 py-2 rounded-full font-semibold text-primary-foreground bg-gradient-brand"
              >
                Falar com a Kapptar
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
