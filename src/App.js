import "./assets/css/style.css";
import "./assets/css/Reset.css";
import "./assets/css/Intro.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Context from "./Context";

import Home from "./views/Home";
import Tienda from "./views/Tienda";
import Profile from "./views/Perfil";
import FichaProducto from "./views/FichaProducto";
import NuevaPublicacion from "./views/NuevaPublicacion";
import Intro from "./views/Intro";

export default function App() {
  const { isAuthenticated, PrivateRoute } = useContext(Context);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={ <PrivateRoute auth={{ isAuthenticated }}>
          <Home /> </PrivateRoute>} />
          <Route path="/perfil" element={<PrivateRoute auth={{ isAuthenticated }}>
          <Profile /></PrivateRoute>}/>
          <Route path="/producto/:id" element={<PrivateRoute auth={{ isAuthenticated }}>
          <FichaProducto /> </PrivateRoute>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}