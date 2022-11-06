import { Form, Button} from 'react-bootstrap';
import "../assets/css/InicioSesion.css";

export default function TextControlsExample() {
  return (
    <>
    <Form className="InicioSesion">
      <Form.Group className="text-center mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu correo..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Ingresa tu clave..." rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Chekeate" />
      </Form.Group>     
      
    </Form>
    <Button variant="success" className="text-white mb-3 text-center justify-content-center">Inciar Sesión</Button>{' '}
    <Button variant="info" className="text-white mb-3 text-center justify-content-center">Volver</Button>
    </> 
  );
}