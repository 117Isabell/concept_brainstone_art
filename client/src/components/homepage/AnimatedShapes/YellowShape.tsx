"use client";

import { motion } from "framer-motion";

const YellowShape = () => (
  <motion.div
    className="absolute top-10 right-10 w-64 h-40 bg-yellow-400"
    animate={{ y: [-5, 5, -5], rotate: [-2, 2, -2] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
  />
);

export default YellowShape;
