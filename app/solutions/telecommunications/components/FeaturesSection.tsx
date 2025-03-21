'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import team from "@/components/Images/pics/teamcartoon.svg"

const FeaturesSection = () => {
  const [openFeature, setOpenFeature] = useState('Customer Notifications');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('startup-features-section');
      
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
      title: "Customer Notifications",
      content: "Send instant updates about new features, offers, or promotions directly to your users via SMS."
    },
    {
      title: "User Verification",
      content: "Verify user identities securely through SMS OTP, Flash Calls, or other authentication methods to prevent fraud and ensure security."
    },
    {
      title: "Service Accessibility",
      content: "Make your services accessible to all users regardless of internet connectivity through USSD and SMS channels."
    }
  ];

  return (
    <div id="startup-features-section" className="py-16 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2 
          className="text-4xl text-black font-bold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Grow Fast, Stay Lean
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          With BRIVAS, you can focus on building your product and leave communication infrastructure to us. 
          Whether you're a SaaS startup, an e-commerce platform, or a fintech innovator, our tools provide you with 
          the messaging, verification, and USSD services needed to engage customers and scale efficiently.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Illustration */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div 
            className="relative w-full max-w-md h-[350px]"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Image
              src={team} 
              alt="Startup team working"
              fill
              className="object-contain"
              onError={(e) => {
                // Fallback if the image doesn't exist
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://placehold.co/600x400?text=Startup+Team&bg=40196D&fg=ffffff";
              }}
            />
          </motion.div>
        </motion.div>

        {/* Right Column - Features Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.h3 
            className="text-xl font-bold text-[#40196D] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Features
          </motion.h3>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <motion.button
                  onClick={() => setOpenFeature(openFeature === feature.title ? '' : feature.title)}
                  className="w-full p-5 flex justify-between items-center text-left"
                  whileHover={{ backgroundColor: "rgba(64, 25, 109, 0.05)" }}
                >
                  <span className="font-medium text-gray-800 text-lg">{feature.title}</span>
                  <motion.span 
                    className="text-gray-400 text-2xl"
                    animate={{ rotate: openFeature === feature.title ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openFeature === feature.title ? "—" : "+"}
                  </motion.span>
                </motion.button>
                <AnimatePresence>
                  {openFeature === feature.title && (
                    <motion.div 
                      className="px-5 pb-5"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-600">{feature.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSection; 