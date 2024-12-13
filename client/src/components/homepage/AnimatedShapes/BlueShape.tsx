import { motion } from "framer-motion";
import BlueSvg from "../../../assets/homepage/blue_shape.svg";

const BlueShape = ({ className = "" }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      x: [0, 10, 0],
      y: [0, -10, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <img
      src={BlueSvg}
      alt="Blue shape"
      style={{ width: "40%", height: "40%", objectFit: "contain" }}
    />
  </motion.div>
);

export default BlueShape;
