'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const BenefitsSection = () => {
  const [openBenefit, setOpenBenefit] = useState('Student Engagement');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('education-benefits-section');
      
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
      title: "Student Engagement",
      content: "Enhance student participation with timely notifications about assignments, events, and important deadlines, keeping them connected and informed."
    },
    {
      title: "Parent-Teacher Collaboration",
      content: "Bridge the communication gap between parents and teachers with regular updates on student progress, attendance, and school activities."
    },
    {
      title: "Staff Coordination",
      content: "Streamline internal communication among faculty and staff for better coordination of schedules, meetings, and administrative tasks."
    },
    {
      title: "Secure Access and Verification",
      content: "Implement robust verification systems for secure access to educational platforms, protecting sensitive student information and academic records."
    },
    {
      title: "Custom Communication",
      content: "Tailor your messaging to different stakeholders with customizable templates and automated communication workflows."
    },
  ];

  // Sweet animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    }
  };

  return (
    <div id="education-benefits-section" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Benefits Accordion */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgba(164, 3, 31, 0.02)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  onClick={() => setOpenBenefit(openBenefit === benefit.title ? '' : benefit.title)}
                  className="w-full p-5 flex justify-between items-center text-left"
                  whileHover={{ backgroundColor: "rgba(164, 3, 31, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-medium text-gray-800 text-lg">{benefit.title}</span>
                  <motion.span 
                    className="text-gray-400 text-2xl"
                    animate={{ 
                      rotate: openBenefit === benefit.title ? 180 : 0,
                      color: openBenefit === benefit.title ? "#A4031F" : "#9CA3AF"
                    }}
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
                      transition={{ 
                        duration: 0.3,
                        type: "spring",
                        stiffness: 300,
                        damping: 24
                      }}
                    >
                      <p className="text-gray-600">{benefit.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
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
              className="text-4xl text-[#A4031F] font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
            >
              BRIVAS for Education: Building Connected Learning Communities
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Effective communication is at the heart of education. Whether you're managing a school, university, or training center, BRIVAS provides innovative tools to keep students, parents, and staff informed and engaged. Our solutions streamline communication, enhance learning experiences, and foster a connected community.
            </motion.p>
            <motion.button 
              className="bg-[#A4031F] text-white px-6 py-3 rounded-full hover:bg-[#9B1B1B] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(164, 3, 31, 0.3)"
              }}
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
              transition={{ 
                duration: 0.7, 
                delay: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <Image
                src="/images/fuel-image-1.jpg" // Update with your actual image path
                alt="BRIVAS for education"
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback if the image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://placehold.co/600x400?text=Education+Solutions&bg=A4031F&fg=ffffff";
                }}
              />
            </motion.div>
            
            {/* Overlapping Image */}
            <motion.div 
              className="absolute right-0 top-0 w-1/2 h-[200px] bg-gray-300 rounded-lg overflow-hidden shadow-lg"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.9,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
              }}
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
                    target.src = "https://placehold.co/600x400?text=E-learning+Environment&bg=40196D&fg=ffffff";
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
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Start for free
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Stats Badge */}
            <motion.div 
              className="absolute bottom-4 right-4 bg-[#4CAF50] text-white px-3 py-1 rounded text-sm flex items-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.0,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 10px rgba(76, 175, 80, 0.5)"
              }}
            >
              <span>98%</span>
              <span className="mx-1">≡</span>
              <span>Satisfaction</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsSection; 