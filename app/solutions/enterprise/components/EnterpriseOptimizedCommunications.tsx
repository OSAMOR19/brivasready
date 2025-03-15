'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EnterpriseOptimizedCommunications = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('optimized-communications');
      
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
    <section id="optimized-communications" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
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
              href="#" 
              className="bg-[#40196D] text-white px-8 py-3 rounded-full font-medium hover:bg-[#351458] transition-colors"
            >
              Read more
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Images section */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Left image */}
          <motion.div 
            className="w-full md:w-1/3 rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Image
              src="https://placehold.co/600x600?text=Snowboarder+View&bg=87CEEB&fg=ffffff"
              alt="Snowboarder view from below"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Right image */}
          <motion.div 
            className="w-full md:w-1/3 rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Image
              src="https://placehold.co/600x600?text=Athletic+Shoe&bg=f5f5f5&fg=333333"
              alt="Athletic shoe"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseOptimizedCommunications; 