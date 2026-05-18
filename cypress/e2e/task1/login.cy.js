describe("Task 1 - Login Tests (Stable QA Version)", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#user-name").should("be.visible");
  });

  it("Login Test 1 - Valid Login", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");

    cy.get("#login-button").click();

    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain.text", "Products");

    cy.wait(800);
    cy.stableScreenshot("task1-login", "login-success");
  });

  it("Login Test 2 - Invalid Password", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("wrong_password");

    cy.get("#login-button").click();

    cy.get("[data-test='error']")
      .should("be.visible")
      .and("contain.text", "Username and password do not match");

    cy.wait(800);
    cy.stableScreenshot("task1-login", "login-invalid-password");
  });

  it("Login Test 3 - Empty Fields", () => {
    cy.get("#login-button").click();

    cy.get("[data-test='error']").should("be.visible");

    cy.wait(800);
    cy.stableScreenshot("task1-login", "login-empty-fields");
  });
});
