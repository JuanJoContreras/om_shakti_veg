import { useContext } from "react";
import Context from "../Context";
import { nanoid } from "nanoid";

export default function InicioSesion() {
  const { usuarios, setUsuarios, changeForm } = useContext(Context);

  const registrar = () => {
    let correo = document.getElementById("Remail").value;
    let contrasena = document.getElementById("Rpsw").value;
    let contrasenaRpt = document.getElementById("psw-repeat").value;
    if (correo !== "" && contrasena !== "" && contrasena !== "") {
      if (contrasena === contrasenaRpt) {
        let existe = usuarios.filter((e) => e.correo === correo);
        if (existe.length === 0) {
          setUsuarios([
            ...usuarios,
            { userId: nanoid(), correo: correo, contraseña: contrasena }
          ]);
          changeForm(true);
          alert("usuario registrado");
        } else {
          alert("Usuario Creado con éxito, intente iniciar sesión");
        }
      } else {
        alert("Email o contraseña incorrecta");
      }
    } else {
      alert("contraseña distinta");
    }
  };

  return (
    <>
      <div className="in-sesion">
        <h2>Registrate</h2>
        <input
          type="email"
          className="form-control"
          placeholder="Ingresa tu correo..."
          name="email"
          id="Remail"
          required
        />
        <input
          type="password"
          className="form-control"
          placeholder="Ingresa tu contraseña..."
          name="psw"
          id="Rpsw"
          required
        />
        <input
          type="password"
          className="form-control"
          placeholder="Repite tu contraseña..."
          name="psw-repeat"
          id="psw-repeat"
          required
        />
        <button onClick={registrar} type="submit" className="me-4 btn-lg">
          Registrate
        </button>
      </div>
      <hr className="hrdiv" />
      <div className="registrar">
        <button onClick={() => changeForm(true)}>Iniciar Sesión</button>
      </div>
    </>
  );
}
