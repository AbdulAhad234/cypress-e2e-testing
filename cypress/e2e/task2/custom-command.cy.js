describe("Task 2 - Custom Command", () => {
  it("Login using custom command", () => {
    cy.visit("/");

    cy.login("standard_user", "secret_sauce");

    cy.url().should("include", "/inventory.html");

    cy.stableScreenshot("task2-custom-command", "custom-command-login");
  });
});
