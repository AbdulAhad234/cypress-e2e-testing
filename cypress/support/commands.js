// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
  cy.get("#user-name").type(username, { delay: 100 });
  cy.wait(500);

  cy.get("#password").type(password, { delay: 100 });
  cy.wait(500);

  cy.get("#login-button").click();
  cy.wait(1500);
});

Cypress.Commands.add("stableScreenshot", (task, name) => {
  cy.get("body").should("be.visible");
  cy.wait(500);

  const fileName = `${task}/${name}`;

  cy.screenshot(fileName, {
    capture: "viewport",
    overwrite: true,
  });
});