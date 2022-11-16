import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import IniciarSesion from "./views/IniciarSesion";
import Registrate from "./views/Registrate";
import Tienda from "./views/Tienda";
import Perfil from "./views/Perfil";
import Detalle from "./views/Detalle";
import NuevaPublicacion from "./views/NuevaPublicacion";


import Context from "./Context";

const { Provider } = Context;

export default function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<IniciarSesion />} />
            <Route path="/registro" element={<Registrate />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/detalle" element={<Detalle />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/publicaciones/nueva" element={<NuevaPublicacion />} />
            
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
