# Cypress E2E Testing - Task 2 (Assertions, Aliases, Custom Commands)

## Overview
This task focuses on advanced Cypress concepts such as assertions, aliases, custom commands, and hooks.

## Website Tested
https://www.saucedemo.com

---

## Concepts Covered

### Assertions
- Visibility checks
- Text validation
- Attribute validation
- Negative assertions

### Alias
- Using cy.get().as()
- Reusing elements in same test

### Custom Commands
- Created reusable login command

### Hooks
- Used beforeEach to reduce repetition

---

## File Structure

cypress/e2e/task2/
- assertions.cy.js
- alias.cy.js
- custom-command.cy.js

cypress/support/
- commands.js

---

## Screenshots

All screenshots stored in:

cypress/screenshots/

task2-alias/
- alias-example.png

task2-custom-command/
- custom-command-login.png

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

---

## Learning Outcomes
- Learned Cypress auto-waiting behavior
- Learned reusable test design using custom commands
- Learned aliasing for cleaner tests
- Improved test structure using hooks