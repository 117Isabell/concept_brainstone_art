import React from "react";
import { FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

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
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>

        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
