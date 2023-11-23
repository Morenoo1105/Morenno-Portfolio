import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { TbAccessPoint, TbBrandGithubFilled } from "react-icons/tb";
import { BsGooglePlay } from "react-icons/bs";
import { IoLogoAppleAppstore } from "react-icons/io5";

import { useState } from "react";
import Tooltip from "./Tooltip";
import StackIcon from "./iconComponents/stackIcon";
import { useTheme } from "../context/theme-context";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  first,
}) => {
  const skillCount = tags.length;

  const { theme } = useTheme();

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="group md:odd:self-end"
    >
      <div className="bg-secondary dark:bg-tertiary shadow-underShadowHide dark:shadow-underShadow max-w-[54rem] rounded-2xl overflow-hidden md:pr-8 relative md:h-[20rem] transition md:group-even:pl-8 ">
        <div className="w-full block md:hidden h-[230px] p-3 overflow-hidden">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 md:max-w-[50%] flex flex-col h-full md:group-even:ml-[16rem]  md:group-odd:mr-[20rem] md:group-even:float-right">
          <div className="h-full">
            <h3 className="text-2xl font-semibold text-tertiary dark:text-secondary font-comfortaa md:group-even:text-right">
              {name}
            </h3>
            <p className="md:textBalance font-comfortaa font-semibold dark:font-normal text-sm mt-2 leading-relaxed text-tertiary/75 dark:text-primaryText md:group-even:text-right">
              {description}
            </p>
          </div>

          <div className="w-full my-3 font-comfortaa">
            {first ? (
              <div className="w-full flex flex-row justify-evenly md:justify-start gap-3">
                <motion.a
                  aria-label="Descargar la aplicación MSInvs en Play Store"
                  href={source_code_link}
                  target="_blank"
                  rel="external noreferrer noopener"
                  className="bg-primaryText dark:bg-secondary text-[14px] text-tertiary dark:text-primary font-black px-4 py-2 flex justify-start gap-2 rounded-full outline-none"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <BsGooglePlay className="text-[18px]  h-full" />
                  <span>Play Store</span>
                </motion.a>
                <motion.a
                  aria-label="Descargar la aplicación MSInvs en App Store"
                  href={live_link}
                  target="_blank"
                  rel="external noreferrer noopener"
                  className="bg-primaryText dark:bg-secondary text-[14px] text-tertiary dark:text-primary font-medium px-4 py-2 flex justify-start gap-2 rounded-full outline-none"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoLogoAppleAppstore className="text-[20px] h-full" />
                  <span>App Store</span>
                </motion.a>
              </div>
            ) : (
              <div className="w-full flex flex-row justify-evenly md:justify-start md:group-even:justify-end gap-3">
                <motion.a
                  aria-label="Visitar el repositorio de GitHub"
                  href={source_code_link}
                  target="_blank"
                  rel="external noreferrer noopener"
                  className="bg-primaryText dark:bg-secondary text-[14px] text-tertiary dark:text-primary font-black px-4 py-2 flex justify-start gap-2 rounded-full outline-none"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TbBrandGithubFilled className="text-[20px]" />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  aria-label="Visitar la página web demostrativa"
                  href={live_link}
                  target="_blank"
                  rel="external noreferrer noopener"
                  className="bg-primaryText dark:bg-secondary text-[14px] text-tertiary dark:text-primary font-black px-4 py-2 flex justify-start gap-2 rounded-full outline-none"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TbAccessPoint className="text-[20px]" />
                  <span>Demo</span>
                </motion.a>
              </div>
            )}
          </div>

          <ul
            className={`w-full self-end flex flex-row flex-wrap gap-1 items-center ${
              skillCount > 6
                ? "justify-evenly"
                : "justify-end md:justify-start md:group-even:justify-end"
            }`}
          >
            {tags.map((tag) => {
              const [hovered, setHovered] = useState(false);
              return (
                <li
                  key={"tooltip " + tag.name}
                  className="flex flex-row justify-center items-center"
                >
                  <Tooltip visible={hovered} message={tag.name} />
                  <div
                    key={tag.name}
                    className={`text-[20px] text-tertiary dark:text-primaryText p-1 rounded-md cursor-help z-[3]`}
                    style={{
                      background:
                        theme == "light" && tag.color == "#08081B80"
                          ? "#afafaf80"
                          : tag.color,
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <StackIcon icon={tag.icon} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="absolute hidden md:block top-8 -right-36 md:-right-28 w-[28.25rem] h-full rounded-t-lg shadow-2xl transition  
        
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-hover:drop-shadow-[0px_0px_35px_#3a302371]
        dark:group-hover:drop-shadow-[0px_0px_35px_#FFC86BBF]

        
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-36 md:group-even:-left-28 "
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
