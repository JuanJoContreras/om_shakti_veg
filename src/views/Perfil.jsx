import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Context from "../Context";

const Profile = () => {
  const { productos, setProductos } = useContext(Context);
 
  const deleteFavorito = (id) => {
    const productosIndex = productos.findIndex((e) => e.id === id);
    productos.splice(productosIndex,1);
    productos[productosIndex].liked = !productos[productosIndex].liked;
    setProductos([...productos]);
  };

  return (
    <>
    <Navbar />
    <div className="perfil p-3 galeria grid-columns-4 text-center ">
    <h1>Namaste 🙏 a la experiencia personalizada de Om Shakti Veg</h1>
    <hr className="hrdiv" />
    </div>
    
    <div className="favoritos-container">
    <h1>Productos favoritos</h1>
    <hr className="hrdiv" />
    <div className="favoritos p-3 galeria grid-columns-4">
      {productos
        .filter((elem) => elem.liked)
        .map((elem, i) => (
          <img
            src={elem.img}
            alt=""
            onClick={() => deleteFavorito(elem.id)}
            key={i}
          />          
        ))}
    </div>
    </div>
    <hr className="hrdiv" />
    
    <div className="publicaciones-container">
    <ul className="navbar-nav navbar-nav  d-flex flex-row justify-content-between nav-gap">
    <li className="nav-item">
    <Link to="/publicaciones/nueva" className="publicacion justify-content-end">
    <h4>Publicaciones</h4>
    </Link>
    </li>
    <li className="nav-item">
    <Link to="/publicacion" className="publicacion justify-content-end">
    <h4>Publicacion Nueva</h4>
    </Link>
    </li>
    </ul>
    </div>
    
    

    </>
    
  );
}

export default Profile;
