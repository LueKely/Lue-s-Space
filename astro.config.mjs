// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://luekely.github.io",
  base: "lue-s-space",
  integrations: [mdx(), sitemap()],
  redirects: {
    "/": "/lue-s-space/blog",
  },
  markdown: {
    shikiConfig: {
      theme: "vitesse-dark",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
