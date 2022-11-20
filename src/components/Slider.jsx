import { isMobile } from "react-device-detect";

export default function Slider() {
  let img1 = () => {
    if (isMobile) {
      return (
        <img
          className="d-block w-100 slider-img"
          src="https://i.imgur.com/ffXnRav.jpg"
          alt="First slide"
        />
      );
    }
    return (
      <img
        className="d-block w-100 slider-img"
        src="https://i.imgur.com/gppoEK1.jpg"
        alt="First slide"
      />
    );
  };

  let img2 = () => {
    if (isMobile) {
      return (
        <img
          className="d-block w-100 slider-img"
          src="https://i.imgur.com/f0mwVPg.jpg"
          alt="Second slide"
        />
      );
    }
    return (
      <img
        className="d-block w-100 slider-img"
        src="https://i.imgur.com/Hn21JW9.jpg"
        alt="Second slide"
      />
    );
  };

  let img3 = () => {
    if (isMobile) {
      return (
        <img
          className="d-block w-100 slider-img"
          src="https://i.imgur.com/MEYiJAO.jpg"
          alt="Third slide"
        />
      );
    }
    return (
      <img
        className="d-block w-100 slider-img"
        src="https://i.imgur.com/ZSI9d8h.jpg[/img"
        alt="Third slide"
      />
    );
  };
  return (
    <>
      
        <div className="slider">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                {img3()}
                <div className="carousel-caption d-md-block">
                  <h5>Desayunos</h5>
                  <p>Servicios Personalizados</p>
                </div>
              </div>
              <div className="carousel-item">
                {img2()}
                <div className="carousel-caption d-md-block">
                  <h5>Almuerzos</h5>
                  <p>Servicios Personalizados</p>
                </div>
              </div>
              <div className="carousel-item">
                {img1()}
                <div className="carousel-caption d-md-block">
                  <h5>Extras</h5>
                  <p>Servicios Personalizados</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>   
      
    </>
  );
}
