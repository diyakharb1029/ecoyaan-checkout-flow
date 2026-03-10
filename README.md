# Ecoyaan Checkout Flow

A simplified checkout flow inspired by **Ecoyaan**, built using **Next.js, React, TypeScript, and Tailwind CSS** as part of a frontend engineering assignment.

The application demonstrates a responsive multi-step checkout experience where users can review their cart, enter shipping details, simulate payment, and view an order success page.

---

## Live Demo

https://ecoyaan-checkout-flow-sigma.vercel.app

## Screenshots

### Cart / Order Review
<img width="1396" height="810" alt="Screenshot 2026-03-10 at 10 28 08 PM" src="https://github.com/user-attachments/assets/bbf70aec-3ce9-4576-bd48-c28b7711e84b" />

### Shipping Address
<img width="1385" height="809" alt="Screenshot 2026-03-10 at 10 28 21 PM" src="https://github.com/user-attachments/assets/2c2aab6c-047a-4562-93d6-e75b22b78108" />

### Payment Page
<img width="1375" height="805" alt="Screenshot 2026-03-10 at 10 29 17 PM" src="https://github.com/user-attachments/assets/99e91c4f-10e7-44c5-bb47-53f0fd5b92b8" />

### Order Success
<img width="1392" height="770" alt="Screenshot 2026-03-10 at 10 29 28 PM" src="https://github.com/user-attachments/assets/090a694d-e4ec-4e2b-8008-4d6a46bdb2e5" />
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
