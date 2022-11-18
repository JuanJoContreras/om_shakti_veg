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

  useEffect(() => {
    getProductos();
    getUsuarios();
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
        setHover
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