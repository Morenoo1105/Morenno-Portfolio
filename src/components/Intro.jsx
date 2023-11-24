import React from "react";
import HeadsCanvas from "./canvas";
import { AnimatePresence, motion } from "framer-motion";
import { TbArrowRight, TbBrandGithubFilled, TbDownload } from "react-icons/tb";
import { TfiLinkedin } from "react-icons/tfi";

import { useSectionInView } from "../hooks/useSectionInView";
import { cv } from "../assets";

const Y = ({ children }) => (
  <span className="text-secondary font-comfortaa font-extralight transition-none">
    {children}
  </span>
);

const G = ({ children }) => (
  <span className="font-garamond transition-none">{children}</span>
);

const Intro = () => {
  const { ref } = useSectionInView("home", 0.75);

  return (
    <section
      ref={ref}
      className="font-poiret mx-auto pt-20 sm:pt-24 mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      <div
        className="flex items-center justify-center h-56 md:h-60 
      bg-[radial-gradient(circle_at_50%_50%,_rgba(255,_200,_107,_1)_15%,_rgba(255,_200,_107,_0)_27%)]
      dark:bg-[radial-gradient(circle_at_50%_50%,_rgba(255,_200,_107,_1)_0%,_rgba(255,_200,_107,_0)_27%)]
      bg-center
      bg-no-repeat
      [background-size:600px_600px]
      "
      >
        <motion.div className="w-56 h-56">
          <HeadsCanvas />
        </motion.div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-xl !leading-[1.5] sm:text-4xl textBalance font-semibold text-tertiary dark:text-primaryText"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <G>¡</G>Hola<G>!</G>
        <br /> Me llamo <Y>Pablo Moreno</Y>
        <G>,</G> y soy <Y>diseñador y desarrollador front-end</Y>
        <G>.</G> Con <Y>+4 años</Y> de experiencia en web, llevo <Y>2</Y>{" "}
        centrado en <Y>React</Y>
        <G>.</G>
      </motion.p>

      <motion.p
        className="mb-10 mt-4 px-4 text-lg !leading-[1.5] sm:text-3xl textBalance font-semibold text-tertiary dark:text-primaryText"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Además, soy <Y>artista 3D</Y> y <Y>editor de vídeo</Y>
        <G>.</G>
      </motion.p>

      <AnimatePresence>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 px-4 text-lg font-comfortaa"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.a
            aria-label="Desplazarse a sección Contacto"
            href="#contact"
            className="group bg-secondary text-primary font-black px-7 py-3 flex items-center gap-2 rounded-full outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span>¿Quieres hablar?</span>
            <TbArrowRight className="opacity-70 group-hover:rotate-[90deg] !transition" />
          </motion.a>
          <motion.a
            aria-label="Descargar Currículum Vitae"
            href={cv}
            download="CV-Pablo Moreno Martinez"
            target="_blank"
            className="bg-tertiary/10 dark:bg-tertiary text-tertiary dark:text-secondary px-7 py-3 flex items-center gap-2 rounded-full outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span>Descarga mi CV</span>
            <TbDownload />
          </motion.a>
          <div className="h-full flex flex-row gap-8">
            <motion.a
              aria-label="Visitar perfil de LinkedIn"
              href="https://linkedin.com/in/morenno/"
              target="_blank"
              rel="external noreferrer noopener"
              className="bg-tertiary/10 dark:bg-tertiary text-tertiary dark:text-secondary p-4 flex items-center rounded-full outline-none"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TfiLinkedin />
            </motion.a>
            <motion.a
              aria-label="Visitar perfil de GitHub"
              href="https://github.com/Morenoo1105"
              target="_blank"
              rel="external noreferrer noopener"
              className="bg-tertiary/10 dark:bg-tertiary text-tertiary dark:text-secondary p-4 flex items-center rounded-full outline-none"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TbBrandGithubFilled />
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="mx-auto bg-secondary/50 dark:bg-tertiary my-24 h-28 w-1 rounded-full hidden sm:block"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      />
    </section>
  );
};

export default Intro;
