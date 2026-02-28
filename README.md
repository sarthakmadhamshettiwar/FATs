# Frequently Added Together (FAT) – Prototype

A simple prototype that showcases **Frequently Added Together (FAT)** products in an e-commerce flow.

## Overview

When a user adds a product to the cart, the UI displays related products that are frequently purchased together with it.

Currently, all product and FAT data is **hard-coded** inside the `data/*` directory.

---

## Features

### 1. Frequently Added Together Suggestions

* When a product is added, related products are displayed.
* These suggestions are statically defined in the project.

### 2. Local Storage Persistence

* Cart state is stored in `localStorage`.
* This ensures:

  * If a user adds a product, removes it, and later re-adds it, the state remains consistent.
* A feature flag in the `.env` file controls localStorage-related behavior (added for handling edge cases safely).

### 3. State Synchronization

If the same product appears:

* In the main product listing, and
* As a Frequently Added Together item for another product,

Then:

* Both references always share the same quantity.
* This ensures consistency since they represent the same underlying product.

---

## Tech Assumptions

* Node.js version: **20**
* Frontend framework: React (Vite-based setup assumed)

---

## Running the Project

```bash
npm install
npm run dev
```

Make sure you're using **Node 20** before starting the project.

