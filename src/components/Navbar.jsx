import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

import { styles } from "../style";
import NavBarMenu from "./NavbarMenu/NavBarMenu";

const Navbar = () => {
  // Media Query
  const isMobile = useMediaQuery("(max-width:1024px)");

  // Name
  const iconName = "Morenno";

  // Navbar info

  const [toggle, setToggle] = useState(false);

  const [isShown, setIsShown] = useState(false);

  const [distance, setDistance] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    position >= distance ? setIsShown(true) : setIsShown(false);
  };

  useEffect(() => {
    // Get first section distance to the top of the page
    setDistance(document.getElementById("about").getBoundingClientRect().top);

    // Scrolling-handle
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [distance]);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center justify-center py-3 fixed top-0 z-20 ${
        isShown ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div
        className={`w-full flex justify-between items-center max-w-[1700px] 2xl:px-[70px] transition-all ${
          toggle && !isMobile ? "mr-2" : "mr-0"
        }`}
      >
        <Link
          to="/"
          className="flex items-center gap-2 [clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%)] overflow-hidden"
          onClick={() => {
            if (isShown) {
              window.scrollTo(0, 0);
              setToggle(false);
            }
          }}
        >
          <motion.div
            animate={isShown ? "show" : "hide"}
            variants={{
              show: {
                transition: {
                  delayChildren: 0.07,
                  staggerChildren: 0.07,
                },
              },
            }}
            className={`text-primaryText text-[18px] font-bold flex flex-row ${
              isShown ? "cursor-pointer" : "cursor-default"
            }`}
          >
            {iconName.split("").map((item, index) => (
              <motion.p
                variants={{
                  hide: {
                    y: 50,
                    transition: { duration: 0.2 },
                  },
                  show: {
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                      duration: 0.2,
                    },
                  },
                }}
                key={item + index}
              >
                {item}
              </motion.p>
            ))}
          </motion.div>
        </Link>
        <NavBarMenu isShown={isShown} toggle={toggle} setToggle={setToggle} />
      </div>
    </nav>
  );
};

export default Navbar;
