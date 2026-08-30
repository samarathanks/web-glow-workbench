import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, Instagram, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Diagnóstico gratuito — Kapptar" },
      {
        name: "description",
        content:
          "Solicite um diagnóstico gratuito e entenda qual é o próximo passo da sua operação comercial: organizar, gerar ou delegar.",
      },
      { property: "og:title", content: "Solicitar diagnóstico gratuito — Kapptar" },
      {
        property: "og:description",
        content: "Conte onde sua operação comercial está hoje. Nós indicamos o próximo passo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DiagnosticoPage,
});

const desafios = [
  "Organizar o processo comercial",
  "Gerar oportunidades com prospecção",
  "Delegar a qualificação de leads",
  "Ainda não sei — quero entender",
];

const cenarios = [
  "Não temos processo definido",
  "Temos processo, mas falta previsibilidade",
  "Temos processo e queremos escalar",
];

function DiagnosticoPage() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Solicitação enviada. Entraremos em contato para agendar o diagnóstico.");
      form.reset();
    }, 800);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Diagnóstico gratuito"
        title="Vamos entender onde sua operação comercial está hoje."
        description="Uma conversa para ler o cenário, o processo e o objetivo — e indicar qual é o próximo passo mais adequado."
      />

      <section className="pb-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8 max-w-6xl">
          <div className="lg:col-span-2 p-8 md:p-10 rounded-3xl glass">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Nome completo" name="nome" required />
                <Field label="Empresa" name="empresa" required />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Cargo" name="cargo" />
                <Field label="Email corporativo" name="email" type="email" required />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="WhatsApp" name="whatsapp" required />
                <Field label="Site da empresa" name="site" />
              </div>

              <Select label="Principal desafio hoje" name="desafio" options={desafios} />
              <Select label="Como está sua operação comercial" name="cenario" options={cenarios} />

              <div>
                <label htmlFor="contexto" className="block text-sm text-muted-foreground mb-2">
                  Conte um pouco do contexto
                </label>
                <textarea
                  id="contexto"
                  name="contexto"
                  rows={4}
                  className="w-full rounded-xl bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-teal/50 transition"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full px-7 py-4 rounded-full font-semibold text-primary-foreground bg-gradient-brand shadow-glow hover:opacity-90 disabled:opacity-50 transition inline-flex items-center justify-center gap-2"
              >
                <Send size={18} /> {sending ? "Enviando..." : "Solicitar diagnóstico gratuito"}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Sem compromisso. Usamos as informações apenas para preparar a conversa.
              </p>
            </form>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl glass p-6">
              <h2 className="font-display text-lg font-bold">Como funciona</h2>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>1. Você envia o contexto da sua operação.</li>
                <li>2. Agendamos uma conversa de diagnóstico.</li>
                <li>3. Indicamos o próximo passo: organizar, gerar ou delegar.</li>
              </ol>
            </div>
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
      <label htmlFor={name} className="block text-sm text-muted-foreground mb-2">
        {label} {required && <span className="text-teal">*</span>}
      </label>
      <input
        id={name}
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
      <label htmlFor={name} className="block text-sm text-muted-foreground mb-2">
        {label}
      </label>
      <select
        id={name}
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
      <div className="font-display font-semibold mt-1 group-hover:text-teal transition">{value}</div>
    </a>
  );
}
