import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://learn.cypress.io/",
    supportFile: false,
    specPattern: "cypress/e2e/**/*.cy.ts",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // video: true,
  },
  video:true,
  chromeWebSecurity: false,
  retries: 1,
  reporterOptions: {
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: false,
      html: false,
      json: true
    }
  }
});
