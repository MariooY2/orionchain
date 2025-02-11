"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaHeadset } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";
import { MdNoEncryptionGmailerrorred } from "react-icons/md";
import { LiaFileContractSolid } from "react-icons/lia";

const servicesData = [
  {
    title: "Web Development",
    description:
      "Build modern, scalable websites with our web development solutions.",
    icon: <FaLaptopCode size={100} />,
  },
  {
    title: "Web Design",
    description:
      "Get professional web design services that offer user-friendly and visually appealing interfaces tailored for Web3 projects.",
    icon: <MdOutlineDesignServices size={100} />,
  },
  {
    title: "Customer Support",
    description:
      "Our dedicated team offers customer support to assist you with any issues and ensure smooth operation of your solutions.",
    icon: <FaHeadset size={100} />,
  },
  {
    title: "Decentralized Solutions",
    description:
      "Secure, trustless, and decentralized solutions for businesses and developers to integrate blockchain technology.",
    icon: <MdNoEncryptionGmailerrorred size={100} />,
  },
  {
    title: "Smart Contracts",
    description:
      "Automate business processes with our reliable, tamper-proof smart contract solutions.",
    icon: <LiaFileContractSolid size={100} />,
  },
  {
    title: "Blockchain Consulting",
    description:
      "Leverage our expertise to navigate the complex world of blockchain and ensure successful implementation.",
    icon: <SiBlockchaindotcom size={100} />,
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="services"
      className="container mx-auto py-12 px-8 overflow-hidden cursor-pointer"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-12"
      >
        What We Offer
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="flex flex-col items-center text-center p-6 shadow-2xl rounded-lg bg-gray-50 text-purple-500"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="mb-4 "
            >
              {service.icon}
            </motion.div>

            <h4 className="text-xl font-bold mb-2">{service.title}</h4>

            <p className="text-purple-500">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
