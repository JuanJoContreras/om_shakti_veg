import { useContext, useState } from "react";
import Publicacion from "./Publicacion";
import ContextOrigin from "../Context";
const { Context } = ContextOrigin;

export default function Publicaciones() {
  const { publicaciones } = useContext(Context);
  const [nombre, setNombre] = useState("");

  const publicacionesFiltradas = publicaciones.filter((p) =>
    p.title.toLowerCase().includes(nombre.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="d-flex align-items-center px-2 mb-3">
        Nombre:
        <input
          type="text"
          className="ms-2 form-control"
          onChange={({ target }) => setNombre(target.value)}
          value={nombre}
        />
      </div>

      <div className="publicaciones">
        {publicacionesFiltradas.map((p, i) => {
          return <Publicacion publicacion={p} key={i} />;
        })}
      </div>
    </div>
  );
}
