"use client";

import { motion } from "framer-motion";
import GreenSvg from "../../../assets/homepage/green_shape.svg";
import { ReactNode } from "react";

interface GreenShapeProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const GreenShape: React.FC<GreenShapeProps> = ({
  className = "",
  children,
  onClick,
}) => (
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
      style={{ width: "50%", height: "25%", objectFit: "contain" }}
    />
    {children}
  </motion.div>
);

export default GreenShape;
