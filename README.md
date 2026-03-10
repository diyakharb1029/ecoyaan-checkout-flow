<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
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
>>>>>>> d7910abcbcbaf11b0b5e67dd7eccc2155c4a0214
