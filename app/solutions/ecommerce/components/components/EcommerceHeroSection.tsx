'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Background from "@/components/Images/pics/mrecommercebg.svg";

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
      <div className="relative h-full flex flex-col justify-center items-start text-start px-10">
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-5xl mb-6"
        >
          BRIVAS for E-Commerce: Enhance Your Customer Experience
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white text-lg md:text-xl max-w-3xl mb-10"
        >
          In the fast-paced world of e-commerce, effective communication is the key to building strong customer relationships and driving sales.
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
            className="inline-block bg-white text-[#40196D] px-8 py-4 rounded-full font-medium hover:bg-[#9B1B1B] transition-colors"
          >
            Start for free
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default EnterpriseHeroSection; 