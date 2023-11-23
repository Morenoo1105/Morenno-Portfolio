export const navLinks = [
  {
    id: "home",
    title: "Inicio",
  },
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

const experiences = await fetch("./constants/experiences.json").then(
  (response) => response.json()
);

const projects = await fetch("./constants/projects.json").then((response) =>
  response.json()
);

export { stack, experiences, projects };
