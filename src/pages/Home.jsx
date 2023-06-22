import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../imagenes/logo-circle.png";
import tarjeta_calculadora from "../imagenes/opciones/tarjeta_calculadora.jpg"
import tarjeta_blog from "../imagenes/opciones/tarjeta_blog.jpg"
import img_6970 from "../imagenes/IMG_6970.jpg"
import "../style/index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div>
          {/* <!--Primera parte del MAIN--> */}
          <div className="main_div1">
            <img src={logo} className="main_div1-logo" />
            <h1 className="main_div1-titulo">MaiteN</h1>
            <h2 className="main_div1-subtitulo">By Maria Teresa Abraham</h2>
          </div>

          {/* <!--Segunda parte con un texto--> */}
          <div className="main_div2">
            <p className="main_div2-p">
              Arbol maravilloso propio de la flora autóctona de Mendoza que se
              caracteriza por su valiosa sombra, hermosa y elegante apariencia.
              <br />
              Este gusto mío hizo que quisiera tenerlo bien presente y, con su
              nombre y el mío, nace MaiteN.
              <br />
            </p>
            <Link to="/nosotros">
              <button type="button" className="btn btn-outline-light">
                Seguir leyendo
              </button>
            </Link>
          </div>

          {/* <!--Tercera parte parte del main con tarjetas--> */}
          <div className="body">
            <div 
            className="flip-card-container" 
            // style="--hue: 220"
            >
              <div className="flip-card">
                <div className="card-front">
                  <figure>
                    <div className="img-bg"></div>
                    <img
                      src={tarjeta_calculadora}
                      alt="Calculadoras"
                    />
                    <figcaption>Calculadoras</figcaption>
                  </figure>

                  <ul>
                    <li>IMC</li>
                    <li>Peso ideal</li>
                  </ul>
                </div>

                <div className="card-back">
                  <figure>
                    <div className="img-bg"></div>
                    <img
                      src={tarjeta_calculadora}
                      alt="Calculadoras"
                    />
                  </figure>

                  <button>
                    {" "}
                    <a
                      // style="text-decoration: none; color: white;"
                      href="calculadoras.html"
                    >
                      ir a
                    </a>{" "}
                  </button>

                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /flip-card-container --> */}

            {/* <!-- flip-card-container --> */}
            <div 
            className="flip-card-container" 
            // style="--hue: 170"
            >
              <div className="flip-card">
                <div className="card-front">
                  <figure>
                    <div className="img-bg"></div>
                    <img src={tarjeta_blog} alt="Blog" />
                    <figcaption>Blog</figcaption>
                  </figure>

                  <ul>
                    <li>
                      Contenido
                      <br /> de tu interes
                    </li>
                  </ul>
                </div>

                <div className="card-back">
                  <figure>
                    <div className="img-bg"></div>
                    <img
                      src={tarjeta_blog}
                      alt="image-2"
                    />
                  </figure>

                  <button>
                    <a
                      // style="text-decoration: none; color: white;"
                      href="blog.html"
                    >
                      ir al blog
                    </a>
                  </button>

                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /flip-card-container --> */}

            {/* <!-- flip-card-container --> */}
            <div 
            className="flip-card-container" 
            // style="--hue: 350"
            >
              <div className="flip-card">
                <div className="card-front">
                  <figure>
                    <div className="img-bg"></div>
                    <img src={img_6970} alt="Planes de asesoria" />
                    <figcaption>Asesoría</figcaption>
                  </figure>

                  <ul>
                    <li>
                      Asesoría
                      <br /> nutricional
                    </li>
                  </ul>
                </div>

                <div className="card-back">
                  {/* <!-- only if the image is necessary --> */}
                  <figure>
                    <div className="img-bg"></div>
                    <img src={img_6970} alt="planes de asesoria" />
                  </figure>

                  <button>
                    <a
                      // style="text-decoration: none; color: white;"
                      href="asesoria.html"
                    >
                      {" "}
                      Ir a contratar asesoria
                    </a>
                  </button>

                  {/* <!-- can add svg here and remove these eight spans --> */}
                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
