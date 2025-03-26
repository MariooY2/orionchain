"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Mario Youssef",
      role: "Founder & CEO",
      image: "/team/team-1.jpg",
      bio: "Blockchain enthusiast with over 3 years of experience in web development and software architecture. Mario leads the strategic vision of OrionChain.",
      social: {
        linkedin: "https://www.linkedin.com/in/marioyoussef936",
        twitter: "https://x.com/MarioY00",
        github: "https://github.com/MariooY2",
      },
    }
  ];

  const teamContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const teamItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-600/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl"></div>
      </div>

      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4"
          >
            Our Team
          </motion.span>

          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl font-bold mb-6 text-white"
          >
            Meet the Experts
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-white/80 text-lg"
          >
            Our diverse team of talented professionals brings together expertise
            in development, design, blockchain, and project management to
            deliver exceptional digital solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={teamContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={teamItemVariants}
              className="group"
            >
              <div className="glass-effect rounded-xl overflow-hidden transform transition-all duration-500 group-hover:shadow-xl">
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                 
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-indigo-600/30">
                    <div className="flex items-center justify-center h-full text-center text-white/30 p-4">
                      {/* Use Image component if you have actual team images */}
                      {/* <Image 
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      /> */}
                      {member.name[0]}
                      {member.name.split(" ")[1][0]}
                    </div>
                  </div>

                  {/* Social icons */}
                  <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex space-x-2">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors"
                        >
                          <FaLinkedinIn className="text-white" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors"
                        >
                          <RiTwitterXFill  className="text-white" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors"
                        >
                          <FaGithub className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-purple-300 mb-4">{member.role}</p>
                    <p className="text-white/70 text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


       
      </div>
    </section>
  );
};

export default TeamSection;
