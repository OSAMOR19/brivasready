'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Startimg from "@/components/Images/pics/smsmoimg.svg"

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
      title: "Two-Way Communication ",
      content: "Engage in real-time, two-way conversations with your users."
    },
    {
      title: "Instant Responses",
      content: "Receive and process messages from customers instantly, ensuring timely engagement."
    },
    {
      title: "Scalable Messaging",
      content: "Integrate our APIs seamlessly with your existing systems and workflows with minimal development effort."
    },
    {
      title: "Message Tracking",
      content: "Handle incoming messages from a few to thousands of users with our scalable infrastructure."
    },
    {
      title: "Webhook Integration ",
      content: "Automatically forward messages to your server for instant processing and response via webhook."
    },
    {
      title: "Real-Time Reports ",
      content: "Built on robust infrastructure with high availability and redundancy to ensure your communications never fail."
    }
  ];

  return (
    <div id="startup-benefits-section" className="pt-40 mt-20 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Benefits Accordion */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
              className="text-5xl text-black font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
             Receive Messages from Your Users in <span className="text-[#B91C1C]"> Real-Time</span>
            </motion.h2>

            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              With BRIVAS SMS MO, your customers can reach you via text messages anytime, providing an efficient and instant way to stay connected. Whether it's for customer service, feedback, or subscription services, receiving SMS messages directly from mobile users keeps the conversation open.
            </motion.p>


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
            
            
           
          </div>
          <motion.div 
            className="relative h-[400px] w-[400px] mx-auto pt-40 my-auto flex items-center justify-center"
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