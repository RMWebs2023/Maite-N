import React from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../style/asesoria.css"

const Asesoria = () => {
  return (
    <>
    <Navbar />
    <main>
      <div className="header_seccion">
        <h1 className="letra-header">ASESORíA</h1>
      </div>

      <section>
        <div className="Asesoria-bienvenida">
          <h1>
            {" "}
            <strong>Alimentación y Nutrición Responsable</strong>{" "}
          </h1>
          <ul>
            <li>Diferente para cada persona (PERSONALIZADA)</li>
            <li>
              Respeta tus costumbres, horarios, situación familiar (ADECUADA)
            </li>
            <li>
              Brinda las pautas y sugerencias para incluir TODOS los nutrientes
              esenciales para la vida y el normal funcionamiento del organismo
              (CALIDAD)
            </li>
            <li>
              Ayuda a balancear los diferentes ingredientes de la alimentación
              (ARMÓNICA).
            </li>
          </ul>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-2">
          {/* <!--Individual--> */}
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Plan individual</b>
                </h5>
                <hr />
                <h4>NO EXISTE UNA DIETA IGUAL PARA TODOS</h4>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fas fa-carrot"></i>En la consulta
                    concertamos con vos los objetivos a alcanzar.
                  </li>
                  <br />
                  <li>
                    <i className="fa-li fas fa-carrot"></i>Te acompañamos durante
                    todo el tratamiento.
                  </li>
                  <br />
                  <li>
                    <i className="fa-li fas fa-carrot"></i>Tené en cuenta que
                    trabajamos con alimentos NO con suplementos.
                  </li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
          {/* <!--Familiar--> */}
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Plan Familiar</b>
                </h5>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fas fa-carrot"></i>Evaluamos al grupo
                    conforme edades, actividades y necesidades.
                  </li>
                  <br />
                  <li>
                    <i className="fa-li fas fa-carrot"></i>Orientamos en la
                    confección de menús semanales o quincenales.
                  </li>
                  <br />
                  <li>
                    <i className="fa-li fas fa-carrot"></i>Asistimos en la
                    optimización de los ingresos destinados a los alimentos.
                  </li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
          {/* <!--Empresa--> */}
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Plan Empresa</b>
                </h5>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fas fa-carrot"></i>Destinado a aquellas
                    empresas involucradas en la Responsabilidad Social y
                    preocupadas por su Recurso Humano.
                  </li>
                  <br />
                  <li>
                    <i className="fa-li fas fa-carrot"></i>Con evaluación y
                    diagnóstico.
                  </li>
                  <br />
                  <li>
                    <i className="fa-li fas fa-carrot"></i>Planificación y
                    seguimiento acorde a las evaluaciones realizadas.
                  </li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
          {/* <!--Abogados--> */}
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Plan Abogados</b>
                </h5>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fas fa-carrot"></i>Soporte técnico
                    específico en temas de Alimentación y Nutrición.
                  </li>
                  <br />
                  <li>
                    <i className="fa-li fas fa-carrot"></i>Evaluación personalizada
                    (cuando así se requiera).
                  </li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default Asesoria;
