import { motion } from "framer-motion";

const GreenShape = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime-500 px-12 py-8 rounded-3xl"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-black whitespace-nowrap">
        Concept Brainstone Art
      </h1>
    </motion.div>
  );
};

export default GreenShape;
