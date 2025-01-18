"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/Explore1.svg", "/Explore2.svg", "/Explore3.svg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="Hero">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="home"
        className=" text-white sm:mt-14 mt-24 h-screen max-h-[65rem] flex justify-center items-center"
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
                  className="text-center md:text-6xl xs:text-4xl text-2xl font-bold mb-4 text-custom"
                >
                  OrionChain Is the Future of
                  <span className="block text-center">Development</span>
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-xl mb-6 text-black"
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
                    className="bg-custom hover:bg-pink-950 text-white py-5 px-7 rounded-full transition duration-300"
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
            className="md:w-1/2 w-full mt-8 md:mt-0 justify-center flex"
          >
            <div className="relative w-full h-96 image-container">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={images[currentImage]}
                  alt="OrionChain Hero Image"
                  fill
                  className="object-fit moving-image"
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
