import { useEffect, useMemo } from "react";
import { usePortfolioStore } from "./store";
import type { Language, Project } from "./types";

const copy = {
  es: {
    metaDescription:
      "Portfolio de Sergio Alda: desarrollo web, ilustración digital, animación 3D y videojuegos.",
    nav: [
      ["sobre-mi", "Sobre mí"],
      ["habilidades", "Habilidades"],
      ["proyectos", "Proyectos"],
      ["hobbies", "Hobbies"],
      ["paleta", "Paleta"],
      ["contacto", "Contacto"],
    ],
    themeLight: "Cambiar a tema claro",
    themeDark: "Cambiar a tema oscuro",
    language: "Cambiar idioma a inglés",
    status: "PORTFOLIO PERSONAL · SISTEMA EN LÍNEA",
    role: "Desarrollador de aplicaciones web",
    intro:
      "Me gusta crear experiencias digitales, aprender nuevas herramientas y dar vida a ideas, tanto en la web como en proyectos creativos.",
    viewProjects: "Ver proyectos",
    contact: "Contactar",
    terminalTitle: "SERGIO_OS — terminal",
    terminalCommand: "C:\\PORTFOLIO\\SERGIO> iniciar.exe",
    terminalLoading: "Cargando perfil creativo...",
    terminalLines: [
      "[ OK ] Desarrollo web",
      "[ OK ] Ilustración & animación 3D",
      "[ OK ] Desarrollo de videojuegos",
    ],
    terminalReady: "Listo. Explora el portfolio",
    memory: "MEMORIA CREATIVA: 100%",
    online: "● EN LÍNEA",
    aboutEyebrow: "01 / Perfil",
    aboutTitle: "Sobre mí",
    aboutLead: "Un poco de código, mucha curiosidad y ganas de seguir creando.",
    aboutText: (
      <>
        Soy <strong>Sergio Alda</strong>, desarrollador de aplicaciones web.
        Tengo conocimientos de HTML, CSS, JavaScript, Java y bases de datos.
        También disfruto explorando disciplinas creativas como la ilustración,
        la animación 3D y el desarrollo de videojuegos.
      </>
    ),
    skillsEyebrow: "02 / Herramientas",
    skillsTitle: "Habilidades",
    skillsLead: "Tecnologías y áreas que forman parte de mi camino.",
    skills: [
      ["HTML & CSS", "Estructura y estilos para construir páginas web."],
      ["JavaScript", "Interactividad y comportamiento en la web."],
      ["Java", "Programación y desarrollo de aplicaciones."],
      ["Bases de datos", "Conocimientos de almacenamiento y gestión de datos."],
      ["Desarrollo web", "Interés en crear experiencias digitales completas."],
      ["Aprendizaje continuo", "Siempre explorando nuevas ideas y herramientas."],
    ],
    projectsEyebrow: "03 / En desarrollo",
    projectsTitle: "Proyectos",
    projectsLead: "Explora los proyectos y filtra por texto o categoría.",
    searchLabel: "Buscar proyectos",
    searchPlaceholder: "Nombre, descripción o etiqueta...",
    allCategories: "Todas",
    categories: { game: "Videojuegos", web: "Web", fangame: "Fangame", "3d": "3D", typescript: "TypeScript", react: "React" },
    clearFilters: "Limpiar filtros",
    loading: "Cargando proyectos...",
    loadingHint: "Consultando archivos del sistema",
    errorTitle: "No se pudieron cargar los proyectos",
    error: "Comprueba tu conexión e inténtalo de nuevo.",
    retry: "Reintentar",
    noProjects: "No hay proyectos que coincidan con esos filtros.",
    openProject: "Ver proyecto",
    viewGameJolt: "VER EN GAME JOLT ↗",
    hobbiesEyebrow: "04 / Fuera del código",
    hobbiesTitle: "Hobbies creativos",
    hobbiesLead: "Otras formas de imaginar, diseñar y contar historias.",
    hobbies: [
      ["Ilustración digital", "Ilustración de cómics y creación de personajes."],
      ["Animación 3D", "Creación y experimentación con Blender y Source Filmmaker."],
      ["Videojuegos", "Diseño y desarrollo de ideas interactivas."],
    ],
    paletteEyebrow: "05 / Identidad visual",
    paletteTitle: "Paleta recomendada",
    paletteLead: "Verdes y azules sobre fondos oscuros: aire retro con contraste para leer cómodamente.",
    paletteColors: ["Fondo profundo", "Panel", "Verde fósforo", "Azul cian", "Texto claro"],
    paletteNote: "IBM Plex Mono para textos legibles y VT323 para títulos con toque de terminal retro.",
    contactEyebrow: "06 / Conexión",
    contactTitle: "Contacto",
    contactLead: "¿Tienes una idea o quieres hablar de algún proyecto? ¡Escríbeme!",
    openToConnect: "Abierto a conectar",
    findMe: "Encuéntrame en estos canales:",
    footer: "Hecho con curiosidad y código.",
    backToTop: "Volver arriba ↑",
  },
  en: {
    metaDescription:
      "Sergio Alda's portfolio: web development, digital illustration, 3D animation and video games.",
    nav: [
      ["sobre-mi", "About"],
      ["habilidades", "Skills"],
      ["proyectos", "Projects"],
      ["hobbies", "Hobbies"],
      ["paleta", "Palette"],
      ["contacto", "Contact"],
    ],
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    language: "Cambiar idioma a español",
    status: "PERSONAL PORTFOLIO · SYSTEM ONLINE",
    role: "Web application developer",
    intro:
      "I enjoy creating digital experiences, learning new tools and bringing ideas to life, both on the web and through creative projects.",
    viewProjects: "Explore projects",
    contact: "Get in touch",
    terminalTitle: "SERGIO_OS — terminal",
    terminalCommand: "C:\\PORTFOLIO\\SERGIO> start.exe",
    terminalLoading: "Loading creative profile...",
    terminalLines: [
      "[ OK ] Web development",
      "[ OK ] Illustration & 3D animation",
      "[ OK ] Game development",
    ],
    terminalReady: "Ready. Explore the portfolio",
    memory: "CREATIVE MEMORY: 100%",
    online: "● ONLINE",
    aboutEyebrow: "01 / Profile",
    aboutTitle: "About me",
    aboutLead: "A little code, lots of curiosity and a drive to keep creating.",
    aboutText: (
      <>
        I'm <strong>Sergio Alda</strong>, a web application developer. I have
        knowledge of HTML, CSS, JavaScript, Java and databases. I also enjoy
        exploring creative disciplines such as illustration, 3D animation and
        game development.
      </>
    ),
    skillsEyebrow: "02 / Toolkit",
    skillsTitle: "Skills",
    skillsLead: "Technologies and areas that are part of my journey.",
    skills: [
      ["HTML & CSS", "Structure and styling for building web pages."],
      ["JavaScript", "Interactivity and behaviour on the web."],
      ["Java", "Programming and application development."],
      ["Databases", "Knowledge of data storage and management."],
      ["Web development", "Interested in creating complete digital experiences."],
      ["Continuous learning", "Always exploring new ideas and tools."],
    ],
    projectsEyebrow: "03 / In development",
    projectsTitle: "Projects",
    projectsLead: "Explore projects and filter by text or category.",
    searchLabel: "Search projects",
    searchPlaceholder: "Name, description or tag...",
    allCategories: "All",
    categories: { game: "Games", web: "Web", fangame: "Fangame", "3d": "3D", typescript: "TypeScript", react: "React" },
    clearFilters: "Clear filters",
    loading: "Loading projects...",
    loadingHint: "Reading system files",
    errorTitle: "Projects couldn't be loaded",
    error: "Check your connection and try again.",
    retry: "Retry",
    noProjects: "No projects match these filters.",
    openProject: "View project",
    viewGameJolt: "VIEW ON GAME JOLT ↗",
    hobbiesEyebrow: "04 / Beyond the code",
    hobbiesTitle: "Creative hobbies",
    hobbiesLead: "Other ways to imagine, design and tell stories.",
    hobbies: [
      ["Digital illustration", "Comic illustration and character creation."],
      ["3D animation", "Creating and experimenting with Blender and Source Filmmaker."],
      ["Video games", "Designing and developing interactive ideas."],
    ],
    paletteEyebrow: "05 / Visual identity",
    paletteTitle: "Colour palette",
    paletteLead: "Greens and blues on dark backgrounds: retro atmosphere with comfortable contrast.",
    paletteColors: ["Deep background", "Panel", "Phosphor green", "Cyan blue", "Light text"],
    paletteNote: "IBM Plex Mono for readable text and VT323 for retro terminal-inspired headings.",
    contactEyebrow: "06 / Connection",
    contactTitle: "Contact",
    contactLead: "Have an idea or want to talk about a project? Drop me a line!",
    openToConnect: "Open to connecting",
    findMe: "Find me here:",
    footer: "Made with curiosity and code.",
    backToTop: "Back to top ↑",
  },
} as const;

