import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TbMail, TbMailFilled } from "react-icons/tb";
import {
  RiUser3Line,
  RiUser3Fill,
  RiMessage3Line,
  RiMessage3Fill,
} from "react-icons/ri";

const InputComponent = ({
  title,
  type,
  name,
  placeholder,
  value,
  textarea,
  handleChange,
}) => {
  const [focused, setFocused] = useState(false);
  const [titleT, setTitleT] = useState(title);

  const newText = title.substring(9, title.length - 1);
  const validRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  useEffect(() => {
    (focused && !value && !textarea) || (value && !textarea)
      ? setTitleT(newText[0].toUpperCase() + newText.slice(1))
      : (focused && !value && textarea) || (value && textarea)
      ? setTitleT("Tu mensaje")
      : setTitleT(title);
  }, [focused]);

  return (
    <label className="flex flex-col relative my-4">
      <motion.span
        variants={{
          place: { y: 0, opacity: 1 },
          moved: {
            y: -55,
            opacity: [1, 0.5, 1],
            transition: { duration: 0.15 },
          },
        }}
        animate={focused ? "moved" : "place"}
        className={`absolute flex flex-row items-center gap-3 py-4 px-6 transition-[font-size] ${
          (focused && value) || focused
            ? "text-[22px] text-secondary font-bold cursor-default"
            : "text-primaryText font-medium cursor-text"
        }`}
      >
        <motion.span
          variants={{
            empty: { opacity: [1, 0.5], transition: { duration: 0.5 } },
            fill: {
              opacity: [0.5, 1],
              transition: { duration: 0.5 },
            },
          }}
          animate={value ? "fill" : "empty"}
          className="h-full"
        >
          {name === "name" && !value ? (
            <RiUser3Line />
          ) : name === "name" && value ? (
            <RiUser3Fill />
          ) : name === "email" && !value ? (
            <TbMail />
          ) : name === "email" && value ? (
            <TbMailFilled
              color={
                name === "email" && !value.match(validRegex)
                  ? "#EF4444"
                  : "inherit"
              }
            />
          ) : name === "message" && !value ? (
            <RiMessage3Line />
          ) : (
            <RiMessage3Fill />
          )}
        </motion.span>
        {titleT}
      </motion.span>
      {!textarea ? (
        <input
          onFocus={() => setFocused(true)}
          onBlur={() => !value && setFocused(false)}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`bg-primary py-4 px-6 text-primaryText rounded-lg outline-none border-none font-medium shadow-underShadowHide
          focus:shadow-underShadow
          ${
            name === "email" &&
            value &&
            !value.match(validRegex) &&
            "focus:shadow-red-500"
          }
          transition-all`}
        />
      ) : (
        <textarea
          onFocus={() => setFocused(true)}
          onBlur={() => !value && setFocused(false)}
          rows={7}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="bg-primary py-4 px-6  text-primaryText rounded-lg outline-none border-none font-medium shadow-underShadowHide focus:shadow-underShadow transition-all"
        />
      )}
    </label>
  );
};

export default InputComponent;
