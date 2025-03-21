"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { title: "Reliable Messaging Infrastructure", content: "High deliverability and low latency." },
  { title: "Secure & Compliant", content: "Built with top-tier security standards." },
  { title: "Scalable for Any Business", content: "From startups to enterprises." },
  { title: "Seamless API Integrations", content: "Connect effortlessly with your existing " },
];

export default function WhyChoose() {
  const [openIndex, setOpenIndex] = useState(1);
  const [sectionRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full py-20 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading animations remain the same */}

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl text-[#40196D] md:text-4xl font-bold text-center mb-24"
        >
          Why Choose BRIVAS
        </motion.h2>
        
        {/* Enhanced Accordion List */}
        <motion.div 
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-2xl mb-4 p-5 flex flex-col border transition-all duration-300 ease-in-out transform hover:scale-[1.02] ${
                  isOpen 
                    ? "bg-[#40196D] border-[#40196D] shadow-lg" 
                    : "bg-white border-gray-300 hover:border-[#40196D]/30"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex justify-between items-center w-full text-lg font-medium"
                >
                  <motion.span 
                    className={isOpen ? "text-white" : "text-gray-800"}
                    initial={false}
                    animate={{ color: isOpen ? "#ffffff" : "#1f2937" }}
                    transition={{ duration: 0.2 }}
                  >
                    {faq.title}
                  </motion.span>
                  <motion.div
                    initial={false}
                    animate={{ 
                      rotate: isOpen ? 180 : 0,
                      color: isOpen ? "#ffffff" : "#9ca3af"
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {isOpen ? (
                      <Minus size={24} />
                    ) : (
                      <Plus size={24} />
                    )}
                  </motion.div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                  className="overflow-hidden"
                >
                  {faq.content && (
                    <motion.p
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="mt-2 text-sm text-white"
                    >
                      {faq.content}
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
