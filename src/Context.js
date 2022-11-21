import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

//Creacion del context
const Context = createContext(null);

// Provider con la fuente de datos
const Provider = ({ children }) => {  
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [Intro, setIntro] = useState(true);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [productoDetail, setProductoDetail] = useState({});
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [datos, setDatos] = useState([]);  
  const [busqueda, setBusqueda] = useState(''); 
  const [publicaciones, setPublicaciones] = useState([
    {
      title: "Khatte Lehsuni",
      user: "Raj",
      description: "Ricas Hamburguesas a base de garbanzos e ingredientes naturales, rica en proteínas.",
      price: 30000,
      img: "https://i.imgur.com/x3TV25I.jpg"
    },
    {
      title: "Dhal de Arvejas",
      user: "Vishnu",
      description: "Almuerzos",
      price: 20000,
      img: "https://i.imgur.com/D00EJVA.jpg"
    },    
  ]);

     
  const getProductos = async () => {
    const res = await fetch("/productos.json");
    const data = await res.json();
    setProductos(data);
  };

  const getUsuarios = async () => {
    const res = await fetch("/usuarios.json");
    let data = await res.json();
    setUsuarios(data);
  };

  const consultarInformacion = async () => {
    const res = await fetch("/productos.json");
    const data = await res.json();
      //const {data} = await res.json(); 
       // Formatea a json
      // Lo que contiene el endpoint esta dentro de data
setDatos(data); 
};


  useEffect(() => {
    getProductos();
    getUsuarios();
    consultarInformacion();
  }, []);

  const changeForm = (bool) => {
    setIntro(bool);
  };

  const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
    return isAuthenticated ? children : <Navigate to="/" />;
  };

  const setFavorito = (id) => {
    const productoIndex = productos.findIndex((p) => p.id === id);
    productos[productoIndex].liked = !productos[productoIndex].liked;
    setProductos([...productos]);
    //console.log(productos);
  };

  return (
    <Context.Provider
      value={{
        productos,
        setProductos,
        usuarios,
        setUsuarios,
        Intro,
        setIntro,
        isAuthenticated,
        setisAuthenticated,
        changeForm,
        PrivateRoute,
        setFavorito,
        productoDetail,
        setProductoDetail,
        rating,
        setRating,
        hover,
        setHover,
        publicaciones,
        setPublicaciones,
        datos, 
        setDatos,
        busqueda, 
        setBusqueda
      }}
    >
      {children}
    </Context.Provider>
  );
};

// Export del provider
export { Provider };

// Export del context
export default Context;