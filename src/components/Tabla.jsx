import { Table } from "react-bootstrap";
import Context from "../Context";

import { useContext } from "react";

export default function Tabla() {
  const { publicaciones, setPublicaciones } = useContext(Context);

  const eliminarPublicacion = (i) => {
    publicaciones.splice(i, 1);
    setPublicaciones([...publicaciones]);
  };

  return (
    <Table
      striped
      bordered
      hover
      variant="dark"
      className="container mt-5 text-center"
    >
      <thead>
        <tr>
          <th>Foto</th>
          <th>Título</th>
          <th>Color</th>
          <th>Descripción</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {publicaciones.map(({ titulo, foto, descripcion, color }, i) => (
          <tr key={i} className="align-middle">
            <td>
              <img src={foto} height="50" alt="" />
            </td>
            <td>{titulo}</td>
            <td>
              <div
                style={{
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                  background: color
                }}
              ></div>
            </td>
            <td>{descripcion}</td>
            <td>
              <span onClick={() => eliminarPublicacion(i)} role="button">
                ❌
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}