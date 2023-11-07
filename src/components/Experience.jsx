import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { inView, inViewInitial } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    iconOnClick={() => {
      window.open(experience.url, "_blank", "noopener noreferrer");
    }}
    contentStyle={{
      borderRadius: "1rem",
      background: "#3a3023",
      color: "#f9f1df",
    }}
    contentArrowStyle={{ borderRight: "7px solid #3a3023" }}
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
      <h3 className="text-primaryText font-g text-[24px] font-bold">
        {experience.title}
      </h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-primaryText text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
    <div className="flex justify-around items-center w-full mt-5 gap-4 flex-wrap">
      {experience.skills.map((skill, index) => (
        <div
          key={`experience-skill-${index}`}
          className={`flex items-center px-2 py-0 gap-2 rounded-[4px] text-primaryText`}
          style={{ background: skill.color }}
        >
          <div>{skill.icon}</div>
          <div>{skill.name}</div>
        </div>
      ))}
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div whileInView={inView} initial={inViewInitial}>
        <p className={`${styles.sectionSubText}`}>Mi historial</p>
        <h2 className={`${styles.sectionHeadText}`}>Experiencia.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
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
