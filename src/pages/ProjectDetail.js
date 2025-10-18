import { useParams, Link } from "react-router-dom";
import projectsData from "../data/projectsData";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) return <p>Proyecto no encontrado.</p>;

  return (
    <div className="detail-container">
      <aside className="sidebar">
        <Link to="/projects">← Volver a tareas</Link>
        <nav>
          <a href="#intro">Introducción</a>
          <a href="#plan">Plan de Pruebas</a>
          <a href="#glosario">Glosario</a>
          <a href="#conclusion">Conclusión</a>
        </nav>
      </aside>

      <main className="content">
        <h1>{project.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: project.content }} />
      </main>
    </div>
  );
}
