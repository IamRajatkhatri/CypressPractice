import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://learn.cypress.io/",
    supportFile: false,
    specPattern: "cypress/e2e/**/*.cy.ts",
    setupNodeEvents(on, config) {
     
    },
    // video: true,
  },

  env: {
    theme: "dark"
  },
  video:true,
 // pageLoadTimeout: 20000 ,
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
  }
);
