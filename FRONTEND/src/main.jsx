import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./contexts/CartContext.jsx";
import GlobalProvider from "./contexts/GlobalContext.jsx";
import UserProvider from "./contexts/UserContext.jsx";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <GlobalProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </GlobalProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
