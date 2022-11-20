import { Form, Button } from "react-bootstrap";

import { useState, useContext } from "react";
import Context from "../Context";

export default function Formulario() {
  const { publicaciones, setPublicaciones } = useContext(Context);
  const [publicacion, setPublicacion] = useState({});

  const handleChange = (element) => {
    const { name, value } = element;
    publicacion[name] = value;
    setPublicacion({ ...publicacion });
  };

  const agregarPublicacion = () => {
    setPublicaciones([...publicaciones, { ...publicacion }]);
    alert("Publicación agregada con éxito");
  };

  return (
    <Form className="row col-10 col-sm-9 col-md-8 col-lg-6 mx-auto mt-5 border border-light rounded p-4">
      <h5 className="mb-3">Nueva publicación</h5>
      <hr />
      <Form.Group className="mb-3 col-12 col-md">
        <Form.Label>Título</Form.Label>
        <Form.Control
          value={publicacion.titulo}
          name="titulo"
          onChange={({ target }) => handleChange(target)}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md" controlId="formBasicEmail">
        <Form.Label>Foto URL</Form.Label>
        <Form.Control
          name="foto"
          onChange={({ target }) => handleChange(target)}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md" controlId="formBasicEmail">
        <Form.Label>Color</Form.Label>
        <Form.Control
          name="color"
          onChange={({ target }) => handleChange(target)}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          name="descripcion"
          onChange={({ target }) => handleChange(target)}
        />
      </Form.Group>
      <Button
        onClick={agregarPublicacion}
        variant="light"
        className="col-5 col-sm-4 col-md-3 mx-auto"
      >
        Agregar
      </Button>
    </Form>
  );
}
