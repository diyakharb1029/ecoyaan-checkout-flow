# Ecoyaan Checkout Flow

A simplified checkout flow inspired by **Ecoyaan**, built using **Next.js, React, TypeScript, and Tailwind CSS** as part of a frontend engineering assignment.

The application demonstrates a responsive multi-step checkout experience where users can review their cart, enter shipping details, simulate payment, and view an order success page.

---

## Live Demo

https://ecoyaan-checkout-flow-sigma.vercel.app

---

## GitHub Repository

https://github.com/diyakharb1029/ecoyaan-checkout-flow

---

# Features

### Checkout Flow

- Cart / Order Summary
- Shipping Address Form
- Payment Confirmation
- Order Success Page

### Additional Features

- Server-Side Rendering using Next.js
- Shared state management using React Context API
- Form validation for shipping details
- Responsive UI for mobile and desktop
- Clean and modular component architecture

---

# Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Context API**

---

# Architecture Overview

## Server-Side Rendering (SSR)

Cart data is rendered using **Next.js Server Components / SSR**, ensuring that product information and pricing are available during the initial page load.

## State Management

The application uses **React Context API** to maintain checkout state across different steps, including:

- Cart items
- Shipping address
- Order summary

This allows data to persist while navigating between checkout screens.

## Component-Based Architecture

The UI is split into reusable components such as:

- `CartItemCard`
- `OrderSummary`
- `ProgressSteps`
- `PageShell`

This modular structure improves maintainability and code readability.

---

# Project Structure

```

app/
components/
context/
lib/
types/

```

### components
Reusable UI components used across the checkout flow.

### context
Global checkout state management using React Context.

### lib
Utility functions and mock data.

### types
TypeScript interfaces and type definitions.

---

# Running the Project Locally

Clone the repository:

```

git clone [https://github.com/diyakharb1029/ecoyaan-checkout-flow.git](https://github.com/diyakharb1029/ecoyaan-checkout-flow.git)

```

Navigate to the project directory:

```

cd ecoyaan-checkout-flow

```

Install dependencies:

```

npm install

```

Run the development server:

```

npm run dev

```

Open in your browser:

```

http://localhost:3000

```
