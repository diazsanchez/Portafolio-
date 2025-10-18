// src/pages/TareaDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "../pages/PageCommon.css";
import "./TareaDetail.css";

export default function TareaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const detalles = {
    1.2: {
      titulo: "Tarea 1.2: Calidad de Software y Aserciones en Chai",
      contenido: (
        <>
          <div style={{ textAlign: "center", marginBottom: "2rem", padding: "20px", backgroundColor: "#f8fafc", borderRadius: "15px", border: "2px solid #4ecdc4" }}>
            <h3 style={{ color: "#2d3748", marginBottom: "15px", fontSize: "1.5rem" }}>📊 Diagrama de Calidad del Software</h3>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "400px", backgroundColor: "white", borderRadius: "10px", border: "2px solid #4ecdc4" }}>
              <img
                src="/images/Captura de pantalla 2025-10-15 183734.png"
                alt="Diagrama de Calidad del Software"
                style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
              />
            </div>
            <p style={{ color: "#4a5568", marginTop: "10px", fontSize: "0.9rem" }}>
               Este diagrama muestra los conceptos de calidad del software según estándares internacionales
            </p>
          </div>

          <h2>Aserciones en Chai</h2>
          <p>
            Chai es una popular biblioteca de afirmaciones de JavaScript ampliamente utilizada para probar y validar el comportamiento del código que admite una variedad de estilos de afirmación, lo que la hace versátil para diferentes necesidades de prueba.
          </p>

          <h3>¿Qué son las afirmaciones?</h3>
          <p>
            Las aserciones son declaraciones en pruebas o programación que comprueban si una condición dada es verdadera. Si la condición es falsa, se indica un fallo o un error.
          </p>

          <h3>Propósito de las afirmaciones en Chai</h3>
          <ul>
            <li>Verificar los resultados de las pruebas</li>
            <li>Mejorar la claridad de las pruebas</li>
            <li>Identificar fallas</li>
            <li>Admite múltiples estilos de afirmación</li>
            <li>Mejorar la depuración</li>
          </ul>

          <h3>¿Qué es Chai?</h3>
          <p>
            Chai es una biblioteca de aserciones para JavaScript que proporciona un marco para escribir pruebas y verificar la corrección del código. Se utiliza a menudo en combinación con ejecutores de pruebas como Mocha para crear un entorno de pruebas completo.
          </p>
          <p>
            Chai permite a los desarrolladores expresar las expectativas de las pruebas mediante una sintaxis clara y legible, garantizando así que el código se comporte según lo previsto. Chai destaca por su compatibilidad con múltiples estilos de aserción (assert, expect y should), cada uno adaptado a diferentes preferencias de programación.
          </p>
          <p>
            Ya sea que esté realizando pruebas unitarias, validaciones de API o pruebas de extremo a extremo, Chai simplifica el proceso al ofrecer funciones poderosas como afirmaciones encadenables, mensajes de error detallados y soporte de complementos para ampliar la funcionalidad.
          </p>

          <h3>Características principales del Chai</h3>
          <p>Chai se destaca como una biblioteca de afirmaciones versátil y fácil de usar para los desarrolladores, que ofrece características que simplifican y mejoran el proceso de prueba.</p>
          <ul>
            <li><strong>Múltiples estilos de afirmación:</strong> admite los estilos de afirmación, expectativa y debería, lo que ofrece flexibilidad según las preferencias del desarrollador.</li>
            <li><strong>Afirmaciones encadenables:</strong> permite una sintaxis fluida y legible al encadenar múltiples afirmaciones en una sola declaración.</li>
            <li><strong>Mensajes de error enriquecidos:</strong> proporciona resultados de error detallados para ayudar a identificar y resolver rápidamente problemas en las pruebas.</li>
            <li><strong>Compatibilidad con complementos:</strong> fácilmente ampliable con complementos como chai-http para pruebas HTTP o chai-as-promised para pruebas basadas en promesas.</li>
            <li><strong>Compatibilidad entre entornos:</strong> funciona sin problemas en entornos de navegador y Node.js.</li>
            <li><strong>Integración con ejecutores de pruebas:</strong> se combina bien con marcos como Mocha, Jasmine y otros para una configuración de pruebas completa.</li>
            <li><strong>Creación de afirmaciones personalizadas:</strong> permite a los desarrolladores definir afirmaciones personalizadas para adaptarse a necesidades de pruebas específicas.</li>
          </ul>

          <h3>¿Qué son las afirmaciones en Chai?</h3>
          <p>
            Las afirmaciones en Chai ayudan a los desarrolladores a confirmar que su código produce el resultado esperado, lo que facilita la depuración y aumenta la fiabilidad de las aplicaciones. Gracias a su sintaxis intuitiva y su flexibilidad, Chai es la herramienta ideal para escribir casos de prueba claros y expresivos.
          </p>

          <h3>Propósito de las afirmaciones en Chai</h3>
          <p>Estos son los principales objetivos del uso de afirmaciones en Chai:</p>
          <ul>
            <li>Validar resultados de pruebas: verificar si los valores o estados cumplen con los resultados esperados</li>
            <li>Mejorar la claridad de las pruebas: ofrecer comprobaciones legibles para las condiciones</li>
            <li>Detectar fallas: Identifique las áreas donde falla el comportamiento del código</li>
            <li>Diferentes estilos: Proporcione múltiples estilos de afirmación</li>
            <li>Mejorar la depuración: mostrar mensajes de error detallados cuando las condiciones fallan</li>
          </ul>

          <h3>Bibliografía</h3>
          <ul>
            <li><a href="https://en.wikipedia.org/wiki/Software_quality" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Software_quality</a></li>
            <li><a href="https://www.browserstack.com/guide/chai-assertions" target="_blank" rel="noopener noreferrer">https://www.browserstack.com/guide/chai-assertions</a></li>
          </ul>
        </>
      )
    },
    2: {
      titulo: "Tarea 2: Análisis crítico del aseguramiento de la calidad de software",
      contenido: (
        <>

          <h2>Objetivo General</h2>
          <p>
            Ampliar el conocimiento teórico sobre el aseguramiento de la calidad de software, mediante el estudio detallado de estándares internacionales, modelos de calidad y buenas prácticas de verificación y validación aplicables al ciclo de vida del software.
          </p>

          <h2>1. Estándares internacionales y calidad del software</h2>

          <h3>ISO/IEC 25010: Modelo de calidad del producto software</h3>
          <ul>
            <li><strong>Objetivos:</strong> Establecer un modelo integral para definir, evaluar y mejorar la calidad de los sistemas y productos de software, tanto en su desarrollo como en su uso. Busca asegurar que el software satisfaga las necesidades y expectativas de los usuarios.</li>
            <li><strong>Estructura:</strong> Se organiza en dos modelos principales: el modelo de calidad del producto (características internas y externas) y el modelo de calidad en uso. Presenta ocho características de calidad: idoneidad funcional, eficiencia del rendimiento, compatibilidad, usabilidad, confiabilidad, seguridad, mantenibilidad y portabilidad, cada una con subcaracterísticas.</li>
            <li><strong>Aplicación:</strong> Proporciona un marco para especificar, medir y evaluar la calidad del software, permitiendo a las organizaciones mejorar sus productos, compararse con otras empresas y asegurar el cumplimiento normativo.</li>
            <li><strong>Propósito:</strong> Establecer un marco estructurado para evaluar la calidad del producto software.</li>
          </ul>

          <h3>ISO/IEC/IEEE 29119: Estándares de pruebas de software</h3>
          <ul>
            <li><strong>Objetivos:</strong> Estandarizar los procesos de prueba de software a nivel internacional, proporcionando una guía completa para la planificación, diseño, ejecución e informe de las pruebas. Su objetivo es mejorar la efectividad y eficiencia de las actividades de prueba.</li>
            <li><strong>Estructura:</strong> Cubre varias partes que abordan diferentes aspectos de las pruebas, incluyendo: Proceso de prueba, documentación de prueba, técnicas de prueba y pruebas para diferentes niveles (pruebas de unidad, de integración, de sistema, de aceptación).</li>
            <li><strong>Aplicación:</strong> Se aplica en diversas fases del ciclo de vida del desarrollo de software, ayudando a los equipos a definir estrategias de prueba, documentar casos de prueba, ejecutar pruebas de manera sistemática y generar informes de resultados.</li>
            <li><strong>Propósito:</strong> Proporcionar un marco internacional para procesos, documentación y técnicas de prueba.</li>
          </ul>

          <h3>IEEE 730: Estándar de planes de aseguramiento de la calidad</h3>
          <ul>
            <li><strong>Objetivos:</strong> Definir los requisitos para la creación de un Plan de Aseguramiento de la Calidad (PAA) de software, asegurando que los procesos de desarrollo y mantenimiento de software cumplan con los requisitos de calidad. Busca garantizar que el producto final cumpla con las especificaciones y sea adecuado para su propósito.</li>
            <li><strong>Estructura:</strong> Detalla los contenidos mínimos que debe incluir un PAA, como la gestión de la calidad, la documentación, las revisiones, las pruebas, el control de defectos, las mejoras y las responsabilidades.</li>
            <li><strong>Aplicación:</strong> Es fundamental para las organizaciones que buscan establecer un proceso formal de aseguramiento de la calidad en sus proyectos de software. El PAA guía las actividades para prevenir y detectar defectos, asegurando la calidad desde el inicio del proyecto.</li>
            <li><strong>Propósito:</strong> Establecer requisitos mínimos para la creación de planes de aseguramiento de calidad.</li>
          </ul>

          <h2>2. Comparativa de modelos de calidad</h2>
          <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%", marginBottom: "20px" }}>
            <thead>
              <tr style={{ backgroundColor: "#4ecdc4" }}>
                <th style={{ color: "white", fontWeight: "bold" }}>Característica</th>
                <th style={{ color: "white", fontWeight: "bold" }}>ISO/IEC 25010</th>
                <th style={{ color: "white", fontWeight: "bold" }}>Modelo de McCall</th>
                <th style={{ color: "white", fontWeight: "bold" }}>Modelo de Boehm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Enfoque Principal</strong></td>
                <td>Estándar para definir y evaluar la calidad de sistemas de software, con un marco integral y consistente.</td>
                <td>Evalúa la calidad desde tres perspectivas: revisión, transición y operación, con 11 elementos de calidad.</td>
                <td>Se centra en que el software cumpla con los deseos del usuario, sea eficiente, fácil de usar, bien diseñado y mantenible.</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td><strong>Características de Calidad</strong></td>
                <td>Un modelo de calidad en uso y un modelo de producto. Incluye características como la adecuación funcional, rendimiento, eficiencia, seguridad, mantenibilidad, portabilidad, usabilidad, etc.</td>
                <td>11 factores de calidad: corrección, fiabilidad, eficiencia, integridad, usabilidad, facilidad de mantenimiento, facilidad de evaluación, flexibilidad, portabilidad, reusabilidad e interoperabilidad</td>
                <td>Características operativas, capacidad de soportar cambios, adaptabilidad y evaluación del desempeño.</td>
              </tr>
              <tr>
                <td><strong>Enfoque</strong></td>
                <td>Muy detallado y estructurado, proporcionando un marco de referencia para la evaluación de la calidad.</td>
                <td>Define 11 factores de calidad de manera general, permitiendo su aplicación en diferentes contextos.</td>
                <td>Se enfoca en aspectos más generales de la calidad del software desde la perspectiva del usuario y la mantenibilidad.</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td><strong>Época de aparición</strong></td>
                <td>Ampliamente utilizado para la definición y evaluación de la calidad en el ciclo de vida del software.</td>
                <td>Históricamente relevante para evaluar la calidad del software en diferentes etapas del desarrollo.</td>
                <td>Proporciona una visión holística de la calidad del software, especialmente útil en la fase de diseño y mantenimiento.</td>
              </tr>
              <tr>
                <td><strong>Ventajas</strong></td>
                <td>Ofrece numerosas ventajas, entre ellas, mayor confianza y credibilidad en el software desarrollado, reducción de errores y fallos que conlleva una disminución en los costos de mantenimiento y prevención de pérdidas, y una evaluación exhaustiva de la calidad del producto a través de sus ocho características.</td>
                <td>Seguridad, simplicidad, tolerancia a errores y trazabilidad, flexibilidad y facilidad de prueba.</td>
                <td>Presenta un rango alto de características primitivas. Une los mejores elementos de otros modelos. Integra el desarrollo del software con el mantenimiento.</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td><strong>Desventajas</strong></td>
                <td>Falta de ejemplos prácticos: Como se mencionó, la norma no ofrece guías o ejemplos concretos sobre cómo aplicar los modelos y características de calidad a situaciones del mundo real, lo que puede dejar a los usuarios sin una dirección clara para su implementación. Complejidad a pesar de la estructura jerárquica: Aunque la norma tiene una estructura de características y subcaracterísticas, su aplicación práctica puede resultar compleja. Enfoque en la calidad del producto en lugar de los procesos: Si bien la ISO 25010 se centra en la calidad del producto de software, otras normas ISO (como la ISO 9001) abordan la gestión de la calidad en los procesos, lo que podría ser una desventaja si se busca una visión más holística.</td>
                <td>Complejidad. Dependencia de métricas cuantitativas. Enfoque tradicional. Riesgo de subjetividad.</td>
                <td>Genera mucho tiempo el análisis. Es un modelo costoso. Funciona mejor en grandes proyectos. Se trabaja siguiendo un protocolo y debe ser seguido estrictamente para un buen funcionamiento.</td>
              </tr>
            </tbody>
          </table>

          <h2>3. Roles en el aseguramiento de calidad</h2>
          <p>Describe al menos tres roles clave en un equipo de aseguramiento de calidad de software y explica cómo interactúan con el equipo de desarrollo y qué responsabilidades tienen durante el ciclo de vida del software.</p>

          <h3>1. Ingeniero de QA/Probador:</h3>
          <ul>
            <li><strong>Responsabilidades:</strong> Ejecutar pruebas funcionales, de usabilidad, de rendimiento, de seguridad y de integración. Crear y mantener casos de prueba, documentar errores y reportar el progreso de las pruebas. Pueden automatizar pruebas para mejorar la eficiencia.</li>
            <li><strong>Interacción con el equipo de desarrollo:</strong> Colaboran directamente con los desarrolladores para reportar y rastrear defectos, analizar la causa raíz de los problemas y verificar las correcciones.</li>
          </ul>

          <h3>2. Analista de QA:</h3>
          <ul>
            <li><strong>Responsabilidades:</strong> Participar en la definición del producto, analizar los requerimientos, plantear la estrategia de pruebas y diseñar los escenarios y casos de prueba. Evaluar la usabilidad del software.</li>
            <li><strong>Interacción con el equipo de desarrollo:</strong> Trabajan de cerca con los desarrolladores para comprender los requisitos del software y traducir las necesidades del negocio en estrategias de prueba.</li>
          </ul>

          <h3>3. Responsable de Calidad (o Líder de QA):</h3>
          <ul>
            <li><strong>Responsabilidades:</strong> Establecer políticas y procedimientos de calidad, definir métricas de calidad, coordinar todas las actividades de pruebas, supervisar el proceso de corrección de errores y garantizar el cumplimiento de los estándares de calidad.</li>
            <li><strong>Interacción con el equipo de desarrollo:</strong> Lidera y coordina el esfuerzo de QA, asegurando la alineación con el equipo de desarrollo y el cumplimiento de los objetivos del proyecto.</li>
          </ul>

          <h2>4. Análisis crítico</h2>
          <p>Reflexión sobre los riesgos de no implementar un proceso formal de aseguramiento de calidad en el desarrollo de software.</p>

          <h3>Riesgos identificados:</h3>
          <ol>
            <li><strong>Defectos y fallos en el producto:</strong> Sin controles de calidad rigurosos, es altamente probable que el software contenga errores y fallos que afecten su funcionamiento, la experiencia del usuario y la satisfacción del cliente.</li>
            <li><strong>Costos elevados y retrasos:</strong> Corregir errores después del lanzamiento o en etapas avanzadas del desarrollo es considerablemente más costoso y consume más tiempo que identificarlos y solucionarlos tempranamente.</li>
            <li><strong>Pérdida de confianza y lealtad del cliente:</strong> Un software defectuoso genera frustración en los usuarios, puede dañar la imagen de la empresa y resultar en la pérdida de clientes o la dificultad para atraer nuevos.</li>
            <li><strong>Problemas de seguridad:</strong> La falta de pruebas exhaustivas puede dejar vulnerabilidades de seguridad abiertas, exponiendo al sistema y a los datos de los usuarios a riesgos.</li>
            <li><strong>Impacto en sistemas interconectados:</strong> En el caso de software que interactúa con otros sistemas, un fallo no detectado puede tener repercusiones en cascada y afectar operaciones críticas.</li>
          </ol>

          <h3>Ejemplos reales o hipotéticos:</h3>

          <h4>1. Fallos en sistemas médicos críticos (hipotético/real):</h4>
          <p>Un sistema de gestión de historiales médicos o de equipos de diagnóstico que no ha sido sometido a pruebas rigurosas podría arrojar información incorrecta sobre dosis de medicamentos, diagnósticos erróneos o fallos en la operación de equipos vitales. Esto podría tener consecuencias graves para la salud de los pacientes y generar responsabilidades legales para la institución.</p>

          <h4>2. Problemas en sistemas financieros de alto volumen (hipotético/real):</h4>
          <p>Un sistema de procesamiento de transacciones bancarias sin un control de calidad exhaustivo podría generar errores en los saldos de las cuentas, transacciones duplicadas o pérdida de fondos. Un ejemplo histórico notable fue el "problema del año 2000" (Y2K), donde muchas empresas no habían previsto adecuadamente la gestión de fechas en sus sistemas, aunque en ese caso fue más una falla de diseño y previsión que solo de ausencia de pruebas. Más recientemente, errores en plataformas de trading o sistemas de pago pueden causar pérdidas económicas millonarias y dañar la confianza en el mercado financiero.</p>
          <h3>Bibliografía</h3>
          <ul>
            <li><a href="https://www.hiberus.com/crecemos-contigo/los-estandares-de-calidad-delsoftware-mas-importantes/" target="_blank" rel="noopener noreferrer">blog, h. (2025) Estándares de calidad de software</a></li>
            <li><a href="https://www.developn.net/es/article/roles-y-responsabilidades-en-eldesarrollo-de-software" target="_blank" rel="noopener noreferrer">DEVELOPN (2021) Roles y Responsabilidades</a></li>
            <li><a href="https://www.polisura.edu.co/diplomado-virtual-gratis/cursodiplomado-iso-iec-ieee-29119-pruebas-de-software" target="_blank" rel="noopener noreferrer">polisura (2025) ISO/IEC/IEEE 29119</a></li>
            <li><a href="https://es.scribd.com/document/533946117/Cuadro-comparativo-de-modelos-decalidad" target="_blank" rel="noopener noreferrer">SCRIBD (2025) Comparativa de modelos</a></li>
            <li><a href="https://sqdm.com/es/gestion-de-defectos-en-qa/" target="_blank" rel="noopener noreferrer">SQDM (2024) Gestión de defectos</a></li>
          </ul>
        </>
      )
    },
    3: {
      titulo: "Tarea 3: Guia OWASP, Investigación Planes y Casos de prueba",
      contenido: (
        <>

          <h2>Introducción</h2>
          <p>
            La seguridad en aplicaciones web es fundamental para proteger datos personales y evitar ataques informáticos. El proyecto OWASP (Open Worldwide Application Security Project) publica cada cierto año una lista con las 10 vulnerabilidades más comunes. Esta guía está diseñada para ayudar a cualquier persona, incluso sin conocimientos técnicos, a comprender y prevenir esas amenazas.
          </p>

          <h2>Primera Parte: OWASP Top 10</h2>

          <h3>1. Control de Acceso Roto (Broken Access Control)</h3>
          <h4>¿Qué es?</h4>
          <p>Se refiere a cuando una persona puede ver o hacer cosas que no debería dentro de un sistema, como acceder a datos de otros usuarios o funciones restringidas.</p>
          <h4>¿Cómo prevenirlo o mitigarlo?</h4>
          <ul>
            <li>Verificar que cada usuario solo tenga acceso a lo que necesita.</li>
            <li>Usar roles de usuario claramente definidos.</li>
            <li>Evitar mostrar enlaces o botones a funciones que no están autorizadas.</li>
            <li>No confiar solo en el diseño; los permisos deben validarse en el servidor.</li>
          </ul>

          <h3>2. Fallos Criptográficos (Cryptographic Failures)</h3>
          <h4>¿Qué es?</h4>
          <p>Ocurre cuando los datos no están bien protegidos, como guardar contraseñas sin cifrar o usar conexiones no seguras.</p>
          <h4>¿Cómo prevenirlo o mitigarlo?</h4>
          <ul>
            <li>Utilizar siempre conexiones seguras (HTTPS).</li>
            <li>No almacenar contraseñas en texto plano; deben estar cifradas.</li>
            <li>Preferir plataformas que manejen encriptación automáticamente.</li>
          </ul>

          <h3>3. Inyección (Injection)</h3>
          <h4>¿Qué es?</h4>
          <p>Un atacante puede "inyectar" comandos maliciosos a través de formularios o entradas para engañar al sistema y acceder a información o modificar datos.</p>
          <h4>¿Cómo prevenirlo o mitigarlo?</h4>
          <ul>
            <li>Validar la información que se ingresa en formularios.</li>
            <li>No procesar directamente lo que escribe el usuario.</li>
            <li>Usar herramientas o plataformas que controlan este riesgo automáticamente.</li>
          </ul>

          <h3>4. Diseño Inseguro (Insecure Design)</h3>
          <h4>¿Qué es?</h4>
          <p>Cuando un sistema o aplicación se crea sin pensar en la seguridad desde el inicio, lo que deja puertas abiertas a ataques.</p>
          <h4>¿Cómo prevenirlo o mitigarlo?</h4>
          <ul>
            <li>Considerar la seguridad como parte del diseño desde el principio.</li>
            <li>Analizar los riesgos antes de desarrollar la aplicación.</li>
            <li>Establecer políticas de seguridad claras.</li>
          </ul>

          <h3>5. Configuración Incorrecta de Seguridad (Security Misconfiguration)</h3>
          <h4>¿Qué es?</h4>
          <p>Errores comunes como dejar contraseñas por defecto, no actualizar el sistema o habilitar funciones innecesarias.</p>
          <h4>¿Cómo prevenirlo o mitigarlo?</h4>
          <ul>
            <li>Cambiar las contraseñas predeterminadas.</li>
            <li>Eliminar herramientas o funciones que no se utilicen.</li>
            <li>Mantener actualizados los sistemas y aplicaciones.</li>
          </ul>

          <h3>6. Componentes Vulnerables y Obsoletos (Vulnerable and Outdated Components)</h3>
          <h4>¿Qué es?</h4>
          <p>Utilizar programas o partes de código que ya no reciben actualizaciones y tienen fallas conocidas.</p>
          <h4>¿Cómo prevenirlo o mitigarlo?</h4>
          <ul>
            <li>Actualizar frecuentemente todos los programas y plugins.</li>
            <li>Usar software de fuentes confiables.</li>
            <li>Eliminar lo que ya no se usa o está desactualizado.</li>
          </ul>

          <h3>7. Fallos de Identificación y Autenticación (Identification and Authentication Failures)</h3>
          <h4>¿Qué es?</h4>
          <p>Fallas al verificar correctamente la identidad del usuario, lo que puede permitir accesos no autorizados.</p>
          <h4>¿Cómo prevenirlo o mitigarlo?</h4>
          <ul>
            <li>Usar contraseñas fuertes (largas, con letras, números y símbolos).</li>
            <li>Activar la verificación en dos pasos (2FA).</li>
            <li>Evitar compartir contraseñas y cerrar sesión después de usar el sistema.</li>
          </ul>

          <h3>8. Fallos de Integridad en Software y Datos (Software and Data Integrity Failures)</h3>
          <h4>¿Qué es?</h4>
          <p>Cuando se ejecutan programas o datos sin verificar si han sido modificados maliciosamente.</p>
          <h4>¿Cómo prevenirlo o mitigarlo?</h4>
          <ul>
            <li>Descargar software únicamente de sitios oficiales.</li>
            <li>Evitar ejecutar archivos desconocidos.</li>
            <li>Usar herramientas que verifiquen la integridad del software.</li>
          </ul>

          <h3>9. Fallos en Registro y Monitoreo de Seguridad (Security Logging and Monitoring Failures)</h3>
          <h4>¿Qué es?</h4>
          <p>Cuando un sistema no registra ni detecta actividades sospechosas, lo que impide reaccionar ante un ataque.</p>
          <h4>¿Cómo prevenirlo o mitigarlo?</h4>
          <ul>
            <li>Activar los registros de seguridad.</li>
            <li>Revisar periódicamente los eventos del sistema.</li>
            <li>Configurar alertas ante comportamientos anormales.</li>
          </ul>

          <h3>10. Falsificación de Peticiones del Lado del Servidor (Server-Side Request Forgery - SSRF)</h3>
          <h4>¿Qué es?</h4>
          <p>Un atacante hace que el servidor se conecte a otro sistema interno, lo que puede revelar información privada o facilitar ataques.</p>
          <h4>¿Cómo prevenirlo o mitigarlo?</h4>
          <ul>
            <li>No permitir que los usuarios ingresen direcciones web sin control.</li>
            <li>Restringir el acceso del servidor a sitios internos.</li>
            <li>Verificar cuidadosamente todas las solicitudes.</li>
          </ul>

          <h2>Segunda Parte: Planes y Casos de Prueba</h2>

          <h3>¿Qué son los Planes de Prueba?</h3>
          <p>Un plan de prueba es un documento que describe cómo se va a comprobar que un sistema, aplicación o parte de un programa funciona correctamente. Sirve como una guía para saber qué se va a probar, cómo se va a probar y quién lo va a hacer. También indica los recursos necesarios y los posibles riesgos.</p>

          <h3>¿Qué son los Casos de Prueba?</h3>
          <p>Los casos de prueba son ejemplos específicos que se usan para verificar que una función del sistema está funcionando correctamente. Cada caso de prueba incluye una situación concreta que se va a simular, los pasos que se deben seguir, los datos que se deben usar y qué resultado se espera obtener.</p>
          <p>Sirven para comprobar que la aplicación responde bien a diferentes acciones, como crear un nuevo registro, editar datos, o eliminar información.</p>

          <h3>Ejemplo: Plan de Pruebas para un Catálogo</h3>
          <p>Este plan está basado en la validación de un catálogo que permite crear, editar y eliminar registros (por ejemplo, productos, clientes o servicios).</p>
          <p><strong>Tecnología utilizada:</strong> React con TypeScript/JavaScript.</p>
          <p>Este plan está diseñado para validar un catálogo de registros (por ejemplo, productos o clientes), desarrollado con React como interfaz principal y utilizando TypeScript o JavaScript para manejar las funciones</p>

          <h4>Plan de Pruebas</h4>
          <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%", marginBottom: "20px" }}>
            <thead>
              <tr style={{ backgroundColor: "#4ecdc4" }}>
                <th style={{ color: "white", fontWeight: "bold", padding: "12px" }}>Elemento</th>
                <th style={{ color: "white", fontWeight: "bold", padding: "12px" }}>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nombre del proyecto</td>
                <td>Catálogo de Registros CRUD en React</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td>Objetivo del plan</td>
                <td>Validar que las funciones de creación, edición y eliminación operen correctamente.</td>
              </tr>
              <tr>
                <td>Tecnología usada</td>
                <td>React (TS o JS), Hooks, componentes funcionales, estados locales o globales.</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td>Alcance</td>
                <td>Validación de formularios, interacción con botones, actualización del estado.</td>
              </tr>
              <tr>
                <td>Responsable</td>
                <td>Equipo de pruebas funcionales o QA</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td>Recursos necesarios</td>
                <td>Navegador web, datos de prueba, acceso a la app.</td>
              </tr>
              <tr>
                <td>Criterios de entrada</td>
                <td>La aplicación debe estar desplegada correctamente.</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td>Criterios de salida</td>
                <td>Todas las funciones deben funcionar sin errores.</td>
              </tr>
              <tr>
                <td>Riesgos detectados</td>
                <td>- Fallos en la validación del formulario.<br/>- Errores en el manejo del estado (state).<br/>- Conexión fallida con servicios externos.</td>
              </tr>
            </tbody>
          </table>

          <h3>Casos de Prueba</h3>

          <h4>Caso de Prueba 1: Crear un nuevo registro</h4>
          <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%", marginBottom: "20px" }}>
            <thead>
              <tr style={{ backgroundColor: "#ff6b9d" }}>
                <th style={{ color: "white", fontWeight: "bold" }}>Elemento</th>
                <th style={{ color: "white", fontWeight: "bold" }}>Detalle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID del caso</td>
                <td>CP-001</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td>Descripción</td>
                <td>Verificar que se pueda crear un nuevo registro desde el formulario.</td>
              </tr>
              <tr>
                <td>Datos de entrada</td>
                <td>Nombre: "Producto A"<br/>Precio: 50.00</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td>Pasos a seguir</td>
                <td>1. Ingresar al módulo del catálogo.<br/>2. Hacer clic en "Nuevo".<br/>3. Completar el formulario.<br/>4. Presionar el botón "Guardar".</td>
              </tr>
              <tr>
                <td>Resultado esperado</td>
                <td>El registro se añade a la lista visible sin errores.</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td>Resultado real</td>
                <td>(Se completará durante la ejecución de la prueba)</td>
              </tr>
            </tbody>
          </table>

          <h4>Caso de Prueba 2: Editar un registro existente</h4>
          <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%", marginBottom: "20px" }}>
            <thead>
              <tr style={{ backgroundColor: "#ff6b9d" }}>
                <th style={{ color: "white", fontWeight: "bold" }}>Elemento</th>
                <th style={{ color: "white", fontWeight: "bold" }}>Detalle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID del caso</td>
                <td>CP-002</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td>Descripción</td>
                <td>Verificar que se pueda modificar correctamente un registro.</td>
              </tr>
              <tr>
                <td>Datos de entrada</td>
                <td>Nombre actualizado: "Producto A1"</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td>Pasos a seguir</td>
                <td>1. Localizar el registro.<br/>2. Hacer clic en "Editar".<br/>3. Cambiar el nombre.<br/>4. Hacer clic en "Guardar".</td>
              </tr>
              <tr>
                <td>Resultado esperado</td>
                <td>El registro actualizado se muestra con los nuevos datos.</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td>Resultado real</td>
                <td>(Se completará durante la ejecución de la prueba)</td>
              </tr>
            </tbody>
          </table>

          <h4>Caso de Prueba 3: Eliminar un registro</h4>
          <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%", marginBottom: "20px" }}>
            <thead>
              <tr style={{ backgroundColor: "#ff6b9d" }}>
                <th style={{ color: "white", fontWeight: "bold" }}>Elemento</th>
                <th style={{ color: "white", fontWeight: "bold" }}>Detalle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID del caso</td>
                <td>CP-003</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td>Descripción</td>
                <td>Verificar que un registro pueda eliminarse correctamente.</td>
              </tr>
              <tr>
                <td>Datos de entrada</td>
                <td>Registro a eliminar: "Producto A1"</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td>Pasos a seguir</td>
                <td>1. Seleccionar el registro.<br/>2. Hacer clic en "Eliminar".<br/>3. Confirmar acción.</td>
              </tr>
              <tr>
                <td>Resultado esperado</td>
                <td>El registro desaparece de la lista y no se puede recuperar sin crear uno nuevo.</td>
              </tr>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <td>Resultado real</td>
                <td>(Se completará durante la ejecución de la prueba)</td>
              </tr>
            </tbody>
          </table>

          <h2>Glosario</h2>
          <ul style={{ lineHeight: "1.8", marginTop: "15px" }}>
            <li><strong>Acceso Roto (Broken Access Control):</strong> Situación en la que un usuario puede entrar a funciones o información que no le corresponden, como ver los datos de otros usuarios o realizar acciones restringidas.</li>
            <li><strong>Autenticación:</strong> Proceso que permite confirmar la identidad de un usuario, por ejemplo, mediante una contraseña o verificación en dos pasos.</li>
            <li><strong>Catálogo:</strong> Sección de una aplicación donde se puede ver, agregar, modificar o eliminar elementos como productos, clientes, servicios, etc.</li>
            <li><strong>Cifrado / Encriptación:</strong> Método para proteger información transformándola en un formato ilegible para quienes no tienen autorización.</li>
            <li><strong>Formulario:</strong> Espacio en una aplicación donde el usuario puede ingresar datos, como nombre, precio o descripción, para crear o editar información.</li>
            <li><strong>Inyección (Injection):</strong> Tipo de ataque en el que una persona malintencionada introduce comandos peligrosos en campos de texto o formularios para dañar el sistema.</li>
            <li><strong>Integridad de Datos:</strong> Propiedad que asegura que la información no ha sido modificada de forma indebida o maliciosa.</li>
            <li><strong>Plan de Pruebas:</strong> Documento que describe cómo se va a comprobar que una aplicación o sistema funciona bien, detallando qué se va a probar, cómo y con qué recursos.</li>
            <li><strong>Caso de Prueba:</strong> Ejemplo práctico que se utiliza para comprobar que una función específica del sistema trabaja correctamente, como agregar un producto o eliminarlo.</li>
            <li><strong>Registro:</strong> Cada entrada o ítem que forma parte del catálogo, como un producto, cliente o servicio.</li>
            <li><strong>Roles de Usuario:</strong> Perfiles o niveles de acceso que determinan qué puede ver o hacer cada persona dentro de una aplicación (por ejemplo: administrador, usuario normal, invitado).</li>
            <li><strong>Seguridad Informática:</strong> Conjunto de medidas que buscan proteger la información y evitar que personas no autorizadas accedan a ella o la modifiquen.</li>
            <li><strong>Servidor:</strong> Computadora o sistema que proporciona servicios o información a otros dispositivos dentro de una red, como enviar datos, guardar archivos o procesar solicitudes.</li>
            <li><strong>Validación:</strong> Proceso para confirmar que los datos ingresados en un formulario son correctos, completos y seguros antes de ser guardados.</li>
          </ul>

          <h2>Conclusión</h2>
          <p>
            Los planes de prueba y los casos de prueba son herramientas esenciales para verificar que un sistema funcione correctamente. Aunque no se tenga conocimiento técnico, seguir una estructura sencilla como la presentada en esta guía permite asegurar que las funciones básicas (como crear, editar o eliminar registros) se comporten de la manera esperada. Con pruebas bien definidas, se pueden detectar errores antes de que lleguen a los usuarios.
          </p>
          <p>
            Los planes y casos de prueba son herramientas fundamentales para comprobar que las aplicaciones funcionan correctamente. En este ejemplo, se ha validado un catálogo CRUD hecho en React, asegurando que las funciones principales de crear, editar y eliminar registros trabajen como se espera. Gracias a estas pruebas, es posible entregar un sistema más confiable y fácil de usar.
          </p>
        </>
      )
    },
    4: {
      titulo: "Tarea 4: Herramientas de Pruebas de Software - Investigación Completa",
      contenido: (
        <>
          <div style={{ backgroundColor: "#e8f4fd", padding: "20px", borderRadius: "10px", marginBottom: "2rem", borderLeft: "4px solid #2196f3" }}>
            <h3 style={{ color: "#1976d2", marginBottom: "15px" }}>📋 Investigación sobre Herramientas de Testing</h3>
            <p style={{ color: "#1976d2", margin: 0, fontSize: "0.9rem", fontStyle: "italic" }}>
              Análisis completo de herramientas para pruebas funcionales, de rendimiento y de seguridad
            </p>
          </div>

          <h2>Introducción</h2>
          <p>
            El propósito de este trabajo es investigar herramientas utilizadas para realizar pruebas de software en tres categorías fundamentales: pruebas funcionales, pruebas de rendimiento y pruebas de seguridad. Se documentan sus características, ventajas, desventajas y aplicaciones prácticas.
          </p>
          <p>
            Las pruebas de software son esenciales para asegurar que una aplicación funcione correctamente, cumpla con los requisitos y garantice una buena experiencia de usuario. Sin un adecuado proceso de pruebas, un sistema puede presentar fallos graves.
          </p>
          <p>
            Las pruebas funcionales verifican que cada funcionalidad del software opere conforme a los requerimientos; las pruebas de rendimiento miden la respuesta del sistema bajo carga; y las pruebas de seguridad identifican vulnerabilidades. Estas pruebas son pilares del aseguramiento de calidad del software.
          </p>

          <h2>Contenido</h2>

          <h3>1. Pruebas Funcionales</h3>
          <p><strong>Definición:</strong> Verifican que las funciones de la aplicación actúen de acuerdo con los requerimientos.</p>

          <h4>Herramientas: Selenium y SoapUI</h4>
          <p><strong>Selenium</strong> es una herramienta de código abierto para automatizar pruebas en aplicaciones web. Soporta múltiples lenguajes de programación y se integra con frameworks de CI/CD.</p>
          <p><strong>SoapUI</strong> se especializa en pruebas de servicios web SOAP y REST, permitiendo validaciones automáticas.</p>

          <h4>Ventajas y Desventajas:</h4>
          <ul>
            <li><strong>Selenium:</strong> Gran comunidad, multiplataforma; Desventajas: Requiere conocimientos técnicos.</li>
            <li><strong>SoapUI:</strong> Fácil para pruebas de API; Desventajas: No cubre interfaces gráficas completas.</li>
          </ul>

          <h4>Aplicaciones prácticas:</h4>
          <p>Selenium se utiliza para automatizar pruebas de interfaces web; SoapUI para validar APIs y servicios web.</p>

          <h3>2. Pruebas de Rendimiento</h3>
          <p><strong>Definición:</strong> Evalúan el comportamiento del sistema bajo carga, midiendo tiempos de respuesta, estabilidad y escalabilidad.</p>

          <h4>Herramientas: Apache JMeter y LoadRunner</h4>
          <p><strong>JMeter</strong> es una herramienta gratuita de código abierto para medir rendimiento de aplicaciones web. Permite crear escenarios de carga, visualizar resultados y generar reportes.</p>
          <p><strong>LoadRunner</strong> es una solución comercial muy utilizada en entornos empresariales con monitoreo avanzado.</p>

          <h4>Ventajas y Desventajas:</h4>
          <ul>
            <li><strong>JMeter:</strong> Gratuito, multiplataforma; Desventajas: Puede consumir muchos recursos.</li>
            <li><strong>LoadRunner:</strong> Potente y profesional; Desventajas: Licencia costosa.</li>
          </ul>

          <h4>Aplicaciones prácticas:</h4>
          <p>JMeter simula usuarios concurrentes y carga web; LoadRunner en pruebas integrales en grandes empresas.</p>

          <h3>3. Pruebas de Seguridad</h3>
          <p><strong>Definición:</strong> Detectan vulnerabilidades o fallos en el software que puedan comprometer la confidencialidad e integridad de los datos.</p>

          <h4>Herramientas: Acunetix y Retina</h4>
          <p><strong>Acunetix</strong> realiza escaneos automáticos de vulnerabilidades web (como SQL Injection o XSS).</p>
          <p><strong>Retina</strong> permite la gestión de parches y el seguimiento de vulnerabilidades en sistemas empresariales.</p>

          <h4>Ventajas y Desventajas:</h4>
          <ul>
            <li><strong>Acunetix:</strong> Reportes claros, fácil uso; Desventajas: Puede generar falsos positivos.</li>
            <li><strong>Retina:</strong> Gestión centralizada; Desventajas: Enfocada más a infraestructura que web.</li>
          </ul>

          <h4>Aplicaciones prácticas:</h4>
          <p>Acunetix se usa antes del lanzamiento para asegurar seguridad; Retina en auditorías periódicas de infraestructura y sistemas.</p>

          <h2>Conclusiones</h2>
          <p>
            Se concluye que existen múltiples herramientas efectivas para pruebas funcionales, de rendimiento y de seguridad. La elección adecuada depende del tipo de proyecto, presupuesto y nivel técnico del equipo.
          </p>
          <p>
            Integrar estas pruebas desde etapas tempranas mejora la calidad, reduce errores y fortalece la confianza en el software.
          </p>

          <h2>Recomendaciones</h2>
          <ul>
            <li>Seleccionar herramientas según tipo de aplicación, presupuesto y experiencia del equipo.</li>
            <li>Implementar automatización e integración continua para ejecutar pruebas de manera constante.</li>
            <li>Capacitar al equipo y actualizar versiones de las herramientas regularmente.</li>
            <li>No depender únicamente de una herramienta; usar varias para cubrir distintos aspectos.</li>
          </ul>

          <h2>Bibliografía</h2>
          <ol>
            <li><a href="https://www.atlassian.com/es/continuous-delivery/software-testing/types-of-software-testing" target="_blank" rel="noopener noreferrer">Atlassian. Tipos de pruebas de software.</a></li>
            <li><a href="https://qalified.com/las-mejores-herramientas-de-testing-de-software-2024/" target="_blank" rel="noopener noreferrer">Qalified. Las mejores herramientas de testing de software (2024).</a></li>
            <li><a href="https://qawerk.com/herramientas-de-prueba-de-seguridad-de-software/" target="_blank" rel="noopener noreferrer">QAwerk. Herramientas de prueba de seguridad de software (2024).</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Apache_JMeter" target="_blank" rel="noopener noreferrer">Wikipedia. Apache JMeter.</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Selenium_(software)" target="_blank" rel="noopener noreferrer">Wikipedia. Selenium.</a></li>
          </ol>
        </>
      )
    },
    5: {
      titulo: "Tarea 5: Proyecto Node.js con TypeScript/JavaScript - Pruebas y Tablas de Prueba",
      contenido: (
        <>
          <div style={{ backgroundColor: "#fff3cd", padding: "15px", borderRadius: "8px", marginBottom: "2rem", borderLeft: "4px solid #ffc107", textAlign: "center" }}>
            <h4 style={{ color: "#856404", margin: "0 0 10px 0" }}> Documentación del Proyecto</h4>
            <p style={{ color: "#856404", margin: "0 0 15px 0", fontSize: "0.9rem" }}>
              Accede a toda la documentación, código fuente y archivos del proyecto
            </p>
            <a
              href="https://drive.google.com/drive/u/1/folders/1swM9Aco_-9QOcKFNYWvJ-CQvMb6pNrcv"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#4ecdc4",
                color: "white",
                padding: "10px 20px",
                borderRadius: "20px",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 15px rgba(78, 205, 196, 0.3)",
                fontSize: "0.9rem"
              }}
            >
               Ver Proyecto en Google Drive
            </a>
          </div>

          <h2>Enunciado — Proyecto Node.js (TypeScript/JavaScript) con pruebas y tablas de prueba</h2>

          <h3>1) Objetivo</h3>
          <p>Crear un proyecto en Node.js (TypeScript o JavaScript) que contenga:</p>
          <ul>
            <li>Una función <code>esMayorDeEdad</code> para determinar si una persona es mayor de edad.</li>
            <li>Una función <code>puedeAprobarPrestamo</code> que decida si se aprueba un préstamo, exclusivamente con base en las condiciones indicadas.</li>
            <li>Tablas de prueba: clases de equivalencia para <code>esMayorDeEdad</code> y tabla de decisiones para <code>puedeAprobarPrestamo</code>.</li>
            <li>Pruebas unitarias en Jest con cobertura del 100% de las funciones creadas.</li>
            <li>Video explicando el proyecto y las pruebas, con el estudiante visible en PiP durante todo el video.</li>
          </ul>

          <h3>2) Requisitos funcionales</h3>

          <h4>2.1 Función 1: esMayorDeEdad</h4>
          <p><strong>Firma sugerida (TypeScript):</strong></p>
          <pre style={{ backgroundColor: "#f5f5f5", padding: "10px", borderRadius: "5px", fontSize: "0.9rem" }}>
{`export function esMayorDeEdad(edad: number): boolean;`}
          </pre>

          <p><strong>Comportamiento:</strong></p>
          <ul>
            <li>Retorna <code>true</code> si edad mayor o igual a 18.</li>
            <li>Retorna <code>false</code> si edad entre 0 y 17.</li>
            <li>Entrada inválida (números negativos, NaN, null, undefined, no numérico): manejar de forma explícita (lanzar error o retornar un valor especial) y documentarlo.</li>
          </ul>

          <h4>2.2 Función 2: puedeAprobarPrestamo</h4>
          <p><strong>Firma sugerida (TypeScript):</strong></p>
          <pre style={{ backgroundColor: "#f5f5f5", padding: "10px", borderRadius: "5px", fontSize: "0.9rem" }}>
{`export type Ocupacion = 'estudiante' | 'empleado' | 'retirado';
export interface Persona
export function puedeAprobarPrestamo(persona: Persona): boolean;`}
          </pre>

          <p><strong>Reglas (impleméntalas tal cual):</strong></p>
          <ol>
            <li>Si la persona es estudiante → NO se aprueba, aunque no tenga deudas.</li>
            <li>Si la persona es empleado/trabajador → SÍ se aprueba, aunque tenga deudas.</li>
            <li>Si la persona es retirado → SÍ se aprueba si no presenta deudas.</li>
            <li>Si la persona es retirado → NO se aprueba si presenta deudas.</li>
          </ol>

          <h3>3) Requisitos técnicos del proyecto</h3>
          <ul>
            <li>Node.js 18+ recomendado.</li>
            <li>Jest configurado (ts-jest si usas TypeScript).</li>
            <li>Cobertura al 100% en líneas, funciones, ramas y sentencias para los archivos de las funciones.</li>
          </ul>

          <h4>Estructura mínima sugerida:</h4>
          <pre style={{ backgroundColor: "#f5f5f5", padding: "15px", borderRadius: "5px", fontSize: "0.85rem" }}>
{`/src
 /domain
   mayor-edad.ts|js
   prestamo.ts|js
   types.ts|js
 /tests
   mayor-edad.spec.ts|js
   prestamo.spec.ts|js
jest.config.ts|js
package.json
README.md
/docs
 equivalencias-mayor-edad.md
 decision-table-prestamo.md`}
          </pre>

          <h4>Ejemplo de configuración de cobertura en package.json:</h4>
          <pre style={{ backgroundColor: "#f5f5f5", padding: "15px", borderRadius: "5px", fontSize: "0.85rem" }}>
{`"jest": {
 "collectCoverage": true,
 "collectCoverageFrom": ["src/domain/**/*.*"],
 "coverageThreshold": {
   "global": {
     "branches": 100,
     "functions": 100,
     "lines": 100,
     "statements": 100
   }
 }
}`}
          </pre>

          <div style={{ backgroundColor: "#fff3cd", padding: "15px", borderRadius: "8px", marginTop: "20px", borderLeft: "4px solid #ffc107" }}>
            <h4 style={{ color: "#856404", margin: "0 0 10px 0" }}>Información Adicional</h4>
            <p style={{ color: "#856404", margin: 0, fontSize: "0.9rem" }}>
              <strong>Documentación requerida:</strong> Tablas de prueba, clases de equivalencia y tabla de decisiones.<br/>
              <strong>Video explicativo:</strong> Con el estudiante visible durante toda la explicación.<br/>
            </p>
          </div>
        </>
      )
    },
    
    6: {
      titulo: "Tarea 6: Unit test - JS/TS",
      contenido: (
        <>
          <div style={{ textAlign: "center", marginBottom: "2rem", padding: "20px", backgroundColor: "#f8fafc", borderRadius: "15px", border: "2px solid #4ecdc4" }}>
            <h3 style={{ color: "#2d3748", marginBottom: "15px", fontSize: "1.5rem" }}> Proyecto de Pruebas Unitarias - JavaScript/TypeScript</h3>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "400px", backgroundColor: "white", borderRadius: "10px", border: "2px solid #4ecdc4" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", width: "100%", maxWidth: "800px", padding: "20px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="/images/TAREAAAA ASEGURAMIENTO.jpg"
                    alt="TAREAAA ASEGURAMIENTO - Proyecto de Pruebas Unitarias"
                    style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div style={{ display: 'none', marginTop: '10px', padding: '15px', backgroundColor: '#e8f4fd', borderRadius: '8px', color: '#4a5568' }}>
                    <h4> TAREAAA ASEGURAMIENTO</h4>
                    <p>Imagen del proyecto de pruebas unitarias</p>
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="/images/TAREA ASEGURAMIENTO.jpg"
                    alt="TAREA ASEGURAMIENTO - Proyecto de Pruebas Unitarias"
                    style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div style={{ display: 'none', marginTop: '10px', padding: '15px', backgroundColor: '#e8f4fd', borderRadius: '8px', color: '#4a5568' }}>
                    <h4> TAREA ASEGURAMIENTO</h4>
                    <p>Imagen del proyecto de pruebas unitarias</p>
                  </div>
                </div>
              </div>
            </div>
            <p style={{ color: "#4a5568", marginTop: "10px", fontSize: "0.9rem" }}>
              💡 Proyecto completo con funciones matemáticas y pruebas unitarias con Jest
            </p>
          </div>

          <div style={{ textAlign: "center", marginBottom: "2rem", padding: "20px", backgroundColor: "#fff3cd", borderRadius: "15px", border: "2px solid #ffc107" }}>
            <h3 style={{ color: "#856404", marginBottom: "15px", fontSize: "1.3rem" }}> Repositorio del Proyecto</h3>
            <p style={{ color: "#856404", marginBottom: "15px", fontSize: "0.9rem" }}>
              Accede al código fuente y documentación completa del proyecto
            </p>
            <a
              href="https://github.com/diazsanchez/tarea-unit.git"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#4ecdc4",
                color: "white",
                padding: "12px 24px",
                borderRadius: "25px",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 15px rgba(78, 205, 196, 0.3)",
                fontSize: "1rem"
              }}
            >
               Ver en GitHub
            </a>
          </div>

          <h2>Tarea</h2>
          <p>
            Desarrolle una función en JavaScript o TypeScript con sus pruebas unitarias.
          </p>

          <h3> Rechazo Inmediato</h3>
          <ul>
            <li>Si moraActiva = true → NO aprobado</li>
            <li>Si score {"<"} 600 → NO aprobado</li>
          </ul>

          <h3>Reglas Base (Aplican a Todos los Perfiles)</h3>
          <ul>
            <li>Debe tener ingresosVerificados = true y dti ≤ 35</li>
            <li><strong>Excepción:</strong> estudiante puede sustituir lo anterior con garante = true</li>
          </ul>

          <h3>Umbrales por Perfil (Si Pasó las Reglas Base)</h3>

          <h4>Estudiante:</h4>
          <ul>
            <li>Aprobado si garante = true o (score ≥ 650)</li>
          </ul>

          <h4>Empleado:</h4>
          <ul>
            <li>Aprobado si antiguedadMeses ≥ 6 y score ≥ 650</li>
          </ul>

          <h4>Independiente:</h4>
          <ul>
            <li>Aprobado si antiguedadMeses ≥ 12 y score ≥ 670</li>
          </ul>

          <h4>Retirado:</h4>
          <ul>
            <li>Aprobado si score ≥ 640</li>
          </ul>

          <h3>Si no cumple alguna regla anterior:</h3>
          <p> <strong>NO APROBADO</strong></p>

          <h2>Entregables</h2>
          <ul>
            <li>Código fuente de la función</li>
            <li>Pruebas unitarias con cobertura del 100%</li>
            <li>Documentación del proyecto</li>
            <li>Repositorio en GitHub</li>
          </ul>
        </>
      )
    },
    7: {
      titulo: "Tarea 7: HT",
      contenido: (
        <>
          <div style={{ textAlign: "center", marginBottom: "2rem", padding: "20px", backgroundColor: "#fff3cd", borderRadius: "15px", border: "2px solid #ffc107" }}>
            <h3 style={{ color: "#856404", marginBottom: "15px", fontSize: "1.3rem" }}>Repositorio de la Tarea</h3>
            <p style={{ color: "#856404", marginBottom: "15px", fontSize: "0.9rem" }}>
              Proyecto completo con clases de equivalencia, análisis de valores frontera y tablas de decisión
            </p>
            <a
              href="https://github.com/diazsanchez/Aseguramiento-Software"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#4ecdc4",
                color: "white",
                padding: "12px 24px",
                borderRadius: "25px",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 15px rgba(78, 205, 196, 0.3)",
                fontSize: "1rem"
              }}
            >
               Ver en GitHub
            </a>
          </div>

          <h2>Clases de equivalencia y Análisis valores en la frontera</h2>
          <p>
            Elabore un ejemplo práctico de clases de equivalencia y análisis de valores frontera, desarrolle la documentación necesaria, desarrolle el código necesario y realice las pruebas unitarias.
          </p>

          <h2>Tablas de decisión</h2>
          <p>
            Elabore un ejemplo práctico de tablas de decisión, puede utilizar cualquier enunciado de su elección desarrolle el código necesario y realice las pruebas unitarias.
          </p>
        </>
      )
    },
    8: {
      titulo: "Tarea 8: Registro de errores",
      contenido: (
        <>
          <div style={{ textAlign: "center", marginBottom: "2rem", padding: "20px", backgroundColor: "#fff3cd", borderRadius: "15px", border: "2px solid #ffc107" }}>
            <h3 style={{ color: "#856404", marginBottom: "15px", fontSize: "1.3rem" }}>Repositorio de Issues</h3>
            <p style={{ color: "#856404", marginBottom: "15px", fontSize: "0.9rem" }}>
              Seguimiento de bugs reportados utilizando herramientas de bug tracking
            </p>
            <a
              href="https://github.com/diazsanchez/ejercicio-en-clase/issues"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#4ecdc4",
                color: "white",
                padding: "12px 24px",
                borderRadius: "25px",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 15px rgba(78, 205, 196, 0.3)",
                fontSize: "1rem"
              }}
            >
               Ver Issues en GitHub
            </a>
          </div>

          <h2>Instrucciones</h2>
          <p>
            Utilice el documento que contiene el listado de bugs reportados y use una herramienta de seguimiento de bugs de las sugeridas en clase, para registrar los bugs y realizar el seguimiento correspondiente.
          </p>

        </>
      )
    },
    9: {
      titulo: "Entrega de Certificado",
      contenido: (
        <>
          <div style={{ textAlign: "center", marginBottom: "2rem", padding: "20px", backgroundColor: "#fff3cd", borderRadius: "15px", border: "2px solid #ffc107" }}>
            <h3 style={{ color: "#856404", marginBottom: "15px", fontSize: "1.3rem" }}>Certificado de Quality Assurance  </h3>
            <p style={{ color: "#856404", marginBottom: "15px", fontSize: "0.9rem" }}>
              Certificado de Quality Assurance obtenido en FreeCodeCamp
            </p>
            <a
              href="https://www.freecodecamp.org/certification/stephanie_mariandre/quality-assurance-v7"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#4ecdc4",
                color: "white",
                padding: "12px 24px",
                borderRadius: "25px",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 15px rgba(78, 205, 196, 0.3)",
                fontSize: "1rem"
              }}
            >
               Ver Certificado
            </a>
          </div>

          <h2>Instrucciones</h2>

              Cargar URL del certificado generado.


          <div style={{ backgroundColor: "#f8f0d8ff", padding: "15px", borderRadius: "8px", marginTop: "30px", borderLeft: "4px solid #ffc107" }}>
            <h4 style={{ color: "#856404", margin: "0 0 10px 0" }}> Nota </h4>
            <p style={{ color: "#856404", margin: 0, fontSize: "0.9rem" }}>
              El certificado debe ser accesible mediante una URL pública para que pueda ser validado correctamente.
            </p>
          </div>
        </>

      )

    },
    10: {
      titulo: "Parcial 2: Entrega tercera serie segundo parcial",
      contenido: (
        <>
          <div style={{ textAlign: "center", marginBottom: "2rem", padding: "20px", backgroundColor: "#fff3cd", borderRadius: "15px", border: "2px solid #ffc107" }}>
            <h3 style={{ color: "#856404", marginBottom: "15px", fontSize: "1.3rem" }}>Repositorio del Parcial</h3>
            <p style={{ color: "#856404", marginBottom: "15px", fontSize: "0.9rem" }}>
              Solución de la tercera serie del segundo parcial
            </p>
            <a
              href="https://github.com/diazsanchez/examen"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#4ecdc4",
                color: "white",
                padding: "12px 24px",
                borderRadius: "25px",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 15px rgba(78, 205, 196, 0.3)",
                fontSize: "1rem"
              }}
            >
               Ver Repositorio en GitHub
            </a>
          </div>

          <h2>Instrucciones de Entrega</h2>
          <div>
            <p>
              Debe entregar el enlace del repositorio de GitHub, con la solución de lo requerido en la serie, incluyendo la documentación requerida.
            </p>
          </div>

          <h2>Entregables Requeridos</h2>

          <h3>Tabla de decisiones (.xlsx)</h3>
          <p>
            Crear una tabla de decisiones completa que muestre todas las combinaciones posibles de condiciones y las acciones correspondientes.
          </p>

          <h3>Clases de equivalencia y valores limite (.xlsx)</h3>
          <p>
            Desarrollar clases de equivalencia válidas e inválidas, incluyendo análisis de valores límite para cada caso.
          </p>

          <h3> Documentación (.pdf)</h3>
          <p>
            Documentación. (.pdf integrando lo anterior para su explicación)
          </p>
        </>
      )
    },
    1.1: {
      titulo: "Tarea 1.1: Calculadora en Consola C# (.NET Framework)",
      contenido: (
        <>
          <div style={{ textAlign: "center", marginBottom: "2rem", padding: "20px", backgroundColor: "#fff3cd", borderRadius: "15px", border: "2px solid #ffc107" }}>
            <h3 style={{ color: "#856404", marginBottom: "15px", fontSize: "1.3rem" }}>Video Demostración</h3>
            <p style={{ color: "#856404", marginBottom: "15px", fontSize: "0.9rem" }}>
              Demostración completa del funcionamiento de la calculadora C#
            </p>
            <a
              href="/videos/CALCULADORAAA_DEMOSTRACION_2025-07-18_22-45-30.mp4"
              download="CALCULADORAAA_DEMOSTRACION_2025-07-18_22-45-30.mp4"
              style={{
                backgroundColor: "#4ecdc4",
                color: "white",
                padding: "12px 24px",
                borderRadius: "25px",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 15px rgba(78, 205, 196, 0.3)",
                fontSize: "1rem"
              }}
            >
                Descargar Video
            </a>
          </div>

          <h2>Enunciado de la Tarea</h2>
          <div>
            <p>
              Desarrolle una aplicación de consola en C# utilizando .NET Framework 4.7.2 o superior que simule el funcionamiento de una calculadora básica, permitiendo realizar operaciones aritméticas y controlando adecuadamente los errores que puedan surgir durante la ejecución.
            </p>
          </div>

          <h2>Requisitos Funcionales</h2>

          <h3>Interfaz de Usuario (Consola)</h3>
          <p>Al ejecutar el programa debe mostrarse el siguiente menú:</p>
          <div style={{ backgroundColor: "#f5f5f5", padding: "15px", borderRadius: "5px", fontFamily: "monospace", fontSize: "0.9rem" }}>
            Elija una opción:<br/>
            1. Suma<br/>
            2. Resta<br/>
            3. Multiplicación<br/>
            4. División<br/>
            5. Salir
          </div>
          <ul>
            <li>El usuario debe seleccionar una opción del menú. Luego, se deben solicitar los dos valores
numéricos para operar y mostrar el resultado de la operación correspondiente.</li>
            <li>Al finalizar cada operación, se debe preguntar al usuario si desea realizar otra operación.
Si responde afirmativamente, se debe volver a mostrar el menú; si no, finalizar el programa
de forma ordenada</li>
          </ul>

          <h2>Requisitos Técnicos</h2>
          <ul>
            <li>Cada operación debe implementarse como un método o función independiente</li>
            <li> Utilizar estructuras de control de errores mediante try / catch / finally para:
</li>
            <li>Validar que la entrada del usuario sea numérica.</li>
            <li>Prevenir errores como la división por cero.</li>
            <li>Manejar cualquier excepción inesperada de forma segura.</li>
            <li>El código debe estar limpio, organizado y comentado.</li>
          </ul>

          <h2>Pruebas Unitarias</h2>
          <ul>
            <li>Crear un proyecto de pruebas unitarias utilizando MSTest (Microsoft.VisualStudio.TestTools.UnitTesting).
.</li>
            <li>Las pruebas deben cubrir:</li>
            <li>Casos de éxito para cada operación matemática.</li>
            <li>Casos de error (por ejemplo, división por cero).</li>
            <li>Crear un proyecto de pruebas unitarias utilizando MSTest.</li>
            <li>Validación del comportamiento ante entradas no válidas (donde sea aplicable).</li>
          </ul>

          <h2>Entrega Esperada</h2>
          <ul>
            <li>Proyecto de consola funcional desarrollado en C# (.NET Framework 4.7.2 o superior).
</li>
<li>Proyecto de pruebas unitarias con cobertura completa, implementado con MSTest.
</li>
<li>Código fuente bien estructurado, comentado y organizado</li>
<li>Video demostrativo en formato .mp4 que muestre: - El funcionamiento completo de la aplicación en consola.
 - La ejecución de las pruebas unitarias y sus resultados</li>
          </ul>

          <h3>Video Demostrativo (.mp4)</h3>
          <ul>
            <li>El video en formato .mp4 debe subirse al curso en Canvas a más tardar el viernes 18 de
julio a las 23:59 hrs</li>
            <li>El día sábado 19 de julio se realizará la demostración en clase, en la cual cada estudiante o
grupo tendrá 5 minutos como máximo para presentar el funcionamiento de su aplicación y
responder posibles preguntas.</li>
          </ul>
        </>
      )
    }
  }
  return (
    <Layout>
      <div className="tarea-container">
        <h1>{detalles[id]?.titulo}</h1>

        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "8px 16px",
            marginBottom: "20px",
            backgroundColor: "#6366f1",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ← Regresar
        </button>

        {detalles[id]?.contenido}
      </div>
    </Layout>
  );
}
