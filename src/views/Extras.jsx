import { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import CardCategory from "../components/CardCategory";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form";

export default function Home() {
    const [filtro, setFiltro] = useState("");
    
  
    return (
      <>
        <Navbar />            
        <section className="aside p-3 galeria grid-columns-4 text-center">
        <div>
          <h2>Ordenar Por:</h2>
          <Form.Select
            value={filtro}
            onChange={({ target }) => setFiltro(target.value)}
          >
            <option value="alphabetical">Orden alfabético</option>
          </Form.Select>
        </div>
        </section>
        <section className="grilla-productos"> 
          <h2>EXTRAS</h2>
          <hr />
  
          <div className="categoria-img-carrusel">
            <div className="categoria-img">
              <img
                src="https://i.imgur.com/gppoEK1.jpg"
                alt=""
              />
            </div>
            <div className="categoria-carrusel">
              <CardCategory category={3} />
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
  