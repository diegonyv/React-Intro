import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { Routes, Route, Link } from "react-router-dom";
// import Register from "./components/Register";
// import Login from "./components/Login";

function App() {
  return (
    <>
      <NavBar />
      <div style={{minHeight: "84vh"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>

    // <>
    //   <NavBar />
    //   <h1> Componente Home.jsx</h1>
    //   <Home />
    //   {/* <Login/>*/}
    //   {/*<Register/> */}
    //   {/* <Cart/> */}
    //   <h1>Componente Pizza.jsx</h1>
    //   <Pizza/>
    //   <Footer />
    // </>
  );
}
export default App;
