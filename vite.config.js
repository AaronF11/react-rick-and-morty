import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://aaronf11.github.io/react-rick-and-morty",
  plugins: [react(), eslint()],
});
