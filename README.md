# FoodExpress 🍔🔥

A fully functional, multi-page food delivery web application built with React. Users can browse a menu, filter by category, search for meals, manage a shopping cart, and complete a mock checkout process.

**🔗 Live Demo:** [PASTE YOUR VERCEL LINK HERE]

## 🛠️ Tech Stack
- **Frontend:** React.js, React Router DOM, Context API
- **Styling:** CSS3 (CSS Variables, Flexbox, Grid)
- **Build Tool:** Vite
- **State Management:** Custom Context API for global cart state

## ✨ Key Features
- **Multi-page Routing:** Seamless navigation between Home, Menu, Cart, About, and Contact pages using React Router.
- **Global Cart State:** Used React Context API to manage cart items, quantities, and totals across all pages without prop-drilling.
- **Dynamic Search & Filtering:** Real-time meal search using URL query parameters (`useSearchParams`) combined with category filtering.
- **Mock Checkout Flow:** Form validation, simulated API delay, and order confirmation saved to `localStorage`.
- **Responsive Design:** Fully mobile-friendly UI with a collapsible hamburger menu.

## 🚀 Run Locally
```bash
git clone https://github.com/RedUstine/FoodExpress.git
cd FoodExpress
npm install
npm run dev
