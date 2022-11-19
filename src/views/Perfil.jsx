import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Context from "../Context";

import Form from "react-bootstrap/Form";

const Profile = () => {
  const { productos, setProductos } = useContext(Context);
  const [filtro, setFiltro] = useState("");

  const deleteFavorito = (id) => {
    const productosIndex = productos.findIndex((e) => e.id === id);
    productos.splice(productosIndex,1);
    productos[productosIndex].liked = !productos[productosIndex].liked;
    setProductos([...productos]);
  };

  return (
    <>
    <Navbar />
    <section className="aside p-3 galeria grid-columns-4 text-center">
      <div>
        <h2>Ordenar Por:</h2>
        <hr className="hrdiv" />
        <Form.Select
          value={filtro}
          onChange={({ target }) => setFiltro(target.value)}
        >
          <option value="price_desc">Precio mayor a menor</option>
          <option value="price_asc">Precio menor a mayor</option>
          <option value="alphabetical">Orden alfabético</option>
        </Form.Select>
      </div>
      </section>
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
    </ul>
    </div>
    
    

    </>
    
  );
}

export default Profile;
