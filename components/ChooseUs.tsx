"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ReasonsToChooseUs = () => {
  const reasons = [
    {
      icon: "https://d25c7wiv62hyjr.cloudfront.net/wp-content/uploads/2022/06/Custodian.svg",
      title: "Custodian of Your Project(s)",
      description:
        "We become the custodian of your project(s) or idea(s) and take them to fruition considering them as our own.",
    },
    {
      icon: "https://d25c7wiv62hyjr.cloudfront.net/wp-content/uploads/2022/06/Time-and-quality.svg",
      title: "Time and Quality",
      description:
        "Time is irreversible and quality is uncompromisable. And that's why we make sure you get your product delivered on time with quality.",
    },
    {
      icon: "https://d25c7wiv62hyjr.cloudfront.net/wp-content/uploads/2022/06/End-to-end.svg",
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
      className="container mx-auto px-6 py-12"
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
            <h4 className="sm:text-3xl text-2xl font-bold flex justify-end items-end">
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-blue-600 sm:text-8xl text-6xl mr-2"
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
              className="flex items-start"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="w-12 h-12 mr-4"
              />
              <div className="space-y-2">
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-black w-10/12">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ReasonsToChooseUs;
