import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useContext, useState } from "react";

import ContextOrigin from "../Context";

const { Context } = ContextOrigin;

export default function AsideMenu() {
  const navigate = useNavigate();
  const { setSession } = useContext(Context);

  const [filtro, setFiltro] = useState("");

  const logout = () => {
    setSession(null);
    alert("Sesión cerrada con éxito");
    navigate("/");
  };

  return (
    <aside className="bg-warning text-center">
      <div>
        <h1 className="mb-3">🕉</h1>
        <h4>
          <Link to="/perfil" className="text-white text-decoration-none">
            Mi Perfil
          </Link>
        </h4>
      </div>

      <div>
        Ordenar Por
        <Form.Select
          value={filtro}
          onChange={({ target }) => setFiltro(target.value)}
        >
          <option value="price_desc">Precio mayor a menor</option>
          <option value="price_asc">Precio menor a mayor</option>
          <option value="alphabetical">Orden alfabético</option>
        </Form.Select>
      </div>

      <div>
        <Button variant="danger" onClick={logout}>
          Cerrar Sesión
        </Button>
      </div>
    </aside>
  );
}
