import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {configDefaults} from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setup.ts",
    // exclude: [...configDefaults.exclude, "./src/env.test.ts"],
  },
  base: "/ai-generated-code-test/"
})
