import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


export default function AsidePerfil() {
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
    </aside>
  );
}
