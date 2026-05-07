import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

      const validarDatos = (e) => {
        e.preventDefault()
        if (email !== ("") && contraseña !== ("") && contraseña.length >= 6) {
          alert("Sesión Iniciada") 
        }
        if (!email.trim() || !contraseña.trim()) {
            alert("Todos los campos son obligatorios");
        }
        if (contraseña.length < 6) {
          alert("Contraseña Incorrecta");
        } 
       
         }

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column mt-5 mb-5" style={{ width: `15vw` }}>
          <h1 className="mb-3">Login</h1>
          <h4 className="mb-2">E-mail</h4>
          <form onSubmit={validarDatos}>
            <h3>{email}</h3>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="mb-3"
              type="text"
              placeholder="Ingresa tu Correo"
            />
            <h4>Contraseña</h4>
            <h3>{contraseña}</h3>
            <input
              onChange={(e) => setContraseña(e.target.value)}
              className="mb-3"
              type="password"
              placeholder="Ingresa tu contraseña"
            />

            <button type="submit" className="btn btn-primary" style={{ width: `7em` }}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
