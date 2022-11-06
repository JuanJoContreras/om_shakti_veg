import { Container } from "react-bootstrap";
import InicoSesion from "../assets/css/InicioSesion.css";
import InicioSesion from "../components/InicioSesion";

export default () => {
  return (
    <Container className="text-center pt-5">
    <h1 className="mb-4">Market Place</h1>
    <h4 className="mb-4">Iniciar Sesión</h4>
    <hr />
    <InicioSesion />
  </Container>
  )
}
