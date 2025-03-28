"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
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
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Web Design",
    description:
      "Get professional web design services that offer user-friendly and visually appealing interfaces tailored for Web3 projects.",
    icon: <MdOutlineDesignServices size={70} className="text-purple-500" />,
    color: "from-pink-500 to-purple-600",
  },
  {
    title: "Customer Support",
    description:
      "Our dedicated team offers customer support to assist you with any issues and ensure smooth operation of your solutions.",
    icon: <FaHeadset size={70} className="text-purple-500" />,
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Decentralized Solutions",
    description:
      "Secure, trustless, and decentralized solutions for businesses and developers to integrate blockchain technology.",
    icon: <MdNoEncryptionGmailerrorred size={70} className="text-purple-500" />,
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Smart Contracts",
    description:
      "Automate business processes with our reliable, tamper-proof smart contract solutions.",
    icon: <LiaFileContractSolid size={70} className="text-purple-500" />,
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Blockchain Consulting",
    description:
      "Leverage our expertise to navigate the complex world of blockchain and ensure successful implementation.",
    icon: <SiBlockchaindotcom size={70} className="text-purple-500" />,
    color: "from-purple-500 to-pink-600",
  },
];
interface ServiceItem {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}
const ServiceCard = ({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.4 });
  const [isHovered, setIsHovered] = useState(false);

  // Staggered entrance animations based on index
  const entranceDelay = index * 0.1;

  // Special animations for the icon
  const iconVariants = {
    initial: { scale: 0.2, opacity: 0, rotateY: 90 },
    animate: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        delay: entranceDelay + 0.2,
        duration: 10,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.1,
      rotate: isHovered ? [0, -10, 10, -5, 5, 0] : 0,
      transition: {
        rotate: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 2,
          ease: "easeInOut",
          repeatDelay: 0.5,
        },
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ y: 100, opacity: 0 }}
      animate={
        isInView
          ? {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: entranceDelay,
                ease: [0.22, 1, 0.36, 1],
              },
            }
          : {}
      }
      whileHover={{
        y: -15,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full perspective-1000"
    >
      <Card className="h-full border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
        <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
          {/* Animated background gradient */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 z-0 rounded-xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.1 : 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Pulsing circle behind icon */}
          <motion.div
            className="absolute top-10 opacity-70 z-0 rounded-full bg-purple-300"
            initial={{ width: 0, height: 0 }}
            animate={{
              width: isHovered ? 150 : 120,
              height: isHovered ? 150 : 120,
              opacity: isHovered ? 0.2 : 0.1,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          {/* Icon with special animations */}
          <motion.div
            className="mb-6 mt-4 rounded-full bg-purple-50 p-4 group-hover:bg-purple-100 transition-colors duration-300 relative z-10"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            {service.icon}
          </motion.div>

          {/* Text content with staggered animations */}
          <motion.h4
            initial={{ x: -20, opacity: 0 }}
            animate={
              isInView
                ? {
                    x: 0,
                    opacity: 1,
                    transition: { delay: entranceDelay + 0.3, duration: 0.5 },
                  }
                : {}
            }
            className="text-xl font-bold mb-3 text-purple-700 group-hover:text-purple-600 transition-colors duration-500"
          >
            {service.title}
          </motion.h4>

          <motion.p
            initial={{ x: 20, opacity: 0 }}
            animate={
              isInView
                ? {
                    x: 0,
                    opacity: 1,
                    transition: { delay: entranceDelay + 0.4, duration: 0.5 },
                  }
                : {}
            }
            className="text-purple-600/80 relative z-10"
          >
            {service.description}
          </motion.p>

          {/* Learn More text that appears on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
              transition: { duration: 0.3 },
            }}
            className="mt-6 text-purple-500 font-semibold"
          >
            Learn More →
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Parallax text effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity }}
      id="services"
      className="container mx-auto py-20 px-8 overflow-hidden relative"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div style={{ y: textY }} className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={
            isInView
              ? {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
              : {}
          }
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }
                : {}
            }
            className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={
              isInView
                ? {
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.7 },
                  }
                : {}
            }
            className="text-5xl font-bold mb-4 text-white"
          >
            What We Offer
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={
              isInView
                ? {
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.4, duration: 0.7 },
                  }
                : {}
            }
            className="text-center text-white/80 max-w-2xl mx-auto mb-16 text-lg"
          >
            Comprehensive solutions to help your business thrive in the digital
            landscape
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Services;
