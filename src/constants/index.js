import {
  question,
  upv,
  msinvs,
  threeJsJourney,
  msiMock,
  comidasMock,
  msiWeb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mí",
  },
  {
    id: "experience",
    title: "Experiencia",
  },
  {
    id: "projects",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const stack = await fetch("./constants/stack.json").then((response) =>
  response.json()
);

const stack2 = [
  {
    label: "Diseño",
    text: "Este es un pequeño resumen de lo que soy capaz. Como estudié un Grado en Diseño, el software usado tenía que aparecer, teniendo no sólo mi propia experiencia sino los comentarios de los expertos que me enseñaron e inspiraron.",
    logos: [
      {
        icon: "figma",
        name: "Figma",
        color: "#08081B80",
      },
      {
        icon: "ps",
        name: "Adobe Photoshop",
        color: "#31A8FF80",
      },
      {
        icon: "pr",
        name: "Adobe Premiere Pro",
        color: "#9C9CFF80",
      },
      {
        icon: "ai",
        name: "Adobe Illustrator",
        color: "#FF9D0880",
      },
      {
        icon: "ae",
        name: "Adobe After Effects",
        color: "#9A9AFF80",
      },
      {
        icon: "blender",
        name: "Blender",
        color: "#EB7A0880",
      },
    ],
  },
  {
    label: "Front-end",
    text: "El front-end es la rama con la que más disfruto, ya que une ambos diseño y programación. Me siento más cómodo trabajando con React y Tailwind, pero si quiero poder conseguir los mejores resultados, ¡también tengo que conocer las bases!",
    logos: [
      {
        icon: "html",
        name: "HTML",
        color: "#E5532D80",
      },
      {
        icon: "css",
        name: "CSS",
        color: "#3D9DD780",
      },
      {
        icon: "js",
        name: "JavaScript",
        color: "#F7E02580",
      },
      {
        icon: "react",
        name: "React",
        color: "#58C3DF80",
      },
      {
        icon: "tailwind",
        name: "Tailwind CSS",
        color: "#3EBFF880",
      },
      {
        icon: "three",
        name: "Three.js",
        color: "#7562F280",
      },
    ],
  },
  {
    label: "Back-end",
    text: "Por otro lado, no he experimentado demasiado con la tecnologías de back-end. He desarrollado alguna aplicación CRUD utilizando Node.js y bases de datos MySQL, o PHP y MySQL. También fui el responsable del diseño de las tablas de dichas bases de datos.",
    logos: [
      {
        icon: "php",
        name: "PHP",
        color: "#8D96C080",
      },
      {
        icon: "node",
        name: "Node.js",
        color: "#86CF2F80",
      },
      {
        icon: "mysql",
        name: "MySQL",
        color: "#1A6A9780",
      },
    ],
  },
  {
    label: "Herramientas",
    text: "Para poder trabajar de la manera más eficiente, era prácticamente obligatorio conocer otro tipo de tecnologías y herramientas. La principal y casi esencial es npm. También git, en el caso de querer tener control sobre las versiones de mis proyectos.",
    logos: [
      {
        icon: "git",
        name: "Git",
        color: "#F1553A80",
      },
      {
        icon: "vite",
        name: "Vite",
        color:
          "linear-gradient(135deg, rgba(71, 202, 255, 0.5) 0%, rgba(190, 52, 254, 0.5) 100%)",
      },
      {
        icon: "npm",
        name: "npm",
        color: "#CD3E3D80",
      },
      {
        icon: "expo",
        name: "Expo",
        color: "#08081B80",
      },
      {
        icon: "wordpress",
        name: "WordPress",
        color: "#28799E80",
      },
    ],
  },
];

const experiences = [
  {
    title: "TBD",
    company_name: "???",
    url: "https://www.linkedin.com/in/morenno/",
    icon: question,
    iconBg: "linear-gradient(305deg, #1c5a73, #c13385)",
    date: "Presente",
    points: ["Por definir."],
    skills: [],
  },
  {
    title: "Curso Three.js Journey",
    company_name: "por Bruno Simon",
    url: "https://threejs-journey.com/certificate/view/25204",
    icon: threeJsJourney,
    iconBg: "#715df2",
    date: "Mar 2023 - Jun 2023",
    points: [
      "Uso de físicas, modelos 3D personalizados, iluminación y partículas.",
      "Estructura de código optimizada para proyectos grandes.",
      "Sombreado y post-procesado con WebGL y archivos .glsl.",
      "Uso de React Three Fiber.",
    ],
    skills: [
      { icon: "three", name: "Three.js", color: "#7562F280" },
      { icon: "react", name: "React", color: "#58C3DF80" },
      {
        icon: "vite",
        name: "Vite",
        color:
          "linear-gradient(135deg, rgba(71, 202, 255, 0.5) 0%, rgba(190, 52, 254, 0.5) 100%)",
      },
      { icon: "npm", name: "npm", color: "#CD3E3D80" },
      { icon: "blender", name: "Blender", color: "#EB7A0880" },
    ],
  },
  {
    title: "Desarrollador de App Móvil",
    company_name: "MSInvs",
    url: "https://msinvs.com",
    icon: msinvs,
    iconBg: "#6CA7CF",
    date: "Jul 2022 - Dic 2022",
    points: [
      "Escucha, gestión de tiempo y penasamiénto crítico, ya que aunque tuviera libertad, las decisiones y tiempos tenían que ser aprobadas por el jefe de la empresa.",
      "Cambio de imagen de marca.",
      "Reestructuración, rediseño y mejora de la aplicación.",
      "Desarrollo y mantenimiento full-stack de la aplicación.",
      "Desarrollo front-end con React, usando Expo y otras tecnologías relacionadas.",
      "Desarrollo back-end con Node.js, MySQL y otras tecnologías relacionadas.",
      "Implementación de diseño adaptable, asegurando la compatibilidad.",
      "Gestión de versiones en Git.",
    ],
    skills: [
      { icon: "react", name: "React", color: "#58C3DF80" },
      { icon: "expo", name: "Expo", color: "#08081B80" },
      { icon: "node", name: "Node.js", color: "#86CF2F80" },
      { icon: "npm", name: "npm", color: "#CD3E3D80" },
      { icon: "js", name: "JavaScript", color: "#F7E02580" },
      { icon: "mysql", name: "MySQL", color: "#1A6A9780" },
      { icon: "git", name: "Git", color: "#F1553A80" },
      { icon: "uxui", name: "UX/UI", color: "#08081B80" },
      { icon: "figma", name: "Figma", color: "#08081B80" },
      {
        icon: "adobe",
        name: "Adobe CC",
        color:
          "conic-gradient(from 0deg at 50% 50%, rgba(255, 0, 0, 0.5) 0%, rgba(255, 255, 0, 0.5) 25%, rgba(0, 255, 0, 0.5) 38%, rgba(0, 255, 255, 0.5) 63%, rgba(255, 0, 255, 0.5) 75%, rgba(255, 0, 0, 0.5) 100%)",
      },
    ],
  },

  {
    title: "Elaboración de Contenido Informativo",
    company_name: "Servicio Integrado de Empleo en la UPV",
    url: "https://sie.webs.upv.es/es",
    icon: upv,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Jul 2022",
    points: [
      "Comunicación, escucha, gestión de tiempo y resolución de problemas, ya que eran necesarios para entender cómo y dónde el contenido tenía que ser publicado.",
      "Escritura y publicación de noticias.",
      "Maquetación web.",
      "Mantenimiento, actualización y corrección de errores en WordPress.",
    ],
    skills: [
      { icon: "html", name: "HTML", color: "#E5532D80" },
      { icon: "css", name: "CSS", color: "#3D9DD780" },
      { icon: "wordpress", name: "WordPress", color: "#28799E80" },
    ],
  },
  {
    title: "Grado en Diseño y Tecnologías Creativas",
    company_name: "Universitat Politècnica de València",
    url: "https://www.upv.es/titulaciones/GDTC/",
    icon: upv,
    iconBg: "#E6DEDD",
    date: "Sep 2018 - Jul 2022",
    points: [
      "Comunicación, colaboración y pensamiento crítico ya que casi todos los proyectos eran en grupo.",
      "Aprendizaje de HTML, CSS, JS, PHP y MySQL.",
      "Diseño y prueba de interfaces UX/UI tanto con la Suite Adobe como con Figma.",
      "Desarrollo de videojuegos con Unity y C#.",
      "Gestión de versiones en Git.",
      "Modelado 3D, rendering y animación en Blender.",
    ],
    skills: [
      { icon: "html", name: "HTML", color: "#E5532D80" },
      { icon: "css", name: "CSS", color: "#3D9DD780" },
      { icon: "js", name: "JavaScript", color: "#F7E02580" },
      { icon: "wordpress", name: "WordPress", color: "#28799E80" },
      { icon: "php", name: "PHP", color: "#8D96C080" },
      { icon: "mysql", name: "MySQL", color: "#1A6A9780" },
      { icon: "uxui", name: "UX/UI", color: "#08081B80" },
      {
        icon: "adobe",
        name: "Adobe CC",
        color:
          "conic-gradient(from 0deg at 50% 50%, rgba(255, 0, 0, 0.5) 0%, rgba(255, 255, 0, 0.5) 25%, rgba(0, 255, 0, 0.5) 38%, rgba(0, 255, 255, 0.5) 63%, rgba(255, 0, 255, 0.5) 75%, rgba(255, 0, 0, 0.5) 100%)",
      },
      { icon: "figma", name: "Figma", color: "#08081B80" },
      { icon: "unity", name: "Unity", color: "#08081B80" },
      { icon: "csharp", name: "C#", color: "#6C287D80" },
      { icon: "git", name: "Git", color: "#F1553A80" },
      { icon: "blender", name: "Blender", color: "#EB7A0880" },
    ],
  },
];

const projects = [
  {
    name: "Aplicación para MSInvs",
    description:
      "Aplicación móvil que permite a los usuarios buscar e invertir en propiedades inmobiliarias, obteniendo beneficios al reunir los fondos necesarios.",
    tags: [
      { icon: "react", name: "React", color: "#58C3DF80" },
      { icon: "expo", name: "Expo", color: "#08081B80" },
      { icon: "node", name: "Node.js", color: "#86CF2F80" },
      { icon: "js", name: "JavaScript", color: "#F7E02580" },
      { icon: "npm", name: "npm", color: "#CD3E3D80" },
      { icon: "mysql", name: "MySQL", color: "#1A6A9780" },
      { icon: "git", name: "Git", color: "#F1553A80" },
      { icon: "uxui", name: "UX/UI", color: "#08081B80" },
      { icon: "figma", name: "Figma", color: "#08081B80" },
    ],
    image: msiMock,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.msinvs.msinvs",
    live_link: "https://apps.apple.com/gb/app/msinvs/id1565847618",
  },
  {
    name: "Web para MSInvs",
    description:
      "Página de inicio para MSInvs, una empresa de crowdlending, que permite a los clientes saber cómo funcionan la aplicación y el negocio.",
    tags: [
      { icon: "react", name: "React", color: "#58C3DF80" },
      { icon: "js", name: "JavaScript", color: "#F7E02580" },
      { icon: "bem", name: "BEM", color: "#08081B80" },
    ],
    image: msiWeb,
    source_code_link: "https://github.com/Morenoo1105/msinvs_concept",
    live_link: "https://morenno.net/demoWebs/MSInvs/",
  },
  {
    name: "Web para Casa de Comidas",
    description:
      "Aplicación web que permite a los usuarios comprobar el menú del día sin la necesidad de llamar, así como conocer un poco más de la historia del restaurante.",
    tags: [
      { icon: "react", name: "React", color: "#58C3DF80" },
      { icon: "js", name: "JavaScript", color: "#F7E02580" },
      { icon: "bem", name: "BEM", color: "#08081B80" },
    ],
    image: comidasMock,
    source_code_link:
      "https://github.com/Morenoo1105/comidas-de-pueblo_concept",
    live_link: "https://morenno.net/demoWebs/ComidasDePueblo/",
  },
];

export { stack, experiences, projects };
