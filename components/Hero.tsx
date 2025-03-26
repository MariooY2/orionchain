"use client";
import { Button } from "@/components/ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="Hero">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="home"
        className="text-purple-500 sm:pt-24 pt-28 h-screen flex justify-center items-center overflow-hidden max-h-[65rem]"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full md:pr-8"
          >
            <div className="max-w-2xl">
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center md:text-left md:text-6xl text-4xl font-bold mb-6 text-purple-500 leading-tight"
              >
                OrionChain Is the Future of
                <span className="bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent block mt-2">
                  Development
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-lg md:text-xl mb-8 text-white md:text-left text-center"
              >
                Our mission is to empower businesses and developers by providing
                innovative website solutions and decentralized applications
                (DApps) that leverage cutting-edge blockchain technology.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex items-center justify-center md:justify-start gap-4"
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 rounded-full text-base px-6 py-6"
                >
                  <Link href="#contact">
                    Contact Us
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full text-base border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <Link href="#services">Our Services</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-3/5 w-full mt-12 md:mt-0 justify-center flex"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1 }}
              className="relative w-full transform overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-600/20 z-10 rounded-2xl" />
              <DotLottieReact
                src="https://assets-v2.lottiefiles.com/a/f5c769b2-117a-11ee-a103-13d1b13a7ac2/nzsMJcNS59.lottie"
                loop
                autoplay
                className="w-full z-0"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
