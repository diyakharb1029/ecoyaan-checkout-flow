# Ecoyaan Checkout Flow

A simplified checkout flow inspired by Ecoyaan, built using **Next.js, React, and Tailwind CSS** as part of a frontend engineering assignment.

This project demonstrates a responsive multi-step checkout experience where users can review their cart, enter shipping details, simulate a payment, and view an order success page.

---

## Features

- Multi-step checkout flow (Cart → Shipping → Payment → Success)
- Server-rendered cart data using Next.js
- Shared state management using React Context API
- Shipping address form with basic validation
- Responsive design for mobile and desktop
- Clean and modular component structure

---

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Context API

---

## Architecture Overview

### Server-Side Rendering

Cart data is rendered using Next.js server-side rendering so that product and pricing data are available on the initial page load.

### State Management

React Context is used to manage and persist checkout state such as:

- Cart data
- Shipping address

across the checkout steps.

### Component-Based Structure

The UI is split into reusable components such as:

- CartItemCard
- OrderSummary
- ProgressSteps
- PageShell

This helps keep the project modular and easy to maintain.

---

## Project Structure
app/
components/
context/
lib/
types/

- **components** – reusable UI components  
- **context** – global checkout state management  
- **lib** – utility functions and mock data  
- **types** – TypeScript type definitions

  ---

## Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/ecoyaan-checkout-flow.git

Navigate to the project folder:
cd ecoyaan-checkout-flow
Install dependencies:
npm install
Run the development server:
npm run dev
Open the application in your browser:
http://localhost:3000
