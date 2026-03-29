
const PROJECTS = [
  {
    id: "Saas-logistics-tourism",
    title: "SaaS escalable para Logística & Turismo",
    short_desc:
      "Ecosistema modular (Application Factory) para gestión de cupones, con migración SPA en Vue 3.",
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
    // Array de screenshots (nuevo formato)
    Ver_Proyecto: [
      { src: "./img/screenshots/SaaS/Login.png", caption: "Login" },
      { src: "./img/screenshots/SaaS/Sign.png", caption: "Sign Up" },
      { src: "./img/screenshots/SaaS/Reservas.png", caption: "Reservas" },
      { src: "./img/screenshots/SaaS/Chek-in_Boletos.png", caption: "Check-in de Boletos" },
      { src: "./img/screenshots/SaaS/Arquitectura.png", caption: "Panel de arquitectura" },
    ],
    links: {
      repo: "https://github.com/DrRobert12/Scalable-SaaS-for-Logistics-Tourism",
    },
  },
  {
    id: "creador-barcode-qr",
    title: "Generador de códigos de barras y QR",
    short_desc:
      "Aplicación de escritorio para la generación y almacenamiento de códigos de barras Code128 y códigos QR a partir de texto ingresado por el usuario.",
    stack: {
      backend: ["Python", "PySide6 (Qt)"],
    },
    Ver_Proyecto: [
      { src: "./img/screenshots/BarCode_Qr/Bar_code_Qr.png", caption: "Inicio" },
      { src: "./img/screenshots/BarCode_Qr/Bar_code_Scann.png", caption: "Interfaz Escaneo" },
      { src: "./img/screenshots/BarCode_Qr/Generación.png", caption: "Generación de códigos"}, 
      { src: "./img/screenshots/BarCode_Qr/Qr_Generated.png", caption: "Generación de códigos QR"},
    ],
    technical_challenge:
      "Diseño de una aplicación desktop multiplataforma con interfaz gráfica reactiva. Implementación de validaciones de entrada, generación dinámica de códigos Code128 y QR mediante librerías especializadas, renderizado de imágenes en tiempo real y persistencia local en formato PNG utilizando diálogos nativos del sistema.",
    links: {
      repo: "https://github.com/DrRobert12/Creador_BarCode_Qr.git",
    },
  },
  {
    id: "visor-anime",
    title: "AnimeFree - Streaming Nativo Cross-Platform",
    short_desc: "Experiencia de streaming nativa (Android) construida con Flutter, respaldada por una API Cloud distribuida en Python.",
    stack: {
      backend: ["Python", "Flask REST API", "Render Cloud"],
      frontend: ["Flutter (Dart)", "Material Design 3"],
      devops: ["GitHub Actions",]
    },
    key_features: [
      "UX Premium: Interfaz inmersiva 'Netflix-Style' con modo oscuro y transiciones nativas.",
      "Arquitectura Distribuida: Backend serverless en Render con estrategias de 'Keep-Alive'.",
      "Playback Avanzado: Reproductor proprietario optimizado para landscape y streaming multi-source."
    ],
    technical_challenge:
      "Desacoplamiento total del frontend y backend mediante API REST. Orquestación de web scraping en tiempo real superando bloqueos anti-bot y garantizando tiempos de respuesta sub-200ms en dispositivos móviles.",
    Ver_Proyecto: [
      { src: "./img/screenshots/Visor_anime/Home_Desktop.png", caption: "Home: Dark Mode" },
      { src: "./img/screenshots/Visor_anime/Home_Mobile.png", caption: "Home: Dark Mode" },
      { src: "./img/screenshots/Visor_anime/Play_Desktop.png", caption: "Player Nativo" }, 
      { src: "./img/screenshots/Visor_anime/Play_Mobile.png", caption: "Player Nativo" },
      { src: "./img/screenshots/Visor_anime/Busqueda_Desktop.png", caption: "Búsqueda Instantánea" },
      { src: "./img/screenshots/Visor_anime/Busqueda_Mobile.png", caption: "Búsqueda Instantánea" },
      { src: "./img/screenshots/Visor_anime/Visor_Arq.png", caption: "Topología Cloud + Mobile" },
    ],
    links: {
      repo: "https://github.com/DrRobert12/Visor_Anime_V1.git", 
    },
  },
  {
    id: "Visor_de_Pelis",
    title: " Visor_de_Pelis - Proxy y Extractor de Streaming Sin Anuncios",
    short_desc: "Un motor de extracción inteligente basado en navegadores \"headless\" para evadir publicidad intrusiva y entregar transmisiones de video puras.",
    stack: {
      backend: ["Python", "Playwright", "Flask"],
      devops: ["GitHub Actions"],
      key_features: [
        "Scraping Avanzado: Uso de Playwright para navegar en sitios, evadiendo bloqueos anti-bot y filtrando anuncios.",
        "API RESTful: Servir transmisiones limpias a clientes frontend con Flask, garantizando alta disponibilidad y tiempos de respuesta óptimos.",
        "Arquitectura Modular: Separación clara entre scraping, procesamiento y entrega, facilitando mantenimiento y escalabilidad.",
      ],
    },
    technical_challenge:
      "Desarrollo de un sistema de scraping avanzado utilizando Playwright para navegar por sitios, evadiendo bloqueos anti-bot y filtrando anuncios. Implementación de una API RESTful en Flask para servir transmisiones limpias a clientes frontend, garantizando alta disponibilidad y tiempos de respuesta óptimos.",
      Ver_Proyecto: [
        { src: "./img/screenshots/Visor_de_Pelis/Home.png", caption: "Interfaz de Usuario" },
        { src: "./img/screenshots/Visor_de_Pelis/Categoria.png", caption: "Categoria 'Accion'" },
        { src: "./img/screenshots/Visor_de_Pelis/Categoria_1.png", caption: "Otra Categoria" },
        { src: "./img/screenshots/Visor_de_Pelis/Busqueda.png", caption: "Búsqueda Instantánea" },
        { src: "./img/screenshots/Visor_de_Pelis/Busqueda_1.png", caption: "Resultados de Búsqueda" },
        { src: "./img/screenshots/Visor_de_Pelis/Reproductor.png", caption: "Eleccion de Reproductor" },
        { src: "./img/screenshots/Visor_de_Pelis/Reproductor_1.png", caption: "Reproduccion de Video-Sin Anuncios-" },
        { src: "./img/screenshots/Visor_de_Pelis/Arquitectura.png", caption: "Arquitectura del Sistema" },
      ],
      links: {
      repo: "https://github.com/DrRobert12/Visor_de_Pelis.git",
    },
  },
];

