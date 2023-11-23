import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, inViewAnim, inViewInitial } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import UserCard from "./UserCard";
import { useSectionInView } from "../hooks/useSectionInView";

const Y = ({ children }) => (
  <span className="text-secondary font-comfortaa font-semibold dark:font-extralight">
    {children}
  </span>
);

const G = ({ children }) => <span className="font-garamond">{children}</span>;

const About = () => {
  const { ref } = useSectionInView("about", 0.5);

  return (
    <div
      ref={ref}
      className="w-full flex lg:flex-row flex-col justify-between lg:items-center mt-0 mb-0 lg:mb-32 font-poiret"
    >
      <div className="flex-1 flex flex-col gap-8">
        <motion.div whileInView={inViewAnim} initial={inViewInitial}>
          <h2 className={`${styles.sectionHeadText}`}>Sobre mí.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="textBalance mt-4 font-semibold dark:font-normal text-tertiary dark:text-primaryText text-[20px] max-w-xl leading-[30px]"
        >
          Graduado en <Y>Diseño y Tecnologías Creativas</Y>
          <G>,</G> con la posibilidad de aportar a los proyectos las dos caras
          de la moneda: <Y>diseño</Y> y <Y>desarrollo</Y>.
        </motion.p>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="textBalance mt-4 font-semibold dark:font-normal text-tertiary dark:text-primaryText text-[20px] max-w-xl leading-[30px]"
        >
          Con ganas de empezar a crear <Y>relaciones largas</Y> y{" "}
          <Y>valiosas</Y> mientras sigo aprendiendo para conseguir el{" "}
          <Y>mejor resultado posible</Y>
          <G>.</G>
        </motion.p>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="textBalance mt-4 font-semibold dark:font-normal text-tertiary dark:text-primaryText text-[20px] max-w-xl leading-[30px]"
        >
          <Y>Hace 5 años</Y> descubrí el{" "}
          <sup className="text-[10px]">(a veces)</sup> divertido mundo del
          desarrollo front-end gracias a la univesidad<G>.</G> Desde entonces
          <G>,</G> no he parado de investigar<G>.</G>
        </motion.p>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="textBalance mt-4 font-semibold dark:font-normal text-tertiary dark:text-primaryText text-[20px] max-w-xl leading-[30px]"
        >
          <Y>Hace 2 años</Y> descubrí <Y>React</Y>
          <G>, ¡</G>y con el tiempo se convirtió en mi framework favorito con el
          que trabajar
          <G>!</G>
        </motion.p>
      </div>
      <div className="flex-1 flex sm:justify-end lg:justify-center justify-center items-center lg:mt-0 mt-10">
        <UserCard />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
