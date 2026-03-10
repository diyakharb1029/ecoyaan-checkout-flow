```markdown
# Ecoyaan Checkout Flow

A simplified checkout flow inspired by **Ecoyaan**, built using **Next.js, React, TypeScript, and Tailwind CSS** as part of a frontend engineering assignment.

The application demonstrates a multi-step checkout experience where users can review their cart, enter shipping details, simulate payment, and view an order success screen.

---

## Live Demo

https://ecoyaan-checkout-flow-sigma.vercel.app

---

## GitHub Repository

https://github.com/diyakharb1029/ecoyaan-checkout-flow

---

## Features

- Multi-step checkout flow
  - Cart / Order Summary
  - Shipping Address
  - Payment Confirmation
  - Order Success Page

- Server-Side Rendering using Next.js
- Shared state management using React Context API
- Shipping form with validation
- Clean and modular component architecture
- Responsive UI for mobile and desktop

---

## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Context API**

---

## Architecture Overview

### Server-Side Rendering (SSR)

Cart data is rendered using **Next.js Server Components / SSR**, ensuring that product information and pricing are available on the initial page load.

### State Management

The application uses **React Context API** to maintain checkout state across different steps, including:

- Cart items
- Shipping address
- Order summary

This allows data to persist while navigating between checkout screens.

### Component-Based Architecture

The UI is broken into reusable components such as:

- `CartItemCard`
- `OrderSummary`
- `ProgressSteps`
- `PageShell`

This modular structure improves maintainability and code readability.

---

## Project Structure

```

app/
components/
context/
lib/
types/

```

**components**  
Reusable UI components used across the checkout flow.

**context**  
Global checkout state management using React Context.

**lib**  
Utility functions and mock data.

**types**  
TypeScript interfaces and type definitions.

---

## Running the Project Locally

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

[http://localhost:3000](http://localhost:3000)

```

---

## Assignment Notes

This project was created as part of a frontend engineering interview assignment to demonstrate:

- Next.js SSR capabilities
- State management across multiple checkout steps
- Responsive UI design
- Modular and maintainable React architecture
```
