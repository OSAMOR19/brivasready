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
    <div id="benefits-section" className="py-16 px-4 max-w-6xl mx-auto ">
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
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-[600px] mx-auto">
        {/* First Row */}
        <motion.div 
          className="bg-[#40196D] text-white p-6 rounded-[16px] w-[280px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4">Generate Verification Call</h3>
          <p className="text-sm">
          When a user initiates an action that requires authentication, your application sends a request to BRIVAS to place a Flash Call.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-[16px] w-[280px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4 text-[#40196D]">BRIVAS Places the Call
          </h3>
          <p className="text-sm text-gray-700">
          BRIVAS initiates a call to the user's mobile number, but the call disconnects before being answered.
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
          <h3 className="text-xl font-bold mb-4"> User Phone Number Verified</h3>
          <p className="text-sm">
          The system captures the incoming call to verify that the user's phone number is correct, completing the authentication process.
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#40196D] text-white p-6 rounded-[16px] w-[280px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4">Complete Verification</h3>
          <p className="text-sm">
          Your system is notified that the users identity has been verified, allowing them to proceed with the requested action.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EnterpriseBenefitsSection; 