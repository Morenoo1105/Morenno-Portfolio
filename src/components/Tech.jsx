import { useState } from "react";
import { stack } from "../constants";
import { SectionWrapper } from "../hoc";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, inView, inViewInitial } from "../utils/motion";
import { styles } from "../style";
import { Tilt } from "react-tilt";
import StackIcon from "./iconComponents/stackIcon";

const Tech = () => {
  const [selectedTab, setSelectedTab] = useState(stack[0]);

  return (
    <>
      <motion.div whileInView={inView} initial={inViewInitial}>
        <p className={`${styles.sectionSubText}`}>Mi Stack</p>
        <h2 className={`${styles.sectionHeadText}`}>Conocimientos.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-primaryText text-[17px] max-w-3xl leading-[30px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {stack.map((item) => (
                <div key={item.label}>
                  {item === selectedTab ? (
                    <p className="textBalance w-full max-w-xl">{item.text}</p>
                  ) : null}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="w-full h-fit rounded-2xl overflow-hidden shadow-underShadow flex flex-col bg-tertiary mt-14">
        <ul className="flex w-full m-0 p-1 font-medium">
          {stack.map((item) => (
            <li
              className={`${
                item === selectedTab ? "bg-tertiary" : "bg-primary-50"
              } rounded-2xl rounded-b-none w-full px-2 py-3 relative cursor-pointer flex justify-center items-center flex-1 capitalize text-secondary text-[16px] md:text-[20px] lg:text-[26px] transition-colors`}
              key={item.label}
              onClick={() => setSelectedTab(item)}
            >
              {item.label}
              {item === selectedTab ? (
                <motion.div
                  className="absolute -bottom-[1px] left-0 right-0 h-[1px] bg-secondary w-full"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full flex flex-wrap flex-row justify-around md:justify-evenly items-start gap-6 md:gap-20 xl:gap-6 p-6 md:p-12"
            >
              {selectedTab
                ? selectedTab.logos.map((logo) => (
                    <Tilt
                      key={logo.name}
                      className={`${
                        logo.name == "Vite" && "gShadow"
                      } flip-card-inner w-32 h-24 md:w-36 md:h-48 xl:w-40 xl:h-52 flex flex-row md:flex-col rounded-2xl justify-start items-center p-3 gap-1 md:gap-0`}
                      style={{
                        background: logo.color,
                        boxShadow: "0 0 15px " + logo.color.slice(0, 7),
                      }}
                      options={{
                        reverse: true,
                      }}
                    >
                      <div className="w-7 h-7 md:w-20 md:h-20 xl:w-24 xl:h-28 zTransform flex-1 flex justify-center items-center">
                        <StackIcon
                          icon={logo.icon}
                          className={"w-full h-full"}
                        />
                      </div>
                      <div className="zTransform flex flex-[1.5] md:flex-1 p-0 md:p-3 justify-center items-center">
                        <h3 className="text-center text-xs md:text-lg">
                          {logo.name}
                        </h3>
                      </div>
                    </Tilt>
                  ))
                : "Whoops!"}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
