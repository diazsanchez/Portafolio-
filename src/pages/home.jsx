import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Navegación flotante */}
      <div className="floating-nav">
        <div className="nav-item">
          <Link to="/projects" className="nav-link">Proyectos</Link>
        </div>
        <div className="nav-item">
          <Link to="/about" className="nav-link">Sobre mí</Link>
        </div>
        <div className="nav-item">
          <Link to="/contact" className="nav-link">Contacto</Link>
        </div>
      </div>

      <div className="home-content">
        <div className="main-section">
          <div className="welcome-text">
            <h1 className="main-title">
              ¡Hola! <span className="title-highlight">Bienvenido</span>
            </h1>
            <h2 className="main-subtitle">
              Soy <span className="name-highlight">Stephanie</span>
            </h2>
            <p className="main-description">
              Estudiante especializada en <strong>Aseguramiento de Calidad de Software</strong>
            </p>
          </div>

          <div className="action-buttons">
            <Link to="/projects" className="action-btn primary">
              <span>Ver proyectos</span>
            </Link>
            <Link to="/about" className="action-btn secondary">
              <span>Conóceme</span>
            </Link>
          </div>
        </div>

        <div className="side-panel">
          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-image">
                <div className="image-wrapper">
                </div>
              </div>

              <div className="profile-details">
                <h3 className="profile-title">Stephanie Díaz</h3>
                <p className="profile-subtitle">QA Student</p>
                <div className="profile-badge">UMG</div>
              </div>
            </div>

            <div className="quick-info">
              <div className="info-item">
                <span className="info-label">Especialidad</span>
                <span className="info-value">Quality Assurance</span>
              </div>
              <div className="info-item">
                <span className="info-label">Estado</span>
                <span className="info-value">Estudiante Activa</span>
              </div>
              <div className="info-item">
                <span className="info-label">Año</span>
                <span className="info-value">2025</span>
              </div>
            </div>

            <div className="signature">
              <div className="signature-text">Stephanie Díaz</div>
              <div className="signature-year">2025</div>
            </div>
          </div>

          <div className="decorative-elements">
            <div className="deco-item deco-1">
              <span className="deco-text">Testing</span>
            </div>
            <div className="deco-item deco-2">
              <span className="deco-text">QA</span>
            </div>
            <div className="deco-item deco-3">
              <span className="deco-text">Learning</span>
            </div>
            <div className="deco-item deco-4">
              <span className="deco-text">Automation</span>
            </div>
          </div>
        </div>
      </div>

      <div className="home-footer">
        <div className="footer-content">
          <div className="footer-text">
            <p>Portafolio Estudiantil de Aseguramiento de Calidad</p>
            <p className="footer-author">Hecho por Stephanie Díaz - QA Student</p>
          </div>
        </div>
      </div>
    </div>
  );
}
