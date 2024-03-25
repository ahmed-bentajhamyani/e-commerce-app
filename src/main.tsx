import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.tsx";
import App from "./App.tsx";
import "./index.css";
import { WishlistProvider } from "./context/WishlistContext.tsx";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
