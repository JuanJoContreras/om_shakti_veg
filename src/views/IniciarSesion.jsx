import { Link, useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useContext, useState } from "react";

import ContextOrigin from "../Context";
const { Context } = ContextOrigin;

export default function IniciarSesion() {
  const { setSession, users } = useContext(Context);

  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const addUser = () => {
    const userExists =
      users.some((u) => u.email == user.email && u.password == user.password) ||
      true;
    if (userExists) {
      setSession(user);
      alert("Usuario identificado con éxito");
      navigate("/tienda");
    } else {
      alert("Email o contraseña incorrecta");
    }
  };

  return (
    <div className="bg-light vh-100 pt-5">
      <Form className="w-50 mx-auto border p-3 rounded bg-warning ">
        <div>
          <h4>Market Place</h4>
          <h6>Iniciar sesión</h6>
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

        <Button variant="success me-3" onClick={addUser}>
          Iniciar Sesión
        </Button>
        <Link to="/" className="text-decoration-none text-dark">
          <Button variant="light">Volver</Button>
        </Link>
      </Form>
    </div>
  );
}