function projectText(project: Project, language: Language) {
  return {
    title: language === "es" ? project.titleEs ?? project.title : project.title,
    description: language === "es" ? project.descriptionEs : project.description,
    imageAlt: language === "es" ? project.imageAltEs : project.imageAlt,
  };
}

function App() {
  const theme = usePortfolioStore((state) => state.theme);
  const language = usePortfolioStore((state) => state.language);
  const search = usePortfolioStore((state) => state.search);
  const selectedCategories = usePortfolioStore((state) => state.selectedCategories);
  const projects = usePortfolioStore((state) => state.projects);
  const projectsStatus = usePortfolioStore((state) => state.projectsStatus);
  const toggleTheme = usePortfolioStore((state) => state.toggleTheme);
  const toggleLanguage = usePortfolioStore((state) => state.toggleLanguage);
  const setSearch = usePortfolioStore((state) => state.setSearch);
  const toggleCategory = usePortfolioStore((state) => state.toggleCategory);
  const clearFilters = usePortfolioStore((state) => state.clearFilters);
  const loadProjects = usePortfolioStore((state) => state.loadProjects);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.metaDescription);
  }, [language]);

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#071b22" : "#e9f1e9");
  }, [theme]);

  useEffect(() => {
    void loadProjects();
  }, [loadProjects]);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLocaleLowerCase(language);
    return projects.filter((project) => {
      const text = [
        project.title,
        project.titleEs ?? "",
        project.description,
        project.descriptionEs,
        project.category,
        ...project.tags,
      ]
        .join(" ")
        .toLocaleLowerCase(language);
      const matchesSearch = !query || text.includes(query);
      const matchesCategories = selectedCategories.every(
        (category) =>
          project.category === category || project.tags.some((tag) => tag === category),
      );
      return matchesSearch && matchesCategories;
    });
  }, [language, projects, search, selectedCategories]);

  const categories = ["game", "web", "fangame", "3d", "typescript", "react"] as const;

  return (
    <div className="site-shell" data-theme={theme}>
      <a className="skip-link" href="#contenido">
        {language === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>
      <header className="site-header">
        <nav className="nav container" aria-label={language === "es" ? "Navegación principal" : "Main navigation"}>
          <a
            className="brand"
            href="#inicio"
            aria-label={language === "es" ? "Sergio Alda, inicio" : "Sergio Alda, home"}
          >
            SA<span aria-hidden="true">_</span>
          </a>
          <div className="nav-links">
            {t.nav.map(([id, label]) => (
              <a href={`#${id}`} key={id}>{label}</a>
            ))}
          </div>
          <div className="preferences">
            <button
              className="utility-button"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? t.themeLight : t.themeDark}
            >
              <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
              <span className="utility-label">{theme === "dark" ? "LIGHT" : "DARK"}</span>
            </button>
            <button className="utility-button" type="button" onClick={toggleLanguage} aria-label={t.language}>
              <span aria-hidden="true">文</span>
              <span className="utility-label">{language === "es" ? "EN" : "ES"}</span>
            </button>
          </div>
        </nav>
      </header>

      <main className="container main-content" id="contenido">
        <section className="hero section-anchor" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">{t.status}</p>
            <h1>Sergio<br />Alda</h1>
            <h2>{t.role}</h2>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">{t.viewProjects}</a>
              <a className="button button-secondary" href="#contacto">{t.contact}</a>
            </div>
          </div>
          <div className="terminal" aria-label={language === "es" ? "Ventana decorativa de terminal retro" : "Decorative retro terminal window"}>
            <div className="terminal-bar">
              <span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span>
              <span>{t.terminalTitle}</span>
              <span>v2.0</span>
            </div>
            <div className="terminal-content" aria-hidden="true">
              <p className="terminal-muted">{t.terminalCommand}</p>
              <p className="terminal-cyan">{t.terminalLoading}</p>
              {t.terminalLines.map((line) => <p key={line}>{line}</p>)}
              <p className="terminal-muted">{t.terminalReady}<span className="cursor" /></p>
            </div>
            <div className="terminal-footer"><span>{t.memory}</span><span>{t.online}</span></div>
          </div>
        </section>

        <section className="content-section section-anchor" id="sobre-mi">
          <SectionHeading eyebrow={t.aboutEyebrow} title={t.aboutTitle} lead={t.aboutLead} />
          <div className="panel about-copy"><p>{t.aboutText}</p></div>
        </section>

        <section className="content-section section-anchor" id="habilidades">
          <SectionHeading eyebrow={t.skillsEyebrow} title={t.skillsTitle} lead={t.skillsLead} />
          <div className="card-grid">
            {t.skills.map(([title, description], index) => (
              <InfoCard key={title} code={`SKILL_0${index + 1}`} title={title} description={description} />
            ))}
          </div>
        </section>

        <section className="content-section section-anchor" id="proyectos">
          <SectionHeading eyebrow={t.projectsEyebrow} title={t.projectsTitle} lead={t.projectsLead} />
          <div className="filters">
            <label className="search-field">
              <span>{t.searchLabel}</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t.searchPlaceholder}
              />
            </label>
            <div className="category-filters" aria-label={t.projectsTitle}>
              {categories.map((category) => (
                <button
                  className={`filter-chip${selectedCategories.includes(category) ? " is-active" : ""}`}
                  type="button"
                  aria-pressed={selectedCategories.includes(category)}
                  key={category}
                  onClick={() => toggleCategory(category)}
                >
                  {t.categories[category]}
                </button>
              ))}
              {(search || selectedCategories.length > 0) && (
                <button className="clear-filters" type="button" onClick={clearFilters}>{t.clearFilters}</button>
              )}
            </div>
          </div>
          {projectsStatus === "loading" && (
            <div className="state-panel" role="status">
              <span className="loader" aria-hidden="true" />
              <strong>{t.loading}</strong>
              <span className="muted">{t.loadingHint}</span>
            </div>
          )}
          {projectsStatus === "error" && (
            <div className="state-panel error-panel" role="alert">
              <strong>{t.errorTitle}</strong>
              <span className="muted">{t.error}</span>
              <button className="button button-secondary" type="button" onClick={() => void loadProjects()}>{t.retry}</button>
            </div>
          )}
          {projectsStatus === "success" && filteredProjects.length > 0 && (
            <div className="project-grid" aria-live="polite">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} language={language} copy={t} />
              ))}
            </div>
          )}
          {projectsStatus === "success" && filteredProjects.length === 0 && (
            <div className="state-panel" role="status">{t.noProjects}</div>
          )}
        </section>

        <section className="content-section section-anchor" id="hobbies">
          <SectionHeading eyebrow={t.hobbiesEyebrow} title={t.hobbiesTitle} lead={t.hobbiesLead} />
          <div className="card-grid">
            {t.hobbies.map(([title, description], index) => (
              <InfoCard key={title} code={`CREATIVE_0${index + 1}`} title={title} description={description} />
            ))}
          </div>
        </section>

        <section className="content-section section-anchor" id="paleta">
          <SectionHeading eyebrow={t.paletteEyebrow} title={t.paletteTitle} lead={t.paletteLead} />
          <div className="palette-grid">
            {[
              ["#071b22", "#071B22"],
              ["#0d252d", "#0D252D"],
              ["#73f5a2", "#73F5A2"],
              ["#70d9e8", "#70D9E8"],
              ["#e1f4e9", "#E1F4E9"],
            ].map(([color, hex], index) => (
              <div className="palette-swatch" key={hex}>
                <span style={{ backgroundColor: color }} />
                <p><strong>{t.paletteColors[index]}</strong>{hex}</p>
              </div>
            ))}
          </div>
          <p className="palette-note">{t.paletteNote}</p>
        </section>

        <section className="content-section section-anchor" id="contacto">
          <SectionHeading eyebrow={t.contactEyebrow} title={t.contactTitle} lead={t.contactLead} />
          <div className="panel contact-panel">
            <div><strong>{t.openToConnect}</strong><p className="muted">{t.findMe}</p></div>
            <div className="contact-links">
              <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=sergioaldamunoz@gmail.com" target="_blank" rel="noopener noreferrer">Gmail ↗</a>
              <a href="https://github.com/sergioalda06-web" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a href="https://gamejolt.com/@SpookyRick" target="_blank" rel="noopener noreferrer">Game Jolt ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Sergio Alda · {t.footer}</span>
          <a href="#inicio">{t.backToTop}</a>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
      <p className="section-lead">{lead}</p>
    </div>
  );
}

