'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const BenefitsSection = () => {
  const [openBenefit, setOpenBenefit] = useState('Affordable Pricing');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('startup-benefits-section');
      
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
      title: "Affordable Pricing",
      content: "Access enterprise-level services at startup-friendly prices. With BRIVAS, you get powerful tools without the heavy financial burden."
    },
    {
      title: "Rapid Scalability",
      content: "Scale your communication infrastructure as your business grows, without worrying about technical limitations or service disruptions."
    },
    {
      title: "Easy Integration",
      content: "Integrate our APIs seamlessly with your existing systems and workflows with minimal development effort."
    },
    {
      title: "Pay-As-You-Grow",
      content: "Only pay for what you use with our flexible pricing models that adapt to your business needs and usage patterns."
    },
    {
      title: "Global Reach",
      content: "Connect with customers worldwide through our global network, ensuring reliable delivery across borders."
    },
    {
      title: "Reliable Infrastructure",
      content: "Built on robust infrastructure with high availability and redundancy to ensure your communications never fail."
    }
  ];

  return (
    <div id="startup-benefits-section" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Benefits Accordion */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-2xl font-bold text-[#40196D] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Key Benefits for Startups
          </motion.h2>
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
                <AnimatePresence>
                  {openBenefit === benefit.title && (
                    <motion.div 
                      className="px-5 pb-5"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-600">{benefit.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Fuel Innovation and Growth with <span className="text-[#B91C1C]">BRIVAS</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Whether you're building a mobile app, offering services, or need seamless messaging and verification, BRIVAS has the solutions to support your unique needs as you grow.
            </motion.p>
            <motion.button 
              className="bg-[#B91C1C] text-white px-6 py-3 rounded-full hover:bg-[#9B1B1B] transition-colors"
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
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src="/images/fuel-image-1.jpg" // Update with your actual image path
                alt="BRIVAS for startups"
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback if the image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://placehold.co/600x400?text=Startup+Solutions&bg=B91C1C&fg=ffffff";
                }}
              />
            </motion.div>
            
            {/* Overlapping Image */}
            <motion.div 
              className="absolute right-0 top-0 w-1/2 h-[200px] bg-gray-300 rounded-lg overflow-hidden shadow-lg"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/fuel-image-2.jpg" // Update with your actual image path
                  alt="E-learning Environment"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback if the image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://placehold.co/600x400?text=Startup+Growth&bg=40196D&fg=ffffff";
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                  <div>
                    <p className="font-medium">Conducive E-learning Environment</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-sm">Stay focused wherever</p>
                    <motion.button 
                      className="bg-white text-[#40196D] px-4 py-1 rounded-full text-xs"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start for free
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Stats Badge */}
            <motion.div 
              className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded text-sm flex items-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              whileHover={{ scale: 1.1 }}
            >
              <span>273</span>
              <span className="mx-1">≡</span>
              <span>356</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsSection; 