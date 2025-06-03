import { getHeaders } from "@tanstack/react-start/server";
import { cache } from "react";
import { auth } from "@/auth";

export const getContext = cache(async () => {
  const headers = getHeaders();

  const session = await auth.api.getSession({
    headers: new Headers(getHeaders() as HeadersInit),
  });

  return {
    headers,
    ...session,
  };
});
