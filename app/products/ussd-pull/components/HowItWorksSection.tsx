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
        <div className="inline-block bg-[#40196D] text-white font-medium px-6 py-3 rounded-full">
          How it works
        </div>
      </motion.div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-2 text-start md:grid-cols-2 gap-8 max-w-[600px] mx-auto">
        {/* First Row */}
        <motion.div 
          className="bg-[#40196D] text-white p-6 rounded-[16px] w-[280px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4">User Dials USSD Code</h3>
          <p className="text-sm">
          Your customers dial the specific USSD code (e.g., *123#) to initiate a session with your service.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white  p-6 rounded-[16px] w-[280px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4 text-[#40196D]">BRIVAS Processes the Request
          </h3>
          <p className="text-sm text-black">
          Our platform instantly processes the USSD request and connects it to your service or database.
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
          <h3 className="text-xl font-bold mb-4">Interactive Menu </h3>
          <p className="text-sm">
          Users navigate through interactive menus, selecting options or entering information as needed.
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#40196D] text-white p-6 rounded-[16px] w-[280px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4"> Retrieve Service </h3>
          <p className="text-sm">
          Information is delivered to the user immediately, ensuring a seamless and fast experience.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EnterpriseBenefitsSection; 