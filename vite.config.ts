import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPath from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPath()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      src: "/",
    },
  },
});
