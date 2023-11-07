import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, inView, inViewInitial } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import UserCard from "./UserCard";

const Y = ({ children }) => (
  <span className="text-secondary font-bold">{children}</span>
);

const G = ({ children }) => <span className="font-garamond">{children}</span>;

const About = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col justify-between lg:items-center mt-0 mb-0 lg:mt-44 lg:mb-32">
      <div className="flex-1 flex flex-col gap-8">
        <motion.div whileInView={inView} initial={inViewInitial}>
          <p className={`${styles.sectionSubText}`}>Yo</p>
          <h2 className={`${styles.sectionHeadText}`}>Sobre mí.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="textBalance mt-4 text-primaryText text-[20px] max-w-xl leading-[30px]"
        >
          <G>¡</G>Hola<G>!</G> Me llamo <Y>Pablo Moreno</Y>
          <G>,</G> y soy <Y>Desarrollador Front-end</Y>
          <G>,</G> <Y>Artista 3D</Y> y <Y>Editor de Vídeo</Y>
          <G>.</G>
        </motion.p>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="textBalance mt-4 text-primaryText text-[20px] max-w-xl leading-[30px]"
        >
          Con ganas de empezar a crear <Y>relaciones largas</Y> y{" "}
          <Y>valiosas</Y> mientras sigo aprendiendo para conseguir el{" "}
          <Y>mejor resultado posible</Y>
          <G>.</G>
        </motion.p>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="textBalance mt-4 text-primaryText text-[20px] max-w-xl leading-[30px]"
        >
          <Y>Hace 5 años</Y> descubrí el{" "}
          <sup className="text-[10px]">(a veces)</sup> divertido mundo del
          desarrollo front-end gracias a la univesidad<G>.</G> Desde entonces
          <G>,</G> no he parado de investigar<G>.</G>
        </motion.p>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="textBalance mt-4 text-primaryText text-[20px] max-w-xl leading-[30px]"
        >
          <Y>Hace 1 año</Y> descubrí <Y>React</Y>
          <G>, ¡</G>y con el tiempo se convirtió en mi librería favorita con la
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
