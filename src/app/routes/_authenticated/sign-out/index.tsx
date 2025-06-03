import { createFileRoute, redirect } from "@tanstack/react-router";
import { authClient } from "@/auth-client";

export const Route = createFileRoute("/_authenticated/sign-out/")({
  component: RouteComponent,
  loader: async () => {
    await authClient.signOut({
      fetchOptions: {
        onError() {
          throw redirect({ to: "/" });
        },
        onSuccess() {
          throw redirect({ to: "/" });
        },
      },
    });
  },
  preload: false,
});

function RouteComponent() {
  return null;
}
