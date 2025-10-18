const projectsData = [
  {
    id: 1,
    title: "Guía sobre OWASP Top 10 y Plan de Pruebas",
    summary: "Guía práctica sobre las vulnerabilidades OWASP y la elaboración de planes y casos de prueba.",
    content: `
      <h2>Introducción</h2>
      <p>
      La seguridad en aplicaciones web es fundamental para proteger datos personales y evitar ataques informáticos.
      El proyecto OWASP (Open Worldwide Application Security Project) publica cada cierto año una lista con las 10 vulnerabilidades más comunes.
      Esta guía está diseñada para ayudar a cualquier persona, incluso sin conocimientos técnicos, a comprender y prevenir esas amenazas.
      </p>

      <h2>Primera Parte: Vulnerabilidades OWASP</h2>
      <h3>1. Control de Acceso Roto (Broken Access Control)</h3>
      <p>Se refiere a cuando una persona puede ver o hacer cosas que no debería dentro de un sistema...</p>

      <h3>2. Fallos Criptográficos (Cryptographic Failures)</h3>
      <p>Ocurre cuando los datos no están bien protegidos...</p>

      <h3>3. Inyección (Injection)</h3>
      <p>Un atacante puede "inyectar" comandos maliciosos...</p>

      <h3>4. Diseño Inseguro (Insecure Design)</h3>
      <p>Cuando un sistema o aplicación se crea sin pensar en la seguridad...</p>

      <h3>5. Configuración Incorrecta de Seguridad (Security Misconfiguration)</h3>
      <p>Errores comunes como dejar contraseñas por defecto o no actualizar el sistema.</p>

      <h3>6. Componentes Vulnerables y Obsoletos</h3>
      <p>Utilizar partes de código que ya no reciben actualizaciones y tienen fallas conocidas.</p>

      <h3>7. Fallos de Identificación y Autenticación</h3>
      <p>Fallas al verificar correctamente la identidad del usuario.</p>

      <h3>8. Fallos de Integridad en Software y Datos</h3>
      <p>Cuando se ejecutan programas o datos sin verificar si han sido modificados maliciosamente.</p>

      <h3>9. Fallos en Registro y Monitoreo de Seguridad</h3>
      <p>Cuando un sistema no registra ni detecta actividades sospechosas.</p>

      <h3>10. Falsificación de Peticiones del Lado del Servidor (SSRF)</h3>
      <p>Un atacante hace que el servidor se conecte a otro sistema interno...</p>

      <h2>Segunda Parte: Planes y Casos de Prueba</h2>
      <p>Un plan de prueba es un documento que describe cómo se comprobará que un sistema funciona correctamente...</p>

      <h3>Ejemplo: Plan de Pruebas para un Catálogo</h3>
      <table border="1" cellpadding="6">
        <tr><th>Elemento</th><th>Descripción</th></tr>
        <tr><td>Nombre del proyecto</td><td>Catálogo de Registros CRUD en React</td></tr>
        <tr><td>Objetivo del plan</td><td>Validar funciones de creación, edición y eliminación.</td></tr>
        <tr><td>Responsable</td><td>Equipo de QA</td></tr>
        <tr><td>Riesgos</td><td>Fallas en validaciones o conexión con servicios externos.</td></tr>
      </table>

      <h3>Casos de Prueba</h3>
      <ul>
        <li><strong>CP-001:</strong> Crear un nuevo registro correctamente.</li>
        <li><strong>CP-002:</strong> Editar un registro existente.</li>
        <li><strong>CP-003:</strong> Eliminar un registro del catálogo.</li>
      </ul>

      <h2>Glosario</h2>
      <p>Incluye definiciones como Acceso Roto, Autenticación, Cifrado, Catálogo, Inyección, Validación, etc.</p>

      <h2>Conclusión</h2>
      <p>
      Los planes de prueba y casos de prueba son esenciales para garantizar la calidad del software.
      Este ejemplo valida un CRUD en React asegurando la confiabilidad del sistema.
      </p>
    `,
  },
];

export default projectsData;

