'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cartton from "@/components/Images/pics/cartoon.svg"

// Add motion import at the top
import { motion } from 'framer-motion';

const CommunicationTools = () => {
  const [activeTab, setActiveTab] = useState('Flash Call');

  const tools = [
    {
      id: 'Bulk SMS',
      title: 'Bulk SMS',
      description: 'Send thousands of personalized SMS messages to your customers simultaneously with high deliverability rates and detailed analytics.',
      image: cartton
    },
    {
      id: 'SMS OTP',
      title: 'SMS OTP',
      description: 'Secure your applications with one-time passwords delivered via SMS for reliable user verification and authentication.',
      image: cartton
    },
    {
      id: 'Flash Call',
      title: 'Flash Call',
      description: 'Offer instant, cost-effective verification using Flash Calls, where missed call verification ensures a seamless user experience.',
      image: cartton
    },
    {
      id: 'USSD Pull',
      title: 'USSD Pull',
      description: 'Enable users to access your services via USSD codes, making your platform accessible even without internet connectivity.',
      image: cartton
    },
    {
      id: 'Messaging APIs',
      title: 'Messaging APIs',
      description: 'Integrate our powerful messaging capabilities directly into your applications with our easy-to-use, well-documented APIs.',
      image: cartton
    }
  ];

  const activeTool = tools.find(tool => tool.id === activeTab);

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        // Update the header section
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-[#40196D] mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Enterprise Communication Tools
          </motion.h2>
          
          {/* Animated tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {tools.map((tool) => (
              <motion.button
                key={tool.id}
                onClick={() => setActiveTab(tool.id)}
                className={`px-8 py-4 rounded-full border text-lg ${
                  activeTab === tool.id
                    ? 'bg-[#40196D] text-white'
                    : 'bg-white text-[#40196D] border-[#40196D]'
                } transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tool.title}
              </motion.button>
            ))}
          </motion.div>
        </div>

        
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* Left Content */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <motion.h3 
              className="text-4xl text-black font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {activeTool?.title}
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {activeTool?.description}
            </motion.p>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link 
                href="/signup" 
                className="inline-block bg-[#B91C1C] align-start text-white px-8 py-4 rounded-full hover:bg-[#9B1B1B] transition-colors text-lg font-medium"
              >
                Start for free
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated Image */}
          <motion.div 
            className="relative w-full h-[400px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: 1,
              x: 0,
              y: [0, -15, 0]
            }}
            transition={{ 
              x: { duration: 0.6 },
              y: { 
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }
            }}
          >
            <Image
              src={cartton}
              alt="Enterprise communication tools"
              width={300}
              height={400}
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunicationTools;