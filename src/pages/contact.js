import { FaEnvelope, FaGithub } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Contacto</h2>
      <p className="contact-intro">
        Puedes escribirme a mi correo o encontrarme en mis redes profesionales.
      </p>

      <div className="contact-cards">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:sdiazs3@miumg.edu.gt" className="contact-link">
            sdiazs3@miumg.edu.gt
          </a>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/diazsanchez" target="_blank" rel="noopener noreferrer" className="contact-link">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

