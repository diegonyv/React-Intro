import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmacion, setConfirmacion] = useState("");

    const validarDatos = (e) => {
        e.preventDefault()
        if (email !== ("") && contraseña !== ("") && confirmacion !== ("") && contraseña.length >= 6 && contraseña === confirmacion) {
          alert("¡Validación Exitosa!")
        }
        if (!email.trim() || !contraseña.trim() || !confirmacion.trim()) {
            alert("Todos los campos son obligatorios");
        }
        if (contraseña.length < 6) {
          alert("La Contraseña debe ser de mínimo 6 caracteres");
        } 
        if (confirmacion !== contraseña) {
          alert("La Contraseña y la Confirmación no coinciden");
        }

         }
  return (
    <>
    <div className="d-flex justify-content-center">

      <div className="d-flex flex-column mt-5 mb-5" style={{width: `15vw`}}>
        <h1 className="mb-3">Registrate</h1>
        <h4 className="mb-2">E-mail</h4>
        <form onSubmit={validarDatos}>
        <h3>{email}</h3>
        <input onChange={(e) => setEmail(e.target.value)} className="mb-3" type="text" placeholder="Ingresa tu Correo" />
        <h4>Contraseña</h4>
        <h3>{contraseña}</h3>
        <input onChange={(e) => setContraseña(e.target.value)} className="mb-3" type="password" placeholder="Crea tu contraseña" />
        <h4>Confirmar Contraseña</h4>
        <h3>{confirmacion}</h3>
        <input onChange={(e) => setConfirmacion(e.target.value)} className="mb-3" type="password" placeholder="Confirma tu contraseña" />
    <button type="submit" className="btn btn-primary" style={{width: `7em`}}>Enviar</button>
        </form>
      </div>

    </div>

    
    </>
  );
};
export default Register;
