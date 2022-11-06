import React from 'react';
import "../assets/css/Header.css";


const Header = () => {
    return (       
        <div className="p-5 text-center bg-image rounded-3 banner">
            <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                    <h1 className="mb-3">
        Bienvenido a <span className="fw-bold">Om Shakti</span> 🕉🚀
      </h1>
      <h4> MarketPlace de Productos Veganos! <hr className="solid" /></h4>
                    </div>
                </div>
            </div>
        </div>      
    )
}
export default Header;