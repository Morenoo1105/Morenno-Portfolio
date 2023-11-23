import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, inViewAnim, inViewInitial } from "../utils/motion";
import ProjectCard from "./ProjectCard";
import { useSectionInView } from "../hooks/useSectionInView";

const Works = () => {
  const { ref } = useSectionInView("projects", 0.75);

  return (
    <>
      <motion.div whileInView={inViewAnim} initial={inViewInitial}>
        <h2 className={`${styles.sectionHeadText}`}>Proyectos.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="textBalance mt-3 text-primaryText text-[17px] max-w-xl leading-[30px] font-poiret"
        >
          Aquí recojo algunos de los proyectos que he hecho. Cada uno me ha
          enseñado algo nuevo que implementar en los siguientes. Además, tienen
          disponible su propio repositorio de GitHub y versión publicada.
          ¡Visítalos!
        </motion.p>
      </div>

      <div
        ref={ref}
        className="mt-20 flex flex-col justify-center xl:justify-start items-center md:items-start gap-7 "
      >
        <ProjectCard index={-1} {...projects[0]} first />
        {projects.slice(1).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
