import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from "react-router-dom";

import "../assets/css/Footer.css";

const Footer = () => {
            const setActiveClass = ({isActive}) => (isActive? "active" : undefined);

  return (  
    <> 
      <Navbar className="navbar text-white py-3" >
        <Container className="container d-block d-flex justify-content-between">          
        <NavLink to="/" className="logo-nombre mx-1 mb-0 d-flex justify-content-start">
          🕉 Om Shakti Veg
          </NavLink> 
          <Nav className="footer-barra">
            <div className="title-footer">
            <NavLink end className={setActiveClass} to="/Market">
                <h3>Nuestros Productos</h3>
                <hr />
            </NavLink>
                <h3>Contacto</h3>
                <hr />
                <ul>
                    <li>info@omshakti.com</li>
                    <li>+56 9 68459636</li>
                    <li>Los Nogales #341</li>
                </ul>
                <hr />
                <h4>Siguenos en RRSS</h4>
                <ul>
                    <FontAwesomeIcon icon="fa-brands fa-facebook" />
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                </ul>
              </div>          
          </Nav>
        </Container>
      </Navbar>  
      </>   
  );
}

export default Footer;
