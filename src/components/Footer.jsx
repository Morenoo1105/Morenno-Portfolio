import { bye } from "../assets/index";

const Footer = () => {
  return (
    <div className="w-full max-w-[1700px] mx-auto flex flex-row justify-center items-center gap-10 sm:px-16 px-6 sm:py-16 py-10 sm:pb-40 pb-40 relative">
      <div className="flex-1 bg-secondary h-1 rounded-full transition-all" />
      <p className="textBalance flex-[4] sm:flex-[2] lg:flex-[0.6] text-center text-secondary uppercase font-bo text-[20px] transition-all">
        ¡Gracias por llegar hasta aquí!
      </p>
      <div className="flex-1 bg-secondary h-1 rounded-full transition-all" />
      <img
        src={bye}
        alt="Juguete modelado en 3D moviendo la mano diciendo adiós."
        className="absolute h-32 bottom-0 object-contain"
        loading="lazy"
      />
    </div>
  );
};

export default Footer;
