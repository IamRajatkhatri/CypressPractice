import { defineConfig } from "cypress";
//import { configureVisualRegression } from "cypress-visual-regression/dist/plugin";
import { allureCypress } from "allure-cypress/reporter";
//import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  // reporterOptions: {
  //   reporter: "mochawesome",
  //   reporterOptions: {
  //     reportDir: "cypress/reports/mochawesome",
  //     overwrite: false,
  //     html: false,
  //     json: true,
  //   },
  // },
  e2e: {
    baseUrl: "https://learn.cypress.io/",
    specPattern: "cypress/e2e/**/*.cy.ts",
    setupNodeEvents(on, config) {
      allureCypress(on);
      //reporter: "@shelex/cypress-allure-plugin",
      // env: {
      //   visualRegressionType: "regression",
      //   visualRegressionBaseDirectory: "cypress/snapshot/base",
      //   visualRegressionDiffDirectory: "cypress/snapshot/diff",
      //   visualRegressionGenerateDiff: "always",
      //   visualRegressionFailSilently: true,
      //   updateSnapshots: true,
      //},
    },
  },
  screenshotsFolder: "./cypress/snapshots/actual",
  video: true,
  chromeWebSecurity: false,
  retries: 1,
});
