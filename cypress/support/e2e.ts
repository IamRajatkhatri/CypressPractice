
import 'cypress-iframe';
import './commands';
import "cypress-runner-themes";
import "allure-cypress/commands";
//import "@shelex/cypress-allure-plugin";
// import { addCompareSnapshotCommand } from 'cypress-visual-regression/dist/command';
// addCompareSnapshotCommand();

const app = window.top;
if (!app?.document.head.querySelector("[data-hide-command-log-request]")) {
  const style = app?.document.createElement("style");
  style!.innerHTML = ".command-name-request,command-name-xhr {display:none}";
  style?.setAttribute("data-hide-command-log-request", "");
  style && app?.document.head.appendChild(style);
}

Cypress.on("uncaught:exception",(err,runnables)=>{
   return false;
})
