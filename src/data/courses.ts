import type {
  Course,
  CourseCategoryId,
  CourseCategoryLabel,
  CourseLevel,
  CourseModality,
} from "@/types";

export const courseCategories: {
  id: CourseCategoryId;
  label: CourseCategoryLabel;
}[] = [
  { id: "inteligencia-artificial", label: "Inteligencia artificial" },
  { id: "programacion", label: "Programación" },
  { id: "ciberseguridad", label: "Ciberseguridad" },
  { id: "cloud-computing", label: "Cloud Computing" },
  { id: "data-analitica", label: "Data y analítica" },
  { id: "gestion-proyectos", label: "Gestión de proyectos" },
];

export const courseModalities: CourseModality[] = [
  "En vivo",
  "Virtual",
  "Presencial",
  "Híbrido",
];

export const courseLevels: CourseLevel[] = [
  "Inicial",
  "Intermedio",
  "Avanzado",
];

const defaultFaqs = (
  title: string,
): Course["faqs"] => [
  {
    id: "inicio",
    question: "¿Cuándo inicia la próxima convocatoria?",
    answer:
      "Las fechas de inicio se publicarán oficialmente. Este contenido es provisional y será actualizado con el calendario confirmado de CERTIA Academy.",
  },
  {
    id: "certificado",
    question: "¿Recibiré un certificado al finalizar?",
    answer: `Al completar ${title}, recibirás un certificado de participación emitido por CERTIA Academy, sujeto a cumplimiento de los requisitos del programa.`,
  },
  {
    id: "modalidad",
    question: "¿Puedo cambiar de modalidad durante el curso?",
    answer:
      "La modalidad se define al momento de la inscripción. Consulta con nuestro equipo de admisiones las opciones disponibles para tu convocatoria.",
  },
];

