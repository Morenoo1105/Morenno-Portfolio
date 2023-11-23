import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import InputComponent from "./InputComponent";
import { contact } from "../assets";
import { useSectionInView } from "../hooks/useSectionInView";
import { TbMailForward } from "react-icons/tb";

const LoadingCircle = () => (
  <div className="relative flex flex-1 items-center justify-center w-full h-full">
    <span className="block w-6 h-6 border-4 border-secondary border-opacity-40 rounded-full absolute" />
    <motion.span
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "circInOut" }}
      className="block w-6 h-6 border-4 border-b-secondary border-transparent border-opacity-100 rounded-full absolute t-0 l-0"
    />
  </div>
);

const Contact = () => {
  const { ref } = useSectionInView("contact", 0.75);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [isValid, setIsValid] = useState(false);
  const [errorText, setErrorText] = useState();
  const validRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      // Form Validation
      if (!form.name) {
        setErrorText("Por favor introduce tu nombre.");
        setLoading(false);
        setIsValid(false);
        return false;
      }

      if (!form.email) {
        setErrorText("Por favor introduce tu correo.");
        setLoading(false);
        setIsValid(false);

        return false;
      }

      if (!form.email.match(validRegex)) {
        setErrorText("Por favor introduce un correo válido.");
        setLoading(false);
        setIsValid(false);

        return false;
      }

      if (!form.message) {
        setErrorText("Por favor introduce un mensaje.");
        setLoading(false);
        setIsValid(false);

        return false;
      }

      //Email sending
      emailjs
        .send(
          import.meta.env.VITE_MAIL_SERVICE_ID,
          import.meta.env.VITE_MAIL_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Pablo",
            from_email: form.email,
            to_email: "contact@morenno.net",
            message: form.message,
          },
          import.meta.env.VITE_MAIL_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            setIsValid(true);
            setErrorText(
              "¡Mensaje enviado! Dentro de poco recibirás un mensaje de vuelta."
            );
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            setIsValid(false);
            console.log(error);
            setErrorText(
              "Hmmm... Algo inesperado pasó... ¡Prueba a contactarme por mis redes sociales!"
            );
          }
        );
    }, 3000);
  };

  return (
    <div
      ref={ref}
      className="xl:mt-12 w-full flex overflow-hidden pb-2 font-poiret"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.4)}
        className="bg-tertiary relative w-full flex lg:flex-row flex-col gap-5 p-8 rounded-2xl shadow-underShadow"
      >
        <div className="flex-1">
          <h3 className={`${styles.sectionHeadText}`}>Contacto.</h3>
          <p className="textBalance mt-3 text-primaryText text-[17px] max-w-xl leading-[30px] font-poiret">
            Rellena este formulario o habla conmigo directamente en{" "}
            <a
              className="text-secondary hover:text-secondary/75"
              aria-label="Enviar email a info@morenno.net"
              href="mailto:info@morenno.net"
            >
              <TbMailForward className="inline" /> info@morenno.net
            </a>
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <InputComponent
              title="¿Cuál es tu nombre?"
              type="text"
              name="name"
              value={form.name}
              handleChange={handleChange}
            />
            <InputComponent
              title="¿Cuál es tu correo?"
              type="text"
              name="email"
              value={form.email}
              handleChange={handleChange}
            />
            <InputComponent
              title="¿Qué me quieres decir?"
              name="message"
              value={form.message}
              handleChange={handleChange}
              textarea
            />
            <div className="w-full flex xl:flex-row flex-col justify-between gap-5">
              <motion.div
                variants={{
                  closed: { height: 0, opacity: 1 },
                  open: {
                    height: "auto",
                    opacity: 1,
                    transition: { duration: 0.15 },
                  },
                }}
                initial="closed"
                animate={errorText ? "open" : "closed"}
                className={`w-full overflow-hidden ${
                  isValid
                    ? "bg-secondary text-primary font-bold"
                    : "bg-red-500 font-medium"
                } rounded-lg`}
              >
                <motion.p className="py-4 px-6">{errorText}</motion.p>
              </motion.div>
              <AnimatePresence>
                <motion.button
                  aria-label="Enviar"
                  whileHover={{ scale: loading ? 1 : 1.1 }}
                  whileTap={{ scale: loading ? 1 : 0.9 }}
                  type="submit"
                  disabled={loading ? true : false}
                  className={`bg-primary py-4 outline-none min-w-[110px] min-h-[56px] text-primaryText font-bold rounded-xl`}
                >
                  {loading ? <LoadingCircle /> : "Enviar"}
                </motion.button>
              </AnimatePresence>
            </div>
          </form>
        </div>
        <div className="flex-1 absolute flex justify-center items-center h-28 sm:h-36 lg:h-[725px] lg:right-auto right-0 lg:top-auto top-2 lg:mr-0 mr-10 lg:static">
          <AnimatePresence>
            <motion.img
              whileHover={{
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              src={contact}
              alt="Juguete modelado en 3D volando colgado de un avión de papel."
              className="h-[80%] w-auto max-w-[80%] object-contain"
              loading="lazy"
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
