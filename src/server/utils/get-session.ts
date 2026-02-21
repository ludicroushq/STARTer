import { getRequestHeaders } from "@tanstack/react-start/server";
import { cache } from "react";
import { Auth } from "@/lib/auth";

export const getSession = cache(() => {
  const auth = new Auth();
  return auth.api.getSession({
    headers: getRequestHeaders(),
  });
});
