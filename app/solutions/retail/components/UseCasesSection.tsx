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
          <h3 className="text-xl font-bold mb-4">Fashion Retailers</h3>
          <p className="text-sm">
          Promote seasonal sales, exclusive collections, and special discounts through Bulk SMS, ensuring high footfall and online engagement..
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#DCDCDC] p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4 text-[#40196D]">Grocery Stores </h3>
          <p className="text-sm text-gray-700">
          Notify customers about daily deals, new product arrivals, and membership benefits, keeping them informed and loyal to your store.   
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#DCDCDC] p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4 text-[#40196D]"> Electronics Retailers</h3>
          <p className="text-sm text-gray-700">
          Send customers product launch alerts, warranty updates, and service reminders to build trust and repeat business. 
          </p>
        </motion.div>

        {/* Second Row */}
        <motion.div 
          className="bg-[#DCDCDC] text-white p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl text-[#40196D] font-bold mb-4">Home and Lifestyle Stores </h3>
          <p className="text-sm text-black">
          Engage customers with personalized design tips, exclusive offers, and event invitations to elevate their shopping experience.
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#DCDCDC] text-[#40196D] p-6 rounded-[16px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold mb-4"> E-Commerce-Integrated Retailers  </h3>
          <p className="text-sm text-black">
          Seamlessly communicate order confirmations, shipping details, and return policies to enhance customer satisfaction.
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#DCDCDC] text-center text-white pt-12 rounded-[16px]"
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