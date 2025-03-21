"use client";
import Link from "next/link";
import Image from "next/image";
import picture from "@/components/Images/pics/phonecall.svg";
import { motion } from "framer-motion";

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
              className="text-5xl font-bold tracking-tight text-black mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Instant User Verification with Flash Call
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Authenticate users with a single, automated phone call – no need for SMS.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link 
                href="/signup" 
                className="inline-block px-8 py-3 bg-[#B30000] text-white rounded-full hover:bg-[#990000] transition-colors font-medium"
              >
                Start for free
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative w-[320px] h-[450px]"
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
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;