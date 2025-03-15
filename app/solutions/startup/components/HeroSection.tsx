'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import background from "@/components/Images/pics/startupbgimage.svg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after component mounts for entrance animations
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-screen max-h-[800px] min-h-[600px] overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <Image 
          src={background.src}
          alt="Startup background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <motion.div 
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5 }}
        />
      </div>
      
      {/* Content Container - Vertically and Horizontally Centered */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Empower Your <motion.span 
                className="text-[#FF3366]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                Startup
              </motion.span> with Scalable Communication Solutions
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Accelerate your growth with cost-effective messaging, verification, and USSD services tailored for startups.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/signup" 
                className="inline-block bg-white text-[#40196D] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Start for free
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 