import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useState } from "react";
import { me, meToy, meToyVideo } from "../assets";
import { GiClick } from "react-icons/gi";
import { fadeIn } from "../utils/motion";

const UserCard = () => {
  const [zoomed, setZoomed] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleFlip = () => {
    if (!animating) {
      setFlipped(!flipped);
      setAnimating(true);
    }
  };

  return (
    <Tilt
      onMouseEnter={() => {
        setZoomed(true);
      }}
      onMouseLeave={() => {
        setZoomed(false);
      }}
      options={{
        max: 10,
        scale: 1,
        speed: 450,
        reverse: true,
        transition: true,
      }}
      className={`w-auto h-auto`}
    >
      <div
        onClick={handleFlip}
        className={`flip-card ${
          zoomed ? "sm:scale-105" : "scale-100"
        } aspect-[2/3] w-full h-full max-h-[100vh] lg:max-h-[704px] rounded-[20px] opacity transition-transform cursor-pointer`}
      >
        <motion.div
          className="flip-card-inner w-full h-full relative"
          initial={false}
          animate={{ rotateY: flipped ? 180 : 360 }}
          transition={{ duration: 0.6 }}
          onAnimationComplete={() => setAnimating(false)}
        >
          <motion.div
            variants={fadeIn("", "", 5, 1)}
            animate={{
              scale: [1.5, 0.75, 1.5],
            }}
            transition={{
              duration: 2,
              repeat: "Infinity",
              ease: [1, 0, 0, 1],
            }}
            className="flip-card-front absolute m-6 z-[1] transition-transform"
          >
            <GiClick className="w-7 h-7 fill-secondary" />
          </motion.div>
          <img
            src={me}
            aria-label="Fotografía de mí mismo en un espejo, sosteniendo un teléfono como un selfie."
            alt="Fotografía de mí mismo en un espejo, sosteniendo un teléfono como un selfie."
            className="flip-card-front absolute w-full h-full object-cover rounded-[20px] shadow-underShadow"
            loading="lazy"
          />
          <video
            aria-label="Render de un juguete 3D en un espejo, sosteniendo un teléfono como un selfie, replicando la fotografía en el otro lado de la carta."
            poster={meToy}
            allowFullScreen={false}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            alt="Render de un juguete 3D en un espejo, sosteniendo un teléfono como un selfie, replicando la fotografía en el otro lado de la carta."
            className="flip-card-back w-full h-full object-cover rounded-[20px] shadow-underShadow"
          >
            <source src={meToyVideo} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </Tilt>
  );
};

export default UserCard;
