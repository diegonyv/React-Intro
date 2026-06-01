import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Pizza(){
const [pizza, setPizza] = useState();

    const parametros = useParams()

    console.log(parametros)

    let apiUrl = "http://localhost:5000/api/pizzas/" + parametros.id

    const getPizza = async () => {
        const response = await fetch(apiUrl)
        const data = await response.json()


        setPizza(data);

    };
    useEffect(()=>{
        getPizza()

    }, []);

    if (!pizza) return <p>Cargando...</p>;

    return (
        <div className="d-flex">
               <div key={pizza.indice} className="card m-3" style={{ width: "18rem" }}>
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
           </div>
)
}; 


