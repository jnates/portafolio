import type { CtaLink, SiteConfig } from "../types";

/** Single source of truth for every piece of content on the site. */

const EMAIL = "nates1999123@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/jnates/";
const GITHUB = "https://github.com/jnates";
const CV_URL = "/assets/cv/juan-david-nates-cv.pdf";

const emailCta: CtaLink = { label: "✉️ Escríbeme", href: `mailto:${EMAIL}`, variant: "primary" };
const linkedinCta: CtaLink = { label: "LinkedIn", href: LINKEDIN };
const githubCta: CtaLink = { label: "GitHub", href: GITHUB };
const resumeCta: CtaLink = { label: "Descargar CV", href: CV_URL, external: true };

export const site: SiteConfig = {
  brand: {
    lead: "Ing.",
    name: "Juan Nates",
  },
  meta: {
    fullName: "Juan David Nates Huertas",
    role: "Senior Backend Developer",
    location: "Cali, Colombia",
  },
  cvUrl: CV_URL,
  nav: [
    { label: "Sobre mí", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ],
  hero: {
    badge: "Disponible para nuevos proyectos",
    eyebrow: "👋 Hola, soy",
    name: "Juan David Nates",
    roles: [
      "Desarrollador Full Stack",
      "Go & Microservicios",
      "Arquitectura Hexagonal",
      "Cloud & DevOps",
    ],
    mono: "Full Stack · Microservicios · Arquitectura Hexagonal · Cloud",
    lead:
      "Desarrollador Full Stack enfocado en construir aplicaciones escalables y cloud-native, " +
      "del backend al frontend, con arquitecturas limpias y buenas prácticas.",
    photo: "/assets/img/me.jpg",
    photoAlt: "Juan David Nates",
    ctas: [emailCta, linkedinCta, githubCta, resumeCta],
  },
  about: {
    kicker: "01 — Sobre mí",
    title: "Ingeniero de software y desarrollador Full Stack",
    paragraphs: [
      "Soy ingeniero electrónico especializado en procesos de desarrollo de software, con amplia " +
        "experiencia en la industria. Como desarrollador full stack, entrego aplicaciones web de alta " +
        "calidad usando React, con habilidades tanto de frontend como de backend. Utilizo diversos " +
        "frameworks de UI como Material UI y Tailwind CSS. En el backend tengo experiencia creando APIs " +
        "RESTful con Node.js, Golang, Python (con frameworks como FastAPI y Django), TypeScript, Spring " +
        "Boot, GraphQL y SonarQube. Además, manejo servicios cloud como AWS S3 y EC2, y tengo amplio " +
        "conocimiento en tecnologías DevOps como Docker, AWS, Terraform, Kubernetes y Serverless.",
      "Con experiencia gestionando bases de datos relacionales como Postgres, MySQL y Oracle, y en " +
        "integración continua con Git usando metodologías ágiles como Scrum, me considero una persona " +
        "puntual y responsable. Me motiva crear soluciones innovadoras que resuelvan problemas reales y " +
        "aporten valor a usuarios y clientes. Disfruto colaborar en equipos diversos donde puedo " +
        "compartir ideas y aprender de los demás. En mi tiempo libre, explorar nueva música es mi pasión " +
        "y fuente de inspiración para futuros proyectos de código.",
    ],
    facts: [
      { label: "Perfil", value: "Desarrollador Full Stack" },
      { label: "Ubicación", value: "Cali, Colombia" },
      { label: "Enfoque", value: "Full Stack · Cloud · DevOps" },
      { label: "Educación", value: "Ing. Electrónico · Máster (en curso)" },
      { label: "Disponibilidad", value: "Abierto a colaborar" },
    ],
  },
  stack: {
    kicker: "02 — Stack",
    title: "Tecnologías con las que trabajo",
    groups: [
      {
        title: "Lenguajes",
        items: [
          { name: "Go", icon: "devicon-go-plain colored" },
          { name: "TypeScript", icon: "devicon-typescript-plain colored" },
          { name: "JavaScript", icon: "devicon-javascript-plain colored" },
          { name: "Java", icon: "devicon-java-plain colored" },
          { name: "Python", icon: "devicon-python-plain colored" },
          { name: "PHP", icon: "devicon-php-plain colored" },
        ],
      },
      {
        title: "Backend & Frontend",
        items: [
          { name: "NestJS", icon: "devicon-nestjs-original colored" },
          { name: "Node.js", icon: "devicon-nodejs-plain colored" },
          { name: "Spring Boot", icon: "devicon-spring-original colored" },
          { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
          { name: "Django", icon: "devicon-django-plain colored" },
          { name: "GraphQL", icon: "devicon-graphql-plain colored" },
          { name: "React", icon: "devicon-react-original colored" },
          { name: "Angular", icon: "devicon-angular-plain colored" },
        ],
      },
      {
        title: "Cloud & DevOps",
        items: [
          { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
          { name: "Azure", icon: "devicon-azure-plain colored" },
          { name: "GCP", icon: "devicon-googlecloud-plain colored" },
          { name: "Docker", icon: "devicon-docker-plain colored" },
          { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
          { name: "Terraform", icon: "devicon-terraform-plain colored" },
          { name: "Serverless" },
          { name: "Linux", icon: "devicon-linux-plain colored" },
        ],
      },
      {
        title: "Datos & Mensajería",
        items: [
          { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
          { name: "MySQL", icon: "devicon-mysql-original colored" },
          { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
          { name: "Redis", icon: "devicon-redis-plain colored" },
          { name: "RabbitMQ", icon: "devicon-rabbitmq-original colored" },
        ],
      },
    ],
  },
  projects: {
    kicker: "03 — Proyectos",
    title: "Trabajo seleccionado",
    items: [
      {
        name: "back-product-market",
        description: "Backend para un marketplace de productos, con foco en escalabilidad.",
        tag: "Go",
        url: "https://github.com/jnates/back-product-market",
      },
      {
        name: "Infra reutilizable",
        description: "Módulos de infraestructura como código, reutilizables para despliegues.",
        tag: "Terraform",
        url: "https://github.com/jnates/Infra-reutilizable-terraform",
      },
      {
        name: "crud_nest",
        description: "API RESTful con NestJS y TypeScript siguiendo buenas prácticas.",
        tag: "NestJS",
        url: "https://github.com/jnates/crud_nest",
      },
      {
        name: "Visión por computador",
        description: "Tracking con OpenCV y una interfaz gráfica para unificar tareas.",
        tag: "Python",
        url: "https://github.com/jnates/paper_and_pencil_with_opencv",
      },
      {
        name: "apis-services-java",
        description: "Servicios de API y microservicios construidos con Java.",
        tag: "Java",
        url: "https://github.com/jnates/apis-services-java",
      },
      {
        name: "consumo-api-github",
        description: "Aplicación que consume la API de GitHub, construida con TypeScript.",
        tag: "TypeScript",
        url: "https://github.com/jnates/consumo-api-github",
      },
    ],
    moreLink: {
      label: "Ver todos los repositorios →",
      href: "https://github.com/jnates?tab=repositories",
      external: true,
    },
  },
  contact: {
    kicker: "04 — Contacto",
    title: "¿Trabajamos juntos?",
    lead: "Estoy abierto a proyectos, colaboraciones y buenas ideas. La forma más rápida de llegar a mí:",
    ctas: [{ label: `✉️ ${EMAIL}`, href: `mailto:${EMAIL}`, variant: "primary" }, linkedinCta, githubCta],
  },
  footer: {
    note: "Hecho desde Cali, Colombia 🇨🇴",
  },
};
