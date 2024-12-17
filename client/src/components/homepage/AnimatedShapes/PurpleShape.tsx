"use client";

import { motion } from "framer-motion";
import PurpleSvg from "../../../assets/homepage/purple_shape.svg";

const PurpleShape = ({ className = "" }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      rotate: [0, 2, 0],
      y: [-10, 10, -10],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <img
      src={PurpleSvg}
      alt="Purple shape"
      style={{ width: "80%", height: "60%", objectFit: "contain" }}
    />
  </motion.div>
);

export default PurpleShape;
