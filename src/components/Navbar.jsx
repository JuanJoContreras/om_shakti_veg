import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "../assets/css/Navbar.css";

export default function Navigation() {
  return (
    <>
      <Navbar className="navbar text-white py-3 " >
        <Container className="container d-block d-flex justify-content-between">          
          <NavLink to="/" className="logo-nombre mx-1 mb-0 d-flex justify-content-start">
          🕉 Om Shakti Veg
          </NavLink>          
          <NavLink to="/InicioSesion" className="logo-nombre mx-1 mb-0 d-flex justify-content-end">
          Inicio Sesión
          </NavLink>
          <NavLink to="/Registrate" className="logo-nombre mx-1 mb-0">
          Registrate
          </NavLink>
          <NavLink to="/Market" className="logo-nombre mx-1 mb-0">
          Market
          </NavLink>
          <NavLink to="/Favoritos" className="logo-nombre mx-1 mb-0">
          Favoritos
          </NavLink>
          <Navbar.Brand className="text-white justify-content-end">🕉🚀</Navbar.Brand> 
        </Container>
      </Navbar>
    </>
  );
}

