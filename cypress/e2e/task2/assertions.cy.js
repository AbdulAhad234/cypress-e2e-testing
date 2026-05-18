describe("Task 2 - Assertions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visible assertion", () => {
    cy.get("#login-button").should("be.visible");
  });

  it("Text assertion", () => {
    cy.get(".login_logo").should("contain.text", "Swag Labs");
  });

  it("Attribute assertion", () => {
    cy.get("#user-name").should("have.attr", "placeholder", "Username");
  });
});
