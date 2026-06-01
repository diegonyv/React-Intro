import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { GlobalContext } from "../contexts/GlobalContext";
import { UserContext } from "../contexts/UserContext";

const Profile = () => {
  const { token, logout} = useContext(UserContext)
  const { user } = useContext(GlobalContext);

  return (
    <>
    {token == true ? (      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column mt-5 mb-5" style={{ width: `15vw` }}>
          <h1 className="mb-3">Bienvenido</h1>
          <h4 className="mb-2">{user?.email}</h4>
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
   ) :(<Navigate to="/Cart"/>)}
 </>
  );
};
export default Profile;
