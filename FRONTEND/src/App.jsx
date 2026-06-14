import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { GlobalContext } from "./contexts/GlobalContext";  
import { Navigate } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
// import Register from "./components/Register";
// import Login from "./components/Login";

function App() {
  const { token, user } = useContext(UserContext)
  console.log("TOKEN:", token);
  console.log("USER:", user);

  return (
    <>
      <NavBar />
      <div style={{ minHeight: "84vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={token ? <Navigate to="/profile"/> : <Register />} />
          <Route path="/login" element={token ? <Navigate to="/profile"/> : <Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
