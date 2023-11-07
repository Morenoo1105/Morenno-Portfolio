import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { navLinks } from "../../constants";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { styles } from "../../style";
import useScrollBlock from "../../hooks/useScrollBlock";
import { CgSwap } from "react-icons/cg";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    className={"stroke-primaryText"}
    strokeLinecap="round"
    {...props}
  />
);

const SocialLi = ({ children }, props) => (
  <motion.li
    variants={{
      initial: {
        scale: 0,
        transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
      },
      animate: {
        scale: 1,
        transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] },
      },
    }}
    className={`flex flex-row items-center justify-center gap-4`}
    {...props}
  >
    {children}
  </motion.li>
);

const NavBarMenu = ({ isShown, toggle, setToggle }) => {
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    toggle ? blockScroll() : allowScroll();
  }, [toggle]);

  return (
    <>
      <div className="flex flex-1 justify-end items-center">
        <motion.button
          aria-label={!toggle ? "Abrir Menu" : "Cerrar Menu"}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          transition={{ delayChildren: 0.2 }}
          initial={false}
          animate={!isShown ? "hidden" : toggle ? "open" : "closed"}
          custom="100%"
          className={`w-[24px] h-full block ${
            isShown ? "cursor-pointer" : "cursor-default"
          }`}
          onClick={() => {
            if (isShown) {
              setToggle(!toggle);
            }
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 20">
            <Path
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              variants={{
                hidden: { d: "M 20 2.5 L 20 2.5", opacity: 0 },
                closed: { d: "M 7.5 2.5 L 20 2.5", opacity: 1 },
                open: { d: "M 3 16.5 L 17 2.5", opacity: 1 },
              }}
            />
            <Path
              variants={{
                hidden: { d: "M 20 9.423 L 20 9.423", opacity: 0 },
                closed: { d: "M 2 9.423 L 20 9.423", opacity: 1 },
                open: { d: "M 2 9.423 L 20 9.423", opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              variants={{
                hidden: { d: "M 20 16.346 L 20 16.346", opacity: 0 },
                closed: { d: "M 10 16.346 L 20 16.346", opacity: 1 },
                open: { d: "M 3 2.5 L 17 16.346", opacity: 1 },
              }}
            />
          </svg>
        </motion.button>
      </div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            variants={{
              initial: { scaleY: 0 },
              animate: {
                scaleY: 1,
                transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
              },
              exit: {
                scaleY: 0,
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-primary-50 text-primaryText p-10 z-[-1]"
          >
            <motion.ul
              variants={{
                initial: {
                  transition: {
                    staggerChildren: 0.09,
                    staggerDirection: -1,
                  },
                },
                animate: {
                  transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.09,
                    staggerDirection: 1,
                  },
                },
              }}
              initial="initial"
              animate="animate"
              exit="initial"
              className="flex flex-col h-full justify-center items-center gap-6 font-poiret list-none text-5xl"
            >
              {navLinks.map((links) => (
                <div key={links.id} className="overflow-hidden">
                  <motion.li
                    variants={{
                      initial: {
                        y: "30vh",
                        transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
                      },
                      animate: {
                        y: "0",
                        transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] },
                      },
                    }}
                    className={`hover:text-secondary transition-all`}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <a
                      aria-label={`Desplazarse a la sección ${links.title}`}
                      href={`#${links.id}`}
                    >
                      {links.title}
                    </a>
                  </motion.li>
                </div>
              ))}
              <div className="overflow-hidden">
                <motion.div
                  variants={{
                    initial: {
                      y: "30vh",
                      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
                    },
                    animate: {
                      y: "0",
                      transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] },
                    },
                  }}
                >
                  <a
                    aria-label="Cambiar idioma a inglés"
                    href="https://morenno.net/"
                    rel="external noreferrer noopener"
                    className="group flex justify-center items-center gap-2 transition-all text-primaryText hover:text-secondary font-bold text-3xl mt-10"
                  >
                    <p className="text-secondary flex-1 text-right">ES</p>
                    <CgSwap className={`w-10 h-10 flex-1`} />
                    <p className="font-normal flex-1">EN</p>
                  </a>
                </motion.div>
              </div>
              <div className="flex flex-row justify-between items-center mt-12 gap-11">
                <SocialLi>
                  <a
                    aria-label="Visitar perfil de LinkedIn"
                    href="https://linkedin.com/in/morenno/"
                    target="_blank"
                    rel="external noreferrer noopener"
                  >
                    <BsLinkedin
                      className={`hover:fill-[url('#gradLi')] ${styles.heroIconsMenu}`}
                    />
                  </a>
                </SocialLi>
                <SocialLi>
                  <a
                    aria-label="Visitar perfil de Github"
                    href="https://github.com/Morenoo1105"
                    target="_blank"
                    rel="external noreferrer noopener"
                  >
                    <BsGithub
                      className={`hover:fill-[url('#gradGh')] ${styles.heroIconsMenu}`}
                    />
                  </a>
                </SocialLi>
                <SocialLi>
                  <a
                    aria-label="Visitar perfil de Instagram"
                    href="https://instagram.com/moren_no/"
                    target="_blank"
                    rel="external noreferrer noopener"
                  >
                    <BsInstagram
                      className={`hover:fill-[url('#gradIg')] ${styles.heroIconsMenu}`}
                    />
                  </a>
                </SocialLi>
                <SocialLi>
                  <a
                    aria-label="Visitar perfil de Twitter/X"
                    href="https://x.com/moren__no"
                    target="_blank"
                    rel="external noreferrer noopener"
                  >
                    <BsTwitter
                      className={`hover:fill-[url('#gradTw')] ${styles.heroIconsMenu}`}
                    />
                  </a>
                </SocialLi>
              </div>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBarMenu;
