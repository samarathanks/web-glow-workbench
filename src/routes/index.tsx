import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Users, BarChart3, Sparkles, CheckCircle2, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroBg from "@/assets/hero-bg.jpg";
import teamImg from "@/assets/team-meeting.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kapptar — Prospecção B2B que transforma o talvez em sucesso" },
      { name: "description", content: "Geramos leads qualificados e reuniões B2B com decisores engajados. Cold Calling 2.0, Cold Mail e LinkedIn em uma squad dedicada." },
      { property: "og:title", content: "Kapptar — Prospecção B2B" },
      { property: "og:description", content: "Mais de 1.000 reuniões agendadas para 80+ empresas em 8 segmentos." },
    ],
  }),
  component: HomePage,
});

const pillars = [
  { icon: Target, title: "Outbound", desc: "Vá atrás do seu próximo negócio. Não fique passivo esperando indicações." },
  { icon: BarChart3, title: "Negócios", desc: "Tenha uma célula de prospecção ativa enquanto foca no seu core." },
  { icon: Users, title: "Qualificação", desc: "Reuniões com decisores qualificados e engajados, prontos para conversar." },
  { icon: Sparkles, title: "Boas Práticas", desc: "Prospecção corporativa com tecnologia e trabalho estratégico." },
  { icon: CheckCircle2, title: "Funil de Vendas", desc: "Pipeline previsível com cadências, métricas e estágios bem definidos." },
];

const stats = [
  { value: "1.000+", label: "Reuniões agendadas" },
  { value: "80+", label: "Empresas atendidas" },
  { value: "8", label: "Segmentos de mercado" },
  { value: "5", label: "Pilares da metodologia" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" width={1920} height={1280} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="container mx-auto px-6 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            Prospecção Corporativa B2B · Soluções em Vendas
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight text-balance">
            Transforme o <span className="text-gradient">talvez</span><br className="hidden md:block" /> em sucesso.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Mantenha o foco no seu negócio. Nós cuidamos da operação de prospecção,
            gerando leads qualificados e reuniões de valor com decisores engajados.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/entregamos"
              className="px-7 py-3.5 rounded-full font-semibold text-primary-foreground bg-gradient-brand shadow-glow hover:opacity-90 transition inline-flex items-center gap-2"
            >
              Saiba Mais <ArrowRight size={18} />
            </Link>
            <Link
              to="/contato"
              className="px-7 py-3.5 rounded-full glass font-semibold hover:bg-white/10 transition"
            >
              Contratar
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="p-6 rounded-2xl glass">
                <div className="font-display text-3xl md:text-4xl font-bold text-teal">{s.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE ENTREGAMOS */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-4">
              O que Entregamos
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance">
              Mantenha o foco no seu negócio.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Realizamos o mapeamento de novos leads qualificados através de abordagens
              mistas entre <strong className="text-foreground">Cold Calling 2.0, Cold Mail e LinkedIn</strong>,
              agendando reuniões B2B com compradores e decisores engajados.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Eles serão convidados a falar com seus executivos de vendas já sabendo o que
              vocês produzem e solucionam, com uma real visão de evolução para fazer novos
              negócios, parcerias e conexões.
            </p>
            <Link
              to="/entregamos"
              className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all"
            >
              Ver entregas em detalhe <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-3xl rounded-3xl" />
            <img
              src={teamImg}
              alt="Equipe Kapptar em reunião"
              loading="lazy"
              width={1280}
              height={1280}
              className="relative rounded-3xl shadow-elevated border border-border"
            />
          </div>
        </div>
      </section>

      {/* MÉTODO — 5 PILARES */}
      <section className="py-24 md:py-32 bg-surface/40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-4">
              O Método
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-balance">
              Os <span className="text-gradient">5 pilares</span> que sustentam cada operação.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="group p-8 rounded-2xl glass hover:border-teal/40 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow">
                    <p.icon size={22} className="text-primary-foreground" />
                  </div>
                  <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DNA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-6">
            Nosso DNA
          </div>
          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-balance">
            "A nossa missão é <span className="text-gradient">conectar</span>. Não se trata
            apenas de negócios fechados — tem a ver com sonhos de empreendedores e
            executivos que esperam por uma única oportunidade de mostrar o quanto são capazes."
          </blockquote>
          <div className="mt-8 text-sm text-muted-foreground">— Time Kapptar</div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl p-12 md:p-20 overflow-hidden text-center bg-surface border border-border">
            <div className="absolute inset-0 bg-mesh opacity-80" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight text-balance">
                Pronto para um <span className="text-gradient">funil previsível</span>?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
                Fale com um especialista e descubra como podemos abrir as portas dos
                seus próximos clientes.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contato"
                  className="px-7 py-3.5 rounded-full font-semibold text-primary-foreground bg-gradient-brand shadow-glow hover:opacity-90 transition inline-flex items-center gap-2"
                >
                  Quero contratar <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/5511996443300"
                  className="px-7 py-3.5 rounded-full glass font-semibold hover:bg-white/10 transition inline-flex items-center gap-2"
                >
                  <Phone size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
