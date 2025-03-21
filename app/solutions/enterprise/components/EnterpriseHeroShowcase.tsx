'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import entimage from "@/components/Images/pics/enterpriceempower.svg"

const EnterpriseHeroShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column - Empower Text */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl text-black md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empower Your <br />
              Enterprise with  <br />
              <span className="text-[#40196D]"> BRIVAS</span>
            </motion.h1>
          </motion.div>

          {/* Middle Column - Image */}
          <motion.div 
            className="col-span-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-[300px] md:w-[350px]">
              <Image
                src={entimage}
                alt="Enterprise mobile app mockup"
                width={350}
                height={700}
                className="object-contain"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://placehold.co/350x700?text=BRIVAS+Enterprise+App&bg=ffffff&fg=40196D";
                }}
              />
            </div>
          </motion.div>

          {/* Right Column - Description & Button */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              As an enterprise, you need reliable, scalable, and secure communication solutions to manage complex operations across multiple regions. BRIVAS delivers enterprise-grade tools to streamline messaging, verification, and user engagement on a global scale.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHeroShowcase;