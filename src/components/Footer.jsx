
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <section>
        <div className="newsletter-cotainer">
          <div className="newsletter-bck"></div>
          <div className="news-form">
            <div className="News-Text">
              <h2>NoTvedades</h2>
              <p>Suscríbete para recibir nuestras Not Ticias del mercado FoodTech</p>
            </div>
            <div className="news-input">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa tu correo.."
                  aria-describedby="button-addon2"
                />
                <button className="btn btn-outline-secondary" type="Enviar">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="corporacional-container">
          <div className="info-corp">
              <div className="preguntas-corp">
              <h3>🕉 Om Shakti Veg </h3> 
              <hr className="hrdiv" />             
              <ul>
                <li>Somos Una Distribuidora Mayorista de productos saludables, </li>
                <li>veganos y alternativos que une fuerzas con proveedores para </li>
                <li>abastecer al comercio en todo Chile.</li>
                <li><span className="fw-bold">Email:</span>contacto@omshakti.cl</li>
                <li><span className="fw-bold">Telefono:</span>+56966879999</li>
                
              </ul>
            </div>
            <div className="atencion-corp">
              <h3>Contacto</h3>  
              <hr className="hrdiv" />           
              <ul>
                <li>contacto@omshakti.cl</li>
              </ul>
            </div>
            <div className="about-corp">
              <h3>Sobre Nosotros</h3>  
              <hr className="hrdiv" />            
              <ul>
                <li>Políticas de privacidad</li>                
                <li>Términos y condiciones</li>
                <li>Despachos</li>
                <li>Preguntas Frecuentes</li>                
              </ul>
            </div>
          </div>
          <div className="bottom-fotter">
            <div className="info-botter">
              <p>
                Sitio Web desarrollado por Om Shakti Devs 🚀 <FontAwesomeIcon icon={faRobot} />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 


