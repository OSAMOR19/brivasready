'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const CommunicationTools = () => {
  const [activeTab, setActiveTab] = useState('Flash Call');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('startup-communication-tools');
      
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

  const tools = [
    {
      id: 'Bulk SMS',
      title: 'Bulk SMS',
      description: 'Send thousands of personalized SMS messages to your customers simultaneously with high deliverability rates and detailed analytics.',
      image: '/images/bulk-sms-placeholder.jpg'
    },
    {
      id: 'SMS OTP',
      title: 'SMS OTP',
      description: 'Secure your applications with one-time passwords delivered via SMS for reliable user verification and authentication.',
      image: '/images/sms-otp-placeholder.jpg'
    },
    {
      id: 'Flash Call',
      title: 'Flash Call',
      description: 'Offer instant, cost-effective verification using Flash Calls, where missed call verification ensures a seamless user experience.',
      image: '/images/flash-call-placeholder.jpg'
    },
    {
      id: 'USSD Pull',
      title: 'USSD Pull',
      description: 'Enable users to access your services via USSD codes, making your platform accessible even without internet connectivity.',
      image: '/images/ussd-pull-placeholder.jpg'
    },
    {
      id: 'Messaging APIs',
      title: 'Messaging APIs',
      description: 'Integrate our powerful messaging capabilities directly into your applications with our easy-to-use, well-documented APIs.',
      image: '/images/messaging-api-placeholder.jpg'
    }
  ];

  const activeTool = tools.find(tool => tool.id === activeTab);

  return (
    <div id="startup-communication-tools" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-2xl font-bold text-[#40196D] mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Communication Tools for Startups
          </motion.h2>
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tools.map((tool, index) => (
              <motion.button
                key={tool.id}
                onClick={() => setActiveTab(tool.id)}
                className={`px-6 py-3 rounded-full border ${
                  activeTab === tool.id
                    ? 'bg-[#40196D] text-white'
                    : 'bg-white text-[#40196D] border-[#40196D]'
                } transition-colors`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tool.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-4xl font-bold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {activeTool?.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {activeTool?.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/signup" 
                    className="inline-block bg-[#B91C1C] text-white px-6 py-3 rounded-full hover:bg-[#9B1B1B] transition-colors"
                  >
                    Start for free
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative h-[300px] w-full"
              >
                <Image
                  src={activeTool?.image || '/images/placeholder.jpg'}
                  alt={activeTool?.title || 'Communication tool'}
                  fill
                  className="object-cover rounded-lg"
                  onError={(e) => {
                    // Fallback if the image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://placehold.co/600x400?text=${encodeURIComponent(activeTool?.title || 'Communication Tool')}&bg=40196D&fg=ffffff`;
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationTools; 