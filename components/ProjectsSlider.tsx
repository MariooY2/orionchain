"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    image: "/NFT.png",
    title: "Cosmic Voyagers NFT Project",
    description:
      "An exclusive NFT collection exploring the depths of space, offering unique digital art and utility within the blockchain universe.",
    link: "https://nft-drop-teal.vercel.app/",
  },
  {
    image: "/Crowdfund.png",
    title: "CrowdFund Dapp on Sepolia Testnet",
    description:
      "A decentralized application (Dapp) for crowdfunding projects on the Sepolia testnet.",
    link: "https://crowd-fund-mu.vercel.app/",
  },
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
      "A powerful and user-friendly fitness tracking app designed to help users monitor workouts, track progress, and set fitness goals.",
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

interface ProjectCardProps {
  project: {
    image: string;
    title: string;
    description: string;
    link: string;
  };
  isActive: boolean;
}

const ProjectCard = ({ project, isActive }: ProjectCardProps) => {
  return (
    <motion.div
      className={`flex-shrink-0 w-full sm:w-96 h-[500px] mx-2 transition-all duration-500 ${
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"
      }`}
    >
      <div className="h-full overflow-hidden rounded-xl glass-effect shadow-lg border border-purple-300/20 group">
        <div className="relative w-full h-52 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 flex flex-col h-[calc(100%-208px)]">
          <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-300 group-hover:text-purple-300">
            {project.title}
          </h3>

          <p className="text-white/80 mb-6 flex-grow">{project.description}</p>

          <Button
            asChild
            variant="outline"
            className="w-full mt-auto group-hover:bg-purple-900/30 text-white border-purple-400/30"
          >
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Visit Project
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Reset autoplay when user interacts with the slider
  const resetAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }

    setIsAutoPlaying(false);

    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  // Setup auto-scrolling
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayIntervalRef.current = setInterval(() => {
        if (activeIndex < projects.length - 1) {
          handleNextProject();
        } else {
          // Reset to the beginning when reaching the end
          setActiveIndex(0);
          if (sliderRef.current) {
            sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
          }
        }
      }, 2000); 
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [activeIndex, isAutoPlaying]);

  const handleNextProject = () => {
    resetAutoPlay();
    setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : prev));

    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 384, behavior: "smooth" });
    }
  };

  const handlePrevProject = () => {
    resetAutoPlay();
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));

    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -384, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    resetAutoPlay();
    setIsDragging(true);
    if (sliderRef.current) {
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const goToProject = (index: number) => {
    resetAutoPlay();
    setActiveIndex(index);

    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * 384,
        behavior: "smooth",
      });
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    resetAutoPlay();
    setIsDragging(true);
    if (sliderRef.current) {
      setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 overflow-hidden relative"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-5xl font-bold mb-4 text-white">
            Previous Projects
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Explore our recent work and discover how we&apos;ve helped clients
            achieve their digital goals.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={handlePrevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-sm border border-white/10 transition-all duration-300 disabled:opacity-40"
            disabled={activeIndex === 0}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-sm border border-white/10 transition-all duration-300 disabled:opacity-40"
            disabled={activeIndex === projects.length - 1}
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Project slider */}
          <div
            ref={sliderRef}
            className="overflow-x-auto hide-scrollbar py-8 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            <div className="flex">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  isActive={index === activeIndex}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 gap-2 overflow-x-auto hide-scrollbar py-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all flex-shrink-0 ${
                index === activeIndex
                  ? "bg-white w-6"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.section>
  );
};

export default ProjectsSlider;
