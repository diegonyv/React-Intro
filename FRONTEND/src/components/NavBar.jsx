function NavBar() {
  let total = 25000;
  const token = false;

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pizería Mamma Mía
        </a>
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
              <a className="btn btn-outline-light" aria-current="page" href="">
                🍕Home
              </a>
              {token == true ? (
                <>
                  <a className="btn btn-outline-light" href="">
                    🔓Profile
                  </a>
                  ,
                  <a className="btn btn-outline-light" href="">
                    🔒Logout
                  </a>
                </>
              ) : (
                <>
                  <a className="btn btn-outline-light" aria-disabled="true" href="">
                    🔐Login
                  </a>
                  ,   
                  <a className="btn btn-outline-light" aria-disabled="true">
                    🔏Register
                  </a>
                </>
              )}
            </div>
            <div>
              <a className="btn btn-outline-info" aria-disabled="true">
                🛒Total: ${total.toLocaleString()}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
