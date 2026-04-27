import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 bg-mesh opacity-60" aria-hidden />
      <Header />
      <main className="relative z-10 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
