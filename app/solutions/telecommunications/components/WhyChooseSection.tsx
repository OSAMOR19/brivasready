'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WhyChooseSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('startup-why-choose');
      
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

  const reasons = [
    {
      title: "Developer-Friendly",
      content: "Our APIs are easy to implement, allowing startups to integrate messaging and verification with minimal effort and development time.",
      bgColor: "bg-[#40196D]",
      textColor: "text-white"
    },
    {
      title: "Fast Go-to-Market",
      content: "Launch your communication services quickly with pre-built templates, simple integrations, and no need for heavy infrastructure.",
      bgColor: "bg-white",
      textColor: "text-gray-800"
    },
    {
      title: "Free Trial",
      content: "Test our services before committing. Our free trial allows you to explore our platform and see the value we offer firsthand.",
      bgColor: "bg-[#40196D]",
      textColor: "text-white"
    },
    {
      title: "Support",
      content: "Startups can't afford downtime. Our support team is available to ensure your communication services run smoothly, no matter the time or day.",
      bgColor: "bg-[#40196D]",
      textColor: "text-white"
    }
  ];

  return (
    <div id="startup-why-choose" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-4xl text-black mb-10 font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Why Startups Choose BRIVAS
          </motion.h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className={`${reason.bgColor} ${reason.textColor} p-8 rounded-xl`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.h3 
                className="text-xl font-semibold mb-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -10 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                {reason.title}
              </motion.h3>
              <motion.p 
                className={`${reason.bgColor === 'bg-white' ? 'text-gray-600' : 'text-gray-200'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              >
                {reason.content}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection; 