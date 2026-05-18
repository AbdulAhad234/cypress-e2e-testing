# Cypress E2E Testing Assignment

## Overview
This repository contains End-to-End (E2E) testing tasks implemented using Cypress on the SauceDemo practice website.

The project covers:
- UI Functional Testing
- Assertions
- Aliases
- Custom Commands
- Hooks and reusable test structure

---

# Task Documentation

## 📘 Task 1 - UI Functional Testing
Detailed documentation for Task 1 is available in:

```text
README_TASK1.md
```

Task 1 includes:
- Login Tests
- Navigation Tests
- Form/Checkout Tests

---

## 📘 Task 2 - Assertions, Aliases & Custom Commands
Detailed documentation for Task 2 is available in:

```text
README_TASK2.md
```

Task 2 includes:
- Assertions
- Negative Assertions
- Aliases
- Custom Commands
- beforeEach Hooks

---

# Running the Project

Install dependencies:

```bash
npm install
```

Open Cypress:

```bash
npx cypress open
```

Run tests in headless mode:

```bash
npx cypress run
```

---

# Reflection

One of the main challenges I faced was handling unstable UI behavior during screenshot capture in Cypress. Initially, screenshots were failing with buffer-related errors due to page rendering issues. I solved this by changing screenshot capture mode from full-page to viewport mode and creating a reusable stable screenshot command. Another challenge was understanding Cypress auto-waiting behavior, which initially caused me to overuse manual delays. After learning proper assertion-based synchronization, I was able to make the tests cleaner and more stable.

---