/**
 * Obtiene screenshots de un proyecto (con retrocompatibilidad)
 */
function getProjectScreenshots(project) {
  if (project.Ver_Proyecto && project.Ver_Proyecto.length > 0) {
    return project.Ver_Proyecto;
  }
  return [];
}

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
    const frontendBadges = (project.stack.frontend || [])
      .map((tech) => `<span class="badge frontend">${tech}</span>`)
      .join("");
    const dbBadges = (project.stack.db || [])
      .map((db) => `<span class="badge db">${db}</span>`)
      .join("");
    const devopsStack = project.stack.devops || project.stack.devops_tools || [];
    const devopsBadges = devopsStack
      .map((tech) => `<span class="badge devops">${tech}</span>`)
      .join("");

    const screenshots = getProjectScreenshots(project);
    const screenshotsData = JSON.stringify(screenshots).replace(/"/g, '&quot;');
    
    const screenshotsLink = screenshots.length > 0
      ? `<button type="button" class="architecture-link" data-screenshots="${screenshotsData}" data-title="${project.title}">[ Ver Proyecto${screenshots.length > 1 ? ` (${screenshots.length})` : ''} ]</button>`
      : "";
    const demoLink = project.links.demo
      ? `<a href="${project.links.demo}" target="_blank">Ver -> Demo</a>`
      : "";
      
    const keyFeaturesHTML = project.key_features && project.key_features.length > 0
      ? `<div class="key-features">
          <strong>Key Features:</strong>
          <ul>
            ${project.key_features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>`
      : "";

    return `
      <article class="project-card">
        <div class="card-header">
          <h3>${project.title}</h3>
          <div class="tech-stack">
            ${backendBadges}
            ${frontendBadges}
            ${dbBadges}
            ${devopsBadges}
          </div>
        </div>

        <div class="card-body">
          <p class="desc">${project.short_desc}</p>
          
          ${keyFeaturesHTML}

          <div class="challenge-box">
            <strong>Technical Challenge:</strong>
            <p>${project.technical_challenge}</p>
          </div>

          <div class="links">
            ${screenshotsLink}
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
