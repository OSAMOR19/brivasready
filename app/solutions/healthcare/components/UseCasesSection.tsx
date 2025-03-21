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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Row */}
        <motion.div 
          className="bg-[#40196D] text-white p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4">Hospitals</h3>
          <p className="text-sm">
          Streamline operations with automated appointment reminders, staff communication, and patient notifications.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4 text-[#40196D]">Clinics</h3>
          <p className="text-sm text-gray-700">
            Our platform is built to handle high volumes of traffic, allowing enterprises to scale their communications effortlessly as operations expand.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4 text-[#40196D]">Pharmacies</h3>
          <p className="text-sm text-gray-700">
            Ensure data protection and secure communications with industry-leading encryption and compliance with global standards, ensuring the safety of your enterprise's information.
          </p>
        </motion.div>

        {/* Second Row */}
        <motion.div 
          className="bg-[#40196D] text-white p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4">Insurance Providers</h3>
          <p className="text-sm">
            Experience high-speed message delivery and low latency, even during peak traffic times, ensuring that your enterprise communications are always on time.
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#40196D] text-white p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4">Public Health Organizations </h3>
          <p className="text-sm">
            Customize BRIVAS services to meet your specific enterprise needs with flexible APIs, dedicated support, and industry-specific solutions.
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#40196D] text-white p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4">Dedicated Support</h3>
          <p className="text-sm">
            Enterprises benefit from dedicated account managers and 24/7 support, ensuring any issues are resolved quickly and your communication systems remain up and running.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EnterpriseBenefitsSection; 