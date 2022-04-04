import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

export default function Whatsapp() {
  const { price, setprice } = useContext(CartContext);

  function addCart() {
    setprice(price + 50);
  }

  return (
    <div className="whatsapp">
      <p>{price}</p>
      <img src="/icons/whatsapp_icon.svg" alt="whatsapp" />
      <button type="button" onClick={() => addCart()}>
        click
      </button>
    </div>
  );
}
