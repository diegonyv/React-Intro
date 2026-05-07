import HeaderPic from "../assets/imgs/HeaderPic.jpg";

function Header() {
  return (
    <div
      className="text-center d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${HeaderPic})`,
        height: `23vh`,
    }}
    >
      <div>
        <h1 className="text-light">¡Pizzería Mamma Mía!</h1>
        <p className="fs-5 fw-bold text-light">
          ¡Tenemos la mejores pizzas que puedes encontrar!
        </p>
        <hr className="text-light" />
      </div>
    </div>
  );
}
export default Header;
