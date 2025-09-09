import { Sidequest } from "sidequest";
import { env } from "@/env/server";

// biome-ignore lint/performance/noBarrelFile: all jobs
export * as jobs from "./jobs";

export const config = {
  backend: {
    config: {
      connection: env.DATABASE_URL,
      searchPath: ["sidequest"],
    },
    driver: "@sidequest/postgres-backend",
  },
  dashboard: {
    enabled: false,
  },
};
Sidequest.configure(config);
export const sidequest = Sidequest;
