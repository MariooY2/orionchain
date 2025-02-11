"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHandHoldingHeart, FaClock, FaCogs } from "react-icons/fa"; // Import icons

const ReasonsToChooseUs = () => {
  const reasons = [
    {
      icon: FaHandHoldingHeart, // Use React Icon component
      title: "Custodian of Your Project(s)",
      description:
        "We become the custodian of your project(s) or idea(s) and take them to fruition considering them as our own.",
    },
    {
      icon: FaClock, // Use React Icon component
      title: "Time and Quality",
      description:
        "Time is irreversible and quality is uncompromisable. And that's why we make sure you get your product delivered on time with quality.",
    },
    {
      icon: FaCogs, // Use React Icon component
      title: "End to End Service",
      description:
        "We are an end-to-end service provider. Our services range from design to development, testing, deployment, and marketing.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-6 py-12 overflow-hidden cursor-pointer"
    >
      <div className="flex flex-col md:flex-row w-full justify-around items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex flex-col items-center mb-8 md:mb-0"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <h4 className="sm:text-3xl text-2xl font-bold flex justify-end items-end text-white">
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-white sm:text-8xl text-6xl mr-2"
              >
                3
              </motion.span>
              Reasons to Choose Us
            </h4>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:flex justify-center items-center hidden"
          >
            <Image
              src="https://d25c7wiv62hyjr.cloudfront.net/wp-content/uploads/2022/06/why-choose-us.png"
              alt="Why Choose Us"
              width={600}
              height={400}
              className="max-w-full h-96"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-4/5 md:w-1/2 flex flex-col gap-12"
        >
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-start p-6 rounded-lg shadow-2xl bg-gray-50"
            >
              <div className="text-purple-500 w-12 h-12 mr-4 flex items-center justify-center">
                <item.icon className="w-12 h-8"  /> {/* Render the React Icon */}
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-purple-500">
                  {item.title}
                </h4>
                <p className="text-purple-500 w-10/12">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ReasonsToChooseUs;