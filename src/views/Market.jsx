import { useContext } from "react";
import Context from "../Context";

import Card from "../components/Card";

export default function Favoritos() {
  const { fotos, setFotos } = useContext(Context);

  const deleteFavorito = (id) => {
    const fotoIndex = fotos.fotoIndex((elem) => elem.id === id);
    fotos.splice(fotoIndex, 1);
    fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
    setFotos([...fotos]);
  };

  return (
    <div className="text-center pt-5">
    <h1 className="mb-4">Market Place</h1>    
    <hr />      
          <div className="p-3 galeria grid-columns-4">
          {fotos
          .filter((elem) => elem.favorito)
          .map((elem, i) => (
            <img 
            src={elem.src}
            alt=""
            onClick={() => deleteFavorito(elem.id)}
            key={i}
            />
          ))}
          <Card />         
        </div>  
        </div>  
  
    );
  }
