import InicioSesion from "../components/InicioSesion";
import Registro from "../components/Registro";
import { useContext } from "react";
import ProductosContext from "../Context";

export default function Intro() {
  const { Intro } = useContext(ProductosContext);

  return (
    <div className="background">
      <div className="background-intro"></div>
      <div className="Container-intro">
      <section className="presentacion">
      <h1 className="mb-3">
        Bienvenido a <span className="fw-bold">Om Shakti</span> 🕉🚀
      </h1>
      <h3> MarketPlace de Productos Veganos! <hr className="hrdiv" /></h3>
      </section>
        
        <section className="formulario">
          {Intro ? <InicioSesion /> : <Registro />}
        </section>
      </div>
    </div>
  );
}
