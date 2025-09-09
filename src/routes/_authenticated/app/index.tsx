import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/app/")({
  component: RouteComponent,
  loader({ context }) {
    const { user } = context;

    return {
      user,
    };
  },
});

function RouteComponent() {
  const { user } = Route.useLoaderData();
  return <div className="container mx-auto my-8">Hello {user.name}!</div>;
}
