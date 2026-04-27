import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, Instagram, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Kapptar" },
      { name: "description", content: "Entre em contato com a Kapptar e descubra como acelerar suas vendas B2B." },
      { property: "og:title", content: "Contato — Kapptar" },
      { property: "og:description", content: "Fale com um especialista em prospecção corporativa." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Mensagem enviada! Entraremos em contato em breve.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Entre em Contato"
        title="Vamos conversar sobre o seu funil."
        description="Preencha o formulário ou fale direto via WhatsApp. Respondemos em até 1 dia útil."
      />

      <section className="pb-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8 max-w-6xl">
          <div className="lg:col-span-2 p-8 md:p-10 rounded-3xl glass">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Empresa" name="empresa" required />
                <Field label="Nome completo" name="nome" required />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Select label="Cargo" name="cargo" options={["CEO", "Diretor", "Gerente", "Outro"]} />
                <Field label="Email corporativo" name="email" type="email" required />
              </div>
              <Field label="Telefone / WhatsApp" name="telefone" required />

              <Select
                label="Tem interesse em"
                name="interesse"
                options={[
                  "Qualificação",
                  "Prospecção com agendamento de visita",
                  "Reativação de clientes",
                  "Conhecer melhor",
                ]}
              />

              <Select
                label="Quando precisa iniciar?"
                name="prazo"
                options={["O mais rápido possível", "Daqui 2 meses", "+ de 2 meses"]}
              />

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Mensagem</label>
                <textarea
                  name="mensagem"
                  rows={4}
                  className="w-full rounded-xl bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 transition"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full px-7 py-4 rounded-full font-semibold text-primary-foreground bg-gradient-brand shadow-glow hover:opacity-90 disabled:opacity-50 transition inline-flex items-center justify-center gap-2"
              >
                <Send size={18} /> {sending ? "Enviando..." : "Enviar mensagem"}
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <ContactCard
              icon={Phone}
              label="WhatsApp"
              value="+55 11 99644-3300"
              href="https://wa.me/5511996443300"
            />
            <ContactCard
              icon={Mail}
              label="E-mail"
              value="contato@kapptar.com"
              href="mailto:contato@kapptar.com"
            />
            <ContactCard
              icon={Instagram}
              label="Instagram"
              value="@kapptar"
              href="https://www.instagram.com/kapptar"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm text-muted-foreground mb-2">
        {label} {required && <span className="text-teal">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 transition"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-sm text-muted-foreground mb-2">{label}</label>
      <select
        name={name}
        className="w-full rounded-xl bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 transition"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block p-6 rounded-2xl glass hover:border-teal/40 transition group"
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center mb-4 shadow-glow">
        <Icon size={18} className="text-primary-foreground" />
      </div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="font-display font-semibold mt-1 group-hover:text-teal transition">
        {value}
      </div>
    </a>
  );
}
