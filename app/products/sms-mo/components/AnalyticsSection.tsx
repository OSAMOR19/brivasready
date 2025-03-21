'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import monitorImage from "@/components/Images/pics/messageanalyse.svg";
import Image from "next/image";
import { ClipboardList, BarChart2, AlertCircle } from "lucide-react";

const AnalyticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('analytics-section');
      
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

  const features = [
    {
      icon: <ClipboardList className="h-6 w-6 text-[#B891E5]" />,
      title: "Message Logs",
      description: "View detailed logs of every incoming message, including the sender, message content, and timestamps."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-[#B891E5]" />,
      title: "Analytics",
      description: "Get insights into user behavior and the performance of your SMS campaigns"
    },
  ];

  return (
    <div id="analytics-section" className="py-16 px-4 relative overflow-hidden">
      {/* Background cell tower image - semi-transparent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[url('/images/cell-tower.jpg')] bg-no-repeat bg-center bg-cover"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.7 }}
            className="text-black"
          >
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Track and Analyze Incoming Messages
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
             With BRIVAS, you have access to comprehensive reporting tools to track message volume, delivery status, and user interactions.
            </motion.p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title} 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Illustration */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Image
              src={monitorImage}
              alt="Analytics dashboard"
              width={450}
              height={450}
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;