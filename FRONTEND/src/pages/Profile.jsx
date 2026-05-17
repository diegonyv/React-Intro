import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();
    if (email !== "" && contraseña !== "" && contraseña.length >= 6) {
      alert("Sesión Iniciada");
    }
    if (!email.trim() || !contraseña.trim()) {
      alert("Todos los campos son obligatorios");
    }
    if (contraseña.length < 6) {
      alert("Contraseña Incorrecta");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column mt-5 mb-5" style={{ width: `15vw` }}>
          <h1 className="mb-3">Bienvenido</h1>
          <img src="https://tse1.mm.bing.net/th/id/OIP.srNFFzORAaERcWvhwgPzVAHaHa?r=0&pid=Api" alt="" />
          <h4 className="mb-2">Usuario</h4>
          <h6>usuario-ficticio@correo.cl</h6>
          
            
            
            <Link to="/Login">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ minWidth: `7em` }}
              >
                Cerrar Sesión
              </button>
            </Link>
        </div>
      </div>
    </>
  );
};
export default Profile;
