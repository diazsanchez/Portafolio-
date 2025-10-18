import React, { useState, useEffect } from "react";
import "./tests.css";

export default function Tests() {
  const [activeCategory, setActiveCategory] = useState("todas");
  const [isLoading, setIsLoading] = useState(false);
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringCard, setIsHoveringCard] = useState(null);

  // Sistema de partículas completamente nuevo
  useEffect(() => {
    const generateParticles = () => {
      const colors = ['#10b981', '#059669', '#047857', '#065f46', '#064e3b'];
      const shapes = ['circle', 'triangle', 'square', 'diamond'];

      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.4 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const timer = setTimeout(() => setIsLoading(false), 2000);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animate particles with rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
        y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight,
        rotation: particle.rotation + particle.rotationSpeed
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const tareasAcademicas = [
    {
      id: 1,
      titulo: "Tarea 1.2",
      subtitulo: "Mapa conceptual e investigación",
      descripcion: "Desarrollo de mapa conceptual sobre aseguramiento de calidad de software e investigación sobre estándares internacionales y mejores prácticas.",
      estado: "completado",
      categoria: "investigacion",
      fechaEntrega: "2025-01-20",
      calificacion: "A+",
      icono: "map",
      color: "emerald",
      archivos: ["Mapa_Conceptual_QA.pdf", "Investigacion_Estandares.pdf"],
      objetivos: [
        "Investigar estándares internacionales de calidad",
        "Crear mapa conceptual del proceso QA",
        "Analizar mejores prácticas de testing"
      ]
    },
    {
      id: 2,
      titulo: "Tarea 2",
      subtitulo: "Análisis crítico del aseguramiento de la calidad de software",
      descripcion: "Análisis detallado de estándares internacionales basado en normas ISO/IEC 25000 y su aplicación en proyectos reales de desarrollo de software.",
      estado: "completado",
      categoria: "analisis",
      fechaEntrega: "2025-02-15",
      calificacion: "A",
      icono: "analysis",
      color: "blue",
      archivos: ["Analisis_QA_Estandares.pdf", "Aplicacion_Normas_ISO.pdf"],
      objetivos: [
        "Analizar normas ISO/IEC 25000",
        "Evaluar aplicación en proyectos reales",
        "Identificar beneficios del aseguramiento"
      ]
    },
    {
      id: 3,
      titulo: "Tarea 3",
      subtitulo: "Casos de estudio de calidad de software",
      descripcion: "Estudio de casos reales donde la falta de aseguramiento de calidad generó problemas significativos, con análisis de lecciones aprendidas.",
      estado: "completado",
      categoria: "casos",
      fechaEntrega: "2025-03-10",
      calificacion: "A+",
      icono: "study",
      color: "purple",
      archivos: ["Casos_Estudio_QA.pdf", "Lecciones_Aprendidas.pdf"],
      objetivos: [
        "Investigar casos reales de fallos QA",
        "Analizar impactos económicos",
        "Extraer lecciones aprendidas"
      ]
    },
    {
      id: 4,
      titulo: "Tarea 4",
      subtitulo: "Diseño de estrategias de testing",
      descripcion: "Desarrollo de estrategias completas de testing para diferentes tipos de aplicaciones, incluyendo pruebas funcionales, de integración y de usuario.",
      estado: "completado",
      categoria: "estrategia",
      fechaEntrega: "2025-04-05",
      calificacion: "A",
      icono: "strategy",
      color: "amber",
      archivos: ["Estrategia_Testing_Funcional.pdf", "Plan_Pruebas_Integracion.pdf"],
      objetivos: [
        "Diseñar estrategias de testing",
        "Definir tipos de pruebas necesarias",
        "Crear planes de ejecución"
      ]
    }
  ];

  const categorias = [
    { id: "todas", nombre: "Todas las Tareas" },
    { id: "investigacion", nombre: "Investigación" },
    { id: "analisis", nombre: "Análisis" },
    { id: "casos", nombre: "Casos de Estudio" },
    { id: "estrategia", nombre: "Estrategia"}
  ];

  const tareasFiltradas = activeCategory === "todas"
    ? tareasAcademicas
    : tareasAcademicas.filter(tarea => tarea.categoria === activeCategory);

  if (isLoading) {
    return (
      <div className="tests-container">
        <div className="loading-screen">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <h2 className="loading-title">Cargando Tareas Académicas</h2>
            <div className="loading-progress">
              <div className="loading-bar">
                <div className="loading-fill"></div>
              </div>
            </div>
            <div className="loading-particles">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="loading-particle" style={{
                  '--delay': `${i * 0.1}s`,
                  '--x': `${Math.random() * 100}%`,
                  '--y': `${Math.random() * 100}%`
                }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tests-container">
      {/* Hero Section simple */}
      <div className="tests-hero">
        <div className="hero-content">
          <div className="hero-logo-container">
            <div className="hero-logo"></div>
          </div>
          <div className="hero-badge">
            <span className="hero-badge-text">Portfolio Académico</span>
          </div>

          <div className="title-container">
            <h1 className="tests-title" data-text="Mis Tareas Académicas">
              Mis <span className="highlight">Tareas</span> Académicas
            </h1>
          </div>
          <p className="tests-subtitle">
            Una colección excepcional de proyectos y actividades desarrolladas durante mi formación especializada en Aseguramiento de Calidad de Software.
          </p>

          <div className="academic-timeline">
            <div className="timeline-header">
              <h3>Progreso Académico 2025</h3>
              <div className="timeline-progress">
                <div className="timeline-bar">
                  <div className="timeline-fill" style={{width: '100%'}}></div>
                </div>
                <span className="timeline-percentage">100% Completado</span>
              </div>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-float">
              <div className="stat-visual">
                <div className="stat-circle">
                  <div className="circle-progress">
                    <div className="circle-fill" style={{'--progress': '100%'}}></div>
                  </div>
                </div>
                <div className="stat-info">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Tareas Completadas</span>
                </div>
              </div>
            </div>
            <div className="stat-float">
              <div className="stat-visual">
                <div className="stat-circle">
                  <div className="circle-progress">
                    <div className="circle-fill" style={{'--progress': '100%'}}></div>
                  </div>
                </div>
                <div className="stat-info">
                  <span className="stat-number">4.0</span>
                  <span className="stat-label">Promedio General</span>
                </div>
              </div>
            </div>
            <div className="stat-float">
              <div className="stat-visual">
                <div className="stat-circle">
                  <div className="circle-progress">
                    <div className="circle-fill" style={{'--progress': '100%'}}></div>
                  </div>
                </div>
                <div className="stat-info">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Tasa de Éxito</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tests-filters">
        <div className="filters-container">
          {categorias.map(categoria => (
            <button
              key={categoria.id}
              className={`filter-btn ${activeCategory === categoria.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(categoria.id)}
            >
              <span className="filter-icon">{categoria.icono}</span>
              {categoria.nombre}
            </button>
          ))}
        </div>
      </div>

      <div className="tests-content">
        <div className="tests-grid">
          {tareasFiltradas.map((tarea, index) => (
            <div
              key={tarea.id}
              className="tarea-card"
              style={{
                '--delay': `${index * 0.1}s`
              }}
            >
              <div className="tarea-header">
                <div className="tarea-icon-container">
                  <div className="icon-glow-effect"></div>
                  <svg className="tarea-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    {tarea.icono === 'map' && (
                      <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                    )}
                    {tarea.icono === 'analysis' && (
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    )}
                    {tarea.icono === 'study' && (
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    )}
                    {tarea.icono === 'strategy' && (
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    )}
                  </svg>
                </div>
                <div className="tarea-meta">
                  <span className="tarea-categoria">{tarea.subtitulo}</span>
                  <span className="tarea-fecha">Entregado: {new Date(tarea.fechaEntrega).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}</span>
                </div>
              </div>

              {/* Skill badges espectaculares */}
              <div className="skill-badges">
                {tarea.categoria === 'investigacion' && (
                  <>
                    <span className="skill-badge"> Investigación</span>
                    <span className="skill-badge"> Análisis</span>
                  </>
                )}
                {tarea.categoria === 'analisis' && (
                  <>
                    <span className="skill-badge"> Estándares</span>
                    <span className="skill-badge"> Evaluación</span>
                  </>
                )}
                {tarea.categoria === 'casos' && (
                  <>
                    <span className="skill-badge"> Estudios</span>
                    <span className="skill-badge"> Aprendizaje</span>
                  </>
                )}
                {tarea.categoria === 'estrategia' && (
                  <>
                    <span className="skill-badge"> Estrategia</span>
                    <span className="skill-badge"> Planificación</span>
                  </>
                )}
              </div>

              {/* Título y estado */}
              <div className="tarea-title-section">
                <h3 className="tarea-title">{tarea.titulo}</h3>
                <div className="tarea-status">
                  <span className={`status-badge ${tarea.estado}`}>
                    {tarea.estado === 'completado' ? '✓ Completado' : 'En Progreso'}
                  </span>
                  <span className="calificacion">Calificación: {tarea.calificacion}</span>
                </div>
              </div>

              {/* Descripción */}
              <p className="tarea-description">{tarea.descripcion}</p>

              {/* Objetivos */}
              <div className="tarea-objetivos">
                <h4 className="objetivos-title">Objetivos Alcanzados:</h4>
                <ul className="objetivos-list">
                  {tarea.objetivos.map((objetivo, objIndex) => (
                    <li key={objIndex} className="objetivo-item" style={{'--obj-delay': `${objIndex * 0.1}s`}}>
                      <span className="objetivo-text">{objetivo}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Archivos entregados */}
              <div className="tarea-archivos">
                <h4 className="archivos-title">Archivos Entregados:</h4>
                <div className="archivos-list">
                  {tarea.archivos.map((archivo, archIndex) => (
                    <div key={archIndex} className="archivo-item" style={{'--arch-delay': `${archIndex * 0.05}s`}}>
                      <span className="archivo-nombre">{archivo}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer de la tarea */}
              <div className="tarea-footer">
                <div className="tarea-completion">
                  <div className="completion-header">
                    <span className="completion-label">Progreso de la Tarea</span>
                    <span className="completion-percentage">100%</span>
                  </div>
                  <div className="completion-bar">
                    <div className="completion-fill" style={{width: '100%'}}></div>
                    <div className="completion-shine"></div>
                  </div>
                  <div className="completion-details">
                    <span className="completion-text">✓ Completado</span>
                    <span className="completion-date">Entregado: {new Date(tarea.fechaEntrega).toLocaleDateString('es-ES', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}</span>
                  </div>
                </div>

                {/* Achievement badge espectacular */}
                <div className="achievement-badge">
                  <span className="achievement-text">Excelente</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
