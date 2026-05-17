import { useState } from "react";
import { pizzaCart } from "../../pizzas";
import NavBar from "../components/NavBar";

const Cart = () => {
  const [cart, setCart] = useState(
    pizzaCart.map((pizza) => ({ ...pizza, count: 0 })),
  );

  const modificarCarrito = (operacion, id) => {
    const newCart = cart.map((pizza) => {
      if (pizza.id === id) {
        if (operacion === "suma") {
          return { ...pizza, count: pizza.count + 1 };
        }
        if (operacion === "resta" && pizza.count >= 1) {
          return { ...pizza, count: pizza.count - 1 };
        }
      }
      return pizza;
    });

    setCart(newCart);
  };

  const total = cart.reduce((acc, pizza) => {
    return acc + pizza.price * pizza.count;
  }, 0);

  return (
    <>
      <div className="container mb-5">
        <h1 className="mt-5">Detalles del Pedido:</h1>
        {cart.map((pizza, indice) => (
          <div key={indice} className="d-flex m-5">
            <img
              className="card-img-top"
              style={{
                width: "8rem",
                height: "8rem",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              src={pizza.img}
              alt=""
            />
            <div className="d-flex row" style={{ width: "50rem" }}>
              <h1
                className="d-flex m-3 align-items-center"
                style={{ width: "18rem" }}
              >
                {pizza.name}
              </h1>
              <h4 className="ms-3">${pizza.price}</h4>
            </div>
            <h1
              className="d-flex m-3 align-items-center"
              style={{ width: "10rem" }}
            >
              $ {pizza.price * pizza.count}
            </h1>
            <div className="d-flex align-items-center">
              <button
                onClick={() => modificarCarrito("suma", pizza.id)}
                className="btn btn-outline-danger"
                style={{ height: "3em", width: "3em" }}
              >
                +
              </button>
              <h4 className="d-flex align-items-center m-3">{pizza.count}</h4>
              <button
                onClick={() => modificarCarrito("resta", pizza.id)}
                className="btn btn-outline-primary"
                style={{ height: "3em", width: "3em" }}
              >
                -
              </button>
            </div>
          </div>
        ))}

        <h1>Total: $ {total.toLocaleString()}</h1>
        <button className="btn btn-dark">Pagar</button>
      </div>
    </>
  );
};
export default Cart;
