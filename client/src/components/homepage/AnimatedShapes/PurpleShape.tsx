"use client";

import { motion } from "framer-motion";

const PurpleShape = () => (
  <motion.div
    className="absolute top-0 left-0 w-1/2 h-3/4 bg-purple-500 origin-top-left"
    animate={{
      rotate: [0, 2, 0],
      x: [-10, 10, -10],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{
      clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
    }}
  />
);

export default PurpleShape;
