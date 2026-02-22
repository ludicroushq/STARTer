import dotenvx from "@dotenvx/dotenvx";
import tailwindcss from "@tailwindcss/vite";

dotenvx.config({
  convention: "nextjs",
  ignore: ["MISSING_ENV_FILE"],
  quiet: true,
});

import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { workflow } from "workflow/vite";

const config = defineConfig({
  plugins: [
    devtools(),
    nitro(),
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart(),
    nitro({
      preset: process.env.VERCEL ? "vercel" : "bun",
    }),
    workflow(),
    viteReact({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
});

export default config;
