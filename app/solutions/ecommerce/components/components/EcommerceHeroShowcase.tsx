'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EcommerceHeroShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <motion.div 
            className="lg:w-5/12 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl text-black md:text-6xl font-bold leading-tight mb-6">
              Boost Your<br />
              E-Commerce<br />
              <span className="text-purple-900">with BRIVAS</span>
            </h1>
          </motion.div>
          
          {/* Center - Phone mockup */}
          <motion.div 
            className="lg:w-4/12 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div 
              className="relative w-[300px] md:w-[350px]"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Image
                src="/api/placeholder/400/700"
                alt="E-commerce mobile app mockup"
                width={350}
                height={700}
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
          
          {/* Right side - Text and CTA */}
          <motion.div 
            className="lg:w-3/12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="text-base text-gray-800 mb-8">
              As an e-commerce business, you need reliable, scalable, and secure communication solutions to engage customers and drive sales. BRIVAS delivers powerful tools to streamline messaging, verification, and customer engagement on a global scale.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/signup" 
                className="inline-block bg-[#40196D] text-white px-6 py-3 rounded-full font-medium hover:bg-[#351458] transition-colors"
              >
                Start for free
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceHeroShowcase;