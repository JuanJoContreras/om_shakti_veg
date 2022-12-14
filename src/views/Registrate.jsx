import { Link, useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useContext, useState } from "react";

import ContextOrigin from "../Context";
const { Context } = ContextOrigin;

export default function Registrarse() {
  const { setUsers, users } = useContext(Context);

  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const addUser = () => {
    setUsers([...users, user]);
    alert("Usuario Creado con éxito, intente iniciar sesión");
    navigate("/login");
  };

  return (
    <div className="bg-light vh-100 pt-5">
      <Form className="w-50 mx-auto border p-3 rounded bg-success text-white ">
        <div>
          <h4>Market Place</h4>
          <h6>Registrate</h6>
          <hr />
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setUser({ ...user, ["email"]: target.value })
            }
            type="email"
            placeholder="Ingresa tu correo..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setUser({ ...user, ["password"]: target.value })
            }
            type="password"
            placeholder="Ingresa tu contraseña..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Avatar URL</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setUser({ ...user, ["picture"]: target.value })
            }
            type="text"
          />
        </Form.Group>

        <Button variant="warning me-3" onClick={addUser}>
          Registrarme
        </Button>
        <Link to="/" className="text-decoration-none text-dark">
          <Button variant="light">Volver</Button>
        </Link>
      </Form>
    </div>
  );
}
