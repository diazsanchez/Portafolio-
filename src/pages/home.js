import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="floating-nav">
          <div>
          </div>
          <div>
          </div>
        </div>

        <main className="main-section">
          <div className="welcome-text">
            <h1 className="main-title">
              Hola ¡Bienvenido soy <span className="title">Stephanie!</span>
            </h1>
            <h2 className="main-subtitle">
              Estoy aprendiendo y trabajando en proyectos de <span className="name">Aseguramiento de Software</span>
            </h2>
            <p className="main-description">
Apasionada por aprender a crear experiencias digitales confiables y seguras.
            </p>

            <div className="action-buttons">
              <a href="/projects" className="action-btn primary">
                Ver Proyectos
              </a>
              <a href="/contact" className="action-btn primary">
                Contactar
              </a>
            </div>
          </div>
        </main>

        <aside className="side-panel">
          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-image">
                <div className="image-wrapper">

                  <img
                    src="/images/IMG_E6686.JPG"
                    alt="Stephanie - Estudiante de Ingeniería en Sistemas"
                    className="profile-photo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="profile-icon" style={{display: 'none'}}>
                  </div>
                </div>
              </div>

              <div className="profile-details">
                <h3 className="profile-title">Stephanie Díaz</h3>
                <p className="profile-subtitle">Estudiante de Ingeniería en Sistemas</p>
              </div>
            </div>

            <div className="quick-info">
              <div className="info-item">
                <span className="info"> Guatemala </span>
              </div>
            </div>

            <div className="signature">
              <div className="signature-text">Stephanie Díaz</div>
              <div className="signature-year">2025</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Home;
