import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../Context";
import StarRating from "../components/StarRating";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const FichaProducto = () => {
  const { productos, productoDetail, setProductoDetail } = useContext(Context);
  const { id } = useParams();

  const obtenerDatos = () => {
    let datosProducto = productos.find((p) => p.id == id);
    setProductoDetail(datosProducto);
  };

  useEffect(() => {
    obtenerDatos();
  }, [productos]);

  return (
    <>
      <Navbar />
      <div className="ficha-productos">
        <div className="img-description-tecnica-video">
          <div class="ficha-img">
            <img
              src={productoDetail.img}
              className=""
              alt={productoDetail.name}
            />
          </div>
          <div class="ficha-description">
            <h2>DESCRIPCIÓN DEL PRODUCTO</h2>
            <p className="">{productoDetail.description}</p>
          </div>
          <div class="ficha-tecnica">
            {/* <ul>
                  {productoDetail.especificacionesTecnicas?.map(
                    (ingredient, i) => (
                      <li key={i}>
                        {ingredient}
                      </li>
                    )
                  )}
                </ul> */}
          </div>
          <div class="ficha-video">
            <iframe
              width="100%"
              height="480"
              src={`https://www.youtube.com/embed/${productoDetail.video}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <h2 className="">{productoDetail.name}</h2>
          </div>
          <div className="">
            <h5 className="">{productoDetail.marca}</h5>
          </div>
          <StarRating />
          <div className="">
            <h4>${productoDetail.price}</h4>
          </div>
          <div className="">
            <button className="btn btn-danger">Añadir</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FichaProducto;