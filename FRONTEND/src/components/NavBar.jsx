import { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalProvider from "../contexts/CartContext";
import { CartContext } from "../contexts/CartContext";

function NavBar() {

  const { totalPrice, user, setUser} =useContext(CartContext)
  //console.log("user tiene valor", user)
 // console.log("NavBar está usando", cartTotal)  


  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pizería Mamma Mía
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="d-flex justify-content-between w-100">
            <div className="navbar-nav">
              <Link className="btn btn-outline-light" aria-current="page" to="/">
                🍕Home
              </Link>
              {user == true ? (
                <>
                  <Link className="btn btn-outline-light" to="/Profile">
                    🔓Profile
                  </Link>
                  ,
                  <Link className="btn btn-outline-light" to="/">
                    🔒Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link className="btn btn-outline-light" aria-disabled="true" to="/Login">
                    🔐Login
                  </Link>
                  ,   
                  <Link className="btn btn-outline-light" aria-disabled="true" to="/Register">
                    🔏Register
                  </Link>
                </>
              )}
            </div>
            <div>
              <Link className="btn btn-outline-info" aria-disabled="true" to="/Cart">
                🛒Total: {totalPrice}
              </Link  >
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
