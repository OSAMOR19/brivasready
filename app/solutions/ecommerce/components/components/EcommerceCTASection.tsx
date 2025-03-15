'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EcommerceCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('ecommerce-cta');
      
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

  const features = [
    {
      title: "Cost-Effective Solutions",
      description: "BRIVAS ensures all communications are encrypted and compliant with global data protection standards, safeguarding your enterprise's data and user information."
    },
    {
      title: "High Availability",
      description: "Our platform is built on a robust infrastructure that ensures 99.9% uptime, providing uninterrupted services to your enterprise, even during high-demand periods."
    },
    {
      title: "Custom Solutions",
      description: "Integrate with your backend using BRIVAS's robust API for smooth data retrieval and processing."
    },
    {
      title: "24/7 Enterprise Support",
      description: "Update USSD menus and services in real-time, keeping your offerings relevant."
    },
    {
      title: "Analytics and Reporting",
      description: "Monitor how users interact with your USSD service, providing valuable insights into their behaviour."
    }
  ];

  return (
    <div id="ecommerce-cta" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl text-black font-bold mb-4">
            Why E-Commerce Businesses Choose <span className="text-[#40196D]">BRIVAS</span>
          </h2>
          <p className="text-gray-600">
            Our USSD Pull platform integrates effortlessly with your existing systems and workflows, providing complete customization of menus and services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Placeholder Illustration */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div 
              className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Placeholder for illustration */}
              <div className="text-gray-400 text-center p-8">
                <svg 
                  className="w-32 h-32 mx-auto mb-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p>Illustration Placeholder</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="text-black space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title} 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-5 h-5 rounded-full border-2 border-[#A4031F]"
                      whileHover={{ scale: 1.2, backgroundColor: "#A4031F" }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceCTASection; 