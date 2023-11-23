import { bye } from "../assets/index";

const Footer = () => {
  return (
    <footer className="w-full max-w-[94rem] mx-auto flex flex-row justify-center items-center gap-10 sm:px-16 px-6 sm:py-16 py-10 sm:pb-40 pb-40 relative font-comfortaa">
      <div className="flex-1 bg-secondary h-1 rounded-full transition-all" />
      <p className="textBalance flex-[4] sm:flex-[2] lg:flex-[0.6] text-center text-secondary uppercase font-bo text-[16px] transition-all">
        ¡Gracias por llegar hasta aquí!
      </p>
      <div className="flex-1 bg-secondary h-1 rounded-full transition-all" />
      <img
        src={bye}
        alt="Juguete modelado en 3D moviendo la mano diciendo adiós."
        className="absolute h-32 bottom-0 object-contain"
        loading="lazy"
      />
    </footer>
  );
};

export default Footer;
