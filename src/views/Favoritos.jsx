import { Container } from "react-bootstrap";
import Favoritos from "../components/Favoritos";

export default () => {
  return (
    <Container className="text-center pt-5">   
    <h1 className="mb-4">Favoritos</h1>    
    <hr />
    <Favoritos />
  </Container>
  )
}