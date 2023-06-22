import React from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import imagen from "../imagenes/5278.png"
import "../style/guia.css"

const Guia = () => {
  return (
    <>
    <Navbar />
    <main>
      <div className="guia-bienvenida">
        <h1>
          <strong>Pagina en construccion</strong>
        </h1>
        <img src={imagen} 
        alt="" 
        // style="opacity: 0.75;" 
        />
      </div>
    </main>
    <Footer />
    </>
  );
};

export default Guia;
