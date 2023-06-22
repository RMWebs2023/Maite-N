import React from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../style/contacto.css"

const Contacto = () => {
  return (
    <>
    <Navbar />
    <main>
      <div className="header_seccion">
        <h1>CONTACTO</h1>
      </div>

      <section className="row">
        <div className="col-12 gridContacto">
          <form
            className="formulario col-6 col-sm-12"
            action="mailto:info@maiten.site"
            method="post"
            enctype="text/plain"
          >
            <fieldset>
              <legend>
                <b>Formulario de contacto</b>
              </legend>
              {/* <!--Layout--> */}
              <div className="row">
                <div className="col">
                  <label for="Full name">
                    <i className="fas fa-user"></i> Nombre y Apellido:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa tu nombre y apellido"
                    aria-label="Full name"
                    // style="font-size: 12px;"
                    required
                  />
                </div>
                <div className="col">
                  <label for="Telefono">
                    <i className="fas fa-mobile-alt"></i> Telefono:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Telefono"
                    aria-label="Telefono"
                    // style="font-size: 12px;"
                    required
                  />
                </div>
                <div className="col">
                  <label for="Email">
                    <i className="fas fa-at"></i> Email:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Direccion de email"
                    aria-label="Email"
                    // style="font-size: 12px;"
                    required
                  />
                </div>
              </div>
              <br />
              {/* <!--Floating labels--> */}
              <div className="form-floating">
                <label for="floatingTextarea2">
                  <i className="far fa-comment-dots"></i> Mensaje:
                </label>
                <textarea
                  className="form-control"
                  placeholder="Escribinos tu consulta aqui"
                  id="floatingTextarea2"
                  // style="height: 250px; font-size: 15px;"
                ></textarea>
                <br />
                {/* <!--Boton enviar--> */}
                <input type="submit" value="Enviar" />
                <input type="Reset" value="Cancelar" />
              </div>
            </fieldset>
          </form>

          <div className="contactos col-6 col-sm-12">
            <div className="ContenedorContactos">
              {/* <!--Domicilio--> */}
              <span>
                <i className="fas fa-map-marker-alt"></i>
                <p className="Texto">Domicilio del lugar</p>
              </span>
              {/* <!--Telefono--> */}
              <span>
                <i className="fas fa-mobile-alt"></i>
                <p className="Texto">Telefono: 2616202630</p>
              </span>
              {/* <!--Email--> */}
              <span>
                <i className="far fa-envelope"></i>
                <p className="Texto">Email: test@test.com</p>
              </span>
              {/* <!--Redes sociales--> */}
              <span>
                <p>Redes sociales </p>
                <div className="RedesSociales">
                  <a href="">
                    <span className="Whatsapp">
                      <i className="fab fa-whatsapp"></i>
                    </span>
                  </a>
                  <a href="">
                    <span className="Instagram">
                      <i className="fab fa-instagram"></i>
                    </span>
                  </a>
                  <a href="">
                    <span className="Facebook">
                      <i className="fab fa-facebook"></i>
                    </span>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default Contacto;
