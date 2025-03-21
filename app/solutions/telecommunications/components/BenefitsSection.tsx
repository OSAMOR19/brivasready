'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Startimg from "@/components/Images/pics/ussdpullimg.svg"

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
      title: "Affordable Pricing ",
      content: "Access enterprise-level services at startup-friendly prices. With BRIVAS, you get powerful tools without the heavy financial burden."
    },
    {
      title: "Rapid Scalability ",
      content: "As your startup grows, our platform scales with you, supporting increased user engagement, messaging, and verification needs."
    },
    {
      title: "Easy Integration ",
      content: "Quickly integrate BRIVAS solutions into your existing platforms with our developer-friendly APIs and documentation."
    },
    {
      title: "Pay-As-You-Grow",
      content: "No need for large upfront commitments. Use only what you need, and scale your services as your customer base expands."
    },
    {
      title: "Global Reach",
      content: "Engage users across borders with our international messaging and verification services, ensuring your startup is ready for the global stage"
    },
    {
      title: "Reliable Infrastructure",
      content: "Built on a highly reliable infrastructure, BRIVAS ensures that your communications are always delivered on time, providing a seamless experience for your users."
    }
  ];

  return (
    <div id="startup-benefits-section" className="pt-20 pb-20 mt-20 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Benefits Accordion */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
          transition={{ duration: 0.7 }}
        >
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
              className="text-5xl text-black font-semibold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
            Fuel Innovation and Growth with <br/> <span className='text-[#A4031F]'>BRIVAS</span>
            </motion.h2>

            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Whether you're building a mobile app, offering services, or need seamless messaging and verification, BRIVAS has the solutions to support your unique needs as you grow.
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-[#A4031F] text-white px-8 py-3 rounded-full font-medium hover:bg-[#40196D] transition-colors">
                Start for free
              </button>
            </motion.div>
           
          </div>
          <motion.div 
            className="relative h-[400px] w-[400px] mx-auto pt-40 my-10 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >            
              <Image
                src={Startimg}
                alt="BRIVAS for startups"
                width={350}
                height={350}
                className="object-contain"
                priority
              />        
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsSection;