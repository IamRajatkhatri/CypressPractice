import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
   // video: true,
  },
  chromeWebSecurity: false,
  retries:1
});
