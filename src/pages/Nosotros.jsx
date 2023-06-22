import React from "react";
import img1 from "../imagenes/SobreNos_galeria/img-1.jpg";
import img2 from "../imagenes/SobreNos_galeria/img-2.jpg";
import img3 from "../imagenes/SobreNos_galeria/img-3.jpg";
import img4 from "../imagenes/SobreNos_galeria/img-4.jpg";
import i2 from "../imagenes/SobreNos_galeria/2.jpg";
import maitenhoja from "../imagenes/SobreNos_galeria/maitenhoja.jpg";
import premio1 from "../imagenes/SobreNos_galeria/Galeria/PREMIO1.jpg";
import premio4 from "../imagenes/SobreNos_galeria/Galeria/PREMIO4.jpg";
import img6976 from "../imagenes/IMG_6976.jpg";
import img6993 from "../imagenes/IMG_6993.jpg";
import img6942 from "../imagenes/IMG_6942.jpg";
import left from "../imagenes/SobreNos_galeria/Galeria/left.png";
import right from "../imagenes/SobreNos_galeria/Galeria/right.png";
import close from "../imagenes/SobreNos_galeria/Galeria/close.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/nosotros.css";

const Nosotros = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="header_seccion">
          <h1 className="main-div__h1">NOSOTROS</h1>
        </div>
        <div className="main_div-2">
          <h1 className="TituloNos">MaiteN</h1>
          <h2 className="SubtituloNos">By Maria Teresa</h2>
          <p className="CuerpoNos">
            Arbol maravilloso propio de la flora autóctona de Mendoza que se
            caracteriza por su valiosa sombra y hermosa y elegante apariencia.
            Está verde casi todo el año. Además de su sombra, indispensable por
            estas latitudes, tiene propiedades medicinales muy conocidas y
            utilizadas por los pueblos originarios.
          </p>
          <p>
            Te invito a descubrirlo y disfrutarlo en alguna de las hermosas
            plazas o barrios y, si puedieras, en la precordillera, es un
            placer!!
          </p>

          {/* <!--GALERIA DE NOSOTROS--> */}

          <section>
            <div className="container">
              <div className="carousel">
                <input type="radio" name="slides" id="slide-1" />
                <input type="radio" name="slides" id="slide-2" />
                <input type="radio" name="slides" id="slide-3" />
                <input type="radio" name="slides" id="slide-4" />
                <input type="radio" name="slides" id="slide-5" />
                <input type="radio" name="slides" id="slide-6" />
                <ul className="carousel__slides">
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src={img4} alt="" />
                      </div>
                    </figure>
                  </li>
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src={img1} alt="" />
                      </div>
                    </figure>
                  </li>
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src={img2} alt="" />
                      </div>
                    </figure>
                  </li>
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src={img3} alt="" />
                      </div>
                    </figure>
                  </li>
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src={i2} alt="" />
                      </div>
                    </figure>
                  </li>
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src={maitenhoja} alt="" />
                      </div>
                    </figure>
                  </li>
                </ul>
                <ul className="carousel__thumbnails">
                  <li>
                    <label htmlFor="slide-1">
                      <img src={img4} alt="" />
                    </label>
                  </li>
                  <li>
                    <label htmlFor="slide-2">
                      <img src={img1} alt="" />
                    </label>
                  </li>
                  <li>
                    <label htmlFor="slide-3">
                      <img src={img2} alt="" />
                    </label>
                  </li>
                  <li>
                    <label htmlFor="slide-4">
                      <img src={img3} alt="" />
                    </label>
                  </li>
                  <li>
                    <label htmlFor="slide-5">
                      <img src={i2} alt="" />
                    </label>
                  </li>
                  <li>
                    <label htmlFor="slide-6">
                      <img src={maitenhoja} alt="" />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <br />
          <p>
            Este gusto mío hizo que quisiera tenerlo bien presente y, con su
            nombre y el mío, nace MaiteN.
            <br />
            MaiteN, by María Teresa Nutrición un espacio cuyo objetivo es hablar
            sobre nutrición, alimentación, seguridad alimentaria, con contenidos
            actualizados y de calidad, sobre verdades y mitos, creencias e
            historias. Datos, sugerencias para orientarte en el día a día porque
            La salud no es un juego y éste es mi granito de arena para su
            promoción, basada en evidencia científica con lenguaje ameno y
            consejos prácticos.
          </p>
          <br />
          <h3 className="SubtituloNos">¿Quien soy?</h3>
          <br />
          <p>
            La Nutrición es mi pasión y profesión, que estudié en la Universidad
            Juan Agustín Maza, y la que me dio la libertad de incursionar en
            áreas muy diversas.
          </p>
          <br />
          <p>
            Luego de un breve paso por la labor hospitalaria, me di cuenta que
            “no era lo mío” y comencé el camino -no siempre fácil- por el
            marketing alimentario y nutricional, la industria, la docencia, la
            consultoría de empresas, la atención primaria en consultorios
            privados y públicos y más.
          </p>
          <br />
          <p>
            Tuve el gusto de htmlFormar parte de un equipo de trabajo
            multidisciplinario cuyo fruto fue el 1°PREMIO ARGENINTA a la Calidad
            Agroalimentaria, por el trabajo de promoción de frutas y verduras
            mendocinas.
          </p>
          <div className="container-fluid">
            <div className="row galery">
              <a href="#image1">
                <img src={premio1} className="thumb" />
              </a>
              <div id="image1" className="lightbox">
                <a href="#image5">
                  <img src={left} className="previous" />
                </a>
                <a href="#_">
                  <img src={premio1} />
                </a>
                <a href="#_">
                  <img src={close} className="exit" />
                </a>
                <a href="#image2">
                  <img src={right} className="next" />
                </a>
              </div>

              <a href="#image2">
                <img src={premio4} className="thumb" />
              </a>
              <div id="image2" className="lightbox">
                <a href="#image1">
                  <img src={left} className="previous" />
                </a>
                <a href="#_">
                  <img src={premio4} />
                </a>
                <a href="#_">
                  <img src={close} className="exit" />
                </a>
                <a href="#image3">
                  <img src={right} className="next" />
                </a>
              </div>

              <a href="#image3">
                <img src={img6976} className="thumb" />
              </a>
              <div id="image3" className="lightbox">
                <a href="#image2">
                  <img src={left} className="previous" />
                </a>
                <a href="#_">
                  <img src={img6976} />
                </a>
                <a href="#_">
                  <img src={close} className="exit" />
                </a>
                <a href="#image4">
                  <img src={right} className="next" />
                </a>
              </div>

              <a href="#image4">
                <img src={img6993} className="thumb" />
              </a>
              <div id="image4" className="lightbox">
                <a href="#image3">
                  <img src={left} className="previous" />
                </a>
                <a href="#_">
                  <img src={img6993} />
                </a>
                <a href="#_">
                  <img src={close} className="exit" />
                </a>
                <a href="#image5">
                  <img src={right} className="next" />
                </a>
              </div>

              <a href="#image5">
                <img src={img6942} className="thumb" />
              </a>
              <div id="image5" className="lightbox">
                <a href="#image5">
                  <img src={left} className="previous" />
                </a>
                <a href="#_">
                  <img src={img6942} />
                </a>
                <a href="#_">
                  <img src={close} className="exit" />
                </a>
                <a href="#image1">
                  <img src={right} className="next" />
                </a>
              </div>
            </div>
          </div>
          <br />
          <p>
            Actualmente trabajo como Nutricionista en Atención Primaria en
            Centros de Salud –CAPS- del Gran Mendoza y en la actividad privada a
            través de la consultoría individual, familiar y empresarial.
          </p>
          <br />
        </div>
      </main>

      {/* FOOTER */}

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
                    <a href="asesoria.html">Asesoria</a>
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
                    <a href="guia.html">Guia restaurantes</a>
                  </li>
                  <li>
                    <a href="contacto.html">Contacto</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Maria Teresa Abraham</h3>
                <br />
                <div>
                  Arbol maravilloso propio de la flora autóctona de Mendoza que
                  se caracteriza por su valiosa sombra, hermosa y elegante
                  apariencia.
                  <br /> Este gusto mío hizo que quisiera tenerlo bien presente
                  y, con su nombre y el mío, nace MaiteN.
                </div>
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
            <p className="copyright">Los Web Maters © 2021</p>
          </div>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default Nosotros;
