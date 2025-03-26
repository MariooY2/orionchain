"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
};

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-b border-purple-800/30 last:border-0"
    >
      <button
        onClick={toggleOpen}
        className="py-6 w-full flex justify-between items-center hover:text-purple-300 text-left transition-colors text-white"
      >
        <h3 className="text-xl font-medium">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          <svg
            className={`w-6 h-6 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="py-3 pb-6 text-white/80">{answer}</div>
      </motion.div>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in a wide range of technologies including React, Next.js, Tailwind CSS, Node.js, Solidity, and various blockchain frameworks. Our team stays updated with the latest tech trends to deliver cutting-edge solutions for both web and blockchain development.",
    },
    {
      question: "How long does it take to complete a typical project?",
      answer:
        "Project timelines vary based on complexity and requirements. A simple website might take 2-4 weeks, while complex web applications or blockchain projects can take 2-6 months. During our discovery phase, we'll provide a detailed timeline specific to your project.",
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer:
        "Yes, we offer flexible maintenance and support packages to keep your digital assets running smoothly after launch. Our support team is available 24/7 to address any issues and implement updates as needed.",
    },
    {
      question: "What is your approach to blockchain development?",
      answer:
        "Our blockchain development approach focuses on security, scalability, and usability. We start with thorough requirements analysis, design secure smart contracts, implement rigorous testing, and ensure seamless integration with front-end interfaces for the best user experience.",
    },
    {
      question: "How do you handle project communication?",
      answer:
        "We believe in transparent and regular communication. Depending on your preference, we set up weekly progress meetings, utilize project management tools like Jira or Trello, and provide access to development environments so you can see progress in real-time.",
    },
    {
      question:
        "Can you help with an existing project that needs improvements?",
      answer:
        "Absolutely! We frequently work on existing projects that need enhancements, bug fixes, or complete overhauls. Our team will conduct a thorough code review and provide recommendations to improve functionality, performance, and user experience.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-5xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-white/80 text-lg">
            Find answers to common questions about our services and processes.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto glass-effect rounded-2xl p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
