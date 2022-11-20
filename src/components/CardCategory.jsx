import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";
import { formatNumber } from "../Helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

const CardCategory = ({ category }) => {
  // const [total, setTotal] = useState(0);
  const { productos, setFavorito } = useContext(Context);
  const navigate = useNavigate();
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Slider {...settings}>
        {productos
          .filter((elem) => elem.categoryId === category)
          .map((e) => (
            <div
              key={e.id}
              className="card"
              to={`/producto/${e.id}`}
              onClick={() => navigate(`/producto/${e.id}`)}
            >
              <div onClick={() => setFavorito(e.id)} className="favorite">
                <FontAwesomeIcon icon={faStarOfLife} />
              </div>
              <img src={e.img} className="card-img-top" alt="producto" />
              <div className="card-body">
                <h5 className="card-title text-center text-dark">{e.name}</h5>
                <hr className="hrdiv"/>
                <h2 className="text-center text-dark pb-3">
                  ${formatNumber(e.price)}
                </h2>
              </div>
            </div>
          ))}
      </Slider>
    </>
  );
};

export default CardCategory;
