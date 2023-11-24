import { AnimatePresence, motion, useAnimate } from "framer-motion";
import React from "react";
import { navLinks } from "../constants";
import { TbLanguage, TbMoonFilled, TbSunFilled } from "react-icons/tb";
import StackIcon from "./iconComponents/stackIcon";
import { useActiveSectionContext } from "../context/active-section-context";
import { useTheme } from "../context/theme-context";

const DarkToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
    await animate("#circle", { scale: 1 });
    animate(theme == "dark" ? "#sun" : "#moon", { scale: 1 });
    animate(theme == "light" ? "#sun" : "#moon", { scale: 0 });
    await toggleTheme();
    animate(theme == "dark" ? "#sun" : "#moon", { scale: 1 });
    animate(theme == "light" ? "#sun" : "#moon", { scale: 0 });
    await animate("#circle", { scale: 0 }, { delay: 0.2 });
  };

  return (
    <AnimatePresence>
      <button
        ref={scope}
        aria-label={`Cambiar a modo ${theme == "light" ? "oscuro" : "claro"}`}
        className="relative flex w-full items-center justify-center mx-3 my-3 text-tertiary/50 hover:text-tertiary dark:text-primaryText dark:hover:text-secondary transition-none"
        onClick={() => {
          handleAnimate();
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          id="circle"
          className="absolute z-10 w-5 h-5 bg-tertiary dark:bg-secondary rounded-full"
        />

        <TbSunFilled
          id="sun"
          className={`${theme == "dark" && "scale-0"} absolute transition-none`}
        />
        <TbMoonFilled
          id="moon"
          className={`${theme == "light" && "scale-0"} transition-none`}
        />
      </button>
    </AnimatePresence>
  );
};

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header id="home" className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[5rem] w-full rounded-none border border-secondary dark:border-tertiary/40 dark:sm:border-secondary/40 bg-secondary/80 dark:bg-tertiary/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="font-comfortaa flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-bold sm:w-[42rem] sm:flex-nowrap sm:gap-5">
          {navLinks.map((link) => (
            <motion.li
              className="relative h-3/4 flex items-center justify-center"
              key={link.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <a
                aria-label={`Desplazarse a la sección ${link.title}`}
                className={`flex w-full items-center justify-center px-3 py-3 ${
                  link.id == activeSection
                    ? "text-secondary hover:text-primaryText dark:text-tertiary hover:dark:text-primaryText"
                    : "text-tertiary/50 hover:text-tertiary dark:text-primaryText dark:hover:text-secondary"
                }   transition-colors`}
                href={`#${link.id}`}
                onClick={() => {
                  setActiveSection(link.id);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.id == "home" ? (
                  <StackIcon icon={link.id} className={"text-[1.2rem]"} />
                ) : (
                  link.title
                )}
              </a>

              {link.id == activeSection && (
                <motion.span
                  className="bg-tertiary/50 dark:bg-secondary rounded-full absolute inset-0 -z-10"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
          <motion.li
            className="w-[0.1rem] h-2/3 bg bg-tertiary/25 dark:bg-secondary bg-opacity-50 rounded-full mx-3 sm:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          />
          <motion.li
            className="flex items-center justify-center text-[1.2rem]"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <a
              aria-label="Visit english website"
              className="flex w-full items-center justify-center mx-3 my-3 text-tertiary/50 hover:text-tertiary dark:text-primaryText dark:hover:text-secondary transition-none"
              href="https://morenno.net/"
            >
              <TbLanguage />
            </a>
            <DarkToggle />
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
