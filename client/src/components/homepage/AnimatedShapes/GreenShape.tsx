"use client";

import { motion } from "framer-motion";
import GreenSvg from "../../../assets/homepage/green_shape.svg";

const GreenShape = ({ className = "" }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={
      {
        // rotate: [0, 2, 0],
        // x: [-10, 10, -10],
      }
    }
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <img
      src={GreenSvg}
      alt="Green shape"
      style={{ width: "60%", height: "40%", objectFit: "contain" }}
    />
  </motion.div>
);

export default GreenShape;
