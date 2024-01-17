import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://jovannyrch.github.io",
  base: "/tablas_de_verdad_calculadora",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
