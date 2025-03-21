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
        <div className="inline-block bg-[#40196D] text-white font-medium px-6 py-3 rounded-full">
          Use Cases
        </div>
      </motion.div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* First Row */}
        <motion.div 
          className="bg-[#DCDCDC] text-white p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl text-[#40196D] font-bold mb-4">User Login</h3>
          <p className="text-sm text-black">
          Provide fast, hassle-free login experiences by verifying users with a missed call.
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#DCDCDC] p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4 text-[#40196D]">Transaction Approvals</h3>
          <p className="text-sm text-gray-700">
          Verify sensitive actions like payment confirmations or account changes with a Flash Call.
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#DCDCDC] p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4 text-[#40196D]">Onboarding</h3>
          <p className="text-sm text-gray-700">
          Efficiently onboard new users by verifying their phone numbers with an automated call
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EnterpriseBenefitsSection; 