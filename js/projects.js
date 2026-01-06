/**
 * Projects Data Array
 */
const PROJECTS = [
  {
    id: "Saas-logistics-tourism",
    title: "Scalable SaaS for Logistics & Tourism",
    short_desc:
      "Ecosistema modular (Application Factory) para gestión de cupones, con migración SPA en Vue 3 y seguridad de grado industrial.",
    stack: {
      backend: ["Python 3.10+", "Flask", "Argon2id"],
      frontend: ["Vue 3 (Composition API)", "Vanilla CSS", "ApexCharts"],
      db: ["PostgreSQL", "Materialized Views", "Psycopg2"],
      devops_tools: ["Git", "Flask-Limiter"],
    },
    key_features: [
      "Implementación de RBAC (Role-Based Access Control) con decoradores personalizados.",
      "Optimización de consultas analíticas mediante vistas SQL materializadas.",
      "Arquitectura desacoplada: Migración exitosa de MPA a SPA (Bootstrap-free).",
    ],
    technical_challenge:
      "Refactorización de una arquitectura monolítica a un patrón Application Factory, garantizando la integridad financiera mediante snapshots de datos y hashing Argon2id.",
    architecture_diagram: "img/diagrams/arch_panel.png",
    links: {
      repo: "https://github.com/DrRobert12/Scalable-SaaS-for-Logistics-Tourism",
    },
  },
  {
    id: "portal-autor-terror",
    title: "CMS Literario & Identidad Digital",
    short_desc:
      "Plataforma inmersiva autogestionable con optimización de medios y SEO.",
    stack: {
      backend: ["Django 5", "Python"],
      db: ["PostgreSQL"],
      infra: ["Tailwind Standalone", "Cloudinary"],
    },
    architecture_diagram: "img/diagrams/arch_autor.png",
    technical_challenge:
      "Optimización extrema de rendimiento usando 'Tailwind Standalone' y carga diferida de medios. Implementación de Patrón Singleton para garantizar la unicidad del perfil de autor y gestión de contenido Rich Text seguro.",
    links: {
      repo: "https://github.com/DrRobert12/Author-Portal-CMS-Genero-Terror",
    },
  },
  {
    id: "creador-barcode-qr",
    title: "Barcode & QR Code Desktop Generator",
    short_desc:
      "Aplicación de escritorio para la generación y almacenamiento de códigos de barras Code128 y códigos QR a partir de texto ingresado por el usuario.",
    stack: {
      backend: ["Python", "PySide6 (Qt)"],
    },
    architecture_diagram: "img/diagrams/Bar_code_Qr.png",
    technical_challenge:
      "Diseño de una aplicación desktop multiplataforma con interfaz gráfica reactiva. Implementación de validaciones de entrada, generación dinámica de códigos Code128 y QR mediante librerías especializadas, renderizado de imágenes en tiempo real y persistencia local en formato PNG utilizando diálogos nativos del sistema.",
    links: {
      repo: "https://github.com/DrRobert12/Creador_BarCode_Qr.git",
    },
  },
];

/**
 * Renderizamos grid de proyectos
 */
function renderProjects() {
  const container = document.getElementById("projects");
  if (!container) return;

  const projectsHTML = PROJECTS.map((project) => {
    const backendBadges = (project.stack.backend || [])
      .map((tech) => `<span class="badge backend">${tech}</span>`)
      .join("");
    const dbBadges = (project.stack.db || [])
      .map((db) => `<span class="badge db">${db}</span>`)
      .join("");

    const architectureLink = project.architecture_diagram
      ? `<a href="#" class="architecture-link" data-diagram="${project.architecture_diagram}" data-title="${project.title}">[ Architecture.png ]</a>`
      : "";
    const demoLink = project.links.demo
      ? `<a href="${project.links.demo}" target="_blank">Ver -> Demo</a>`
      : "";

    return `
      <article class="project-card">
        <div class="card-header">
          <h3>${project.title}</h3>
          <div class="tech-stack">
            ${backendBadges}
            ${dbBadges}
          </div>
        </div>

        <div class="card-body">
          <p class="desc">${project.short_desc}</p>

          <div class="challenge-box">
            <strong>Technical Challenge:</strong>
            <p>${project.technical_challenge}</p>
          </div>

          <div class="links">
            ${architectureLink}
            <a href="${project.links.repo}" target="_blank">Repositorio -> GitHub</a>
            ${demoLink}
          </div>
        </div>
      </article>
    `;
  }).join("");

  container.innerHTML = projectsHTML;
}

// Initializamos cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", renderProjects);
