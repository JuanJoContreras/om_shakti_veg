import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { useContext } from "react";

import ContextOrigin from "../Context";
const { Context } = ContextOrigin;


export default function AsidePerfil() {
  const navigate = useNavigate();
  const { setSession } = useContext(Context);
  
  const logout = () => {
    setSession(null);
    alert("Sesión cerrada con éxito");
    navigate("/");
  };

  return (
    <aside className="bg-primary text-center">
      <div>
        <Link to="/perfil" className="text-white text-decoration-none">
          <h5 className="mb-3">Mi Cuenta</h5>
        </Link>
        <Link to="/mispublicaciones" className="text-white text-decoration-none">
          <h5 className="mb-3">Mis Publicaciones</h5>
        </Link>
        <Link to="/misfavoritos" className="text-white text-decoration-none">
          <h5 className="mb-5">Mis Favoritos</h5>
        </Link>
        <Link to="/tienda">
          <Button variant="info text-white text-decoration-none">Volver a la tienda 🕉</Button>
        </Link>
      </div>
      <div>
        <Button variant="danger" onClick={logout}>
          Cerrar Sesión
        </Button>
      </div>
    </aside>
  );
}
