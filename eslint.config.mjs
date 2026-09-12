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
    // shadcn/ui генерирует эти файлы командой `npx shadcn add` — не правим их руками
    // и не гоняем через линтер, чтобы не расходиться с оригиналом при обновлении.
    "components/ui/**",
  ]),
]);

export default eslintConfig;
