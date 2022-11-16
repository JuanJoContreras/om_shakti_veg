import { createContext, useState, useEffect } from "react";

const Context = createContext(null);

function Provider({ children }) {
  const [users, setUsers] = useState([]);
  const [session, setSession] = useState(null);

  const [publicaciones, setPublicaciones] = useState([
    {
      title: "NOT MAYO ORIGINAL",
      user: "Dea",
      description: "Aderezo vegetal tipo mayonesa en base a garbanzo y lupino, envasado en envase doypack",
      price: 34296,
      img: "https://i.imgur.com/ZSI9d8h.jpg[/img"
    }
  ]);
   
  const [fotos, setFotos] = useState([]);

  const endpoint = "/productos.json";
  const getFotosNaturales = async () => {
    const res = await fetch(endpoint);
    let data = await res.json();
    let dataFiltrada = data.photos.map((elem) => ({
      id: elem.id,
      name:elem.name,
      src: elem.src.tiny,
      desc: elem.alt,
      price: elem.price,
      favorito: false
    }))
    
    setFotos(dataFiltrada); 
    //console.log(dataFiltrada) 
  };

  useEffect (() => {
    getFotosNaturales();
  }, []);


  const state = {
    users,
    setUsers,
    session,
    setSession,
    publicaciones,
    setPublicaciones,
    fotos,
    setFotos
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export default { Provider, Context };