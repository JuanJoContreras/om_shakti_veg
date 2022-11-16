import AsideMenu from "../components/AsideMenu";
import Publicaciones from "../components/Publicaciones";

export default function Tienda() {
  return (
    <div id="tienda" className="bg-light vh-100">
      <AsideMenu />
      <Publicaciones />
    </div>
  );
}