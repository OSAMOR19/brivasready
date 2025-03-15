'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Background from "@/components/Images/pics/enterprisebg.svg";

const EnterpriseHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-screen max-h-[800px] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src={Background.src}
          alt="Enterprise background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white uppercase tracking-wider mb-2"
        >
          ENTERPRISE
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-5xl mb-6"
        >
          Enterprise-Grade Communication Solutions for Global Businesses
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white text-lg md:text-xl max-w-3xl mb-10"
        >
          Scale your enterprise with robust messaging, verification, and USSD services designed for large-scale operations.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/signup" 
            className="inline-block bg-[#B91C1C] text-white px-8 py-4 rounded-full font-medium hover:bg-[#9B1B1B] transition-colors"
          >
            Start for free
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default EnterpriseHeroSection; 