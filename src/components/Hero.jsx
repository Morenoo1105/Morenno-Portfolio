import { motion } from "framer-motion";
import { styles } from "../style";
import HeadsCanvas from "./canvas";
import { useTypewriter } from "react-simple-typewriter";
import { BsGithub, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { CgSwap } from "react-icons/cg";

import Gradients from "../utils/Gradients";

const Hero = () => {
  const [skillTypewriter] = useTypewriter({
    words: [
      "Desarrollador Front-end",
      "Artista 3D",
      "Editor de Video",
      "Experto en Memes",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  const mouseEnter = (event) => {
    const socialIcons = document.getElementsByClassName("socialIcon");
    for (let i = 0; i < socialIcons.length; i++)
      socialIcons[i].style.transform = "scale(0.5)";

    event.currentTarget.style.transform = "scale(1.5)";
  };

  const mouseEnterButton = (event) => {
    const socialIcons = document.getElementsByClassName("socialIcon");
    for (let i = 0; i < socialIcons.length; i++)
      socialIcons[i].style.transform = "scale(0.5)";

    event.currentTarget.style.transform = "scale(1.2)";
  };

  const mouseLeave = () => {
    const socialIcons = document.getElementsByClassName("socialIcon");
    for (let i = 0; i < socialIcons.length; i++)
      socialIcons[i].style.transform = "scale(1)";
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 xl:top-[120px] top-12 max-w-[1700px] mx-auto flex lg:flex-row flex-col gap-5 h-fit z-[2]`}
      >
        <div className="w-full h-fit flex flex-row justify-between sm:items-center items-center">
          <p className={`${styles.heroSubText} h-fit mt-0`}>
            {skillTypewriter}
            <span className="font-poiret font-semibold italic animate-blink">
              |
            </span>
          </p>
          <div
            className={`h-fit flex flex-row items-center justify-center gap-4 z-[1] relative`}
          >
            <Gradients className="hidden" />
            <a
              aria-label="Visitar perfil de LinkedIn"
              href="https://linkedin.com/in/morenno/"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <BsLinkedin
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                className={`${styles.heroIcons} hover:fill-[url('#gradLi')] socialIcon`}
              />
            </a>
            <a
              aria-label="Visitar perfil de Github"
              href="https://github.com/Morenoo1105"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <BsGithub
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                className={`${styles.heroIcons} hover:fill-[url('#gradGh')] socialIcon`}
              />
            </a>
            <div className="h-7 w-[2px] rounded-full sm:block hidden bg-primaryText" />
            <a
              aria-label="Visitar perfil de Instagram"
              href="https://instagram.com/moren_no/"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <BsInstagram
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                className={`${styles.heroIcons} hover:fill-[url('#gradIg')] socialIcon`}
              />
            </a>
            <a
              aria-label="Visitar perfil de Twitter/X"
              href="https://x.com/moren__no"
              target="_blank"
              rel="external noreferrer noopener"
            >
              <BsTwitter
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                className={`${styles.heroIcons} hover:fill-[url('#gradTw')] socialIcon`}
              />
            </a>
            <div className="h-7 w-[2px] rounded-full sm:block hidden bg-primaryText" />
            <a
              aria-label="Cambiar idioma a inglés"
              href="https://morenno.net/"
              rel="external noreferrer noopener"
              onMouseEnter={mouseEnterButton}
              onMouseLeave={mouseLeave}
              className="group flex flex-1 justify-center items-center gap-0 socialIcon transition-all text-primaryText hover:text-secondary font-bold absolute top-8 right-0 sm:top-0 sm:right-0 sm:relative"
            >
              <p className="text-secondary">ES</p>
              <CgSwap className={`sm:w-6 sm:h-6 w-5 h-5`} />
              <p className="font-normal">EN</p>
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-[1700px] mx-auto flex lg:flex-row flex-col-reverse items-start gap-5`}
      >
        <div className="lg:w-[50%] w-full h-full sm:pb-[104px] pb-[15vh] flex flex-1 flex-col justify-end items-start">
          <h1 className={`${styles.heroHeadText}`}>Morenno</h1>
        </div>
        <div className="sm:mt-40 lg:mt-0 mt-0 lg:w-[50%] w-full lg:h-full h-[50vh] hero-gradient">
          <HeadsCanvas />
        </div>
      </div>
      <motion.div
        className="opacity-0"
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
      >
        <div className="absolute md:bottom-10 bottom-[30vh] w-full flex justify-center items-center transition-all">
          <a href="#about" aria-label="Desplazarse a la sección Sobre mí">
            <div className="w-[35px] h-[64px] md:rounded-3xl rounded-md md:border-4 border-[3px] border-t-8 border-b-8 border-secondary opacity-50 flex justify-center items-start p-2 transition-all">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: "Infinity",
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
