"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { title: "Reliable Messaging Infrastructure", content: "" },
  { title: "Secure & Compliant", content: "Built with top-tier security standards." },
  { title: "Scalable for Any Business", content: "" },
  { title: "Seamless API Integrations", content: "" },
];

export default function WhyChoose() {
  const [openIndex, setOpenIndex] = useState(1); // Default open index for "Secure & Compliant"
  const [sectionRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full py-20 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-[#40196D] text-center mb-4"
        >
          Why Choose BRIVAS?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-600 max-w-3xl mx-auto mb-8"
        >
          Lorem ipsum dolor sit amet consectetur. Adipiscing ut nulla porttitor pellentesque vel posuere.
        </motion.p>

        {/* Accordion List */}
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`rounded-2xl mb-4 p-5 flex flex-col border transition-all ${
                  isOpen 
                    ? "bg-[#40196D] border-[#40196D]" 
                    : "bg-white border-gray-300"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex justify-between items-center w-full text-lg font-medium"
                >
                  <span className={isOpen ? "text-white" : "text-gray-800"}>
                    {faq.title}
                  </span>
                  {isOpen ? (
                    <Minus size={24} className="text-white" />
                  ) : (
                    <Plus size={24} className="text-gray-400" />
                  )}
                </button>

                {/* Accordion Content */}
                {isOpen && faq.content && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-2 text-sm text-white"
                  >
                    {faq.content}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
