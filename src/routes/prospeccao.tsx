import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/prospeccao")({
  beforeLoad: () => {
    throw redirect({ to: "/solucoes/outbound-b2b" });
  },
});
