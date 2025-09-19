// src/App.js o src/components/Navbar.jsx

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
import GymInfo from "../pages/GymInfo";

export default function Navbar() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/gym">Gimnasio</Link>
          </li>{" "}
          {/* ✅ Nueva opción */}
        </ul>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/gym" element={<GymInfo />} /> {/* ✅ Nueva ruta */}
      </Routes>
    </Router>
  );
}
