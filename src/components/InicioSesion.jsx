import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import Context from "../Context";

export default function InicioSesion() {
  const { usuarios, setisAuthenticated, changeForm } = useContext(Context);
  const navigate = useNavigate();

  const iniciarSesion = () => {
    let correo = document.getElementById("email").value;
    let contraseña = document.getElementById("pwd").value;
    if (!correo && !contraseña) {
      alert("Favor completa tus datos");
    } else {
      let user = usuarios.find((e) => e.correo === correo);
      if (user !== undefined) {
        if (user.contraseña == contraseña) {
          setisAuthenticated(true);
          navigate("/home");
        } else {
          alert("Contraseña equivocada");
        }
      } else {
        alert("No existe el usuario");
      }
    }
  };

  return (
    <>
      <h2>Iniciar sesión</h2>
      <div className="in-sesion">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Ingresa tu correo..."
        />
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Ingresa tu contraseña..."
        />
        <button className="me-4 btn-lg"
          type="submit"
          onClick={iniciarSesion}>
          Inicia tu Sesión
        </button>
      </div>
      <hr className="hrdiv" />
      <div className="registrar">
        <button onClick={() => changeForm(false)}>Crear cuenta</button>
      </div>
    </>
  );
}
