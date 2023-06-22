import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Asesoria from "./pages/Asesoria";
import Calculadora from "./pages/Calculadora";
import Contacto from "./Pages/Contacto";
import Guia from "./Pages/Guia";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asesoria" element={<Asesoria />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/guia" element={<Guia />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
