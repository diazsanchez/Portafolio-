import React from "react";
import projectsData from "../data/projects.js";
import "./projects.css";

export default function Projects() {
  // Proyectos y tareas relacionados completamente integrados
  const projectTasks = [
    {
      id: 1.2,
      title: "Calidad de Software y Aserciones en Chai",
      description: "Chai es una popular biblioteca de afirmaciones de JavaScript ampliamente utilizada para probar y validar el comportamiento del código que admite una variedad de estilos de afirmación, lo que la hace versátil para diferentes necesidades de prueba.",
      status: "Completado",
      category: "Testing Funcional",
      completionDate: "2025",
      technologies: [""],
      icon: "clipboard-check",
      relatedTasks: [""]
    },
    {
      id: 2,
      title: " Análisis crítico del aseguramiento de la calidad de software",
      description: "Tests unitarios completos con reporte de cobertura del 95% utilizando Jest y React Testing Library para sistema de gestión escolar.",
      status: "Completado",
      category: "Testing Unitario",
      completionDate: "2025",
      technologies: [""],
      icon: "chart-bar",
      gradient: "from-purple-500 to-pink-600",
      relatedTasks: [""]
    },
    {
      id: 3,
      title: " Guia OWASP, Investigación Planes y Casos de prueba",
      description: "Ampliar el conocimiento teórico sobre el aseguramiento de la calidad de software, mediante el estudio detallado de estándares internacionales, modelos de calidad y buenas prácticas de verificación y validación aplicables al ciclo de vida del software.",
      status: "Completado",
      category: "Análisis de Seguridad",
      completionDate: "2025",
      technologies: [],
      icon: "shield-check",
      gradient: "from-purple-500 to-pink-600",
      relatedTasks: [""]
    },
    {
      id: 4,
      title: "Herramientas de Pruebas de Software - Investigación Completa",
      description: " Verifican que las funciones de la aplicación actúen de acuerdo con los requerimientos.",
      status: "Completado",
      category: "Automatización",
      completionDate: "2025",
      technologies: [""],
      icon: "code-bracket",
      gradient: "from-amber-500 to-orange-600",
      relatedTasks: [""]
    },
    {
      id: 5,
      title: "Proyecto Node.js con TypeScript/JavaScript - Pruebas y Tablas de Prueba",
      description: "",
      status: "Completado",
      completionDate: "2025",
      technologies: [],
      icon: "server-stack",
      gradient: "from-rose-500 to-red-600",
      relatedTasks: []
    },
    {
      id: 6,
      title: "Unit test - JS/TS",
      description: "Proyecto de Pruebas Unitarias",
      status: "Completado",
      category: "Security Research",
      completionDate: "2025",
      technologies: [],
      icon: "eye",
      gradient: "from-cyan-500 to-blue-600",
      relatedTasks: []
    },
     {
      id: 7,
      title: "HT",
      description: "Proyecto completo con clases de equivalencia, análisis de valores frontera y tablas de decisión",
      status: "Completado",
      category: "Security Research",
      completionDate: "2025",
      technologies: [],
      icon: "eye",
      gradient: "from-cyan-500 to-blue-600",
      relatedTasks: []
    },
     {
      id: 8,
      title: "Registro de errores",
      description: " Seguimiento de bugs reportados utilizando herramientas de bug tracking",
      status: "Completado",
      category: "Security Research",
      completionDate: "2025",
      technologies: [],
      icon: "eye",
      gradient: "from-cyan-500 to-blue-600",
      relatedTasks: []
    },
     {
      id: 1.1,
      title: "Calculadora en Consola C# (.NET Framework)",
      description: "Proyecto de Pruebas Unitarias",
      status: "Completado",
      category: "Security Research",
      completionDate: "2025",
      technologies: [],
      icon: "eye",
      gradient: "from-purple-500 to-pink-600",
      relatedTasks: []
    },
  ];

  return (
    <div className="projects-container">
      {/* Elementos flotantes decorativos */}
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="projects-hero">
        <div className="hero-content">
          <h1 className="projects-title">
            Proyectos & <span className="highlight">Tareas Completadas</span>
          </h1>
          <p className="projects-subtitle">
            Portafolio completo de proyectos de aseguramiento de calidad y casos de prueba desarrollados con estándares profesionales y metodologías avanzadas
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">9</span>
              <span className="stat-label">Proyectos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Completados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Casos de Prueba</span>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-content">
        <div className="projects-grid">
          {projectTasks.map((project, index) => (
            <div key={project.id} className="project-card completed">
              <div className="project-icon">
                <div className="icon-container">
                  <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {project.icon === 'clipboard-check' && (
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    )}
                    {project.icon === 'chart-bar' && (
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    )}
                    {project.icon === 'shield-check' && (
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    )}
                    {project.icon === 'code-bracket' && (
                      <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    )}
                    {project.icon === 'server-stack' && (
                      <path d="M5 12.55a11 11 0 01-6.5-9.82A11 11 0 0112 3a11 11 0 016.5 9.82 11 11 0 01-6.5 9.82 11 11 0 01-6.5-9.82z"/>
                    )}
                    {project.icon === 'eye' && (
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    )}
                  </svg>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <div className="project-meta">
                    <span className="project-category">{project.category || 'Desarrollo'}</span>
                    <span className="completion-date">{project.completionDate}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-status completado">
                    ✓ Completado
                  </span>
                </div>

                <p className="project-description">{project.description}</p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="related-tasks">
                  <div className="tasks-header">
                    <span className="tasks-label">Casos de Prueba Relacionados:</span>
                    <span className="tasks-count">{project.relatedTasks?.length || 0} tareas</span>
                  </div>
                  <div className="tasks-list">
                    {project.relatedTasks && project.relatedTasks.length > 0 ? (
                      project.relatedTasks.map((taskId, taskIndex) => (
                        <span key={taskIndex} className="task-item">
                          Caso {taskIndex + 1}
                        </span>
                      ))
                    ) : (
                      <span className="task-item">Sin tareas específicas</span>
                    )}
                  </div>
                </div>

                <div className="project-card-footer">
                  <div className="completion-badge">
                    <div className="completion-info">
                      <span className="completion-text">Proyecto Completado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
