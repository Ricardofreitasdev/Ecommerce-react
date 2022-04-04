import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/scss/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from "./context/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