/** Catálogo demostrativo — reemplazar con datos oficiales de CERTIA */
export const courses: Course[] = [
  {
    id: "ia-aplicada",
    slug: "inteligencia-artificial-aplicada",
    title: "Inteligencia Artificial Aplicada",
    shortDescription:
      "Integra modelos de IA en flujos de trabajo y productos digitales con enfoque práctico.",
    fullDescription:
      "Programa orientado a profesionales que desean aplicar inteligencia artificial en contextos reales de negocio y tecnología. Trabajarás casos prácticos de automatización, análisis predictivo e integración de modelos en procesos existentes.",
    category: "Inteligencia artificial",
    categoryId: "inteligencia-artificial",
    modality: "En vivo",
    level: "Intermedio",
    duration: "40 horas",
    schedule: "Lunes y miércoles, 19:00 – 21:00 (provisional)",
    objectives: [
      "Identificar oportunidades de aplicación de IA en procesos organizacionales.",
      "Diseñar flujos de trabajo asistidos por modelos de machine learning.",
      "Evaluar riesgos, sesgos y criterios de calidad en soluciones de IA.",
      "Implementar prototipos funcionales con herramientas actuales del mercado.",
    ],
    targetAudience: [
      "Profesionales de tecnología y negocio con bases en datos o desarrollo.",
      "Analistas que desean incorporar IA en su rol actual.",
      "Líderes de producto interesados en soluciones inteligentes.",
    ],
    requirements: [
      "Conocimientos básicos de programación o análisis de datos.",
      "Familiaridad con hojas de cálculo o herramientas de visualización.",
      "Computadora con acceso a internet estable.",
    ],
    syllabus: [
      {
        title: "Módulo 1 — Fundamentos aplicados de IA",
        topics: [
          "Panorama de IA generativa y predictiva",
          "Tipos de modelos y casos de uso",
          "Ética y gobernanza básica",
        ],
      },
      {
        title: "Módulo 2 — Datos y preparación",
        topics: [
          "Calidad y estructura de datos",
          "Feature engineering introductorio",
          "Buenas prácticas de documentación",
        ],
      },
      {
        title: "Módulo 3 — Implementación práctica",
        topics: [
          "Integración con APIs y servicios",
          "Automatización de tareas repetitivas",
          "Prototipado de soluciones",
        ],
      },
      {
        title: "Módulo 4 — Proyecto integrador",
        topics: [
          "Definición del caso de negocio",
          "Desarrollo guiado del prototipo",
          "Presentación de resultados",
        ],
      },
    ],
    benefits: [
      "Enfoque aplicado con laboratorios guiados.",
      "Plantillas reutilizables para evaluar casos de IA.",
      "Retroalimentación de instructores especializados.",
    ],
    certification:
      "Certificado de participación CERTIA Academy al completar el programa y el proyecto integrador.",
    status: "disponible",
    featured: true,
    ctaText: "Solicitar información sobre Inteligencia Artificial Aplicada",
    faqs: defaultFaqs("Inteligencia Artificial Aplicada"),
    provisional: true,
  },
  {
    id: "ia-fundamentos",
    slug: "fundamentos-inteligencia-artificial",
    title: "Fundamentos de Inteligencia Artificial",
    shortDescription:
      "Comprende los conceptos esenciales de IA, machine learning y aplicaciones actuales.",
    fullDescription:
      "Curso introductorio para quienes inician en inteligencia artificial. Construirás una base sólida en conceptos, terminología y aplicaciones sin requerir experiencia previa en programación avanzada.",
    category: "Inteligencia artificial",
    categoryId: "inteligencia-artificial",
    modality: "Virtual",
    level: "Inicial",
    duration: "24 horas",
    schedule: "Martes y jueves, 18:30 – 20:30 (provisional)",
    objectives: [
      "Comprender la diferencia entre IA, ML y deep learning.",
      "Reconocer casos de uso en distintos sectores.",
      "Interpretar resultados básicos de modelos simples.",
      "Identificar requisitos para proyectos de IA.",
    ],
    targetAudience: [
      "Profesionales en transición hacia roles tecnológicos.",
      "Estudiantes y recién egresados de carreras afines.",
      "Equipos de negocio que colaboran con áreas de datos.",
    ],
    requirements: [
      "No se requiere experiencia previa en IA.",
      "Conocimientos básicos de ofimática.",
      "Interés en tecnología y aprendizaje autónomo.",
    ],
    syllabus: [
      {
        title: "Módulo 1 — Introducción a la IA",
        topics: ["Historia y evolución", "Tipos de aprendizaje", "Ecosistema actual"],
      },
      {
        title: "Módulo 2 — Machine learning básico",
        topics: ["Datos etiquetados y no etiquetados", "Modelos introductorios", "Métricas simples"],
      },
      {
        title: "Módulo 3 — IA en la práctica",
        topics: ["Herramientas accesibles", "Casos sectoriales", "Limitaciones y riesgos"],
      },
    ],
    benefits: [
      "Base conceptual clara para cursos avanzados.",
      "Material de referencia descargable.",
      "Ruta sugerida de especialización posterior.",
    ],
    certification:
      "Certificado de participación CERTIA Academy al completar las evaluaciones del programa.",
    status: "disponible",
    featured: true,
    ctaText: "Solicitar información sobre Fundamentos de IA",
    faqs: defaultFaqs("Fundamentos de Inteligencia Artificial"),
    provisional: true,
  },
  {
    id: "dev-web-js",
    slug: "desarrollo-web-javascript",
    title: "Desarrollo Web con JavaScript",
    shortDescription:
      "Construye interfaces modernas y aplicaciones web con fundamentos sólidos de JavaScript.",
    fullDescription:
      "Programa práctico para dominar JavaScript moderno y crear experiencias web interactivas. Incluye DOM, asincronía, consumo de APIs y buenas prácticas de desarrollo front-end.",
    category: "Programación",
    categoryId: "programacion",
    modality: "En vivo",
    level: "Inicial",
    duration: "48 horas",
    schedule: "Lunes a jueves, 19:00 – 21:00 (provisional)",
    objectives: [
      "Dominar la sintaxis y estructuras esenciales de JavaScript.",
      "Manipular el DOM y responder a eventos del usuario.",
      "Consumir servicios REST desde el navegador.",
      "Organizar código siguiendo buenas prácticas.",
    ],
    targetAudience: [
      "Personas que inician en desarrollo web.",
      "Diseñadores que desean implementar interfaces.",
      "Profesionales que migran hacia roles front-end.",
    ],
    requirements: [
      "Conocimientos básicos de HTML y CSS.",
      "Computadora con editor de código instalado.",
      "Navegador web actualizado.",
    ],
    syllabus: [
      {
        title: "Módulo 1 — JavaScript esencial",
        topics: ["Variables y tipos", "Funciones y scope", "Estructuras de control"],
      },
      {
        title: "Módulo 2 — DOM y eventos",
        topics: ["Selección de elementos", "Event listeners", "Formularios dinámicos"],
      },
      {
        title: "Módulo 3 — Asincronía y APIs",
        topics: ["Promesas y async/await", "Fetch API", "Manejo de errores"],
      },
      {
        title: "Módulo 4 — Proyecto web",
        topics: ["Planificación", "Desarrollo guiado", "Despliegue básico"],
      },
    ],
    benefits: [
      "Proyecto portfolio incluido.",
      "Ejercicios semanales con revisión.",
      "Preparación para frameworks modernos.",
    ],
    certification:
      "Certificado de participación CERTIA Academy al entregar el proyecto final.",
    status: "disponible",
    featured: true,
    ctaText: "Solicitar información sobre Desarrollo Web con JavaScript",
    faqs: defaultFaqs("Desarrollo Web con JavaScript"),
    provisional: true,
  },
  {
    id: "dev-react",
    slug: "desarrollo-aplicaciones-react",
    title: "Desarrollo de Aplicaciones con React",
    shortDescription:
      "Crea interfaces escalables con componentes, estado y patrones modernos de React.",
    fullDescription:
      "Curso intermedio para construir aplicaciones web con React. Aprenderás componentes reutilizables, gestión de estado, enrutamiento y consumo de APIs en arquitecturas mantenibles.",
    category: "Programación",
    categoryId: "programacion",
    modality: "En vivo",
    level: "Intermedio",
    duration: "44 horas",
    schedule: "Martes y viernes, 19:00 – 21:30 (provisional)",
    objectives: [
      "Diseñar interfaces basadas en componentes reutilizables.",
      "Gestionar estado local y compartido en aplicaciones React.",
      "Integrar servicios externos mediante APIs.",
      "Aplicar patrones de organización de proyectos front-end.",
    ],
    targetAudience: [
      "Desarrolladores con bases en JavaScript.",
      "Profesionales front-end en actualización tecnológica.",
      "Equipos que adoptan React en sus productos.",
    ],
    requirements: [
      "JavaScript intermedio (funciones, arrays, promesas).",
      "Experiencia básica con HTML y CSS.",
      "Conocimiento introductorio de terminal y npm.",
    ],
    syllabus: [
      {
        title: "Módulo 1 — React fundamentals",
        topics: ["JSX y componentes", "Props y composición", "Hooks esenciales"],
      },
      {
        title: "Módulo 2 — Estado y efectos",
        topics: ["useState y useEffect", "Formularios controlados", "Listas y keys"],
      },
      {
        title: "Módulo 3 — Arquitectura de apps",
        topics: ["Enrutamiento", "Consumo de APIs", "Manejo de errores"],
      },
      {
        title: "Módulo 4 — Proyecto React",
        topics: ["Diseño de la aplicación", "Implementación iterativa", "Buenas prácticas"],
      },
    ],
    benefits: [
      "Aplicación demo lista para portfolio.",
      "Patrones alineados con proyectos reales.",
      "Sesiones de code review grupal.",
    ],
    certification:
      "Certificado de participación CERTIA Academy al completar el proyecto integrador.",
    status: "disponible",
    featured: false,
    ctaText: "Solicitar información sobre Desarrollo con React",
    faqs: defaultFaqs("Desarrollo de Aplicaciones con React"),
    provisional: true,
  },
  {
    id: "ciberseg-fund",
    slug: "fundamentos-ciberseguridad",
    title: "Fundamentos de Ciberseguridad",
    shortDescription:
      "Comprende amenazas, controles y buenas prácticas para proteger activos digitales.",
    fullDescription:
      "Programa introductorio en ciberseguridad que aborda el panorama de amenazas, principios de defensa en profundidad y controles esenciales para organizaciones y profesionales de TI.",
    category: "Ciberseguridad",
    categoryId: "ciberseguridad",
    modality: "Híbrido",
    level: "Inicial",
    duration: "32 horas",
    schedule: "Sábados, 09:00 – 13:00 (provisional)",
    objectives: [
      "Identificar amenazas comunes y vectores de ataque.",
      "Comprender principios de confidencialidad, integridad y disponibilidad.",
      "Aplicar controles básicos de hardening y acceso.",
      "Reconocer marcos de referencia en seguridad.",
    ],
    targetAudience: [
      "Profesionales de TI en roles de soporte o infraestructura.",
      "Administradores de sistemas en formación.",
      "Líderes técnicos que supervisan equipos de operaciones.",
    ],
    requirements: [
      "Conocimientos básicos de redes y sistemas operativos.",
      "Experiencia general en entornos tecnológicos.",
      "Interés en seguridad informática.",
    ],
    syllabus: [
      {
        title: "Módulo 1 — Panorama de amenazas",
        topics: ["Tipos de ataques", "Superficie de exposición", "Ingeniería social"],
      },
      {
        title: "Módulo 2 — Controles defensivos",
        topics: ["Autenticación y autorización", "Segmentación", "Parches y actualizaciones"],
      },
      {
        title: "Módulo 3 — Operaciones de seguridad",
        topics: ["Monitoreo básico", "Respuesta a incidentes", "Copias de seguridad"],
      },
    ],
    benefits: [
      "Laboratorios en entorno controlado.",
      "Checklist de evaluación de riesgos.",
      "Base para rutas avanzadas de seguridad.",
    ],
    certification:
      "Certificado de participación CERTIA Academy al completar evaluaciones prácticas.",
    status: "disponible",
    featured: true,
    ctaText: "Solicitar información sobre Fundamentos de Ciberseguridad",
    faqs: defaultFaqs("Fundamentos de Ciberseguridad"),
    provisional: true,
  },
  {
    id: "ciberseg-empresarial",
    slug: "seguridad-entornos-empresariales",
    title: "Seguridad para Entornos Empresariales",
    shortDescription:
      "Diseña e implementa controles de seguridad alineados a riesgos organizacionales.",
    fullDescription:
      "Curso avanzado orientado a profesionales responsables de la seguridad en organizaciones medianas y grandes. Enfoque en políticas, arquitectura segura y gestión de riesgos.",
    category: "Ciberseguridad",
    categoryId: "ciberseguridad",
    modality: "Presencial",
    level: "Avanzado",
    duration: "36 horas",
    schedule: "Viernes, 14:00 – 18:00 (provisional)",
    objectives: [
      "Diseñar políticas de seguridad adaptadas al contexto empresarial.",
      "Evaluar riesgos con metodologías reconocidas.",
      "Implementar controles en identidad, red y datos.",
      "Coordinar respuesta ante incidentes de seguridad.",
    ],
    targetAudience: [
      "Administradores de seguridad y responsables de TI.",
      "Consultores en ciberseguridad.",
      "Líderes de equipos de infraestructura.",
    ],
    requirements: [
      "Experiencia previa en ciberseguridad o administración de sistemas.",
      "Conocimiento de redes, identidades y servicios cloud.",
      "Curso de fundamentos de ciberseguridad recomendado.",
    ],
    syllabus: [
      {
        title: "Módulo 1 — Gobernanza y riesgo",
        topics: ["Marcos de referencia", "Evaluación de riesgos", "Políticas corporativas"],
      },
      {
        title: "Módulo 2 — Arquitectura segura",
        topics: ["Zero trust introductorio", "Segmentación avanzada", "Protección de datos"],
      },
      {
        title: "Módulo 3 — Operación y respuesta",
        topics: ["SOC básico", "Playbooks de respuesta", "Comunicación de incidentes"],
      },
    ],
    benefits: [
      "Casos basados en escenarios empresariales.",
      "Plantillas de políticas editables.",
      "Enfoque en cumplimiento y operación.",
    ],
    certification:
      "Certificado de participación CERTIA Academy al completar el programa y evaluación final.",
    status: "disponible",
    featured: false,
    ctaText: "Solicitar información sobre Seguridad Empresarial",
    faqs: defaultFaqs("Seguridad para Entornos Empresariales"),
    provisional: true,
  },
  {
    id: "cloud-essentials",
    slug: "cloud-computing-essentials",
    title: "Cloud Computing Essentials",
    shortDescription:
      "Domina conceptos clave de computación en la nube, servicios y modelos de despliegue.",
    fullDescription:
      "Curso introductorio sobre cloud computing que explica modelos IaaS, PaaS y SaaS, servicios esenciales y criterios para migrar cargas de trabajo a la nube de forma segura.",
    category: "Cloud Computing",
    categoryId: "cloud-computing",
    modality: "Virtual",
    level: "Inicial",
    duration: "28 horas",
    schedule: "Miércoles, 18:00 – 21:00 (provisional)",
    objectives: [
      "Comprender modelos de servicio y despliegue en la nube.",
      "Identificar servicios básicos de proveedores líderes.",
      "Evaluar costos y beneficios de adopción cloud.",
      "Aplicar principios de seguridad en entornos cloud.",
    ],
    targetAudience: [
      "Profesionales de TI en transición hacia roles cloud.",
      "Administradores de sistemas y redes.",
      "Líderes de proyecto que gestionan iniciativas cloud.",
    ],
    requirements: [
      "Conocimientos básicos de infraestructura TI.",
      "Familiaridad con conceptos de red y servidores.",
      "Cuenta en proveedor cloud (opcional para prácticas).",
    ],
    syllabus: [
      {
        title: "Módulo 1 — Introducción al cloud",
        topics: ["Modelos de servicio", "Beneficios y retos", "Proveedores principales"],
      },
      {
        title: "Módulo 2 — Servicios esenciales",
        topics: ["Compute y storage", "Redes virtuales", "Bases de datos gestionadas"],
      },
      {
        title: "Módulo 3 — Operación y costos",
        topics: ["Monitoreo básico", "Optimización de costos", "Buenas prácticas"],
      },
    ],
    benefits: [
      "Visión comparativa de servicios cloud.",
      "Laboratorios guiados en consola.",
      "Preparación para certificaciones cloud.",
    ],
    certification:
      "Certificado de participación CERTIA Academy al completar el programa.",
    status: "disponible",
    featured: false,
    ctaText: "Solicitar información sobre Cloud Computing Essentials",
    faqs: defaultFaqs("Cloud Computing Essentials"),
    provisional: true,
  },
  {
    id: "azure-fundamentals",
    slug: "microsoft-azure-fundamentals",
    title: "Microsoft Azure Fundamentals",
    shortDescription:
      "Aprende los servicios base de Azure y prepara bases para certificaciones cloud.",
    fullDescription:
      "Programa enfocado en la plataforma Microsoft Azure. Cubre servicios core, identidad, almacenamiento, compute y gobernanza, con orientación hacia rutas de certificación.",
    category: "Cloud Computing",
    categoryId: "cloud-computing",
    modality: "En vivo",
    level: "Inicial",
    duration: "30 horas",
    schedule: "Lunes y miércoles, 18:30 – 20:30 (provisional)",
    objectives: [
      "Navegar la consola y servicios principales de Azure.",
      "Comprender identidad con Microsoft Entra ID.",
      "Configurar recursos básicos de compute y almacenamiento.",
      "Aplicar prácticas de gobernanza y costos en Azure.",
    ],
    targetAudience: [
      "Profesionales que inician con Microsoft Azure.",
      "Administradores en entornos Microsoft.",
      "Desarrolladores que despliegan en Azure.",
    ],
    requirements: [
      "Conocimientos básicos de TI.",
      "Cuenta Azure (trial o patrocinada) para prácticas.",
      "Cloud Computing Essentials recomendado.",
    ],
    syllabus: [
      {
        title: "Módulo 1 — Azure core",
        topics: ["Regiones y suscripciones", "Grupos de recursos", "Portal y CLI básica"],
      },
      {
        title: "Módulo 2 — Identidad y seguridad",
        topics: ["Entra ID", "RBAC introductorio", "Políticas básicas"],
      },
      {
        title: "Módulo 3 — Servicios y despliegue",
        topics: ["VMs y App Service", "Storage accounts", "Monitor básico"],
      },
    ],
    benefits: [
      "Prácticas alineadas a escenarios reales.",
      "Mapa de ruta hacia certificaciones Azure.",
      "Material de repaso estructurado.",
    ],
    certification:
      "Certificado de participación CERTIA Academy. Orientación general hacia certificaciones oficiales de Microsoft (contenido provisional).",
    status: "disponible",
    featured: false,
    ctaText: "Solicitar información sobre Azure Fundamentals",
    faqs: defaultFaqs("Microsoft Azure Fundamentals"),
    provisional: true,
  },
  {
    id: "power-bi",
    slug: "analisis-datos-power-bi",
    title: "Análisis de Datos con Power BI",
    shortDescription:
      "Transforma datos en dashboards accionables para equipos de negocio y tecnología.",
    fullDescription:
      "Curso práctico de análisis y visualización con Power BI. Aprenderás a conectar fuentes, modelar datos, crear medidas DAX básicas y diseñar reportes ejecutivos.",
    category: "Data y analítica",
    categoryId: "data-analitica",
    modality: "En vivo",
    level: "Intermedio",
    duration: "36 horas",
    schedule: "Martes y jueves, 19:00 – 21:00 (provisional)",
    objectives: [
      "Importar y transformar datos desde múltiples fuentes.",
      "Diseñar modelos de datos eficientes en Power BI.",
      "Crear visualizaciones claras orientadas a decisiones.",
      "Publicar y compartir reportes de forma segura.",
    ],
    targetAudience: [
      "Analistas de negocio y datos.",
      "Profesionales de finanzas y operaciones.",
      "Equipos que reportan indicadores a dirección.",
    ],
    requirements: [
      "Manejo intermedio de Excel o hojas de cálculo.",
      "Conocimiento básico de indicadores de negocio.",
      "Power BI Desktop instalado.",
    ],
    syllabus: [
      {
        title: "Módulo 1 — Datos y Power Query",
        topics: ["Conexiones", "Transformaciones", "Calidad de datos"],
      },
      {
        title: "Módulo 2 — Modelado",
        topics: ["Relaciones", "DAX básico", "Jerarquías"],
      },
      {
        title: "Módulo 3 — Visualización",
        topics: ["Buenas prácticas de diseño", "Interacciones", "Filtros y segmentaciones"],
      },
      {
        title: "Módulo 4 — Publicación",
        topics: ["Power BI Service", "Seguridad de reportes", "Proyecto final"],
      },
    ],
    benefits: [
      "Dashboard demo para portfolio.",
      "Plantillas de reportes reutilizables.",
      "Enfoque en storytelling con datos.",
    ],
    certification:
      "Certificado de participación CERTIA Academy al entregar el proyecto de visualización.",
    status: "disponible",
    featured: true,
    ctaText: "Solicitar información sobre Power BI",
    faqs: defaultFaqs("Análisis de Datos con Power BI"),
    provisional: true,
  },
  {
    id: "excel-analisis",
    slug: "excel-analisis-datos",
    title: "Excel para Análisis de Datos",
    shortDescription:
      "Utiliza Excel avanzado para limpiar, analizar y presentar información con criterio.",
    fullDescription:
      "Programa introductorio-intermedio para potenciar habilidades analíticas con Excel: tablas dinámicas, funciones avanzadas, Power Query básico y visualización de indicadores.",
    category: "Data y analítica",
    categoryId: "data-analitica",
    modality: "Virtual",
    level: "Inicial",
    duration: "24 horas",
    schedule: "Sábados, 10:00 – 14:00 (provisional)",
    objectives: [
      "Organizar y limpiar datasets con herramientas nativas de Excel.",
      "Aplicar funciones avanzadas para análisis descriptivo.",
      "Construir tablas dinámicas y gráficos informativos.",
      "Automatizar tareas repetitivas con buenas prácticas.",
    ],
    targetAudience: [
      "Profesionales administrativos y de operaciones.",
      "Analistas junior en formación.",
      "Equipos que dependen de reportes en hojas de cálculo.",
    ],
    requirements: [
      "Conocimientos básicos de Excel.",
      "Microsoft Excel 2016 o superior.",
      "Datos de práctica provistos en el curso.",
    ],
    syllabus: [
      {
        title: "Módulo 1 — Datos estructurados",
        topics: ["Tablas de Excel", "Validación", "Formato condicional"],
      },
      {
        title: "Módulo 2 — Análisis funcional",
        topics: ["BUSCARX, SI.CONJUNTO", "Agregaciones", "Análisis de tendencias"],
      },
      {
        title: "Módulo 3 — Reportes",
        topics: ["Tablas dinámicas", "Gráficos", "Power Query introductorio"],
      },
    ],
    benefits: [
      "Archivos de práctica descargables.",
      "Atajos y productividad en Excel.",
      "Puente hacia Power BI y analítica avanzada.",
    ],
    certification:
      "Certificado de participación CERTIA Academy al completar ejercicios evaluados.",
    status: "disponible",
    featured: false,
    ctaText: "Solicitar información sobre Excel para Análisis",
    faqs: defaultFaqs("Excel para Análisis de Datos"),
    provisional: true,
  },
  {
    id: "scrum-agil",
    slug: "scrum-gestion-agil-proyectos",
    title: "Scrum y Gestión Ágil de Proyectos",
    shortDescription:
      "Implementa Scrum y prácticas ágiles para entregar valor en equipos de producto y TI.",
    fullDescription:
      "Curso orientado a roles de Scrum Master, Product Owner y miembros de equipo ágil. Combina marco teórico, ceremonias, artefactos y simulaciones de sprint.",
    category: "Gestión de proyectos",
    categoryId: "gestion-proyectos",
    modality: "Híbrido",
    level: "Intermedio",
    duration: "32 horas",
    schedule: "Viernes 18:00 – 21:00 y sábado 09:00 – 13:00 (provisional)",
    objectives: [
      "Comprender valores y principios del manifiesto ágil.",
      "Facilitar ceremonias Scrum en equipos reales.",
      "Gestionar backlog y priorización de valor.",
      "Identificar métricas útiles para equipos ágiles.",
    ],
    targetAudience: [
      "Project managers en transición ágil.",
      "Líderes de equipo y coordinadores.",
      "Profesionales de producto y desarrollo.",
    ],
    requirements: [
      "Experiencia en proyectos o equipos multidisciplinarios.",
      "Conocimiento básico de dinámicas de trabajo en equipo.",
      "Disposición para participar en simulaciones.",
    ],
    syllabus: [
      {
        title: "Módulo 1 — Fundamentos ágiles",
        topics: ["Manifiesto ágil", "Scrum vs Kanban", "Roles y responsabilidades"],
      },
      {
        title: "Módulo 2 — Ceremonias y artefactos",
        topics: ["Sprint planning", "Daily y retrospectiva", "Definition of Done"],
      },
      {
        title: "Módulo 3 — Simulación de sprint",
        topics: ["Backlog grooming", "Ejecución de sprint", "Review y mejora continua"],
      },
    ],
    benefits: [
      "Simulación guiada de sprint completo.",
      "Plantillas de ceremonias y acuerdos de equipo.",
      "Enfoque aplicable a equipos híbridos.",
    ],
    certification:
      "Certificado de participación CERTIA Academy al completar la simulación evaluada.",
    status: "disponible",
    featured: false,
    ctaText: "Solicitar información sobre Scrum y Gestión Ágil",
    faqs: defaultFaqs("Scrum y Gestión Ágil de Proyectos"),
    provisional: true,
  },
  {
    id: "prep-cert-tech",
    slug: "preparacion-certificaciones-tecnologicas",
    title: "Preparación para Certificaciones Tecnológicas",
    shortDescription:
      "Estructura tu estudio y practica para certificaciones en cloud, seguridad y desarrollo.",
    fullDescription:
      "Programa transversal que guía la preparación para certificaciones tecnológicas del mercado. Incluye planificación de estudio, simulacros, repaso por dominios y estrategias de examen.",
    category: "Cloud Computing",
    categoryId: "cloud-computing",
    modality: "Virtual",
    level: "Intermedio",
    duration: "20 horas",
    schedule: "Sesiones flexibles según convocatoria (provisional)",
    objectives: [
      "Diseñar un plan de estudio personalizado por certificación.",
      "Identificar dominios clave y recursos oficiales.",
      "Practicar con simulacros cronometrados.",
      "Aplicar técnicas de gestión del tiempo en examen.",
    ],
    targetAudience: [
      "Profesionales que buscan certificaciones cloud, seguridad o desarrollo.",
      "Equipos con objetivos de upskilling certificado.",
      "Personas en reconversión hacia roles tecnológicos.",
    ],
    requirements: [
      "Conocimientos previos en el área de la certificación elegida.",
      "Acceso a documentación oficial del proveedor.",
      "Compromiso de estudio autónomo entre sesiones.",
    ],
    syllabus: [
      {
        title: "Módulo 1 — Estrategia de certificación",
        topics: ["Selección de certificación", "Mapa de dominios", "Plan de estudio"],
      },
      {
        title: "Módulo 2 — Repaso por áreas",
        topics: ["Sesiones por dominio", "Preguntas frecuentes", "Recursos recomendados"],
      },
      {
        title: "Módulo 3 — Simulacros y cierre",
        topics: ["Exámenes de práctica", "Análisis de resultados", "Recomendaciones finales"],
      },
    ],
    benefits: [
      "Metodología de preparación estructurada.",
      "Simulacros con retroalimentación.",
      "Orientación sin prometer resultados de examen.",
    ],
    certification:
      "Certificado de participación CERTIA Academy. La certificación oficial depende del proveedor externo correspondiente.",
    status: "disponible",
    featured: false,
    ctaText: "Solicitar información sobre preparación certificatoria",
    faqs: defaultFaqs("Preparación para Certificaciones Tecnológicas"),
    provisional: true,
  },
];

export function getFeaturedCourses(): Course[] {
  return courses.filter((course) => course.featured);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return courses.map((course) => course.slug);
}

export function getRelatedCourses(course: Course, limit = 3): Course[] {
  return courses
    .filter(
      (item) =>
        item.slug !== course.slug && item.categoryId === course.categoryId,
    )
    .slice(0, limit);
}

export function getCourseTitleOptions(): { value: string; label: string }[] {
  return courses.map((course) => ({
    value: course.slug,
    label: course.title,
  }));
}

/** @deprecated Usar getFeaturedCourses — mantiene compatibilidad con imports existentes */
export const featuredCourses = getFeaturedCourses();
