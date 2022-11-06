import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "../assets/css/Registrate.css";

export default function GridComplexExample () {
  return (
    <>
    <Form className="Registrate">
    <Row className="mb-3">    
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo..." />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Clave:</Form.Label>
          <Form.Control type="password" placeholder="Ingresa tu clave..." />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Direccion:</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Direccion 2:</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Comuna</Form.Label>
          <Form.Select defaultValue="Elejir...">
            <option>Santiago...</option>
            <option>Providencia...</option>
          </Form.Select>
        </Form.Group>        
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Checkearme" />
      </Form.Group>   
      
    </Form >
    <Button variant="warning" className="text-white mb-3 text-center justify-content-center">Registrate</Button>{' '}
    <Button variant="info" className="text-white mb-3 text-center justify-content-center">Volver</Button>
     </>
  );
}

