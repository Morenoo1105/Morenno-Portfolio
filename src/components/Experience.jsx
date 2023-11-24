import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { inViewAnim, inViewInitial } from "../utils/motion";

import { cv } from "../assets";

import StackIcon from "./iconComponents/stackIcon";
import { useSectionInView } from "../hooks/useSectionInView";
import { useTheme } from "../context/theme-context";

const ExperienceCard = ({ experience }) => {
  const { theme } = useTheme();

  return (
    <VerticalTimelineElement
      iconOnClick={() => {
        window.open(experience.url, "_blank", "noopener noreferrer");
      }}
      contentStyle={{
        borderRadius: "1rem",
        background: theme == "dark" ? "#3a3023" : "#FFC86B",
        color: theme == "dark" ? "#f9f1df" : "#3a3023",
      }}
      dateClassName={"font-comfortaa !font-black dark:!font-thin"}
      contentArrowStyle={{
        borderRight:
          theme == "dark" ? "7px solid #3a3023" : "7px solid #FFC86B",
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        cursor: "pointer",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full hover:scale-125 transition-all">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
            loading="lazy"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-tertiary dark:text-primaryText font-comfortaa font-bold text-[20px]">
          {experience.title}
        </h3>
        <p
          className="text-tertiary/50 dark:text-secondary font-comfortaa font-black !text-[14px]"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2 marker:text-tertiary/50 dark:marker:text-secondary">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-tertiary dark:text-primaryText font-comfortaa font-semibold dark:font-normal text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      <div className="flex justify-around items-center w-full mt-5 gap-4 flex-wrap">
        {experience.skills.map((skill, index) => (
          <div key={`experience-skill-${index}`}>
            {skill.icon == "mail" ? (
              <motion.a
                aria-label={`Enviar email a ${skill.name}`}
                href={`mailto:${skill.name}`}
                className="group bg-primaryText dark:bg-secondary text-tertiary dark:text-primary font-black px-4 py-2 flex items-center gap-2 rounded-full outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <StackIcon icon={skill.icon} />
                <span>{skill.name}</span>
              </motion.a>
            ) : skill.icon == "cv" ? (
              <motion.a
                aria-label="Descargar Currículum Vitae"
                href={cv}
                download="CV-Pablo Moreno Martinez"
                target="_blank"
                className="group bg-primaryText dark:bg-secondary text-tertiary dark:text-primary font-black px-4 py-2 flex items-center gap-2 rounded-full outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <StackIcon icon={skill.icon} />
                <span>{skill.name}</span>
              </motion.a>
            ) : (
              <div
                className={`transition-none flex items-center px-2 py-0 gap-2 rounded-full font-black dark:font-normal text-tertiary dark:text-primaryText`}
                style={{
                  background:
                    theme == "light" && skill.color == "#08081B80"
                      ? "#afafaf80"
                      : skill.color,
                }}
              >
                <div className="transition-none">
                  <StackIcon icon={skill.icon} className="transition-none" />
                </div>
                <div>{skill.name}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { ref } = useSectionInView("experience", 0.2);

  return (
    <>
      <motion.div whileInView={inViewAnim} initial={inViewInitial}>
        <h2 className={`${styles.sectionHeadText}`}>Experiencia.</h2>
      </motion.div>

      <div ref={ref} className="mt-20 flex flex-col font-poiret">
        <VerticalTimeline lineColor={"#FFC86B"}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
