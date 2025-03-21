'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const UseCasesSection = () => {
  const [openCase, setOpenCase] = useState('Subscription Management');

  const useCases = [
    {
      title: "Banking and Financial Services",
      content: "Allow users to check account balances, transfer funds, or pay bills through a simple USSD menu."
    },
    {
      title: "Mobile Airtime Recharge",
      content: "Enable users to top up their mobile credit by dialing a USSD code and selecting a recharge option."
    },
    {
      title: "Surveys and Feedback",
      content: "Collect feedback from users or run surveys via quick and easy USSD forms."
    },
    {
      title: "Subscription Management",
      content: "Allow customers to subscribe or unsubscribe from services like news, weather, or alerts via USSD."
    },
    {
      title: "Information Retrieval",
      content: "Let users retrieve important information, such as exam results, order statuses, or account details."
    }
  ];

  return (
    <motion.div 
      className="py-16 px-4 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block bg-[#40196D] text-white py-2 px-6 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-lg font-medium">Use cases</h2>
          </motion.div>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {useCases.map((useCase, index) => (
            <motion.div 
              key={useCase.title}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.button
                onClick={() => setOpenCase(openCase === useCase.title ? '' : useCase.title)}
                className="w-full p-4 flex justify-between items-center text-left hover:bg-gray-50"
                whileTap={{ backgroundColor: "rgba(64, 25, 109, 0.05)" }}
              >
                <span className="font-medium text-gray-900">{useCase.title}</span>
                <motion.div
                  animate={{ rotate: openCase === useCase.title ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openCase === useCase.title ? (
                    <Minus className="h-5 w-5 text-[#40196D]" />
                  ) : (
                    <Plus className="h-5 w-5 text-[#40196D]" />
                  )}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openCase === useCase.title && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <motion.div 
                      className="px-4 pb-4"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-gray-600">{useCase.content}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default UseCasesSection;