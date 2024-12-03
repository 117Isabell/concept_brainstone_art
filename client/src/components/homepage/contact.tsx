import React from "react";
import { FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const socialLinks = [
    {
      icon: <FaTwitter size={24} />,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    {
      icon: <FaEnvelope size={24} />,
      href: "mailto:your.email@example.com",
      label: "Email",
    },
    {
      icon: <FaInstagram size={24} />,
      href: "https://instagram.com/yourusername",
      label: "Instagram",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden" id="contact">
      <motion.div
        className="absolute top-0 left-0 w-1/3 h-1/2 bg-blue-200 opacity-50"
        animate={{
          x: [-10, 10, -10],
          rotate: [0, 2, 0],
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

      <motion.div
        className="absolute bottom-0 right-0 w-1/4 h-1/3 bg-purple-200 opacity-50"
        animate={{
          y: [-5, 5, -5],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>

        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
