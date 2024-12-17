"use client";

import { motion } from "framer-motion";
import GreenSvg from "../../../assets/homepage/green_shape.svg";

interface GreenShapeProps {
  className?: string;
  onClick?: () => void;
}

const GreenShape = ({ className = "", onClick }: GreenShapeProps) => (
  <motion.div
    className={`absolute ${className}`}
    onClick={onClick}
    animate={{
      rotate: [0, 5, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <img
      src={GreenSvg}
      alt="Green shape"
      className="w-full h-full object-contain"
    />
  </motion.div>
);

export default GreenShape;
