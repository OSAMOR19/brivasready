'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import cofee from "@/components/Images/pics/womancoffee.svg"
import Image from "next/image"

const EcommerceSolutionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('ecommerce-solutions');
      
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
      title: "Order Updates:",
      description: "Keep customers informed about their orders, from confirmation to delivery, with real-time SMS notifications."
    },
    {
      title: "Promotions ",
      description: "Run effective marketing campaigns with Bulk SMS, reaching your target audience with offers and discounts."
    },
    {
      title: "Customer Support",
      description: "Use SMS for quick customer queries and support, ensuring a smooth shopping experience."
    },
    {
      title: "Secure Transactions",
      description: "Leverage SMS OTP for payment and login verifications, ensuring secure and trustworthy transactions."
    },
    {
      title: "Loyalty Programs",
      description: "Send reminders and updates about loyalty rewards, ensuring customers stay engaged with your brand."
    }
  ];

  return (
    <div id="ecommerce-solutions" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl text-black font-bold mb-4">
            Empower Your Online Store with Advanced <span className="text-[#40196D]">Communication</span> Tools
          </h2>
          <p className="text-gray-600">
            E-commerce thrives on trust, convenience, and engagement. BRIVAS's communication solutions are designed to help your online store build stronger relationships with customers, reduce cart abandonment, and drive sales growth.
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
              className="aspect-square rounded-2xl flex items-center justify-center"
              whileHover={{ 
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Placeholder for illustration */}
              <div className="text-gray-400 text-center p-8">
                
              <Image
                src={cofee}
                alt="E-commerce mobile app mockup"
                width={350}
                height={700}
                className="object-contain"
                priority
              />
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="mb-6">
              <h3 className="text-lg font-medium text-[#40196D] mb-4">Features</h3>
            </div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title} 
                  className="flex text-black gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-5 h-5 rounded-full border-2 border-[#B891E5]"
                      whileHover={{ scale: 1.2, backgroundColor: "#B891E5" }}
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

export default EcommerceSolutionsSection; 