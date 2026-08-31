import { Link } from "@tanstack/react-router";
import symbolAsset from "@/assets/kapptar-symbol.png.asset.json";
import wordmarkAsset from "@/assets/kapptar-wordmark-white.png.asset.json";

/**
 * Logomarca oficial da Kapptar.
 * - "lockup" (padrão): símbolo K + wordmark, na horizontal.
 * - "symbol": apenas o símbolo K.
 */
export function Brand({
  className,
  variant = "lockup",
}: {
  className?: string;
  variant?: "lockup" | "full" | "symbol";
}) {
  return (
    <Link
      to="/"
      aria-label="Kapptar — página inicial"
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
    >
      <img
        src={symbolAsset.url}
        alt="Kapptar"
        className="h-8 w-auto shrink-0"
        loading="eager"
        decoding="async"
      />
      {variant !== "symbol" && (
        <img
          src={wordmarkAsset.url}
          alt=""
          aria-hidden="true"
          className="h-[15px] w-auto shrink-0"
          loading="eager"
          decoding="async"
        />
      )}
    </Link>
  );
}
