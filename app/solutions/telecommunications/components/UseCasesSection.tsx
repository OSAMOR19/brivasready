'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
          <h3 className="text-xl font-bold mb-4">Prepaid and Postpaid Services</h3>
          <p className="text-sm">
          Send reminders for bill payments, data top-ups, and plan renewals via SMS to ensure uninterrupted services
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#40196D] p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Insurance Providers</h3>
          <p className="text-sm text-white">
          Send policy updates, premium reminders, and claim status notifications to keep clients informed and engaged.   
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#40196D] p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Investment Firms</h3>
          <p className="text-sm text-white">
          Share market updates, portfolio performance summaries, and trade confirmations with clients in real-time. 
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
          <h3 className="text-xl text-white] font-bold mb-4">Credit Unions</h3>
          <p className="text-sm text-white">
          Facilitate member communications with payment reminders, loan updates, and service announcements.
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#40196D] text-[#40196D] p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl text-white font-bold mb-4"> Fintech Companies </h3>
          <p className="text-sm text-white">
          Enhance app user experiences with instant notifications, secure logins, and personalized offers.
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#40196D] text-center text-white pt-12 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <Link 
                href="/signup" 
                className="inline-block px-8 py-3 bg-[#ffffff] text-[#40196D] rounded-full hover:bg-[#ffffff] transition-colors font-medium"
              >
                Start for free
              </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default EnterpriseBenefitsSection; 