# Cypress E2E Testing - Task 1 (UI Functional Testing)

## Overview
This project contains end-to-end (E2E) tests using Cypress for login, navigation, and checkout form functionality.

## Website Tested
https://www.saucedemo.com

---

## Test Cases

### Login Tests
- Valid login
- Invalid password login
- Empty fields login

### Navigation Tests
- Open product details page
- Navigate back to products page

### Form Test (Checkout)
- Add item to cart
- Complete checkout process

---

## File Structure

cypress/e2e/task1/
- login.cy.js
- navigation.cy.js
- form.cy.js

---

## Screenshots

All screenshots are stored in:

cypress/screenshots/

task1-login/
- login-success.png
- login-invalid-password.png
- login-empty-fields.png

task2-navigation/
- back-to-products.png
- product-details.png

task1-checkout/
- checkout-summary.png

---

## How to Run

Open Cypress:
npx cypress open

Run tests:
npx cypress run

---

## Tools Used
- Cypress
- JavaScript
- Chrome Browser

---

## Learning Outcomes
- Learned Cypress E2E testing basics
- Learned login validation testing
- Practiced navigation and form automation
- Used stable screenshot strategy