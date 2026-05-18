describe("Task 1 - Navigation Tests (Stable QA Version)", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("be.visible");
  });

  it("Navigation Test 1 - Open Product Page", () => {
    cy.get(".inventory_item_name").first().should("be.visible").click();

    cy.get(".inventory_details_name").should("be.visible");

    cy.url().should("include", "inventory-item");

    cy.wait(800);
    cy.stableScreenshot("task1-navigation", "product-details");
  });

  it("Navigation Test 2 - Back Navigation", () => {
    cy.get(".inventory_item_name").first().click();

    cy.get(".inventory_details_name").should("be.visible");

    cy.go("back");

    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain.text", "Products");

    cy.wait(800);
    cy.stableScreenshot("task1-navigation", "back-to-products");
  });
});
