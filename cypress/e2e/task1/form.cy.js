describe("Task 1 - Form Test (Checkout Flow Stable)", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.url().should("include", "/inventory.html");
  });

  it("Checkout Flow Test", () => {
    cy.get(".inventory_item").first().should("be.visible");

    cy.get("button.btn_inventory").first().click();

    cy.get(".shopping_cart_link").click();

    cy.get(".cart_item").should("be.visible");

    cy.get("#checkout").click();

    cy.get("#first-name").type("John");
    cy.get("#last-name").type("Doe");
    cy.get("#postal-code").type("12345");

    cy.get("#continue").click();

    cy.get(".summary_total_label").should("be.visible");

    cy.wait(800);
    cy.stableScreenshot("task1-checkout", "checkout-summary");
  });
});
