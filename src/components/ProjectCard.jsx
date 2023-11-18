import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";
import {
  TbAccessPoint,
  TbBrandAppstore,
  TbBrandGithub,
  TbBrandGooglePlay,
} from "react-icons/tb";
import { useState } from "react";
import Tooltip from "./Tooltip";
import StackIcon from "./iconComponents/stackIcon";

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

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.1, 0.75)}>
      <Tilt
        options={{
          max: 10,
          scale: 1,
          speed: 450,
          reverse: true,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-underShadow"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />

          <div className="absolute inset-0 flex justify-end m-3">
            {first ? (
              <div className="flex flex-row gap-2">
                <div
                  onClick={() => {
                    window.open(
                      source_code_link,
                      "_blank",
                      "noopener noreferrer"
                    );
                  }}
                  className="play-store-gradient hover:scale-[1.20] transition-all w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <TbBrandGooglePlay className="w-3/5 h-3/5 stroke-primaryText object-contain ml-1" />
                </div>
                <div
                  onClick={() => {
                    window.open(live_link, "_blank", "noopener noreferrer");
                  }}
                  className="blue-gradient hover:scale-[1.20] transition-all w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <TbBrandAppstore className="w-3/5 h-3/5 stroke-primaryText object-contain" />
                </div>
              </div>
            ) : (
              <div className="flex flex-row gap-2">
                <div
                  onClick={() => {
                    window.open(
                      source_code_link,
                      "_blank",
                      "noopener noreferrer"
                    );
                  }}
                  className="black-gradient hover:scale-[1.20] transition-all w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <TbBrandGithub className="w-3/5 h-3/5 stroke-primaryText object-contain" />
                </div>
                <div
                  onClick={() => {
                    window.open(live_link, "_blank", "noopener noreferrer");
                  }}
                  className="pink-gradient hover:scale-[1.20] transition-all w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <TbAccessPoint className="w-3/5 h-3/5 stroke-primaryText object-contain" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-secondary font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-primaryText text-[14px]">{description}</p>
        </div>

        <div
          className={`w-full mt-4 flex flex-row flex-wrap gap-1 items-center ${
            skillCount > 6 ? "justify-evenly" : "justify-end"
          }`}
        >
          {tags.map((tag) => {
            const [hovered, setHovered] = useState(false);
            return (
              <div
                key={"tooltip " + tag.name}
                className="flex flex-row justify-center items-center"
              >
                <Tooltip visible={hovered} message={tag.name} />
                <div
                  key={tag.name}
                  className={`text-[20px] text-primaryText p-1 rounded-md cursor-help z-[3]`}
                  style={{ backgroundColor: tag.color }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <StackIcon icon={tag.icon} />
                </div>
              </div>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
