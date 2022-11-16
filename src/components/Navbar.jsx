import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="d-flex justify-content-between align-items-center px-5 py-4 w-100">
      <div className="logo">🕉 Om Shakti Veg</div>
      <div className="opciones">
        <Link to="/login">
          <button className="btn btn-warning me-4 btn-lg">
            Iniciar Sesión
          </button>
        </Link>
        <Link to="/registro">
          <button className="btn btn-success  btn-lg">Regístrate</button>
        </Link>
      </div>
    </nav>
  );
}
