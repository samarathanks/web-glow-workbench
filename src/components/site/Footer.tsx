import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="font-display text-2xl font-bold">
            kapptar<span className="text-teal">.</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Soluções em Vendas B2B. Transformamos o talvez em sucesso através de
            prospecção corporativa estratégica.
          </p>
          <a
            href="https://www.instagram.com/kapptar"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <Instagram size={16} /> @kapptar
          </a>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Empresa
          </div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/prospeccao" className="hover:text-teal transition">Prospecção</Link></li>
            <li><Link to="/entregamos" className="hover:text-teal transition">O que Entregamos</Link></li>
            <li><Link to="/planos" className="hover:text-teal transition">Planos</Link></li>
            <li><Link to="/portfolio" className="hover:text-teal transition">Portfólio</Link></li>
            <li><Link to="/dna" className="hover:text-teal transition">Nosso DNA</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Suporte
          </div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/faq" className="hover:text-teal transition">FAQ</Link></li>
            <li><Link to="/contato" className="hover:text-teal transition">Contato</Link></li>
            <li><a href="https://wa.me/5511996443300" className="hover:text-teal transition">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Kapptar. Todos os direitos reservados.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Política de privacidade</a>
            <a href="#" className="hover:text-foreground">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
