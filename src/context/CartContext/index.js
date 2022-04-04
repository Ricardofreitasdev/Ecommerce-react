import { createContext, useMemo, useState } from "react";

const CartContext = createContext({});

function CartProvider({ children }) {
  const [price, setprice] = useState(0);
  const values = useMemo(() => ({ price, setprice }), [price, setprice]);
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

export { CartProvider };
export default CartContext;
