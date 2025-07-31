import { configure, getConsoleSink, getLogger } from "@logtape/logtape";

// Use synchronous configuration with minimal setup
const isDevelopment = process.env.NODE_ENV !== "production";

configure({
  sinks: {
    console: getConsoleSink(),
  },
  filters: {},
  loggers: [
    {
      category: [],
      lowestLevel: isDevelopment ? "debug" : "info",
      sinks: ["console"],
    },
  ],
});

export const logger = getLogger();
