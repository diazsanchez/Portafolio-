import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  const projects = [

  ];

  const featuredProject = projects.find(project => project.featured);

  return (
    <div className="projects-container">
      <div className="projects-hero">
        <h1 className="projects-title">Mis <span className="highlight">Proyectos</span></h1>
        <p className="projects-subtitle">
          Explora los proyectos académicos que demuestran mis habilidades en Aseguramiento de Calidad de Software
        </p>
      </div>

      <div className="projects-content">
        {featuredProject && (
          <div className="featured-section">
            <div className="featured-badge"> Proyecto Destacado</div>
            <div className="featured-project">
              <div className="featured-content">
                <div className="featured-category">{featuredProject.category}</div>
                <h2>{featuredProject.title}</h2>
                <p>{featuredProject.description}</p>

                <div className="project-meta">
                  <div className="technologies">
                    {featuredProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className={`status ${featuredProject.status.toLowerCase().replace(' ', '-')}`}>
                    {featuredProject.status}
                  </div>
                </div>

                <Link to={`/projects/${featuredProject.id}`} className="btn-primary">
                  Ver Proyecto Completo
                </Link>
              </div>
              <div className="featured-visual">
                <div className="floating-elements">
                  <div className="element">OWASP</div>
                  <div className="element">Testing</div>
                  <div className="element">Security</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="projects-grid">
          <h2 className="section-title">Todos los Proyectos</h2>

          <div className="grid-container">
            {projects.map((project) => (
              <div key={project.id} className={`project-card ${project.featured ? 'featured-card' : ''}`}>
                <div className="card-header">
                  <div className="project-category">{project.category}</div>
                  <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </div>
                </div>

                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="card-footer">
                  <Link to={`/projects/${project.id}`} className="btn-secondary">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h2>¿Interesado en colaborar?</h2>
            <p>
              Siempre estoy abierta a discutir nuevos proyectos y oportunidades de aprendizaje en el área de QA.
            </p>
            <Link to="/contact" className="btn-primary">
              Hablemos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
