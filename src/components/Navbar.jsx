import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="logo">Portfolio | Stephanie</div>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={location.pathname === "/projects" ? "active" : ""}>
          <Link to="/projects">Proyectos</Link>
        </li>
        <li className={location.pathname === "/tareas" ? "active" : ""}>
          <Link to="/tareas">Tareas</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
