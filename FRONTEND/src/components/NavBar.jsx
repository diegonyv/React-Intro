import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";


function NavBar() {
  const {token, logout} = useContext(UserContext)
  const { totalPrice } =useContext(CartContext)
  
  
  
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
              {token ? (
                <>
                  <Link className="btn btn-outline-light" to="/profile">
                    🔓Profile
                  </Link>
                  ,
                  <Link className="btn btn-outline-light" to="/" onClick={logout}>
                    🔒Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link className="btn btn-outline-light" aria-disabled="true" to="/login">
                    🔐Login
                  </Link>
                  ,   
                  <Link className="btn btn-outline-light" aria-disabled="true" to="/register">
                    🔏Register
                  </Link>
                </>
              )}
            </div>
            <div>
              <Link className="btn btn-outline-info" aria-disabled="true" to="/cart">
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
