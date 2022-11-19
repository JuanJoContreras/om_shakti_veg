import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { formatNumber } from "../Helper";

import Context from "../Context";

export default function Publicacion({
  publicacion: { title, description, img, price, user }

}) 

{
  return (
    <Card className="publicacion-container p-3">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="fw-bold">{description}</Card.Text>
        <Card.Text>Precio: ${formatNumber(price)}</Card.Text>
        <Card.Text>Publicado por : {user}</Card.Text>
        <Button variant="info">🕉🚀</Button>
      </Card.Body>
    </Card>
  );
}
