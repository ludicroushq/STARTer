import { configureSync, getConsoleSink, getLogger } from "@logtape/logtape";

// Use synchronous configuration with minimal setup
const isDevelopment = process.env.NODE_ENV !== "production";

configureSync({
  filters: {},
  loggers: [
    {
      category: ["logtape", "meta"],
      lowestLevel: "warning",
      sinks: ["console"],
    },
    {
      category: [],
      lowestLevel: isDevelopment ? "debug" : "info",
      sinks: ["console"],
    },
  ],
  reset: true,
  sinks: {
    console: getConsoleSink(),
  },
});

export const logger = getLogger();
