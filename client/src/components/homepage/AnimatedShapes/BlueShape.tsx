import { motion } from "framer-motion";

const BlueShape = (): JSX.Element => {
  return (
    <motion.div
      className="absolute bottom-40 right-40 w-24 h-24 bg-sky-400"
      animate={{
        x: [0, 10, 0],
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default BlueShape;
