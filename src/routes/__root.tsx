/// <reference types="vite/client" />
import interWoff2 from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url";
import interCss from "@fontsource-variable/inter/wght.css?url";
import interTightWoff2 from "@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2?url";
import interTightCss from "@fontsource-variable/inter-tight/wght.css?url";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { config } from "@/config";
import { orpc } from "@/server/client";
import appCss from "@/styles.css?url";
import { Footer } from "./-components/footer";
import { Navbar } from "./-components/navbar";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  beforeLoad: async ({ context }) => {
    const session = await context.queryClient.fetchQuery(
      orpc.auth.getSession.queryOptions()
    );
    return { user: session?.user };
  },
  component: RootComponent,
  head: () => ({
    links: [
      {
        href: appCss,
        rel: "stylesheet",
      },
      {
        href: interCss,
        rel: "stylesheet",
      },
      {
        href: interTightCss,
        rel: "stylesheet",
      },
      {
        as: "font",
        crossOrigin: "anonymous",
        href: interWoff2,
        rel: "preload",
        type: "font/woff2",
      },
      {
        as: "font",
        crossOrigin: "anonymous",
        href: interTightWoff2,
        rel: "preload",
        type: "font/woff2",
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
        title: config.name,
      },
    ],
  }),
  loader: ({ context }) => ({
    user: context.user,
  }),
});

function RootComponent() {
  const { user } = Route.useLoaderData();

  return (
    <RootDocument>
      <Navbar user={user} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      <Toaster />
      <TanStackRouterDevtools position="bottom-right" />
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className="h-full" lang="en">
      {/** biome-ignore lint/style/noHeadElement: tanstack-start */}
      <head>
        <HeadContent />
      </head>
      <body className="flex h-full flex-col">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
