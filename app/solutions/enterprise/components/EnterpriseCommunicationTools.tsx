'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EnterpriseCommunicationTools = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('communication-tools');
      
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
      title: "Customer Engagement",
      description: "Send personalized promotions, updates, and reminders directly to your customers, ensuring higher engagement and conversion rates",
      imageWidth: 300,
      imageHeight: 200,
      imageUrl: "https://placehold.co/300x200?text=Customer+Engagement&bg=1a1a2e&fg=ffffff",
      hasButton: true
    },
    {
      title: "Seamless Communication at Scale",
      description: "BRIVAS understands the complexity of enterprise-level operations. Our solutions are designed to handle the large-scale messaging, verification, and user engagement requirements of enterprises.",
      imageWidth: 300,
      imageHeight: 200,
      imageUrl: "https://placehold.co/300x200?text=Seamless+Communication&bg=1a1a2e&fg=ffffff",
      hasButton: false
    },
    {
      title: "Secure User Verification",
      description: "Enhance security across your platforms with SMS OTP and Flash Call verification, protecting data and securing user accounts.",
      imageWidth: 300,
      imageHeight: 200,
      imageUrl: "https://placehold.co/300x200?text=Secure+Verification&bg=1a1a2e&fg=ffffff",
      hasButton: true
    },
    {
      title: "Global Workforce Communication",
      description: "Keep your international teams connected with instant, high-quality messaging services, ensuring smooth operations no matter where your employees are located.",
      imageWidth: 300,
      imageHeight: 200,
      imageUrl: "https://placehold.co/300x200?text=Global+Workforce&bg=1a1a2e&fg=ffffff",
      hasButton: true
    }
  ];

  return (
    <section id="communication-tools" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
        >
          Enterprise Communication Solutions
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <motion.div 
              key={tool.title} 
              className="bg-white rounded-[20px] overflow-hidden shadow-sm flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Image */}
              <motion.div 
                className="relative h-48"
                animate={{ 
                  scale: activeCard === index ? 1.05 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={tool.imageUrl}
                  alt={tool.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{tool.description}</p>
                
                {tool.hasButton && (
                  <div className="mt-auto">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        href="/signup" 
                        className="inline-block bg-[#40196D] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#351458] transition-colors"
                      >
                        Start for free
                      </Link>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCommunicationTools;