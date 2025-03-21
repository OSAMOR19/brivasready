'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EcommerceOptimizedCommunications = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('ecommerce-optimized');
      
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + scrollPosition;
        if (scrollPosition > elementPosition - windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="ecommerce-optimized" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
        >
          {/* Title and description */}
          <h2 className="text-3xl text-black font-bold text-center mb-6">
            Optimized Global Communications<br />with BRIVAS
          </h2>
          <div className="max-w-3xl text-center mb-8">
            <p className="text-gray-700 text-sm leading-relaxed">
              Discover how Shredwise helped a global retail brand, Urban Athletics, save 30% and shift OTP workflows to 
              streamline customer engagement. Urban Athletics operates across hundreds of stores across 
              multiple regions. By partnering with BRIVAS, they saw a 40% increase in customer engagement and a 
              significant reduction in costs.
            </p>
          </div>
          
          {/* Read more button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="brivas.io/login" 
              className="bg-[#40196D] text-white px-8 py-3 rounded-full font-medium hover:bg-[#351458] transition-colors"
            >
              Read more
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <Image 
              src="/api/placeholder/600/400" 
              alt="Global communication network" 
              width={600} 
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div 
            className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <Image 
              src="/api/placeholder/600/400" 
              alt="Data analytics dashboard" 
              width={600} 
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div 
            className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <Image 
              src="/api/placeholder/600/400" 
              alt="Mobile messaging interface" 
              width={600} 
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceOptimizedCommunications; 