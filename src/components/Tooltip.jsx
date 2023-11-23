import { motion, AnimatePresence } from "framer-motion";

const Tooltip = ({ visible, message }) => (
  <div className="absolute flex justify-center items-center overflow-visible">
    <AnimatePresence>
      {visible && (
        <motion.div
          className="relative bg-primary px-3 py-1 rounded-lg flex flex-col items-center"
          variants={{
            hidden: { y: 0, opacity: 0, zIndex: 0 },
            visible: {
              y: -37,
              opacity: 1,
              transition: { duration: 0.15, ease: "easeOut" },
              transitionEnd: {
                zIndex: 10,
              },
            },
            exit: {
              y: 0,
              opacity: 0,
              zIndex: 0,
              transition: { duration: 0.15, delay: 0.2, ease: "easeOut" },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="absolute bottom-[-3px] transform rotate-45 w-2 h-2 bg-primary" />
          <p className="text-primaryText">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default Tooltip;
