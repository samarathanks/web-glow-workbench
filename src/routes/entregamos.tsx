import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/entregamos")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "solucoes" });
  },
});
