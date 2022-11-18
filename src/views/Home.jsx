import "../assets/css/Home.css";
import Navbar from "../components/Navbar";
import Masonry from "../components/Slider";
import CardCategory from "../components/CardCategory";
import Footer from "../components/Footer";
import AsideMenu from "../components/AsideMenu";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <section className="grilla-productos">
        <div className="categoria-img-carrusel">
          <div className="categoria-img">
            <img
              src="https://r.btcdn.co/r/eyJzaG9wX2lkIjoyOTIsImciOiI2NTB4In0/9c4efa18d8da6ca/746352-Banner_3_%C2%B7_650_x_230_pp_(1300_%C3%97_730%C2%A0px)_(1300_%C3%97_460%C2%A0px)_(1300_%C3%97_460%C2%A0px)(2).png"
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
              src="https://r.btcdn.co/r/eyJzaG9wX2lkIjoyOTIsImciOiI2MzB4In0/6be41f4db0be622/665906-banner_parlantes.jpg"
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
              src="https://r.btcdn.co/r/eyJzaG9wX2lkIjoyOTIsImciOiI4MjB4In0/1b30176cc1665b2/665883-Banner_Aud%C3%ADfonos.jpg"
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
