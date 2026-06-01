import { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link, useParams } from "react-router-dom";

export default function CardPizza() {
  const [pizzas, setPizzas] = useState([]);

  const { setOrderDetail } = useContext(CartContext);
  const getPizzas = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    setPizzas(data);
  };
  useEffect(() => {
    getPizzas();
  }, []);

  const handleAddPizza = (pizza) => {
    setOrderDetail((prevState) => {
      const prevPizza = prevState?.[pizza.name] || [];
      return {
        ...prevState,
        [pizza.name]: [...prevPizza, pizza],
      };
    });
  };
  return (
    <div className="d-flex">
      {pizzas.map((pizza, indice) => (
        <div key={indice} className="card m-3" style={{ width: "18rem" }}>
          <img src={pizza.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{pizza.name}</h5>
            <p>{pizza.desc}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4 className="text-center fw-lighter">Ingredientes:</h4>
              <ul>
                🍕
                <li>{pizza.ingredients[0]}</li>
                <li>{pizza.ingredients[1]}</li>
                <li>{pizza.ingredients[2]}</li>
                <li>{pizza.ingredients[3]}</li>
              </ul>
            </li>

            <li className="list-group-item fw-bold fs-3">
              Precio: ${pizza.price}
            </li>
          </ul>
          <div className="card-body d-flex justify-content-evenly">
            <Link
              to={"/pizza/" + pizza.id}
              className="btn btn-outline-secondary"
              //onClick={handleDetails()}
            >
              Ver Más 👀
            </Link>

            <Link
              onClick={() => handleAddPizza(pizza)}
              href="#"
              className="btn btn-dark"
            >
              Añadir 🛒
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
