import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Context from "../Context";

export default function Publicacion({
  publicacion: { title, description, img, price, user }

  

}) {
  return (
    <Card className="p-3">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="fw-bold">{description}</Card.Text>
        <Card.Text>Precio: {price}</Card.Text>
        <Card.Text>Publicado por : {user}</Card.Text>
        <Button variant="secondary">♥</Button>
      </Card.Body>
    </Card>
  );
}
