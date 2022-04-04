import { createContext, useState } from "react";

const CartContext = createContext({});

function CartProvider({ children }) {
  const [price, setprice] = useState(0);

  return (
    <CartContext.Provider value={{ price, setprice }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
export default CartContext;
