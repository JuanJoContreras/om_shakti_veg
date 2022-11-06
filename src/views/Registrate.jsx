import { Container } from "react-bootstrap";
import Registrate from "../components/Registrate";

export default () => {
  return (
    <Container className="text-center pt-5">
    <h1 className="mb-4">Market Place</h1>
    <h4 className="mb-4">Registrate</h4>    
    <hr />
    <Registrate />
  </Container>
  )
}
