import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-4 max-w-6xl">
        <div className="md:col-span-2">
          <Brand className="text-2xl" />
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Kapptar — Sales Tech de inteligência comercial aplicada. Organizar o processo. Gerar
            oportunidades. Delegar a qualificação.
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
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Soluções</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/solucoes/estruturacao-comercial" className="hover:text-teal transition">
                Estruturação Comercial
              </Link>
            </li>
            <li>
              <Link to="/solucoes/outbound-b2b" className="hover:text-teal transition">
                Outbound B2B
              </Link>
            </li>
            <li>
              <Link to="/solucoes/agente-comercial-ia" className="hover:text-teal transition">
                Agente Comercial de IA
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Kapptar</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" hash="como-funciona" className="hover:text-teal transition">
                Como funciona
              </Link>
            </li>
            <li>
              <Link to="/" hash="faq" className="hover:text-teal transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-teal transition">
                Diagnóstico
              </Link>
            </li>
            <li>
              <a href="https://wa.me/5511996443300" className="hover:text-teal transition">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6 text-xs text-muted-foreground max-w-6xl">
          © {new Date().getFullYear()} Kapptar. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
