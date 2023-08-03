import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  server: {
    port: 5000,
  },
  css: {
  preprocessorOptions: {
    scss: {
      additionalData: `@import "/src/styles/_const.scss", "/src/styles/_mixins.scss";`,
    },
  },
},
});
