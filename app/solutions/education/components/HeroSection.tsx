'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import background from "@/components/Images/pics/educationbg.svg";

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
          alt="Education background"
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
              className="text-6xl sm:text-6xl md:text-5xl font-semibold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1] // Custom ease curve for a sweet, bouncy effect
              }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Transforming 
              </motion.span>{" "}
              <motion.span
                className="text-[#4CAF50]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Communication
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                in Education
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              Empower educational institutions with BRIVAS's cutting-edge messaging and verification solutions for seamless engagement.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/signup" 
                className="inline-block bg-white text-[#40196D] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Get started today
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 