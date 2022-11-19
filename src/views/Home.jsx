import "../assets/css/Home.css";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import CardCategory from "../components/CardCategory";
import Footer from "../components/Footer";

import Context from "../Context";

import Form from "react-bootstrap/Form";

import { useState } from "react";

export default function Home() {
  const [filtro, setFiltro] = useState("");

  return (
    <>
      <Navbar />      
      <Slider />
      <section className="aside p-3 galeria grid-columns-4 text-center">
      <div>
        <h2>Ordenar Por:</h2>
        <hr className="hrdiv" />
        <Form.Select
          value={filtro}
          onChange={({ target }) => setFiltro(target.value)}
        >
          <option value="price_desc">Precio mayor a menor</option>
          <option value="price_asc">Precio menor a mayor</option>
          <option value="alphabetical">Orden alfabético</option>
        </Form.Select>
      </div>
      </section>
      <section className="grilla-productos">
        <div className="categoria-img-carrusel">
          <div className="categoria-img">
            <img
              src="https://i.imgur.com/MEYiJAO.jpg"
              alt=""
            />
          </div>
          <div className="categoria-carrusel">
            <CardCategory category={1} />
          </div>
        </div>

        <div className="categoria-img-carrusel">
          <div className="categoria-img">
            <img
              src="https://i.imgur.com/f0mwVPg.jpg"
              alt=""
            />
          </div>
          <div className="categoria-carrusel">
            <CardCategory category={2} />
          </div>
        </div>

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
