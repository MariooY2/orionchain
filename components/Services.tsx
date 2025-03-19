"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaHeadset, FaLaptopCode } from "react-icons/fa";
import { LiaFileContractSolid } from "react-icons/lia";
import {
  MdNoEncryptionGmailerrorred,
  MdOutlineDesignServices,
} from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";

const servicesData = [
  {
    title: "Web Development",
    description:
      "Build modern, scalable websites with our web development solutions.",
    icon: <FaLaptopCode size={70} className="text-purple-500" />,
  },
  {
    title: "Web Design",
    description:
      "Get professional web design services that offer user-friendly and visually appealing interfaces tailored for Web3 projects.",
    icon: <MdOutlineDesignServices size={70} className="text-purple-500" />,
  },
  {
    title: "Customer Support",
    description:
      "Our dedicated team offers customer support to assist you with any issues and ensure smooth operation of your solutions.",
    icon: <FaHeadset size={70} className="text-purple-500" />,
  },
  {
    title: "Decentralized Solutions",
    description:
      "Secure, trustless, and decentralized solutions for businesses and developers to integrate blockchain technology.",
    icon: <MdNoEncryptionGmailerrorred size={70} className="text-purple-500" />,
  },
  {
    title: "Smart Contracts",
    description:
      "Automate business processes with our reliable, tamper-proof smart contract solutions.",
    icon: <LiaFileContractSolid size={70} className="text-purple-500" />,
  },
  {
    title: "Blockchain Consulting",
    description:
      "Leverage our expertise to navigate the complex world of blockchain and ensure successful implementation.",
    icon: <SiBlockchaindotcom size={70} className="text-purple-500" />,
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      id="services"
      className="container mx-auto py-20 px-8 overflow-hidden"
    >
      <motion.h2
        variants={itemVariants}
        className="text-5xl font-bold text-center mb-4 text-white"
      >
        What We Offer
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-center text-white/80 max-w-2xl mx-auto mb-16 text-lg"
      >
        Comprehensive solutions to help your business thrive in the digital
        landscape
      </motion.p>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="h-full"
          >
            <Card className="h-full border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-6 mt-4 rounded-full bg-purple-50 p-4 group-hover:bg-purple-100 transition-colors duration-300">
                  {service.icon}
                </div>

                <h4 className="text-xl font-bold mb-3 text-purple-700 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h4>

                <p className="text-purple-600/80">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
