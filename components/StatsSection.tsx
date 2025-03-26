"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BoltIcon, ChartIcon, RocketIcon } from "./Icons"

const StatsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.9, 1, 1]);

  const stats = [
    {
      value: "100+",
      label: "Projects Completed",
      icon: <RocketIcon className="w-10 h-10 text-purple-300" />,
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      icon: <ChartIcon className="w-10 h-10 text-purple-300" />,
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <BoltIcon className="w-10 h-10 text-purple-300" />,
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/30" />

      <motion.div
        ref={containerRef}
        style={{ opacity, scale }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 text-center group hover:bg-purple-900/20 transition-all duration-500"
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-purple-800/30 group-hover:bg-purple-800/50 transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                initial={{ scale: 1 }}
                whileInView={{
                  scale: [1, 1.2, 1],
                  transition: {
                    duration: 0.8,
                    delay: 0.3 + index * 0.1,
                    times: [0, 0.5, 1],
                    ease: "easeInOut",
                  },
                }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-purple-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
