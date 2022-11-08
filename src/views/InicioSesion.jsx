import { Container } from "react-bootstrap";
import InicioSesion from "../components/InicioSesion";

export default () => {
  return (
    <Container className="text-center pt-5">
    <h1 className="mb-4">Iniciar Sesión</h1>
    <hr />
    <InicioSesion />
  </Container>
  )
}
