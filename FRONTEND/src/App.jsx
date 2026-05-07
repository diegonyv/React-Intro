import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza";
// import Register from "./components/Register";
// import Login from "./components/Login";

function App() {


  return (
    <>
      <NavBar />
      <h1> Componente Home.jsx</h1>
      <Home /> 
      {/* <Login/>*/}
      {/*<Register/> */}
      {/* <Cart/> */}
      <h1>Componente Pizza.jsx</h1>
      <Pizza/>
      <Footer />
    </>
  );
}
export default App;
