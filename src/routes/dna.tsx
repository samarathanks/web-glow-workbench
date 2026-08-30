import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dna")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "como-funciona" });
  },
});
