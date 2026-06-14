import { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmacion, setConfirmacion] = useState("");
  const { login, register } = useContext(UserContext)
  const navigate = useNavigate()
  

  const validarDatos = async (e) => {
    console.log("Entró a ValidarDatos")
    e.preventDefault();
    if (
      email !== "" &&
      password !== "" &&
      confirmacion !== "" &&
      password.length >= 6 &&
      password === confirmacion
    ) {
    }
    if (!email.trim() || !password.trim() || !confirmacion.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }
    if (password.length < 6) {
      alert("La password debe ser de mínimo 6 caracteres");
      return;
    }
    if (confirmacion !== password) {
      alert("La password y la Confirmación no coinciden");
      return; 
    }
    const succes = await register(email, password)
    if (succes) {
      alert("Usurario registrado con éxito")
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column mt-5 mb-5" style={{ width: `15vw` }}>
          <h1 className="mb-3">Registrate</h1>
          <h4 className="mb-2">E-mail</h4>
          <Form onSubmit={validarDatos} className="d-flex row">
            <Form.Group>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                className="mb-3"
                type="text"
                placeholder="Ingresa tu Correo"
                required
              />
              <h4>Contraseña</h4>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                className="mb-3"
                type="password"
                placeholder="Crea tu password"
                required
              />
              <h4>Confirmar Contraseña</h4>
              <Form.Control
                onChange={(e) => setConfirmacion(e.target.value)}
                className="mb-3"
                type="password"
                placeholder="Confirma tu password"
                required
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: `7em` }}
              >
                Enviar
              </button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Register;
