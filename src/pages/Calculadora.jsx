import React from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../style/calculadoras.css"

const Calculadora = () => {
  return (
    <>
    <Navbar />
    <main>
      {/* <!--Calculadora en etiqueta main calculadora de yazio--> */}
      <div className="header_seccion">
        <h1>CALCULADORAS</h1>
      </div>
      <div className="contenedor-fondo">
        <div>
          <br />
          <p className="texto-1">
            En esta seccion podras usar diferentes calculadoras para obtener el
            IMC, consumo diario de calorias y ademas el peso ideal.
          </p>
          <br />
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Indice de Masa Corporal
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div
                  className="yz-widget"
                  data-calculator-type="bmi"
                  data-language="es"
                  data-unit-system="metric"
                  data-background-color="#EEEEEE"
                  data-text-color="#212121"
                  data-primary-color="#1FD73B"
                  data-alternate-background-color="#FFFFFF"
                  data-alternate-text-color="#FFFFFF"
                  data-secondary-color="#FFC107"
                >
                  <span className="yz-copyright">
                    Powered by{" "}
                    <a href="https://www.yazio.com/es/calculadora-imc">YAZIO</a>
                  </span>
                </div>
                <script
                  src="https://widget.yazio.com/calculator.js"
                  async
                ></script>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Consumo diarios de calorías
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div
                  className="yz-widget"
                  data-calculator-type="daily_need"
                  data-language="es"
                  data-unit-system="metric"
                  data-background-color="#EEEEEE"
                  data-text-color="#212121"
                  data-primary-color="#1FD73B"
                  data-alternate-background-color="#FFFFFF"
                  data-alternate-text-color="#FFFFFF"
                  data-secondary-color="#FFC107"
                >
                  <span className="yz-copyright">
                    Powered by{" "}
                    <a href="https://www.yazio.com/es/calculadora-calorias-diarias">
                      YAZIO
                    </a>
                  </span>
                </div>
                <script
                  src="https://widget.yazio.com/calculator.js"
                  async
                ></script>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Peso ideal
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div
                  className="yz-widget"
                  data-calculator-type="ideal_weight"
                  data-language="es"
                  data-unit-system="metric"
                  data-background-color="#EEEEEE"
                  data-text-color="#212121"
                  data-primary-color="#1FD73B"
                  data-alternate-background-color="#FFFFFF"
                  data-alternate-text-color="#FFFFFF"
                  data-secondary-color="#FFC107"
                >
                  <span className="yz-copyright">
                    Powered by{" "}
                    <a href="https://www.yazio.com/es/calculadora-peso-ideal">
                      YAZIO
                    </a>
                  </span>
                </div>
                <script
                  src="https://widget.yazio.com/calculator.js"
                  async
                ></script>
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

export default Calculadora;
