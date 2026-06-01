import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {


  const [orderDetail, setOrderDetail] = useState({});

  const allPizzas = Object.values(orderDetail).flat() || []
  const totalPrice = allPizzas?.reduce((acc, pizza) => {
    return acc + pizza.price
  }, 0);

  return (
    <CartContext.Provider
      value={{ orderDetail, setOrderDetail, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;