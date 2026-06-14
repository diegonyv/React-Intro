import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Form } from "react-bootstrap";
import { GlobalContext } from "../contexts/GlobalContext";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const navigate = useNavigate();

  const { token, login } = useContext(UserContext);
  const { user, setUser } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validarDatos = async (e) => {
    e.preventDefault();

    setUser({ email, password });
    if (email !== "" && password !== "" && password.length >= 6) {
      const succes = await login(email, password);
      if (succes) {
        alert("Sesión Iniciada");
      }
    }
    if (!email.trim() || !password.trim()) {
      alert("Todos los campos son obligatorios");
    }
    if (password.length < 6) {
      alert("password Incorrecta");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column mt-5 mb-5" style={{ width: `15vw` }}>
          <h1 className="mb-3">Login</h1>
          <h4 className="mb-2">E-mail</h4>
          <Form onSubmit={validarDatos}>
            <Form.Group className="d-flex row">
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                className="mb-3"
                type="text"
                placeholder="Ingresa tu Correo"
                value={email}
              />
              <h4>Contraseña</h4>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                className="mb-3"
                type="password"
                placeholder="Ingresa tu password"
                value={password}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: `7em` }}
              >
                Login
              </button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
