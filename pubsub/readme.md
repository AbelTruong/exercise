# 🛒 Cart Drawer Demo with Pub/Sub in Vanilla JavaScript

This is a simple static HTML demo that implements a **shopping cart drawer UI** using **vanilla JavaScript** with a lightweight **Pub/Sub (Publish/Subscribe)** system. The design emphasizes modular interaction between data (CartItems) and UI (CartDrawerItems), all without any external libraries or frameworks.

---

## 📌 Features

- ✅ Display a list of mock cart items.
- ➕ Update item quantity with `+` / `-` buttons.
- 🗑️ Remove individual items with a delete button.
- 🛒 Add a default product with a dynamic ID.
- 🔄 Automatically re-render cart UI on any change.
- 🧩 Pub/Sub system for decoupled, event-driven architecture.

---

## 📁 File Structure

cart-drawer-demo/
│
├── index.html # All HTML, CSS, JS included here
└── README.md # Project documentation


---

## 🧠 Key Components

### `PubSub`
A simple custom event bus for communication between components.

- `PubSub.subscribe(eventName, callback)`
- `PubSub.publish(eventName, data)`

### `CartItems`
Responsible for:
- Storing and modifying the cart data
- Publishing `CART_UPDATED` when changes occur

Main methods:
- `addItem(product)`
- `updateItem(id, quantity)`
- `removeItem(id)`
- `getItems()`

### `CartDrawerItems`
Responsible for:
- Rendering cart item DOM elements
- Listening to cart updates via `PubSub`
- Dispatching `QTY_CHANGED` or `ITEM_REMOVED` events on user action

---

## 🔄 Event Flow

1. `Add to Cart` → `PRODUCT_ADDED` logic via `cartItems.addItem()`  
2. `+` or `-` click → `QTY_CHANGED` → updates item quantity → triggers `CART_UPDATED`  
3. `✕` click → `ITEM_REMOVED` → removes product from data → triggers `CART_UPDATED`  
4. `CART_UPDATED` → `CartDrawerItems.render()` re-renders the entire list

---

## 🚀 How to Use

1. Open `index.html` in any modern browser.
2. You’ll see a cart with two mock items.
3. Interact with:
   - `+` / `-` to change quantity
   - `✕` to remove an item
   - `Add Default Product` to insert a new product with a unique ID

---

## 📘 Learning Objectives

- Understand how to separate concerns in a JavaScript application.
- Practice modular class design (`CartItems`, `CartDrawerItems`).
- Implement a basic publish/subscribe system to handle decoupled events.
- Simulate cart behavior similar to e-commerce platforms (like Shopify sections).

---

## 🛠 Future Enhancements (Optional Ideas)

- Save cart data to `localStorage`
- Show total price and item count
- Add undo for delete
- Extract to ES modules (`.js` files)
- Add UI transitions or animations

---

> This is a great foundational practice for building interactive UI components without relying on frameworks.
