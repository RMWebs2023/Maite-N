import React from "react";
import "../style/navbar.css"

const Navbar = () => {
  return (
    <header className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="nosotros.html">Nosotros</a>
              </li>
              <li>
                <a href="asesoria.html">Asesoria</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="calculadoras.html">Calculadoras</a>
              </li>
              <li>
                <a href="guia.html">Guia de restaurantes</a>
              </li>
              <li>
                <a href="contacto.html">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
