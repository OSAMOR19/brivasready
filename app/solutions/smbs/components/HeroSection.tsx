'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import background from "@/components/Images/pics/smbhero.svg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after component mounts for entrance animations
    setIsVisible(true);
  }, []);

  // Chat message data
  const chatMessages = [
    {
      text: "Hi, I love your designs! Do you make custom bridal dresses?",
      position: "left-[10%] top-[25%]",
      delay: 0.8
    },
    {
      text: "Hello! Can you make a two-piece outfit for my traditional engagement?",
      position: "right-[10%] top-[25%]",
      delay: 1.1
    },
    {
      text: "Hi, Is your January sales promo still on?",
      position: "right-[60%] top-[15%]",
      delay: 1.3
    }
  ];

  return (
    <div className="relative w-full h-screen max-h-[800px] min-h-[600px] overflow-hidden bg-[#40196D]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image 
          src={background.src}
          alt="SMB background"
          fill
          className="object-cover object-center opacity-30"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Content Container - Vertically and Horizontally Centered */}
      <div className="relative h-full flex items-center justify-center">
        {/* Chat Message Popups - Positioned relative to the content container */}
        {chatMessages.map((message, index) => (
          <motion.div
            key={index}
            className={`absolute ${message.position} max-w-[220px] bg-white rounded-2xl p-4 shadow-lg z-10 border border-gray-200`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: message.delay }}
          >
            <p className="text-black text-sm">{message.text}</p>
          </motion.div>
        ))}
        
        <div className="max-w-6xl mx-auto px-4 text-center text-white mt-20">
          <div className="max-w-3xl mx-auto">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Powerful Communication Tools for Small and Medium Businesses
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Connect with your customers, streamline operations, and drive growth with BRIVAS's reliable and affordable messaging and verification solutions tailored for SMBs.
            </motion.p>
            
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
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
    </div>
  );
};

export default HeroSection;