"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckIcon, CursorClickIcon, HeartIcon, SparklesIcon } from "./Icons";

interface ProcessStepData {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  activities: string[];
  deliverables: string;
}

interface ProcessStepProps {
  step: ProcessStepData;
  index: number;
  totalSteps: number;
  isMobile: boolean;
}

// Create a separate component for each process step to properly use hooks
const ProcessStep: React.FC<ProcessStepProps> = ({ step, index, isMobile }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isCardInView = useInView(cardRef, { once: false, amount: 0.2 });

  return (
    <motion.div
      key={index}
      ref={cardRef}
      // Make the container immediately visible but animate position
      initial={{
        x: isMobile ? 0 : index % 2 === 0 ? -150 : 150,
        opacity: 1, // Keep the container visible immediately
      }}
      animate={
        isCardInView
          ? {
              x: 0,
              transition: {
                duration: isMobile ? 0.5 : 0.8,
                delay: isMobile ? index * 0.1 : index * 0.15,
                type: "spring",
                stiffness: isMobile ? 70 : 50,
                damping: 20,
              },
            }
          : {}
      }
      className={`relative mb-8 px-4 z-20 ${
        !isMobile && index % 2 === 0
          ? "md:pr-12"
          : !isMobile
          ? "md:pl-12 md:translate-y-24"
          : ""
      }`}
    >
      <div
        className={`flex flex-col items-center ${
          !isMobile && index % 2 === 0
            ? "md:items-end"
            : !isMobile
            ? "md:items-start"
            : ""
        }`}
      >
        {/* Container with background to block the line */}
        <div className="relative max-w-md w-full h-full mx-3">
          {/* Solid background element that's immediately visible with glass effect */}
          <div className="absolute inset-0 rounded-xl glass-effect z-10"></div>

          <motion.div
            className="relative z-20 glass-effect rounded-xl p-6 md:p-8 max-w-md w-full h-full"
            initial={{ opacity: 0 }}
            animate={
              isCardInView
                ? {
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      delay: isMobile ? index * 0.1 : index * 0.15,
                    },
                  }
                : {}
            }
          >
            {/* Animated gradient border on hover */}
            <motion.div
              className={`absolute inset-0 rounded-xl bg-gradient-to-r ${step.color} opacity-0`}
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.3 }}
            />

            {/* Icon container */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full p-4 shadow-lg">
                {step.icon}
              </div>
            </div>

            <motion.div
              className="text-center px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isCardInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: isMobile
                          ? index * 0.1 + 0.2
                          : index * 0.15 + 0.4,
                        duration: 0.5,
                      },
                    }
                  : {}
              }
            >
              <motion.h3
                className="text-xl md:text-2xl font-bold mb-3 text-white"
                whileHover={{
                  color: "#e9d5ff",
                  transition: { duration: 0.3 },
                }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                className="text-white/80 mb-4 text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={
                  isCardInView
                    ? {
                        opacity: 1,
                        transition: {
                          delay: isMobile
                            ? index * 0.1 + 0.3
                            : index * 0.15 + 0.5,
                          duration: 0.5,
                        },
                      }
                    : {}
                }
              >
                {step.description}
              </motion.p>

              {/* Key activities list */}
              <motion.div
                className="text-left mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isCardInView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: isMobile
                            ? index * 0.1 + 0.4
                            : index * 0.15 + 0.6,
                          duration: 0.5,
                        },
                      }
                    : {}
                }
              >
                <h4 className="text-white/90 font-medium mb-2 text-xs md:text-sm">
                  KEY ACTIVITIES:
                </h4>
                <ul className="space-y-2">
                  {step.activities.map((activity, actIndex) => (
                    <motion.li
                      key={actIndex}
                      className="flex items-start"
                      initial={{ x: -10, opacity: 0 }}
                      animate={
                        isCardInView
                          ? {
                              x: 0,
                              opacity: 1,
                              transition: {
                                delay: isMobile
                                  ? index * 0.1 + 0.4 + actIndex * 0.05
                                  : index * 0.15 + 0.6 + actIndex * 0.1,
                                duration: 0.4,
                              },
                            }
                          : {}
                      }
                    >
                      <motion.div
                        className="min-w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center mr-2 md:mr-3 mt-0.5"
                        whileHover={{
                          scale: 1.2,
                          backgroundColor: "rgba(168, 85, 247, 0.3)",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                      <span className="text-white/70 text-xs md:text-sm">
                        {activity}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Deliverables section */}
              {step.deliverables && (
                <motion.div
                  className="text-left mt-5 pt-4 border-t border-purple-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isCardInView
                      ? {
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: isMobile
                              ? index * 0.1 + 0.5
                              : index * 0.15 + 0.8,
                            duration: 0.5,
                          },
                        }
                      : {}
                  }
                >
                  <h4 className="text-white/90 font-medium mb-2 text-xs md:text-sm">
                    DELIVERABLES:
                  </h4>
                  <p className="text-white/70 text-xs md:text-sm">
                    {step.deliverables}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Set initial mobile state
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Run immediately
      handleResize();

      window.addEventListener("resize", handleResize);

      // Clean up
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // Parallax effect for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Add opacity transform based on scroll (fallback visibility)
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.5, 1, 1, 0.5]
  );

  // Add parallax movement effect
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const processSteps: ProcessStepData[] = [
    {
      title: "Discovery & Strategy",
      description:
        "We begin with an in-depth discovery phase to understand your business, audience, goals, and the competitive landscape. This forms the foundation for a successful project.",
      icon: (
        <CursorClickIcon className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />
      ),
      color: "from-purple-500 to-pink-500",
      activities: [
        "Comprehensive stakeholder interviews",
        "User research and persona development",
        "Competitive analysis and market positioning",
        "Business goals identification",
        "Project scope definition and planning",
      ],
      deliverables:
        "Detailed project brief, strategic roadmap, user personas, and a comprehensive timeline with clear milestones.",
    },
    {
      title: "Design & Planning",
      description:
        "Our creative team crafts visually stunning designs while our technical team outlines the architecture and specifications needed to bring your vision to life.",
      icon: (
        <SparklesIcon className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />
      ),
      color: "from-blue-500 to-indigo-500",
      activities: [
        "User experience (UX) strategy",
        "Wireframing and prototyping",
        "Visual design and branding alignment",
        "Technical architecture planning",
        "Content strategy and information architecture",
      ],
      deliverables:
        "Wireframes, design mockups, interactive prototypes, technical specifications, and content plan.",
    },
    {
      title: "Development & Implementation",
      description:
        "Our engineering team transforms designs into functional solutions using cutting-edge technologies and following industry best practices for optimal performance.",
      icon: <CheckIcon className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />,
      color: "from-teal-500 to-blue-500",
      activities: [
        "Frontend development with modern frameworks",
        "Backend systems implementation",
        "Smart contract development (for blockchain projects)",
        "Database architecture and integration",
        "API development and third-party integrations",
        "Regular code reviews and quality assurance",
      ],
      deliverables:
        "Working application with all core functionality, codebase documentation, smart contracts (if applicable), and testing reports.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "We conduct thorough testing across multiple devices, browsers, and scenarios to ensure your solution works flawlessly for all users.",
      icon: <CheckIcon className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />,
      color: "from-green-500 to-teal-500",
      activities: [
        "Cross-browser and cross-device testing",
        "Performance optimization",
        "Security testing and vulnerability assessment",
        "User acceptance testing (UAT)",
        "Blockchain penetration testing (for DApps)",
      ],
      deliverables:
        "Comprehensive QA reports, optimized codebase, security audit documentation, and user feedback implementation plan.",
    },
    {
      title: "Deployment & Launch",
      description:
        "We carefully deploy your solution to production environments, ensuring a smooth launch with minimal disruption and maximum impact.",
      icon: <HeartIcon className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />,
      color: "from-amber-500 to-orange-500",
      activities: [
        "Environment setup and configuration",
        "Deployment automation",
        "Data migration (if applicable)",
        "Performance monitoring setup",
        "Launch strategy implementation",
        "User onboarding planning",
      ],
      deliverables:
        "Live application, deployment documentation, monitoring dashboards, and launch analytics report.",
    },
    {
      title: "Ongoing Support & Enhancement",
      description:
        "Our relationship doesn't end at launch. We provide continuous support and work with you to enhance and evolve your solution as your business grows.",
      icon: <HeartIcon className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />,
      color: "from-pink-500 to-purple-500",
      activities: [
        "24/7 technical support",
        "Regular maintenance and updates",
        "Performance optimization",
        "Feature enhancement planning",
        "Analytics review and insights",
        "Scaling strategy as usage grows",
      ],
      deliverables:
        "Regular performance reports, update schedules, feature roadmaps, and strategic growth recommendations.",
    },
  ];

  // Track progress for the connecting line animation
  const lineProgressY = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    ["0%", "100%"]
  );

  return (
    <motion.section
      id="process"
      ref={sectionRef}
      style={{ opacity }} // Add scroll-based opacity
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-8 md:py-20 overflow-hidden relative px-4 md:px-6"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-purple-600/5 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-600/5 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* FIXED HEADER SECTION - NOW WITH PARALLAX EFFECT LIKE SERVICES */}
        <motion.div
          style={{ y: textY }} // Add parallax movement effect
          className="text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
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
            className="max-w-3xl mx-auto mb-12 md:mb-20"
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
              className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-xs md:text-sm font-medium mb-4"
            >
              Our Process
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
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white"
            >
              Our Comprehensive Development Process
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
              className="text-white/80 text-sm md:text-lg"
            >
              We follow a structured, transparent process that ensures quality
              at every step. From discovery to ongoing support, each phase is
              designed to deliver exceptional results while keeping you informed
              and involved throughout the journey.
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="relative pb-16 md:pb-24">
          {/* Animated connecting line with a significantly lower z-index */}
          <div className="absolute top-0 left-1/2 md:-translate-x-1/2 h-[95%] w-1.5 bg-gradient-to-b from-purple-600/30 to-indigo-600/30 z-[-5]">
            <motion.div
              className="w-full bg-gradient-to-b from-purple-600 to-indigo-600 absolute top-0 left-0"
              style={{ height: lineProgressY }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Grid container with higher z-index */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-8 relative z-10">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                totalSteps={processSteps.length}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>

        {/* Final call to action */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 md:mt-16 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-white/80 text-sm md:text-base mb-6 md:mb-8">
            Our proven process ensures that your project will be delivered on
            time, on budget, and exceeding expectations. Let&apos;s build
            something amazing together.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white text-sm md:text-base font-medium hover:shadow-lg transition-all duration-300"
          >
            Contact Us Today
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;
