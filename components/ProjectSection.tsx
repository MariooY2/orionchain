"use client";
import { motion } from "framer-motion";
import Project from "./Project";

const projects = [
  {
    image: "/memecoin.png",
    title: "Static Website for a Memecoin Project",
    description:
      "A clean and engaging static website designed for a memecoin project, showcasing its features, roadmap, and community highlights.",
    link: "https://memecoinproject1.vercel.app/",
  },
  {
    image: "/web3game.png",
    title: "Rock Paper Scissors Game On-Chain",
    description:
      "A decentralized Rock Paper Scissors game built on the Sepolia testnet, leveraging blockchain technology for transparent and secure gameplay.",
    link: "https://finalproject-phi-six.vercel.app/",
  },
  {
    image: "/Web3.png",
    title: "DApp Marketplace",
    description: "A Decentralized marketplace built on the sepolia testnet.",
    link: "https://web3-project1.vercel.app/",
  },
  {
    image: "/store.png",
    title: "E-Commerce Shop",
    description: "An online store built with modern eCommerce functionalities.",
    link: "https://store-three-ecru.vercel.app/",
  },
  {
    image: "/ogwebsite.png",
    title: "Classic Portfolio Website",
    description:
      "A clean and timeless portfolio website showcasing personal projects, skills, and achievements in a user-friendly and professional layout.",
    link: "https://redditfreelance8.vercel.app/",
  },
  {
    image: "/fithub.png",
    title: "Fitness Tracker",
    description:
      "A powerful and user-friendly fitness tracking app designed to help users monitor workouts, track progress, and set fitness goals. Built with speed, functionality, and a sleek interface for an optimal user experience.",
    link: "https://fit-hub-theta.vercel.app/",
  },
  {
    image: "/ptportfolio.png",
    title: "Personal Trainer Portfolio",
    description:
      "A sleek and professional portfolio showcasing personal training services, client testimonials, and fitness programs.",
    link: "https://pt-portfolio-seven.vercel.app/",
  },
  {
    image: "/sff.png",
    title: "SFF Ready - PC Case Tool",
    description:
      "A comprehensive tool to help users find the best PC cases for their setups.",
    link: "https://www.sffready.com/",
  },
  {
    image: "/kuartz.png",
    title: "Kuartz777 - Beauty Salon",
    description: "A beautifully designed website for a high-end beauty salon.",
    link: "https://www.kuartz777.com/",
  },
  {
    image: "/Mercedes-Shop.png",
    title: "Car Shop",
    description:
      "A sleek, fully responsive car shop website for showcasing and selling cars.",
    link: "https://car-shop-woad.vercel.app/",
  },
  {
    image: "/Uncoocked.png",
    title: "Uncooked - Web App",
    description:
      "A dynamic web app built with a focus on speed and functionality.",
    link: "https://www.uncooked.xyz/",
  },
];

const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="projects"
      className="py-10  overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-white mb-8"
        >
          Previous Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-12"
        >
          {projects.map((project, index) => (
            <Project
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
