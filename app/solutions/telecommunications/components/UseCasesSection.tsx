'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UseCasesSection = () => {
  const [openCase, setOpenCase] = useState('Ride-Hailing and Mobility Startups');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('startup-use-cases');
      
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + scrollPosition;
        if (scrollPosition > elementPosition - windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const useCases = [
    {
      title: "Fintech Startups",
      content: "Send transaction alerts, verification codes, and account updates to users securely. Implement two-factor authentication to protect sensitive financial information."
    },
    {
      title: "E-commerce Startups",
      content: "Keep customers informed with order confirmations, shipping updates, and delivery notifications. Send promotional messages and special offers to drive sales."
    },
    {
      title: "SaaS Startups",
      content: "Streamline user onboarding with verification messages, send feature updates, and provide account security notifications to enhance user experience."
    },
    {
      title: "Ride-Hailing and Mobility Startups",
      content: "Deliver real-time ride updates, driver information, and trip receipts to ensure seamless communication with users."
    },
    {
      title: "Health and Wellness Startups",
      content: "Send appointment reminders, medication alerts, and health tips to patients. Verify user identities for secure access to personal health information."
    }
  ];

  return (
    <div id="startup-use-cases" className="py-16 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-block bg-[#40196D] text-white py-2 px-6 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-lg font-medium">Use cases</h2>
          </motion.div>
        </motion.div>

        {/* Use Cases Accordion */}
        <div className="space-y-4">
          {useCases.map((useCase, index) => (
            <motion.div 
              key={useCase.title}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              whileHover={{ 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                y: -5
              }}
            >
              <motion.button
                onClick={() => setOpenCase(openCase === useCase.title ? '' : useCase.title)}
                className="w-full p-5 flex justify-between items-center text-left"
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium text-gray-800 text-lg">{useCase.title}</span>
                <motion.span 
                  className="text-gray-400 text-2xl"
                  animate={{ rotate: openCase === useCase.title ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openCase === useCase.title ? "—" : "+"}
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openCase === useCase.title && (
                  <motion.div 
                    className="px-5 pb-5"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600">{useCase.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection; 