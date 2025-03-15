'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EnterpriseHeroShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - Text content */}
          <motion.div 
            className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empower Your <br />
              Enterprise <br />
              <span className="text-[#40196D]">with BRIVAS</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              As an enterprise, you need reliable, scalable, and secure communication solutions to manage complex operations across multiple regions. BRIVAS delivers enterprise-grade tools to streamline messaging, verification, and user engagement on a global scale.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
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
          
          {/* Right side - Phone mockup */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-[300px] md:w-[350px]">
              <Image
                src="/components/Images/pics/enterprise-phone-mockup.png"
                alt="Enterprise mobile app mockup"
                width={350}
                height={700}
                className="object-contain"
                priority
                onError={(e) => {
                  // Fallback if the image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://placehold.co/350x700?text=BRIVAS+Enterprise+App&bg=ffffff&fg=40196D";
                }}
              />
              {/* Chat bubble elements */}
              <motion.div 
                className="absolute top-[25%] left-[5%] bg-white p-2 rounded-lg shadow-md text-xs w-[90%]"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex items-center mb-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
                  <div>
                    <p className="font-bold">Dlc Foods *</p>
                    <p className="text-gray-500 text-[10px]">Hello Tomide, here's a view of what you will be expecting.</p>
                  </div>
                </div>
                <p className="text-gray-500 text-[10px]">Your order is on its way.</p>
                <div className="w-full h-1 bg-gray-200 rounded mt-1">
                  <motion.div 
                    className="h-1 bg-[#40196D] rounded"
                    initial={{ width: 0 }}
                    animate={{ width: "50%" }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  ></motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHeroShowcase;