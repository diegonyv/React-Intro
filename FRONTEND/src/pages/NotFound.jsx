import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function NotFound() {
  return (
    <>
    <div className="d-flex justify-content-center">

      <div className="alert alert-warning text-center mt-5" style={{width: "30vw"}}>
        <h1>ERROR 404</h1>
        <h4>La página que intentas visitar no existe.</h4>
        <Link to="/">
          <button className="btn btn-warning">Volver al Inicio</button>
        </Link>
      </div>

    </div>
    </>
  );
}
