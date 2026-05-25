import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [orderDetail, setOrderDetail] = useState({});
//   console.log(orderDetail);

  const allPizzas = Object.values(orderDetail).flat() || []
  console.log(allPizzas)
  const totalPrice = allPizzas?.reduce((acc, pizza) => {
    return acc + pizza.price
  }, 0);

  return (
    <CartContext.Provider
      value={{ user, setUser, orderDetail, setOrderDetail, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default GlobalProvider;