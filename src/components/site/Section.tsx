import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
  narrow?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  align = "left",
  className = "",
  narrow = false,
}: Props) {
  const isCenter = align === "center";
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-28 ${className}`}>
      <div className={`container mx-auto px-6 ${narrow ? "max-w-4xl" : "max-w-6xl"}`}>
        {(eyebrow || title || description) && (
          <div className={`mb-12 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}>
            {eyebrow && (
              <div className="text-xs uppercase tracking-[0.22em] text-teal font-semibold mb-4">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-balance">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
