'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import background from "@/components/Images/pics/telecomhero.svg";

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
          alt="Telecommunications tower"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Content Container - Vertically and Horizontally Centered */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Empowering Telecommunications <br/>  with Scalable Messaging Solutions
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Revolutionize your communication infrastructure with BRIVAS's cutting-edge messaging and verification services tailored for the telecom industry.
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
              className="inline-block bg-white text-[#40196D] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Start for free
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;