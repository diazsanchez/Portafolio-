import React from "react";
import "./About.css";

export default function About() {

  const experiences = [
    {
      title: "Estudiante de Aseguramiento de Calidad de Software",
      period: "2025 - Presente",
      description: "Desarrollando habilidades avanzadas en pruebas de software, análisis de calidad y metodologías QA.",
      achievements: ["Análisis de requisitos funcionales", "Diseño de casos de prueba", "Ejecución de pruebas manuales y automatizadas"]
    },
    {
      title: "Proyecto de Investigación - OWASP Top 10",
      period: "2025",
      description: "Investigación exhaustiva sobre vulnerabilidades web críticas y desarrollo de estrategias de mitigación.",
      achievements: ["Análisis de 10 vulnerabilidades principales", "Creación de guía de pruebas de seguridad", "Desarrollo de casos de prueba específicos"]
    },
    {
      title: "Desarrollo de Estrategias de Testing",
      period: "2025",
      description: "Elaboración de casos de prueba para aplicaciones.",
      achievements: ["Casos de prueba para aplicaciones CRUD", "Pruebas de integración de sistemas", "Documentación técnica detallada"]
    }
  ];

  const skills = [
    {
      category: "Testing Manual",
      items: ["Casos de prueba", "Planes de testing", "Reportes de bugs", "Análisis de requisitos"]
    },
    {
      category: "Herramientas",
      items: ["JIRA", "Git", "VS Code", "OWASP"]
    },
    {
      category: "Metodologías",
      items: ["Agile", "Scrum", "Black Box Testing"]
    }
  ];

  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="hero-background">
          <div className="floating-elements">
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">Quality Assurance Specialist</span>
          </div>

          <h1 className="about-title">
            Sobre <span className="about-title">mí</span>
          </h1>

          <p className="about-subtitle">
            Estudiante comprometida por el Aseguramiento de Calidad de Software
          </p>


          <div className="hero-highlights">
            <div className="highlight-item">
              <span className="highlight-number">3+</span>
              <span className="highlight-label">Proyectos</span>
            </div>

            <div className="highlight-item">
              <span className="highlight-number">2025</span>
              <span className="highlight-label">En Desarrollo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-content">
        {/* Información Principal */}
        <div className="main-info-section">
          <div className="info-container">
            <div className="info-card">
              <div className="card-header">
                <div className="profile-image">
                  <div className="image-circle">
                    <span className="profile-emoji"></span>
                  </div>
                  <div className="image-glow"></div>
                </div>

                <div className="profile-info">
                  <h2 className="profile-name">Stephanie Díaz</h2>
                  <p className="profile-title">Estudiante de Quality Assurance</p>
                  <p className="profile-university">Universidad Mariano Gálvez de Guatemala</p>

                  <div className="profile-stats">
                    <div className="stat-box">
                      <span className="stat-number">2025</span>
                      <span className="stat-label">Inicio</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-number">3+</span>
                      <span className="stat-label">Proyectos</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profile-description">
                <p>
                  Soy <strong>Stephanie Díaz</strong>, estudiante apasionada por el Aseguramiento de Calidad de Software.
                  Soy Stephanie Díaz, estudiante del curso de Aseguramiento de Software, una materia que me ha permitido comprender la importancia de la calidad dentro del desarrollo de aplicaciones. A lo largo del curso he aprendido que el aseguramiento de software no solo se trata de detectar errores, sino de prevenirlos y garantizar que cada proyecto cumpla con los estándares de funcionalidad, rendimiento y seguridad que los usuarios necesitan.
                </p>
              </div>

              <div className="achievements-section">
                <h3 className="achievements-title"> Logros Destacados</h3>
                <div className="achievements-grid">
                  <div className="achievement-card">
                    <div className="achievement-content">
                      <h4>Formación Académica</h4>
                      <p>Estudiante activa de QA y testing de software</p>
                    </div>
                  </div>

                  <div className="achievement-card">
                    <div className="achievement-content">
                      <h4>Innovación Tecnológica</h4>
                      <p>Comprometida con la adopción de nuevas tecnologías y metodologías ágiles</p>
                    </div>
                  </div>

                  <div className="achievement-card">
                    <div className="achievement-content">
                      <h4>Proyectos Prácticos</h4>
                      <p>Desarrollo de soluciones reales aplicando conocimientos teóricos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-section">
          <div className="section-header">
            <h2>Experiencia Profesional</h2>
            <p className="section-subtitle">Desarrollo de competencias en Quality Assurance</p>
          </div>

          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="card-header">
                  <div className="card-title-section">
                    <h3>{exp.title}</h3>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="achievements-list">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="achievement-item">
                      <span className="achievement-check">✓</span>
                      <span className="achievement-text">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <div className="section-header">
            <h2>Habilidades Técnicas</h2>
            <p className="section-subtitle">Herramientas y tecnologías especializadas en QA</p>
          </div>

          <div className="skills-container">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <div className="category-header">
                  <h3 className="category-title">{skillGroup.category}</h3>
                  <div className="category-icon">⚡</div>
                </div>

                <div className="skills-tags">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
              </div>
            </div>
  );
}
