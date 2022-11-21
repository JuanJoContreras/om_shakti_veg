import "../assets/css/Home.css";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import CardCategory from "../components/CardCategory";
import Footer from "../components/Footer";

export default function Home() {  

  return (
    <>
      <Navbar />      
      <Slider />      
      <section className="grilla-productos">
        <div className="categoria-img-carrusel">        
          <div className="categoria-img">
          <h2>DESAYUNOS</h2>
            <hr className="hrdiv" />
            
          </div>
          <div className="categoria-carrusel">
            <CardCategory category={1} />
          </div>
        </div>

        <div className="categoria-img-carrusel">
          <div className="categoria-img">
          <h2>ALMUERZOS</h2>
            <hr className="hrdiv" />
            
          </div>
          <div className="categoria-carrusel">
            <CardCategory category={2} />
          </div>
        </div>

        <div className="categoria-img-carrusel">
          <div className="categoria-img">
            <h2>EXTRAS</h2>
            <hr className="hrdiv" />
            
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
