import { useContext } from "react";
import Context from "../Context";
import Heart from "./Heart";

import  "../assets/css/card.css";

export default function Favoritos() {

  const { fotos, setFotos } = useContext(Context);

  const setFavorito = (id) => {
      const fotoIndex = fotos.findIndex((f)  => f.id === id);
      fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
      setFotos([...fotos]);
  };

  return (
    <div className="galeria grid-columns-4 p-3">
      {fotos.map((foto, i) => (
    <div
        onClick={() => setFavorito(foto.id)}
        className="foto"
        style={{ backgroundImage: `url(${foto.src})`}}
        key={i}    
    >
      <Heart filled={foto.favorito}/>
      <p>{foto.name}</p>
      <p>{foto.desc}</p>
      <p>{foto.price}</p>
      
    </div>
      )) }
    </div>
  );
}