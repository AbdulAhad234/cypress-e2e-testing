describe("Task 2 - Alias", () => {
  it("Alias example", () => {
    cy.visit("/");

    cy.get("#user-name").as("username");

    cy.get("@username").type("standard_user");

    cy.get("@username").should("have.value", "standard_user");

    cy.stableScreenshot("task2-alias", "alias-example");
  });
});
