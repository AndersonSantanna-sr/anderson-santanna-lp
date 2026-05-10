import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Prefer CSS classes over inline styles. Dynamic values (e.g. computed
      // gradients) are the only acceptable exception — suppress with eslint-disable.
      "react/forbid-dom-props": [
        "warn",
        {
          forbid: [
            {
              propName: "style",
              message: "Use a CSS class instead of an inline style prop.",
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
