"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HeroSection = () => {
  return (
    <div className="Hero">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="home"
        className="text-purple-500 sm:mt-14 mt-24 h-screen max-h-[75rem] flex justify-center items-center overflow-hidden"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center max-h-screen">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="flex justify-center items-center">
              <div className="w-4/5">
                <motion.h1
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-center md:text-6xl xs:text-4xl text-2xl font-bold mb-4 text-purple-500"
                >
                  OrionChain Is the Future of
                  <span className="block text-center">Development</span>
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-xl mb-6 text-white"
                >
                  Our mission is to empower businesses and developers by
                  providing innovative website solutions and decentralized
                  applications (DApps) that leverage cutting-edge blockchain
                  technology.
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex items-center justify-center"
                >
                  <Link
                    href="#contact"
                    className="bg-purple-500 hover:bg-purple-600 text-white py-5 px-7 rounded-full transition duration-300 shadow-lg"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-3/5 w-full mt-8 md:mt-0 justify-center flex"
          >
            <div className="relative w-full h-full container">
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1.25, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 2 }}
                className="transform scale-125"
              >
                <DotLottieReact
                  src="https://assets-v2.lottiefiles.com/a/f5c769b2-117a-11ee-a103-13d1b13a7ac2/nzsMJcNS59.lottie"
                  loop
                  autoplay
                  color="custom"
                  className="w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
