import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { orpcTanstackQueryClient } from "@/server/client";
import appCss from "../styles.css?url";
import { Footer } from "./-components/footer";
import { Navbar } from "./-components/navbar";
import { NotFound } from "./-components/not-found";
import TanStackQueryDevtools from "./-components/tanstack-query/devtools";

type MyRouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async ({ context }) => {
    const session = await context.queryClient.fetchQuery(
      orpcTanstackQueryClient.auth.getSession.queryOptions()
    );
    return { user: session?.user };
  },
  head: () => ({
    links: [
      {
        href: appCss,
        rel: "stylesheet",
      },
    ],
    meta: [
      {
        charSet: "utf-8",
      },
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
  }),
  loader: ({ context }) => ({
    user: context.user,
  }),
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const { user } = Route.useLoaderData();

  return (
    <html className="h-full" lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="flex h-full flex-col antialiased">
        <Navbar user={user} />
        <main className="grow">{children}</main>
        <Footer />

        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
