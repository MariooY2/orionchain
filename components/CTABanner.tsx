"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const CTABanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-indigo-900/40" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto glass-effect rounded-3xl p-12 shadow-2xl border border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-2/3">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Ready to Transform Your Digital Vision?
                </h2>
                <p className="text-white/80 text-lg max-w-2xl">
                  Let&apos;s collaborate and create something extraordinary
                  together. Our team of experts is ready to bring your ideas to
                  life.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:w-1/3 flex justify-center md:justify-end"
            >
              <Button
                asChild
                className="px-8 py-7 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-lg font-medium text-white hover:shadow-lg hover:opacity-90 transition-all duration-300 group"
              >
                <Link href="#contact">
                  <Sparkles className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Start Your Project
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTABanner;
