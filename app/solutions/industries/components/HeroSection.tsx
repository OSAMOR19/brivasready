"use client";
import Link from "next/link";
import Image from "next/image";
import picture from "@/components/Images/pics/rightimage.svg";
import { motion } from "framer-motion";
import halftone from "@/components/Images/pics/halftonepic.svg";

const HeroSection = () => {
  return (
    <div className="bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-black mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Transforming   <span className="text-[#40196D]">Financial Services</span>with Advanced Communication Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Empower your financial institution with secure, scalable, and innovative messaging tools tailored for the financial sector.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link 
                href="/signup" 
                className="inline-block px-8 py-3 bg-[#40196D] text-white rounded-full hover:bg-[#990000] transition-colors font-medium"
              >
                Start for free
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Halftone Background */}
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ scale: 0 }}
              animate={{ 
                scale: 1,
                opacity: [0.3, 0.8],
                rotate: [0, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut'
              }}
            >
              <Image
                src={halftone}
                alt="Background pattern"
                width={600}
                height={600}
                className="object-contain opacity-50"
              />
            </motion.div>

            {/* Floating Image */}
            <motion.div 
              className="relative z-10 w-[320px] h-[450px]"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut" 
              }}
            >
              <Image 
                src={picture} 
                alt="Flash Call Verification on Mobile Phone" 
                width={500}
                height={500}
                priority
                className="object-contain py-12"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;