function InfoCard({ code, title, description }: { code: string; title: string; description: string }) {
  return (
    <article className="info-card">
      <span className="card-code">{code}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function ProjectCard({
  project,
  language,
  copy: t,
}: {
  project: Project;
  language: Language;
  copy: (typeof copy)[Language];
}) {
  const text = projectText(project, language);
  const category = t.categories[project.category];
  return (
    <article className="project-card">
      <a className={`project-art${project.image ? "" : " portfolio-art"}`} href={project.url} target={project.url.startsWith("http") ? "_blank" : undefined} rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={`${t.openProject}: ${text.title}`}>
        {project.image ? <img src={project.image} alt={text.imageAlt} loading="lazy" /> : (
          <div className="portfolio-preview"><span>SA_</span><small>REACT · TS · ZUSTAND</small></div>
        )}
        <span className="art-label">{project.category === "game" ? "FANGAME / GAME JOLT" : "REACT / TYPESCRIPT"}</span>
      </a>
      <div className="project-details">
        <div className="project-meta"><span>{category}</span>        {project.tags.map((tag) => <span key={tag}>{t.categories[tag]}</span>)}</div>
        <h3>{text.title}</h3>
        <p>{text.description}</p>
        <a className="project-link" href={project.url} target={project.url.startsWith("http") ? "_blank" : undefined} rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}>
          {project.category === "game" ? t.viewGameJolt : t.openProject} ↗
        </a>
      </div>
    </article>
  );
}

export default App;
