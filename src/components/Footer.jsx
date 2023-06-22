import React from "react";
import "../style/footer.css"

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="asesoria.html">Asesoría</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <ul>
                <li>
                  <a href="nosotros.html">Nosotros</a>
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
            <div className="col-md-6 item text">
              <h3>Maria Teresa Abraham</h3>
              <br />
              <p>
                Arbol maravilloso propio de la flora autóctona de Mendoza que se
                caracteriza por su valiosa sombra, hermosa y elegante
                apariencia.
                <br /> Este gusto mío hizo que quisiera tenerlo bien presente y,
                con su nombre y el mío, nace MaiteN.
              </p>
            </div>
            <div className="col"></div>
            <div className="col item social">
              <a
                href="https://www.facebook.com/MaitenNutricion/"
                target="_blank"
              >
                <img
                  src="imagenes/Facebook-icon.png"
                  alt=""
                  width="35"
                  height="35"
                />
              </a>
              <a
                href="https://www.instagram.com/maitenutricion/"
                target="_blank"
              >
                <img
                  src="imagenes/instagram-icon.png"
                  alt=""
                  width="35"
                  height="35"
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="imagenes/wsp-icon.png"
                  alt=""
                  width="35"
                  height="35"
                />
              </a>
            </div>
          </div>
          <p className="copyright">Los Web Masters ©️ 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
