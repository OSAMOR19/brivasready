'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const EnterpriseBenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('benefits-section');
      
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

  return (
    <div id="benefits-section" className="py-16 pt-40  px-4 max-w-6xl mx-auto ">
      {/* Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-block bg-white text-[#40196D] font-medium px-6 py-3 rounded-full">
          How it works
        </div>
      </motion.div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-2 text-center md:grid-cols-2 gap-8 max-w-[600px] mx-auto">
        {/* First Row */}
        <motion.div 
          className="bg-[#40196D] text-white p-6 rounded-[16px] w-[280px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4">Users Send Messages </h3>
          <p className="text-sm">
          Customers or users send text messages to your dedicated short code.
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#40196D] p-6 rounded-[16px] w-[280px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">BRIVAS Receives the Message
          </h3>
          <p className="text-sm text-white">
          BRIVAS instantly processes the incoming message, ensuring it's delivered securely to your platform.
          </p>
        </motion.div>

        {/* Second Row */}
        <motion.div 
          className="bg-[#40196D] text-white p-6 rounded-[16px] w-[280px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4">Real-Time Notifications</h3>
          <p className="text-sm">
          Your system receives the message via a webhook, allowing you to process it and send an automated or manual response.
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#40196D] text-white p-6 rounded-[16px] w-[280px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4">Engage Users </h3>
          <p className="text-sm">
          Respond to users with the information they need, complete actions like opt-in confirmations, support requests, or inquiries.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EnterpriseBenefitsSection; 