import { useContext } from "react";
import Context from "../Context";
import { formatNumber } from "../Helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  // const [total, setTotal] = useState(0);
  const { productos, setProductos } = useContext(Context);

  const setFavorito = (id) => {
    const productoIndex = productos.findIndex((p) => p.id === id);
    productos[productoIndex].liked = !productos[productoIndex].liked;
    setProductos([...productos]);
    console.log(productos);
  };

  return (
    <>
      {productos.map((e) => (
        <div key={e.id} className="card">
          <div onClick={() => setFavorito(e.id)} className="favorite">
            <FontAwesomeIcon icon={faStarOfLife} />
          </div>
          <img src={e.img} className="card-img-top" alt="producto" />
          <div className="card-body">
            <h5 className="card-title text-center">{e.name}</h5>
            <hr />
            <h2 className="text-center text-dark pb-3">
              ${formatNumber(e.price)}
            </h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
