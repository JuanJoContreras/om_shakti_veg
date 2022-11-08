import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./views/Home";
import InicioSesion from "./views/InicioSesion";
import Registrate from "./views/Registrate";
import Market from "./views/Market";
import NotFound from "./views/NotFound";
import Favoritos from "./views/Market";

import Navbar from "./components/Navbar";
import Context from "./Context";


export default function App() {
  const [fotos, setFotos] = useState([]);

  const endpoint = "/productos.json";
  const getFotosNaturales = async () => {
    const res = await fetch(endpoint);
    let data = await res.json();
    let dataFiltrada = data.photos.map((elem) => ({
      id: elem.id,
      name:elem.name,
      src: elem.src.tiny,
      desc: elem.alt,
      price: elem.price,
      favorito: false
    }))
    setFotos(dataFiltrada); 
    console.log(dataFiltrada) 
  };

  useEffect (() => {
    getFotosNaturales();
  }, []);

  return (
    <div className="App">
    <Context.Provider value={{ fotos, setFotos }}>
      <BrowserRouter>      
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InicioSesion" element={<InicioSesion />} />
        <Route path="/Registrate" element={<Registrate />} />
        <Route path="/Market" element={<Market />} />
        <Route path="/favoritos" element={<Favoritos />} />        
        <Route path="*" element={<NotFound />} />
        </Routes>        
      </BrowserRouter>
      </Context.Provider>
      </div>
  
  );
}

