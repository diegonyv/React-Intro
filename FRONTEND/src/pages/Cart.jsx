import { useState, useContext, useEffect } from "react";
import { pizzaCart } from "../../pizzas";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";

const Cart = () => {
  const {token, logout} = useContext(UserContext)
  const [cart, setCart] = useState(
    pizzaCart.map((pizza) => ({ ...pizza, count: 0 })),
  );

  const { totalPrice, orderDetail, setOrderDetail } = useContext(CartContext);

  const getPizzaPrice = (pizzaList) => {
    return pizzaList?.[0]?.price * pizzaList.length;
  };

  const modificarCarrito = (operacion, pizzaList, pizzaName) => {
   // console.log("modificar carrito", operacion, pizzaList, pizzaName )
    if (operacion === "suma") {
      setOrderDetail((prevState) => {

        const prevPizza = prevState?.[pizzaName];
        return { ...prevState, [pizzaName]: [...prevPizza, pizzaList[0]] };
      });
    }
    if (operacion === "resta") {
      setOrderDetail((prevState) => {
        const prevPizza = prevState?.[pizzaName] || []
        const filteredPizza = prevPizza.slice(0, -1)
        return { ...prevState, [pizzaName]: filteredPizza };
      });
    }

  };

  return (
    <>
      <div className="container mb-5">
        <h1 className="mt-5">Detalles del Pedido:</h1>
        {Object.entries(orderDetail).map(([pizzaName, pizzaList], indice) => 
         { return pizzaList.length > 0 && <div key={indice} className="d-flex m-5">
            <img
              className="card-img-top"
              style={{
                width: "8rem",
                height: "8rem",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              src={pizzaList?.[0]?.img}
              alt=""
            />
            <div className="d-flex row" style={{ width: "50rem" }}>
              <h1
                className="d-flex m-3 align-items-center"
                style={{ width: "18rem" }}
              >
                {pizzaName}
              </h1>
              <h4 className="ms-3">${pizzaList?.[0]?.price}</h4>
            </div>
            <h1
              className="d-flex m-3 align-items-center"
              style={{ width: "10rem" }}
            >
              $ {getPizzaPrice(pizzaList)}
            </h1>
            <div className="d-flex align-items-center">
              <button
                onClick={() => modificarCarrito("suma", pizzaList, pizzaName)}
                className="btn btn-outline-danger"
                style={{ height: "3em", width: "3em" }}
              >
                +
              </button>
              <h4 className="d-flex align-items-center m-3">
                {pizzaList.length} 
              </h4>
              <button
                onClick={() => modificarCarrito("resta", pizzaList, pizzaName)}
                className="btn btn-outline-primary"
                style={{ height: "3em", width: "3em" }}
              >
                -
              </button>
            </div>
          </div>}
        )}

        <h1>Total: $ {totalPrice}</h1>
    

          <button className="btn btn-dark" disabled={!token}>Pagar</button>
       
      </div>
    </>
  );
};
export default Cart;

