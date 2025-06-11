import { createFileRoute } from "@tanstack/react-router";
import { config } from "@/config";

export const Route = createFileRoute("/_unauthenticated/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="container mx-auto my-8">Hello {config.name}!</div>;
}
