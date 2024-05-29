import { defineConfig } from "cypress";
import { configureVisualRegression } from "cypress-visual-regression/dist/plugin";
const { allureCypress } = require("allure-cypress/reporter");
export default defineConfig({
  e2e: {
    env: {
      
      visualRegressionType: "regression",
      visualRegressionBaseDirectory: "cypress/snapshot/base",
      visualRegressionDiffDirectory: "cypress/snapshot/diff",
      visualRegressionGenerateDiff: "always",
      visualRegressionFailSilently: true,
      updateSnapshots: true,
    
    baseUrl: "https://learn.cypress.io/",
    supportFile: false,
    specPattern: "cypress/e2e/**/*.cy.ts",
    },
 },
    screenshotsFolder: "./cypress/snapshots/actual",
    setupNodeEvents(on, config) {
      configureVisualRegression(on);
       allureCypress(on);
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
  }
);