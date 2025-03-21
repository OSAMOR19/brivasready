'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ecomimage from "@/components/Images/pics/ecomimage.svg";

const EcommerceBenefitsSection = () => {
  const [openBenefit, setOpenBenefit] = useState('Real-Time Notifications');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('ecommerce-benefits-section');
      
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

  const benefits = [
    {
      title: "Real-Time Notifications",
      content: "Keep customers informed with instant updates on order status, shipping, and delivery, enhancing their shopping experience."
    },
    {
      title: "Promotional Campaigns",
      content: "Drive sales with targeted SMS campaigns for special offers, flash sales, and seasonal promotions that reach customers directly."
    },
    {
      title: "Secure Transactions",
      content: "Protect customer accounts and transactions with SMS verification for logins, password resets, and high-value purchases."
    },
    {
      title: "Customer Retention",
      content: "Build loyalty with personalized messages, exclusive offers, and timely reminders that keep customers coming back."
    },
    {
      title: "Global Reach",
      content: "Connect with customers worldwide through our global network, ensuring reliable delivery across borders."
    },
    {
      title: "Easy Integration",
      content: "Seamlessly integrate with your e-commerce platform, CRM, and marketing tools for a unified communication strategy."
    }
  ];

  return (
    <div id="ecommerce-benefits-section" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Benefits Accordion */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-[#40196D] mb-6">Key Benefits for E-Commerce</h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <motion.button
                  onClick={() => setOpenBenefit(openBenefit === benefit.title ? '' : benefit.title)}
                  className="w-full p-5 flex justify-between items-center text-left"
                  whileHover={{ backgroundColor: "rgba(64, 25, 109, 0.05)" }}
                >
                  <span className="font-medium text-gray-800 text-lg">{benefit.title}</span>
                  <motion.span 
                    className="text-gray-400 text-2xl"
                    animate={{ rotate: openBenefit === benefit.title ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openBenefit === benefit.title ? "—" : "+"}
                  </motion.span>
                </motion.button>
                {openBenefit === benefit.title && (
                  <motion.div 
                    className="px-5 pb-5"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600">{benefit.content}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Content and Images */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div>
            <motion.h2 
              className="text-4xl text-black font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Key Benefits for<span className="text-[#B91C1C]"> E-Commerce</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              BRIVAS provides powerful communication tools that help e-commerce businesses enhance customer engagement, increase sales, and build brand loyalty. Our platform ensures reliable, secure, and scalable messaging for your growing online store.
            </motion.p>
            <motion.button 
              className="bg-[#40196D] text-white px-6 py-3 rounded-full hover:bg-[#9B1B1B] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start for free
            </motion.button>
          </div>

          {/* Images Container */}
          <motion.div 
            className="relative h-[300px] mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {/* Main Image */}
            <motion.div 
              className="absolute left-0 bottom-0 w-3/4 h-[200px] bg-gray-200 rounded-lg overflow-hidden"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Image
                src={ecomimage} // Update with your actual image path
                alt="BRIVAS for e-commerce"
                // width={800}
                // height={600}
                className="object-cover w-full h-full"
                onError={(e) => {
                  // Fallback if the image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                }}
              />
            </motion.div>
            
            {/* Overlapping Image */}

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EcommerceBenefitsSection; 