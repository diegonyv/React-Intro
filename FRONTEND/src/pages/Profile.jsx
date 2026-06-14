import { useState, useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { GlobalContext } from "../contexts/GlobalContext";
import { UserContext } from "../contexts/UserContext";

const Profile = () => {
  const { email, token, logout, getProfile} = useContext(UserContext)
  const { user } = useContext(GlobalContext);

  useEffect(() => {
  const obtenerPerfil = async () => {
    const data = await getProfile();
    console.log(data);
  };

  obtenerPerfil();
}, []);

  return (
    <>
    {token ? (      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column mt-5 mb-5" style={{ width: `15vw` }}>
          <h1 className="mb-3">Bienvenido</h1>
          <h4 className="mb-2">{email}</h4>
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.srNFFzORAaERcWvhwgPzVAHaHa?r=0&pid=Api"
            alt=""
          />
          <Link to="/">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ minWidth: `7em` }}
              onClick={logout}
            >
              Cerrar Sesión
            </button>
          </Link>
        </div>
      </div>
   ) :(<Navigate to="/cart"/>)}
 </>
  );
};
export default Profile;
