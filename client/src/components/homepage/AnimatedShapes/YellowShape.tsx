"use client";

import { motion } from "framer-motion";
import YellowSvg from "../../../assets/homepage/yellow_shape.svg";

const YellowShape = ({ className = "" }) => (
  <motion.div
    className={`${className}`}
    animate={{ y: [-5, 5, -5] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  >
    <img
      src={YellowSvg}
      alt="Yellow shape"
      style={{
        width: "30%",
        height: "20%",
        objectFit: "contain",
        marginLeft: "50%",
        marginTop: "5%",
      }}
    />
  </motion.div>
);

export default YellowShape;
