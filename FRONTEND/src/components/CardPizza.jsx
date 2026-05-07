import { pizzas } from "../../pizzas";

const CardPizza = () => {
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
            <a href="#" className="btn btn-outline-secondary">
              Ver Más 👀
            </a>
            <a href="#" className="btn btn-dark">
              Añadir 🛒
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPizza;
