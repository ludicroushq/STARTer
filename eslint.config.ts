import neostandard, { resolveIgnoresFromGitignore } from "neostandard";
import packageJson from "eslint-plugin-package-json";
import pluginRouter from "@tanstack/eslint-plugin-router";
import pluginQuery from "@tanstack/eslint-plugin-query";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  ...neostandard({
    ignores: [...resolveIgnoresFromGitignore(), "package-lock.json"],
    noStyle: true,
    ts: true,
  }),
  ...pluginRouter.configs["flat/recommended"],
  ...pluginQuery.configs["flat/recommended"],
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      "import-x/consistent-type-specifier-style": "error",
      "import-x/order": "error",
    },
  },
  packageJson.configs.recommended,
  {
    plugins: {
      "package-json": packageJson,
    },
    rules: {
      "package-json/require-description": "off",
      "package-json/require-version": "off",
      "package-json/sort-collections": [
        "error",
        [
          "config",
          "dependencies",
          "devDependencies",
          "exports",
          "lint-staged",
          "overrides",
          "peerDependencies",
          "scripts",
          "wireit",
        ],
      ],
    },
  },
];
