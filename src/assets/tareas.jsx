// src/pages/Tareas.jsx
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../pages/PageCommon.css";

export default function Tareas() {
   const tareas = [
     { id: 1.2, title: "Tarea 1.2", desc: "Mapa conceptual e investigación" },
     { id: 2, title: "Tarea 2", desc: "Análisis crítico del aseguramiento de la calidad de software basado en estándares internacionales" },
     { id: 3, title: "Tarea 3", desc: "Guia OWASP, Investigación Planes y Casos de prueba" },
     { id: 4, title: "Tarea 4", desc: "Tipos de prueba" },
     { id: 5, title: "Tarea 5", desc: "Tecnicas de pruebas" },
     { id: 6, title: "Tarea 6", desc: " Unit test - JS/TS" },
     { id: 7, title: "Tarea 7", desc: " HT" },
     { id: 8, title: "Tarea 8", desc: " Registro de errores" },
     { id: 9, title: "Certificado", desc: "Entrega de certificado" },
     { id: 10, title: "Parcial 2", desc: "Entrega tercera serie segundo parcial." },
     { id: 1.1, title: "Tarea 1.1", desc: "Calculadora - Unit Test" },
   ];

  return (
    <Layout>
      <section className="page-section fade-in">
        <h1 className="page-title">
          Mis <span>Tareas</span>
        </h1>
        <p className="page-subtitle">
          Aquí encontrarás las actividades académicas y proyectos realizados.
        </p>

        <div className="content-container">

          <div className="content-left">
            {tareas.map((tarea) => (
              <Link
                key={tarea.id}
                to={`/tareas/${tarea.id}`}
                style={{ tetDecoration: "none", color: "inherit" }}
              >
                <div className="project-card">
                  <h2>{tarea.title}</h2>
                  <p>{tarea.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          </div>
      </section>
    </Layout>
  );
}
