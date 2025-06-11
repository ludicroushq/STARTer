import interTightWoff2 from "@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2?url";
import interWoff2 from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { ReactNode } from "react";
import interCss from "@fontsource-variable/inter/wght.css?url";
import interTightCss from "@fontsource-variable/inter-tight/wght.css?url";
import { Toaster } from "react-hot-toast";
import { Footer } from "./-components/footer";
import { Navbar } from "./-components/navbar";
import { NotFound } from "./-components/not-found";
import { client } from "@/server/client";
import appCss from "@/styles.css?url";
import { config } from "@/config";

export const Route = createRootRoute({
  beforeLoad: async () => {
    const session = await client.auth.getSession();
    return { user: session?.user };
  },
  component: RootComponent,
  loader: async ({ context }) => {
    return {
      user: context.user,
    };
  },
  notFoundComponent: NotFound,
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
      <TanStackRouterDevtools />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="h-full">
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
