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
import Desayunos from "./views/Desayunos";
import Almuerzos from "./views/Almuerzos";
import Extras from "./views/Extras";
import Publicacion from "./views/Publicacion";


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
          <Route path="/publicaciones/nueva" element={<PrivateRoute auth={{ isAuthenticated }}>
          <NuevaPublicacion /> </PrivateRoute>}/>
          <Route path="/publicacion" element={<PrivateRoute auth={{ isAuthenticated }}>
          <Publicacion /> </PrivateRoute>}/>
          <Route path="/desayunos" element={<PrivateRoute auth={{ isAuthenticated }}>
          <Desayunos /> </PrivateRoute>}/>
          <Route path="/almuerzos" element={<PrivateRoute auth={{ isAuthenticated }}>
          <Almuerzos /> </PrivateRoute>}/>
          <Route path="/extras" element={<PrivateRoute auth={{ isAuthenticated }}>
          <Extras /> </PrivateRoute>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}