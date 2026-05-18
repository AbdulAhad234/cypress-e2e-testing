// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

Cypress.Commands.add("slowType", (element, text) => {
  cy.get(element).type(text, { delay: 150 });
});

Cypress.Commands.add("slowClick", (element) => {
  cy.get(element).should("be.visible");
  cy.wait(800);
  cy.get(element).click();
});

Cypress.Commands.add("pauseStep", (ms = 1000) => {
  cy.wait(ms);
});