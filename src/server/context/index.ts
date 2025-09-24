import { getRequestHeaders } from "@tanstack/react-start/server";
import { cache } from "react";
import { auth } from "@/auth";

export const createContext = cache(async () => {
  const headers = getRequestHeaders();

  const session = await auth.api.getSession({
    headers: new Headers(headers as HeadersInit),
  });

  return {
    headers,
    ...session,
  };
});
